// Select by ID
let heading = document.getElementById("heading");

// Select by Class
let paragraphs = document.getElementsByClassName("text");

// Select by Tag Name
let button = document.getElementsByTagName("button");

// Select using Query Selector
let firstParagraph = document.querySelector(".text");

// Select using Query Selector All
let allParagraphs = document.querySelectorAll(".text");

console.log("hello prem "+heading);
console.log("Hi prem "+paragraphs);
console.log("Hello Gpcet "+button);
console.log("Hi students "+firstParagraph);
console.log("Hello guys "+ allParagraphs);