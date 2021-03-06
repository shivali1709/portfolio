import json
import boto3
import io
import zipfile
import mimetypes

def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:964826117066:delpoypotfoliotopic')
    s3= boto3.resource('s3')
    topic.publish(Subject="Success: Portfolio Deployed", Message ="Portfolio Deployed")

    portfolio_bucket = s3.Bucket('about.shivali.us')

    build_bucket = s3.Bucket('portfoliobuild.shivali.us')

    portfolio_zip = io.BytesIO()
    build_bucket.download_fileobj('test.zip',portfolio_zip)


    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
         obj = myzip.open(nm)
         portfolio_bucket.upload_fileobj(obj,nm,ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
         portfolio_bucket.Object(nm).Acl().put(ACL='public-read')



    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
