function sum(a , b){
    let sans;
    let pr6 = document.getElementById("pr6");
    sans = ((a * a) + (2 * a * b) + (b * b)); 
    return sans;
}
let sans = sum(2, 3);
pr6.innerHTML = "Fromula Equation" + " = " + sans;



