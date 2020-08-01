# Shivali Singh's portfolio
 A personal project to create a Serverless Portfolio website using ReactJS on AWS Serverless along with fully automated CI/CD process.

## Technologies used:

* ReactJS Framework/Library
* Git and Github
* Node Package Manager (NPM)
* Webpack module bundler
* Babel
* Jest

## AWS Tools used :

AWS Lambda
AWS S3
AWS CloudFront
AWS IAM
AWS Route 53
AWS SNS
AWS CodeBuild
AWS CodePipeline

## Sumaary of the things I worked on :
* Build Portfolio Website with ReactJS/Babel
* Test Website with Chai and Mocha
* Build website code package with webpac
* Test website with Jest
* CI/CD Pipeline for automatic deployment
* Cloud Front distribution along with SSL
* Route53 setup for URL


Git
Added git to my code for versioning control

Cloud Front/SSL Route 53
Created a cloud front Distrubiton and created an SSL certificate for my domain.

Python Scripts
Created a python script which automatically pushes the code to git and AWS when I run a command rather than manually updating the s3 folders

Lambda
Created a Lambda function which will run my script automatically when a commit is made and send a notification if it is  deployed successfully via email. No nee dto manually run script in terminal!!

Code build
Created a code build job that automatically updates code on Git and AWS when I make a commit to Git

Code Pipeline
Implemented Code Pipeline to successfully manage and view the Portfolio Projects
