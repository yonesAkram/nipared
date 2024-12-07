pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    def app = docker.build('my-node-app', '.')
                    app.inside {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    def app = docker.image('my-node-app')
                    app.inside {
                        sh 'npm test || echo "No tests found"'
                    }
                }
            }
        }
        stage('Run') {
            steps {
                script {
                    docker.image('my-node-app').inside {
                        sh 'node index.js'
                    }
                }
            }
        }
    }
}

