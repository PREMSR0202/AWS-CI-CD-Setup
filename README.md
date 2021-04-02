# AWS CDI/CD SETUP/NODE-JS APP

This Project Provides a Serverless CI/CD Platform for Node-JS Applications. 

CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment.

## ARCHITECTURE

![alt](https://github.com/PREMSR0202/AWS-CI-CD-Setup/blob/master/Images/GitHub.jpeg?raw=true)


## AWS SERVICES USED

* [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html)
* [AWS CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html)
* [AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html)
* [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html)
* [AWS ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)
* [AWS ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)
* [AWS EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
* [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

## IMPORTANT PRE-REQUISITES

1. Build the Docker Image in your Local Machine ```docker build -t node .```

2. Create a repository in ECR and Push the Image.

3. Push Commands :
   
   * First authenticate Docker to an Amazon ECR private registry with get-login-password
      * For Linux & MacOS ```aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com```
      * For Windows ```(Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com```
   * ```docker tag repository_name:latest aws_account_id.dkr.ecr.region.amazonaws.com/my-web-app```
   * ```docker push aws_account_id.dkr.ecr.region.amazonaws.com/my-web-app```

4. IAM ROLES
   
   * [ECSTASKROLE](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)
   * [ECSTASKEXECUTIONROLE](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html)
   * [CODEBUILDROLE](https://docs.aws.amazon.com/codebuild/latest/userguide/setting-up.html)
   * [AWSSERVICEROLEFORECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html)
   * [AWSCODEDEPLOYROLEFORECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/codedeploy_IAM_role.html)
   * [AWSCODEPIPELINEROLE](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-service-role.html)

## CODE-PIPELINE OUTPUT
![ALT](https://github.com/PREMSR0202/AWS-CI-CD-Setup/blob/master/Images/codepipeline.png)
