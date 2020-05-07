var calloutResponse = httpClient.get('http://httpbin.org/get'); 
//var calloutResponse = httpClient.get('http://www.mocky.io/v2/5185415ba171ea3a00704eed'); 
context.session['calloutResponse'] = calloutResponse;

if(calloutResponse == null){
    print("NULL");
} else if(!calloutResponse.isComplete()) {
    print("NOT COMPLETE");
} else if(!calloutResponse.isSuccess()){
    print("ERROR");
}