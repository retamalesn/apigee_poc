# APIGEE POC
## POC#5 - OAuth Example - Create token based on client credentials
Based on username and password received in the request as Basic Authentication, create access token and return in the response.

POSTMAN TEST
- POST: http://ijoubert-eval-test.apigee.net/accesstoken/clientCredentials
- Authorization Header: Basic Auth
- Body: grant_type = client_credentials

### Manager:
* Mariano Sola
### Members:
* Irian Joubert
* Nicolas Retamales