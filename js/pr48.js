function fahrenheit(c){
    let f;
    let pr8 = document.getElementById("pr8");
    f = (c * 1.8) + 32; 
    return f;
}
let f = fahrenheit(8);
pr8.innerHTML = "Celsius to Fahrenheit" + " = " + f;


