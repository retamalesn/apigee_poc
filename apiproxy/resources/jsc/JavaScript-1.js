//print("jsonKeysValues: " + context.getVariable("jsonKeysValues"));
//JSONObject jsonObj = 
var jsonKVal = context.getVariable("jsonKeysValues");
//print("jsonKVal: " + jsonKVal);
var keyValues = JSON.parse(jsonKVal);
//print("keyValues: " + keyValues);
//print("keyValues.items: " + keyValues.items);

var arrayLength = keyValues.items.length;
var found = false;

for(var i = 0; i < arrayLength; i++){
    print("i: " + i);
    var item = keyValues.items[i];
    print("item: " + item);
    print("item.id: " + item.id);
    print("jsonId: " + context.getVariable("jsonId"));
    
    if(item.id == context.getVariable("jsonId")){
        print(true);
        found = true;
        context.setVariable("response.context", JSON.stringify(item));
        break;
    } 
}

if(found === false){
    context.setVariable("itemFound", false);
} else {
    context.setVariable("itemFound", true);
}