let helpfunc = require("./help");
console.log(helpfunc.help());
let inputArr = process.argv.slice(2);
let commands = inputArr[0]; //tree function location
let path = inputArr[1]; //file path

switch (commands){ //organise
    case "tree":
        //call tree function
         console.log("tree function called and ececuted successfully" +path);
         break;
    
    case "organize":
        //call organize function
         console.log("organise function called and executed succesfully"+path);
         break;
    
    case "help":
        //call help function
        console.log("help function called and executed succesfully"+path);
        break;  
        
    default:
        console.log("commands not recognized :/");
        break;

}