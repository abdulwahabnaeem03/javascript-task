// exercise1
var number = prompt('Enter a number:');
number = Number(number);
if (number > 0) {
    document.write('The number is positive.');
} else if (number < 0) {
    document.write('The number is negative.');
} else {
    document.write('The number is zero.');
}
// exercise2
var number = prompt('Enter a number:');
number = Number(number);
if (number % 2 === 0) {
    document.write('The number is even.');
} else {
    document.write('The number is odd.');
}
// excercise3
var age = prompt('Enter your age:');
age = Number(age);
if (age >= 18) {
    document.write('You are eligible to vote.');
} else {
    document.write('You are not eligible to vote.');
}
// excercise4
var num1 = prompt('Enter the first number:');
var num2 = prompt('Enter the second number:');
num1 = Number(num1);
num2 = Number(num2);
if (num1 > num2) {
    document.write('The largest number is: ' + num1);
} else if (num2 > num1) {
    document.write('The largest number is: ' + num2);
} else {
    document.write('Both numbers are equal.');
}
// excercise5
var age = prompt('Enter your age:');
var hasMembership = prompt('Do you have a membership card? (yes/no)').toLowerCase();
age = Number(age);
if (age >= 60 || hasMembership === 'yes') {
    document.write('You are eligible for a discount.');
} else {
    document.write('You are not eligible for a discount.');
}
// excercise6
var username = prompt('Enter username:');
var password = prompt('Enter password:');
if (username === 'admin' && password === '12345') {
    document.write('Login successful');
} else {
    document.write('Invalid credentials');
}
// excecise7
var marks = prompt("Enter your marks:");
var grade;
if (marks >= 90) {
    grade = 'A';
} else if (marks >= 80) {
    grade = 'B';
} else if (marks >= 70) {
    grade = 'C';
} else if (marks >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
document.write("Your grade is: " + grade);
// excercise8
const color = prompt("Enter the traffic light color (red, yellow, green):");
if (color === "red") {
    document.write("Stop");
} else if (color === "yellow") {
    document.write("Slow down");
} else if (color === "green") {
    document.write("Go");
} else {
    document.write("Invalid color. Please enter red, yellow, or green.");
}
