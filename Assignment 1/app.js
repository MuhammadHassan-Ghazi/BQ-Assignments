// 1) Check if a number is even or odd


let number = 5;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 2) Check voting eligibility


let age = 17;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// 3) Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4) Print even numbers between 1 to 20 using while loop


let i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

//5) Reverse a string using for loop


let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// 6) Function to add two numbers


function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

// 7) Function to return factorial


function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

// 8) Check if string is palindrome


function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); // true

// 9) Create student object


let student = {
  name: "Ali",
  rollNo: 123,
  marks: 85,
  isPassed: true
};

// 10) Access student properties

console.log(student.name);
console.log(student["marks"]);

// 11) Add method to print name


student.sayHello = function() {
  console.log(`Hello, I am ${this.name}`);
};
student.sayHello();

// 12) Function to print object keys and values


function printObject(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
printObject(student);

// 13) Array of favorite fruits


let fruits = ["mango", "apple", "banana"];

// 14) Add new fruit


fruits.push("orange");

// 15) Remove last fruit


fruits.pop();

// 16) Check if "banana" is present


console.log(fruits.includes("banana"));

// 17) Multiply array numbers by 2


let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2);
console.log(doubled);

// 18) Return ages 18 or older


let ages = [12, 18, 22, 15];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// 19) Find first number greater than 10


let numbers = [3, 8, 15, 20];
let first = numbers.find(num => num > 10);
console.log(first);

// 20) Print names using forEach


let names = ["Ali", "Zara", "Umar"];
names.forEach(name => console.log(name));

// 21) Get student names using .map()


const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];
let namesOnly = students.map(s => s.name);
console.log(namesOnly);

// 22) Filter students with marks > 50


let passed = students.filter(s => s.marks > 50);
console.log(passed);

// 23) Find student named Zara


let zara = students.find(s => s.name === "Zara");
console.log(zara);

// 24) Print each student’s name and marks


students.forEach(s => console.log(`${s.name}: ${s.marks}`));

// 25) Square each number


let nums2 = [2, 4, 6, 8];
let squares = nums2.map(num => num * num);
console.log(squares); // [4, 16, 36, 64]

// 26) Display each name


let list = ["Ali", "Zara", "Umar", "Ahmed"];
list.forEach(name => console.log(name));

// 27) Ages above 18


let ageList = [12, 25, 17, 20, 16, 30];
let above18 = ageList.filter(age => age > 18);
console.log(above18);

// 28) Check if "apple" exists


let arr = ["banana", "mango", "grapes", "apple"];
console.log(arr.includes("apple")); // true

// 29) Find first student with marks > 90


let topStudent = [
  { name: "Ali", marks: 75 },
  { name: "Zara", marks: 92 },
  { name: "Umar", marks: 85 }
].find(s => s.marks > 90);
console.log(topStudent);

// 30) Total sum of array


let total = [200, 150, 300, 100].reduce((sum, val) => sum + val, 0);
console.log(total); // 750

// 31) Return usernames only


let users = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" }
];
let usernames = users.map(user => user.username);
console.log(usernames);

// 32) Return only odd numbers


let arr2 = [1, 2, 3, 4, 5, 6];
let odds = arr2.filter(num => num % 2 !== 0);
console.log(odds); // [1, 3, 5]

// 33) Count vowels in "javascript"


let str1 = "jAvascript";
let count = 0;
let vowels = "aeiou";

for (let char of str1) {
  if (vowels.includes(char.toLowerCase())) {
    count++;
  }
}

console.log(count); // 3

// 34) Log tasks with status


let tasks = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false }
];
tasks.forEach(t => {
  let status = t.completed ? "Completed" : "Incomplete";
  console.log(`Task: ${t.task} - Status: ${status}`);
});

// 35) Add "status: active" to each employee


let employees = [
  { name: "Ali", role: "Manager" },
  { name: "Zara", role: "Developer" }
];
let updatedEmployees = employees.map(emp => ({ ...emp, status: "active" }));
console.log(updatedEmployees);