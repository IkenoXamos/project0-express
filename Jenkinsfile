pipeline {
  agent any

  tools {nodejs "12.16.1"}

  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Testing...'
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
        sh 'kubectl get pods'
        sh 'kubectl version'
      }
    }

    stage('Check env') {
      steps {
        sh 'printenv | sort'
      }
    }
  }

  environment {
    commit = "${env.GIT_COMMIT}"
    status = "${currentBuild.currentResult}"
    description = "**Build:** ${env.BUILD_NUMBER}\n**Status:** ${env.status}\n\n**Changes:**\n- `${commit}` - ${env.GIT_AUTHOR_NAME}"
    title = "${env.JOB_NAME} ${env.BUILD_DISPLAY_NAME}"
    footer = 'Jenkins v2.222.4, Discord Notifier v1.4.11'
    url = 'https://discordapp.com/api/webhooks/717959657057943573/3UlE5etPVKWEZklUahQSRCG-JE_fc34Ha3cMxY16j0jShXQ6J5NsiA8f3u5Lb5ZuSpKH'
  }

  post {
    always {
      discordSend description: "${env.description}", footer: "${env.footer}", link: env.BUILD_URL, result: currentBuild.currentResult, title: "${env.title}", webhookURL: "${env.url}"
    }
  }
}
