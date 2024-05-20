function swipeing(x ,y) {
    let pr10 = document.getElementById("pr10");

    let total = x;
    x = y;
    y = total;

    pr11.innerHTML = "before swapping : x =" + 10 + " ," + "y =" + 18;
    pr10.innerHTML = "after swiping : x =" + x + ", " + "y =" + y;
}
swipeing(10 ,18);

