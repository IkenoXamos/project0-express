pipeline {
  agent {
    kubernetes {
      defaultContainer 'jnlp'
      yamlFile 'jenkins-pod.yaml'
    }
  }

  tools {
    nodejs '12.16.1'
    sonar 'sonar-scanner'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
        echo 'Successfully installed dependencies'
      }
    }

    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm run test'
        echo 'Successfully ran tests'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv() {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }

    stage('Build') {
      steps {
        echo 'Building...'
        sh 'npm run tsc'
        sh 'docker build -t ikenoxamos/project0-express:latest .'
        echo 'Successfully built image'
      }
    }

    stage('Publish') {
      steps {
        echo 'Publishing...'

        withDockerRegistry([ credentialsId: 'ikenoxamos-dockerhub', url: '' ]) {
          sh 'docker push ikenoxamos/project0-express:latest'
        }

        echo 'Successfully published image'
      }
    }

    stage('Deploy') {
      when {
        expression {
          currentBuild.currentResult == null || currentBuild.currentResult == 'SUCCESS'
        }
      }
      steps {
        echo 'Deploying...'

        withKubeConfig([ credentialsId: 'jenkins-sa-test-cluster-text', serverUrl: "https://${KUBERNETES_SERVICE_HOST}" ]) {
          sh 'kubectl apply -f project0-express.yaml'
          sh 'kubectl scale deployment project0-express-deployment --replicas=0'
          sh 'kubectl scale deployment project0-express-deployment --replicas=1'
        }

        echo 'Successfully Deployed'
      }
    }
  }

  post {
    always {
      script {
        status = "${currentBuild.currentResult.toLowerCase()}"

        commit = sh (
          script: "echo ${env.GIT_COMMIT} | cut -c -6",
          returnStdout: true
        ).trim()

        GIT_COMMIT_MESSAGE = sh (
          script: "git log -1 --pretty=%B",
          returnStdout: true
        ).trim()

        title = "${env.JOB_NAME} ${env.BUILD_DISPLAY_NAME}"
        footer = 'Jenkins v2.222.4, Discord Notifier v1.4.11'
        url = 'https://discordapp.com/api/webhooks/717959657057943573/3UlE5etPVKWEZklUahQSRCG-JE_fc34Ha3cMxY16j0jShXQ6J5NsiA8f3u5Lb5ZuSpKH'

        GIT_AUTHOR_EMAIL = sh (
          script: "git --no-pager show -s --format='%ae'",
          returnStdout: true
        ).trim()

        description = """**Build:** ${env.BUILD_NUMBER}
        **Status:** ${status}

        **Changes:**
        - `${commit}` *${GIT_COMMIT_MESSAGE}* - ${GIT_AUTHOR_EMAIL}"""

        discordSend description: "${description}", footer: "${footer}", link: env.BUILD_URL, result: currentBuild.currentResult, title: "${title}", webhookURL: "${url}"
      }
    }
  }
}
