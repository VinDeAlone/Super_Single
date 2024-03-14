pipeline{
   agent any
   tools{
      maven "Maven"
   }
   stages{
      stage("Checkout from git and build project"){
         steps{
            checkout scmGit(branches: [[name: '*/server']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/VinDeAlone/Super_Single']])
            powershell "mvn clean install"
         }
      }
      stage("Build docker image"){
         steps{
            powershell "docker build -t vindealone/supersingleuserserviceimage:1.1.1 ."
         }
      }
      stage("Upload image to dockerhub"){
         steps{
            withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerpwd')]) {
               powershell "docker login -u vindealone -p ${dockerpwd}"
            }
            powershell "docker push vindealone/supersingleuserserviceimage:1.1.1"
         }
      }
      stage("Run docker container"){
         steps{
            powershell "docker run -p 8052:8052 --name supersingleuserservicecontainer vindealone/supersingleuserserviceimage:1.1.1"
         }
      }
   }
}