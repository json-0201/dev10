<h2 align="center">dev10 - Introduction to Web Development</h2>
<h2 id="introduction">Introduction</h2>
<p>For your final assessment, please make the following enhancements to the Higher-Lower game from the JavaScript exercises. You may start with the <a href="https://daerwfnmm5gpa.cloudfront.net/iwd/05-Summative/assets/higherlower.zip">Higher-Lower solution</a> or use your own solution to the practice exercise.</p>
<h2 id="1-prompt-for-max-number">1. Prompt for Max Number</h2>
<p>Instead of locking the game into a number between <code>1</code> and <code>20</code>, use the <code>prompt()</code> method to ask the user what the maximum number should be. The prompt should be in a loop with validation, as demonstrated previously in the course, making sure that the inputted value is a positive number. If the user inputs a decimal, simply round it.</p>
<p>When a valid number is inputted, change the content of the instructions to specify guesses between <code>1</code> and <code>N</code> (where <code>N</code> is the user-provided maximum number).</p>
<h3 id="grading-criteria">Grading Criteria</h3>
<ul>
<li>The application prompts the user for a maximum number.</li>
<li>The application validates the user input and does not allow invalid entries (negative numbers, <code>0</code>, or non-numbers), re-prompting the user if an invalid entry is provided.</li>
<li>If the user provides a decimal number, the application rounds it.</li>
<li>The application selects a random number between <code>1</code> and <code>N</code> (where <code>N</code> is the user-provided maximum number).</li>
</ul>
<h2 id="2-validate-the-guess">2. Validate the Guess</h2>
<p>When the user presses the guess button, validate the input:</p>
<ul>
<li>If the guess is not a number, display a message: "That is not a number!"</li>
<li>If the guess is out of range (<code>1</code> to <code>N</code>), display a message: "That number is not in range, try again."</li>
</ul>
<h3 id="grading-criteria-1">Grading Criteria</h3>
<ul>
<li>The application prevents the user from guessing a non-number and displays an appropriate error message.</li>
<li>The application prevents the user from guessing a number less than <code>1</code> and displays an appropriate error message.</li>
<li>The application prevents the user from guessing a number greater than <code>N</code> and displays an appropriate error message.</li>
</ul>
<h2 id="3-track-the-guesses">3. Track the Guesses</h2>
<p>Using an array, keep track of each guess by the user. When the user wins the game by guessing correctly, add the number of guesses and the list of guesses to the victory message. For example:</p>
<p>"You got it! It took you 5 tries and your guesses were 3, 14, 7, 9, 5."</p>
<p>Do not count invalid guesses (not numbers or out of range).</p>
<h3 id="grading-criteria-2">Grading Criteria</h3>
<ul>
<li>The application correctly initializes an array and uses the <code>push()</code> function to add the guesses.</li>
<li>The application correctly formats the win message to include the comma-delimited guesses as part of the output.</li>
<li>The application uses the <code>length</code> property and does not use an extra variable to count the number of guesses.</li>
</ul>
<h2 id="4-prevent-duplicate-guesses">4. Prevent Duplicate Guesses</h2>
<p>Since you are tracking the guesses, add validation to check if a number has already been guessed. If it has, display a message and do not count it as a guess.</p>
<h3 id="grading-criteria-3">Grading Criteria</h3>
<ul>
<li>The application correctly checks the array for a guess first using any means (loop, <code>find()</code>, etc.) before adding a guess to the array.</li>
<li>The application correctly displays a message that a number has already been guessed.</li>
</ul>
