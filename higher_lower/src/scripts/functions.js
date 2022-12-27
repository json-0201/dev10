let num = Math.floor(Math.random() * 20) + 1;
// console.log(num);

function check() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (num > guess) {
        message.innerText = "No, try a higher number.";
    }
    else if (num < guess) {
        message.innerText = "No, try a lower number.";
    }
    else {
        message.innerText = "You got it!";
    }
}

document.getElementById("check").onclick = function() {
    check();
};