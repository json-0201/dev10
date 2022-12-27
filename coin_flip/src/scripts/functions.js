function flip(guess) {
    // generates a random number to represent the coin flip
    let res = Math.floor(Math.random() * 2) + 1;

    // displays a message about the guess
    let msg = document.getElementById("message");

    // displays a message about the result of the flip
    if (res == 1) {
        // heads
        if (guess == "heads") {
            msg.innerHTML = "You guessed Heads...<br>The coin flips and comes up Heads!<br>Good Guess!";
        } else {
            msg.innerHTML = "You guessed Tails...<br>The coin flips and comes up Heads!<br>Bad Guess!";
        }
    } else {
        // tails
        if (guess == "heads") {
            msg.innerHTML = "You guessed Heads...<br>The coin flips and comes up Tails!<br>Bad Guess!";
        } else {
            msg.innerHTML = "You guessed Tails...<br>The coin flips and comes up Tails!<br>Good Guess!";
        }
    }
}