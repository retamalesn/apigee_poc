var url = "http://www.mocky.io/v2/5185415ba171ea3a00704eed";
var operation = "PUT";
var headers = {'X-SOME-HEADER' : 'some value' };

var request = new Request(url, operation, headers);
var calloutResponse = httpClient.send(request);
context.session['calloutResponse'] = calloutResponse;

if(calloutResponse === null){
    print("NULL");
} else if(!calloutResponse.isComplete()) {
    print("NOT COMPLETE");
} else if(!calloutResponse.isSuccess()){
    print("ERROR");
} 