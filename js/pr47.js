function celsius(f){
    let c;
    let pr7 = document.getElementById("pr7");
    c = (f-32)/1.8;
    return c;
}
let c = celsius(8);
pr7.innerHTML = "Fahrenheit to Celsius" + " = " + c;




