// you have two numbers in two variables, called: num1, num2


// now declare a variable called result.
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else.

// also, write it using ternary operator.

let num1 = 10; // Example value
let num2 = 5;  // Example value

let result;

if (num1 > num2) {
    result = 2 * num1;
} else {
    result = num1 + num2;
}

console.log(result);


// Grade Calculator


// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

let grade;
if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score < 90) {
    grade = 'B';
} else if (score >= 70 && score < 80) {
    grade = 'C';
} else if (score >= 60 && score < 70) {
    grade = 'D';
} else if (score >= 0 && score < 60) {
    grade = 'F';
} else {
    grade = 'Invalid score'; // Handle out-of-range scores
}

return grade;
// if you get more then 80 then inside your friend score.
// If your friend get more than 80. then go for a lunch.
// if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
// if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
// if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note:
// use nested if-else-if-else

function evaluateFriendScore(yourScore, friendScore) {
    if (yourScore > 80) {
        // Your score is more than 80
        if (friendScore > 80) {
            console.log("Go for lunch with your friend.");
        } else if (friendScore >= 60) {
            console.log("Good luck next time, friend.");
        } else if (friendScore >= 40) {
            console.log("Keep your friend's message unseen.");
        } else {
            console.log("Block your friend.");
        }
    } else {
        // Your score is less than or equal to 80
        console.log("Go home and sleep, and act sad.");
    }
}