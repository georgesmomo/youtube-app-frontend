pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "georgesmomo/youtube-frontend"
    }

    stages {
        stage('Cloner le code') {
            steps {
                git 'https://github.com/georgesmomo/youtube-app-frontend.git'
            }
        }

        stage('Build & Test Frontend') {
            steps {
                sh 'npm install'
                sh 'ng build --configuration=production'
                sh 'ng test --watch=false'
            }
        }

        stage('Créer Image Docker Frontend') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Pousser Image Docker Frontend') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub_credentials', url: '']) {
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Déploiement Frontend') {
            steps {
                sh 'ansible-playbook -i inventory deploy.yml'
            }
        }
    }
}
