function circle(radius){
    var area;
    let pie = 3.14;
    let pr4 = document.getElementById("pr2")
    area = pie * radius * radius;
    return area;
}
let area = circle(5);
// console.log(area);
pr2.innerHTML = "Circle area" + " = " + area;