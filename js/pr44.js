function rectangle(l, h){
    let rarea;
    let pr4 = document.getElementById("pr4");
    rarea = l * h;
    return rarea;
}
let rarea = rectangle(5, 6);
pr4.innerHTML = "Rectangle area" + " = " + rarea;