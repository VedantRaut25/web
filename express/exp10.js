// app.js
const express = require('express');
const app = express();

// ---------- CALLBACK EXAMPLE ----------
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("vedant", () => {
  console.log("Callback executed after greeting!");
});

// ---------- EVENT LOOP EXAMPLE ----------
console.log("Start");
setTimeout(() => {
  console.log("This runs after 2 seconds (Event Loop)");
}, 2000);
console.log("End");

// ---------- EXPRESS APP ----------
app.get('/', (req, res) => {
  res.send("Welcome to my Express App!");
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
