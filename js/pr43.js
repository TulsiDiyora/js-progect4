function triangle (l, h) {
    let tarea;
    let pr3 = document.getElementById("pr3");
    tarea = (l * h) / 2;
    return tarea;
}
let tarea = triangle(5, 6);
pr3.innerHTML = "Triangle area" + " = " + tarea;