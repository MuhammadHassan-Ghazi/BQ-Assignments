//  1. Unique Words Counter

const text = "JavaScript is great and JavaScript is powerful";

function countUniqueWords(str) {
  const words = str.toLowerCase().split(" ");
  return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

console.log(countUniqueWords(text));
// { javascript: 2, is: 2, great: 1, and: 1, powerful: 1 }

//  2. Group Students by Class

const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];

const grouped = students.reduce((acc, student) => {
  const cls = student.class;
  acc[cls] = acc[cls] || [];
  acc[cls].push(student.name);
  return acc;
}, {});

console.log(grouped);
// { '10th': ['Ali', 'Ahmed'], '9th': ['Sara', 'Zara'] }

//  3. Filter Products by Price Range

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];

function filterByPrice(min, max) {
  return products.filter(p => p.price >= min && p.price <= max);
}

console.log(filterByPrice(100, 600));
// [{ name: "Phone", price: 500 }]

//  4. Check Palindrome Using Function

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true

//  Flatten Array

const nestedArray = [1, [2, [3, 4]], 5];

function flatten(arr) {
  return arr.flat(Infinity); 
}

console.log(flatten(nestedArray)); // [1, 2, 3, 4, 5]

// 6. Total Salary Calculation (Using Reduce)

const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary); // 3700

//  10. Sum of All Even Numbers in Nested Array

const data = [1, 2, [4, 5, [6, 8]], 10];

function sumEven(arr) {
  return arr.flat(Infinity)
            .filter(n => n % 2 === 0)
            .reduce((a, b) => a + b, 0);
}

console.log(sumEven(data)); // 30

// 11. Rest Operator in Function

function average(...nums) {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

console.log(average(10, 20, 30)); // 20

// 12. Frequency Count with Spread

const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequency = arr.reduce((acc, fruit) => {
  return { ...acc, [fruit]: (acc[fruit] || 0) + 1 };
}, {});

console.log(frequency);
// { apple: 3, banana: 2, orange: 1 }

//13. Toggle Status

const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];

function toggleTaskStatus(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}

console.log(toggleTaskStatus(tasks, 1));
// [{ id: 1, name: "Code", done: true }, { id: 2, name: "Eat", done: true }]

//14. Sort by Name Length

const names = ["Ali", "Zara", "Ali", "Ahmed","Hassan", "Usman"];
const sorted = [...names].sort((a, b) => a.length - b.length);
console.log(sorted); // ['Ali', 'Ali', 'Zara', 'Ahmed', 'Usman', 'Hassan']