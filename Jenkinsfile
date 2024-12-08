pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh '"docker version
                         docker ps -a"'                    
                }
            }
        }
    }
}

