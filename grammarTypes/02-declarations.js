let iceCream = "Vanilla";
const PI = 3.14159;
var fileGlobalVar = { state: "Paused", token: "fqgweo8yugy87"};

let colors = ["red","green","blue"];

console.log("hello");

let debug = (function(){
    let isLoggerOn = true;

    return {
        log: function( output ){ if(isLoggerOn){ console.log(output); } },
        turnLoggingOff: function(){ isLoggerOn = false; },
        turnLoggingOn: function(){ isLoggerOn = true; }
    };
})();

debug.turnLoggingOn();
debug.log(colors);

debug.turnLoggingOff();
debug.log(colors);
    