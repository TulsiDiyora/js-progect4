function mul(a, b, c){
    let ans;
    let pr5 = document.getElementById("pr5");
    ans = ((b * b)*(4 * a * c)/(2 * a));
    return ans;
}
let ans = mul(2, 3, 4);
pr5.innerHTML = "Quadratic Equation" + " = " + ans;
