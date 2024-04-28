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

        stage('Run Ansible Playbook') {
            steps {
                script {
                    ansiblePlaybook(
                        playbook: 'ansibledeploy/deploy.yml',
                        inventory: 'ansibledeploy/inventory',
                        sudoUser: 'subbhashit',
                        extraVars: [
                            kubectl_validate: false // Disable validation for kubectl commands
                        ]
                    )
                }
            }
        }
    }
}
