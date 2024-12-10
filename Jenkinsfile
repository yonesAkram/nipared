pipeline {
    agent any
    stages {
        stage('Build And Push Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: '50366d76-5ba9-46b2-ae72-1ddb818426a1', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                             docker build -t docker.io/yonesakram/nipard:v1.0 .
                             echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                             docker push docker.io/yonesakram/nipard:v1.0
                             docker ps
                        '''
                    }
                }
            }
        }
    }
}



 
    
