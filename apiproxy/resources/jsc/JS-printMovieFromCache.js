 var cachedValues = context.getVariable("local.jsonMoviesKeysValues");
 print("cachedValues: " + cachedValues)
 
 var parsedValues = JSON.parse(cachedValues);
 print("parsedValues: " + parsedValues);
 print("parsedValues.totalResults: " + parsedValues.totalResults);

var item0 = parsedValues.Search[0];
print("item0: " + item0);
context.setVariable("responseInfo.Title", item0.Title);
context.setVariable("responseInfo.Year", item0.Year);
context.setVariable("responseInfo.imdbID", item0.imdbID);
context.setVariable("responseInfo.Type", item0.Type);
context.setVariable("responseInfo.Poster", item0.Poster);