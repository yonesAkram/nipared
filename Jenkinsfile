pipeline {
    agent any
    stages {
        stage('Build And Push Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                             docker build -t yonesAkram/nipard:v1.0 .
                             echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                             docker push yonesAkram/nipard:v1.0
                             docker ps
                        '''
                    }
                }
            }
        }
    }
}


 
    
