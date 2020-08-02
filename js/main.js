import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Blog post on being 3 x AWS Certified",
    'href': "https://www.linkedin.com/pulse/becoming-3x-aws-certified-beginners-guide-cloud-shivali-singh/",
    'desc': "If one thing is certain today, it’s never too late to cash in on the cloud. You can deploy technology services in a matter of minutes, and get from idea to implementation several orders of magnitude faster than before. This gives you the freedom to experiment, test new ideas to differentiate customer experiences and transform your business. Check out my article on becoming 3 x AWS Certified here.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "TipCalculator iOS App",
    'href': "https://github.com/shivali1709/TipCalculatoriOS",
    'desc': "Created an iOS app on Swift where the user can enter a bill amount, choose a tip percentage, and see the tip owed and/or split the bill among people and show individual amount owed",
    'image': {
      'desc': "Swift",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "A Serverless Portfolio",
    'href': "https://github.com/shivali1709/portfolio",
    'desc': "A personal project to create a Serverless Portfolio website using ReactJS on AWS Serverless along with fully automated CI/CD process. AWS Technolgies used : Lambda, S3, CloudFront, Route53, SNS, Codebuild,and CodePipeline. Check out my github for more info. ",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/MyPortfolio-Architecture.png",

    }
  }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
