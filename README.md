# APIGEE POC
## POC#9 - Cache - Mocked JSON response
Proxy with no target endpoint that returns a mocked JSON response with below structure:
```
{
	"items" : [
		{
		"id" : "456789",
		"value1" : "aaa",
		"value2" : "bbb"
		},
		{
		"id" : "56789",
		"value1" : "ccc",
		"value2" : "ddd"
		},
		{
		"id" : "67890",
		"value1" : "eee",
		"value2" : "fff"
		}
	]
}
```

POSTMAN TEST

GET: https://ijoubert-eval-test.apigee.net/jsonkeys


### Manager:
* Mariano Sola
### Members:
* Irian Joubert
* Nicolas Retamales