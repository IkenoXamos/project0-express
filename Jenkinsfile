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
  }
}
