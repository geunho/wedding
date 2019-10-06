pipeline {
    agent any
    tools { nodejs "node-8.16.1" }

    stages {
        stage("NPM Build") {
            steps {
                echo "##################################"
                echo "# NPM BUILD STARTS ##############"
                echo "##################################"
                sh "npm install && npm run build"
            }
            /*post {
                always{
                }
                success{
                }
                failure{
                }
            }*/
        }

        stage("Docker Build") {
            when {
                not {
                    changelog '.*^\\[SKIP DEPLOY\\] .+$'
                }
            }
            steps {
                echo "##################################"
                echo "# BUILD WD DOCKER IMAGE ########"
                echo "##################################"
                sh "/usr/local/bin/docker build -t wd ."
            }
        }

        stage("Docker Run") {
            when {
                not {
                    changelog '.*^\\[SKIP DEPLOY\\] .+$'
                }
            }
            steps {
                echo "##################################"
                echo "# RUN DOCKER IMAGE ###############"
                echo "##################################"
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh "/usr/local/bin/docker rm -f wd"
                }
                sh "/usr/local/bin/docker run --name wd --restart always -d -p ${external_port}:80 wd"
            }
        }

        stage("Docker Clean") {
            steps {
                echo "##################################"
                echo "# WIPEOUT DANGLING DOCKER IMAGES #"
                echo "##################################"
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh "/usr/local/bin/docker rmi \$(/usr/local/bin/docker images --quiet --filter \"dangling=true\")"
                }
            }
        }
    }
    /*post{
        always{
        }
        success{
        }
        failure{
        }
    }*/
}