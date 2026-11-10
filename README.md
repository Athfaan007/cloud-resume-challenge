# Cloud Resume Challenge

A serverless resume website with a visitor counter, built on AWS.

**Live site:** https://dvvmred6ufakf.cloudfront.net

## Architecture

User → CloudFront → S3 (static website)
Browser JavaScript → API Gateway → Lambda → DynamoDB

## AWS services used

- **S3**: hosts the static website files (bucket kept private)
- **CloudFront**: HTTPS and global caching, access to S3 through Origin Access Control
- **API Gateway**: REST API exposing the visitor counter
- **Lambda (Python)**: increments the visitor count
- **DynamoDB**: stores the count
- **IAM**: least-privilege permission for Lambda to update one table

## Project structure

- `frontend/`: HTML, CSS, JavaScript
- `backend/`: Lambda function code

## What I learned

- Serverless architecture and how AWS services connect
- CloudFront with private S3 (OAC) and default root object
- IAM least-privilege policies
- Debugging DynamoDB key schema errors and CloudFront cache invalidation

## Next improvements

- CI/CD with GitHub Actions
- Infrastructure as Code with Terraform
- Custom domain with Route 53

## Author

Mohamed Athfaan M | [LinkedIn](https://www.linkedin.com/in/athfaanm01) | [GitHub](https://github.com/Athfaan007)