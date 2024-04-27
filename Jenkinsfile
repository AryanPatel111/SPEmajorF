pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS = 'DockerHubCred'
        DOCKER_IMAGE_NAME = '23subbhashit/spemajorf'
        REACT_APP_PATH = '/mnt/c/Users/User/Desktop/spemajor/pathf'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [[url: 'https://github.com/23subbhashit/SPEmajorF.git']]
                ])
            }
        }

        stage('Build React App') {
            steps {
                dir('/mnt/c/Users/User/Desktop/spemajor/pathf') {
                    sh '/mnt/c/Program Files/nodejs/npm install'
                    sh '/mnt/c/Program Files/nodejs/npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir(REACT_APP_PATH) {
                    script {
                        docker.build("${DOCKER_IMAGE_NAME}", '.')
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('', 'DockerHubCred') {
                        sh "docker tag ${DOCKER_IMAGE_NAME}:latest ${DOCKER_IMAGE_NAME}:latest"
                        sh "docker push ${DOCKER_IMAGE_NAME}:latest"
                    }
                }
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                script {
                    ansiblePlaybook(
                        playbook: 'deploy.yml',
                        inventory: 'inventory'
                    )
                }
            }
        }
    }
}
