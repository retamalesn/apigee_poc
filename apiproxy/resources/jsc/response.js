var exchange = context.session['calloutResponse'];
exchange.waitForComplete(1000); //timeout in milliseconds

if(exchange.isSuccess()){
    var responsePayload =  exchange.getResponse().content.asJSON;
    print("responsePayload: " + responsePayload);
} else {
    print("NOT SUCCESS");
}

