# APIGEE POC
## POC#7 - OAuth Example - Validate access token and invoke backend
Validate an access token received in the request

POSTMAN TEST
- POST: https://ijoubert-eval-test.apigee.net/imdboauthproxy
- Header: Authorization = Bearer <accessToken>

- Target Endpoint: https://movie-database-imdb-alternative.p.rapidapi.com

Note: In order to call IMDB api, an x-rapidapi-key is required


### Manager:
* Mariano Sola
### Members:
* Irian Joubert
* Nicolas Retamales