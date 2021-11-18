def docker_image


pipeline {
    environment {
      APP_NAME = "how-about-this-frontend"
    }
    agent any
    stages {
        /* stage('Unit Test') { */
        /*     agent { */
        /*         docker { */
        /*           image 'node:14-alpine' */
        /*         } */
        /*     } */
        /*     steps { */
        /*         script { */
        /*             sh 'yarn' */
        /*         } */
        /*         script { */
        /*             sh 'yarn run test:ci' */
        /*         } */
        /*     } */
        /*     post { */
        /*         always { */
        /*             step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml']) */
        /*             junit testResults: 'junit.xml', skipPublishingChecks: true */
        /*         } */
        /*     } */
        /* } */

        stage('Build Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'GCP_WORKSPACE_PROJECT_ID', variable: 'GCP_WORKSPACE_PROJECT_ID')]) { //set SECRET with the credential content
                        docker_image = docker.build("$GCP_WORKSPACE_PROJECT_ID/$APP_NAME")
                    }
                }
            }
        }

        stage('Push Image') {
            steps {
                script {
                    docker.withRegistry('https://asia.gcr.io', 'gcr:workspace-gsa-credentials') {
                        docker_image.push("${env.BRANCH_NAME}")
                    }
                }
            }
        }

        stage('Release') {
            when { tag "release-*" }
            steps {
                script {
                    docker.withRegistry('https://asia.gcr.io', 'gcr:workspace-gsa-credentials') {
                        docker_image.push("${env.TAG_NAME}")
                        docker_image.push("latest")
                    }
                }
            }
        }
    }
}
