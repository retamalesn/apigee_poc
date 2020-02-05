# APIGEE POC
## POC#13 - Cache - Complete flow using OAuth, external target backend, response cache and KVM

OAuth proxy that retrieves an internal api key from a KVM in order to consume IMDB Api to get movies information.
Stores backend response into an internal cache to reduce backend calls.
This proxy implements ResponseCache, LookupCache, PopulateCache, KVM and OAuth 2.0 policies.

Target Backend 
https://movie-database-imdb-alternative.p.rapidapi.com


POSTMAN TEST
GET: https://ijoubert-eval-test.apigee.net/imdbmoviescache
Params: title - <titleValue>
Headers: Authorization - Bearer <accessToken>


ENVIRONMENT CACHE
MoviesCache 	
Expires After 10 secs


KVM CONFIGURATION
KVM: imdbApiKey 
Key: apikey2
Value: <imdbApiKey>


Expected behaviour:
If the movie requested is already in the cache, it will return the first value found.
If not, it will call the target endpoint to get the requested movie and refresh the cache. 

### Manager:
* Mariano Sola
### Members:
* Irian Joubert
* Nicolas Retamales