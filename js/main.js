import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Blog on AWS Certifications",
    'href': "https://www.linkedin.com/pulse/becoming-3x-aws-certified-beginners-guide-cloud-shivali-singh/",
    'desc': "If one thing is certain today, it’s never too late to cash in on the cloud. You can deploy technology services in a matter of minutes, and get from idea to implementation several orders of magnitude faster than before. This gives you the freedom to experiment, test new ideas to differentiate customer experiences and transform your business.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "TipCalculator iOS App",
    'href': "https://github.com/shivali1709/TipCalculatoriOS",
    'desc': "Testing here",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "My Cloud Resume",
    'href': "https://github.com/shivali1709/portfolio",
    'desc': " test3",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example2.png",

    }
  }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
