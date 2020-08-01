# Shivali Singh's portfolio
 A personal project to create a Serverless Portfolio website using ReactJS on AWS Serverless along with fully automated CI/CD process.

## Technologies used:

* ReactJS Framework/Library
* Git and Github
* Node Package Manager (NPM)
* Webpack module bundler
* Babel
* Jest

## AWS Technolgies deployed :

*  AWS Lambda : Created a Lambda function which will run my script automatically when a commit is made and send a notification if it is  deployed successfully via email. No need to manually run script in terminal!! 
* AWS S3 : Host website
* AWS CloudFront : Created a cloud front Distrubiton and created an SSL certificate for my domain.
* AWS Route 53 : setup for URL
* AWS SNS : Send a notification via e-mail when portfolio is deployed succesfully
* AWS CodeBuild : Created a code build job that automatically updates code on Git and AWS when I make a commit to Git
* AWS CodePipeline : Implemented Code Pipeline to automate process and successfully manage and view the Portfolio Projects

## Sumamry of the things I worked on :

* Build Portfolio Website with ReactJS/Babel
* Test Website with Chai and Mocha
* Build website code package with webpack
* Test website with Jest
* CI/CD Pipeline for automatic deployment
* Cloud Front distribution along with SSL
* Route53 setup for URL





