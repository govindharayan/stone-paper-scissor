
var lcount = 0;
var rcount = 0;
function playagain() {
var lindex = Math.floor(Math.random() * 3);
var rindex = Math.floor(Math.random() * 3);

var game = ["stone", "paper", "scissor"];
var left = "Images/l-" + game[lindex] + ".png";
var right = "Images/r-" + game[rindex] + ".png";

document.querySelectorAll("img")[0].setAttribute("src", left);
document.querySelectorAll("img")[1].setAttribute("src", right);

if (game[lindex] === game[rindex]) {
    alert("It's a tie");
} else if (
    (game[lindex] === "stone" && game[rindex] === "scissor") ||
    (game[lindex] === "paper" && game[rindex] === "stone") ||
    (game[lindex] === "scissor" && game[rindex] === "paper")
) {
    alert("Left Won");
    lcount++;
} else {
    alert("Right won");
    rcount++;
}

document.querySelector("#left").innerHTML = "Left=" + lcount;
document.querySelector("#right").innerHTML = "Right=" + rcount;


if(lcount === 3) {
    alert("Congratulations Left!! You won");
    lcount=0;
    rcount=0;
    document.querySelector("#left").innerHTML = "Left=" + lcount;
    document.querySelector("#right").innerHTML = "Right=" + rcount;
}
else if(rcount === 3) {
    alert("congratulations Right!! You won")
    lcount=0;
    rcount=0;
    document.querySelector("#left").innerHTML = "Left=" + lcount;
    document.querySelector("#right").innerHTML = "Right=" + rcount;
}
}
document.querySelector("#btn").addEventListener("click",playagain)