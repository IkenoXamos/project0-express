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
          currentBuild.result == null || currentBuild.result == 'SUCCESS'
        }
      }
      steps {
        echo 'Deploying...'
        sh 'kubectl get pods'
        sh 'kubectl version'
      }
    }

    stage('Notify') {
      steps {
        discordSend description: "*Build:* ${env.BUILD_NUMBER}\n*Status:* ${currentBuild.result}\n\n*Changes:*\n- `${env.GIT_COMMIT}` - ${env.GIT_AUTHOR_NAME}", footer: 'Jenkins v2.222.4, Discord Notifier v1.4.11', link: env.BUILD_URL, result: currentBuild.currentResult, title: "${env.JOB_NAME} ${env.BUILD_DISPLAY_NAME}", webhookURL: 'https://discordapp.com/api/webhooks/717959657057943573/3UlE5etPVKWEZklUahQSRCG-JE_fc34Ha3cMxY16j0jShXQ6J5NsiA8f3u5Lb5ZuSpKH'
      }
    }
  }
}
