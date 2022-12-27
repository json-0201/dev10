function prompt_max_num() {
	// ask the user what the maximum number should be

	let flag = false;
	let max_num;

	while (!flag) {
		max_num = Math.round(Number(prompt("Enter the maximum number:")));
		if (max_num > 0 && Number.isInteger(max_num)) {
			flag = true;
		}
	}

	let msg = document.getElementById("message_initial");
	msg.innerHTML = `Guess a number between 1 and ${max_num}.`;

	// console.log(`max_num: ${max_num}`);
	return max_num;
}

let max_num = prompt_max_num();

// generate a random number between 1 and max_num
let num = Math.floor(Math.random() * max_num) + 1;
// console.log(`num: ${num}`);


// create an empty array and a counter
let records = [];

// duplicate boolean
let flag_duplicate = false;

function track_guesses() {
	// keep track of each guess by the user

	let input = Number(document.getElementById("guess").value);

	if (Number.isInteger(input) && (input > 0 && input <= max_num)) {
		if (records.find(ele => ele == input) == input) {
			flag_duplicate = true;
		} else {
			records.push(input);
			flag_duplicate = false;
		}
	}
	// console.log(input, records);
}


function validate_guess() {
	// validate the input when the guess button is pressed

	let input = Number(document.getElementById("guess").value);
	let msg = document.getElementById("message_final");

	if (!Number.isInteger(input)) {
		msg.innerHTML = "That is not a number!";
	} else if (input < 1 || input > max_num) {
		msg.innerHTML = "That number is not in range, try again.";
	} else if (flag_duplicate == true) {
		msg.innerHTML = "That number has already been guessed!";
	} else if (input > num) {
		msg.innerHTML = "No, try a lower number.";
	} else if (input < num) {
		msg.innerHTML = "No, try a higher number.";
	} else {
		msg.innerHTML = `You got it! It took you ${records.length} tries and your guesses were ${records}`;
	}
}