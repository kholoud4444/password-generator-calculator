// This function clear all the values
var newval = "", first = "", num1 = "";
function clearScreen(value) {
    if (value == "C") {
        document.getElementById("result").value = "";
        document.getElementById("result2").value = "";
        console.log(num1);
        newval = "", first = "", num1 = 0;
    }
}

// This function display values

function display(value) {
    var dis= document.getElementById("result");

    dis.value += value;

    newval += value;
    if ((value === "+" || value === "-" || value === "*" || value === "/" || value === "=" || value === "log" || value === "power" || value === "root"|| value === "Del") && (first === "")) {
        num1 = parseInt(newval.substring(0, newval.length - 1));
        if (value==="Del"){
            dis.value = newval.substring(0, newval.length - 4);
            first="";
            newval=dis.value;
        }
        else{
        newval = "";
        first = value;
        }

    }
    else if ((value === "+" || value === "-" || value === "*" || value === "/" || value === "=" || value === "log" || value === "power" || value === "root"|| value === "Del") && (first !== "")) {
        if (first === "+") {
            newval = parseInt(newval.substring(0, newval.length - 1)) + num1;
            num1 = newval;
            first = value;
            newval = "";
            console.log(num1);

        }
        else if (first === "-") {
            newval = num1 - parseInt(newval.substring(0, newval.length - 1));
            num1 = newval;
            first = value;
            newval = "";
        }
        else if (first === "/") {
            newval = num1 / parseInt(newval.substring(0, newval.length - 1));
            num1 = newval;
            first = value;
            newval = 0;
        }
        else if (first === "root") {
            newval = Math.sqrt(num1);
            num1 = newval;
            first = value;
            newval = "";
        }
        else if (first === "power") {
            newval = Math.pow(num1, parseInt(newval.substring(0, newval.length - 1)));
            num1 = newval;
            first = value;
            newval = "";
            console.log(num1);
            console.log(newval);
        }
        else if (first === "log") {
            newval = Math.log(num1);
            num1 = newval;
            first = value;
            newval = "";
        }
        else if (first === "*") {
            newval = num1 * parseInt(newval.substring(0, newval.length - 1));
            num1 = newval;
            first = value;
            newval = "";
        }
        if (value === "=") {
            document.getElementById("result2").value = num1;

        }
       

    }
    
}


// password generator.......



function gerpass() {
    var randomPassword="";
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = Math.floor(Math.random()*8)+16;
    console.log(length)
     
    for (var i=0; i < length; i++) {
        
        randomPassword = randomPassword + chars.charAt(Math.floor(Math.random() *chars.length));
}

document.getElementById("password").value = randomPassword;
}