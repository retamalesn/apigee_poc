var calloutResponse = httpClient.get('http://httpbin.org/get'); 
//context.session['calloutResponse'] = calloutResponse;

if(calloutResponse == null){
    print("NULL");
} else if(!calloutResponse.isComplete()) {
    print("NOT COMPLETE");
} else if(!calloutResponse.isSuccess()){
    print("ERROR");
}

calloutResponse.waitForComplete(1000); //timeout in milliseconds

if(calloutResponse == null){
    print("NULL");
} else if(!calloutResponse.isComplete()) {
    print("NOT COMPLETE");
} else if(!calloutResponse.isSuccess()){
    print("ERROR");
} else if(calloutResponse.isSuccess()){
    var responsePayload =  calloutResponse.getResponse().content.asJSON;
    print("responsePayload: " + responsePayload);
}