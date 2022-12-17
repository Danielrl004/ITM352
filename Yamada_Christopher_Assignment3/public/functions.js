// This function asks the server for a "service" and converts the response to text. 
// Function is taken from Assignment 3 code example website: https://dport96.github.io/ITM352/morea/180.Assignment3/reading-code-examples.html
function loadJSON(service, callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', service, false);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
