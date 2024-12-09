pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh '''docker version
                         docker ps -a
                         docker build -t yonesAkram/nipard:v1.0 .
                         docker login
                         docker tag nipard:v1.0 yonesAkram/nipard:v1.0
                         docker push yonesAkram/nipard:v1.0
                         '''                    
                }
            }
        }
    }
}

