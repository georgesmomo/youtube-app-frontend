pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "georgesmomo/youtube-frontend"
    }

    stages {
        stage('Cloner le code') {
            steps {
                sh 'rm -rf ./*'  // Nettoyage du répertoire avant le clone
                sh 'git clone https://github.com/georgesmomo/youtube-app-frontend.git'
            }
        }

        stage('Build & Test Frontend') {
            steps {
              dir('./youtube-app-frontend') {
                sh 'npm install'
                sh 'ng build --configuration=production'
                sh 'ng test --watch=false'
              }
            }
        }

        stage('Créer Image Docker Frontend') {
            steps {
              dir('./youtube-app-frontend') {
                sh 'docker build -t $DOCKER_IMAGE .'
              }
            }
        }

        stage('Pousser Image Docker Frontend') {
            steps {
              dir('./youtube-app-frontend') {
                withDockerRegistry([credentialsId: 'dockerhub_credentials', url: '']) {
                    sh 'docker push $DOCKER_IMAGE'
                }
              }
            }
        }

        stage('Déploiement Frontend') {
            steps {
              dir('./youtube-app-frontend') {
                sh 'ansible-playbook -i inventory deploy.yml'
              }
            }
        }
    }
}
