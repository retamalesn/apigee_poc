# APIGEE POC
## POC#2 - Filter and transform response content 
Filter from backend response some main fields and based on request query parameter, transform final response to XML or JSON.

If the request has following format:
http://ijoubert-eval-test.apigee.net/books-example?criteria=id&value=cs-wvAEACAAJ&responseType=XML
Expected response:
``` <root>
		<totalItems>3</totalItems>
		<kind>books#volumes</kind>
		<itemInfo> 
			<item0> 
				<id0>cs-wvAEACAAJ</id0> 
				<etag0>1yxFWc6LYrY</etag0> 
				<title0>Google Apigee Third Edition</title0>
			</item0>
			<item1> 
				<id1>Cs-WvAEACAAJ</id1> 
				<etag1>+Aqh0oyG4Ek</etag1> 
				<title1>Treaty Series</title1> 
			</item1> 
		</itemInfo> 
	</root>
```

If the request has following format:
http://ijoubert-eval-test.apigee.net/books-example?criteria=id&value=cs-wvAEACAAJ&responseType=JSON
Expected response:
```
{ 
"totalItems": "3", 
"kind": "books#volumes", 
"itemInfo": [
	 { "id0": "cs-wvAEACAAJ", 
	 "etag0": "1yxFWc6LYrY", 
	 "title0": "Google Apigee Third Edition" }, 
	 { "id1": "Cs-WvAEACAAJ", 
	 "etag1": "+Aqh0oyG4Ek", 
	 "title1": "Treaty Series" } 
	 ]
}
```

Note: this POC includes a Target Endpoint configuration to use below Target Server:
|	Name	|	Host	|	Port	|	SSL	|	Enabled	|
|	---		|	---		|	---	|	---	|	--- 			|
|	google-books	|	www.googleapis.com	| 443	|	Yes	|	Yes |


### Manager:
* Mariano Sola
### Members:
* Irian Joubert
* Nicolas Retamales