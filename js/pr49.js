function number(num){
    let pr9 = document.getElementById("pr9");

    if(num % 2 == 0){
        pr9.innerHTML = "Even number";
    }
    else{
        pr9.innerHTML = "Odd number";
    }
   
}
number(5);