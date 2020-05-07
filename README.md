# APIGEE POC
## POC#16 - Async call - JavaScript async call to a mock api
Teorical implementation of a asynchronous call through JavaScript policies.

This is a non-target proxy with three flows

 - testMock:
	path: /mock
	verb: GET
	API: PUT "http://www.mocky.io/v2/5185415ba171ea3a00704eed" 
	
	In this flow a new Request object is created with a PUT http operation, the response reference is stored in the context session. 
	In a later JS policy, waitForComplete(1000) method is invoked and the response is retrieved from the session. 
 
 - testAsync:
	path: /async
	verb: GET
	API: GET 'http://httpbin.org/get'
	
	In this flow a simple GET call is made and the response reference is stored in the context session. 
	In a later JS policy, waitForComplete(1000) method is invoked and the response is retrieved from the session. 
	
 - testCombinedFlow
	path: /combined
	verb: GET
	API: GET 'http://httpbin.org/get'

	This flow combines all the logic in single JS policy, in order to make a simple GET call with and a waitForComplete(1000) invocation. 
	
### Manager:
* Pablo Valdez
### Members:
* Irian Joubert
* Nicolas Retamales
* Maria Celia Etchegaray