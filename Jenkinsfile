pipeline{
    agent any
    stages{
        stage("Checkout from git"){
            steps{
                checkout scmGit(branches: [[name: '*/client2']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/VinDeAlone/Super_Single']])
            }
        }
        stage("Build docker image"){
            steps{
                powershell "docker build -t vindealone/supersingleclientimage:0.0.1 ."
            }
        }
        stage("Upload image to docker"){
            steps{
                withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerpwd')]) {
                    powershell "docker login -u vindealone -p ${dockerpwd}"
                }
                powershell "docker push vindealone/supersingleclientimage:0.0.1"
            }
        }
    }
}