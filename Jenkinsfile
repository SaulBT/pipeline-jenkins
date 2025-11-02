 pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                sh 'echo "Clonando código"'
                git branch: 'main', url:'https://github.com/SaulBT/pipeline-jenkins'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Levantando la imagen del proyecto..."'
                docker build -t pipeline-jenkins:1.0 .
            }
        }
        stage('Ejecucion') {
            steps {
                sh 'echo "Ejecutando la imagen del proyecto..."'
                docker run -d -p 8081:8081 pipeline-jenkins:1.0
            }
        }
    }
 }
