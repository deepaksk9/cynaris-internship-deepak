
/*
 * Week 2 - Day 3: JavaScript Fundamentals
 * Arrow functions, default parameters, rest/spread,
 * Promises, async/await, fetch, and error handling.
 */

// 1. Basic arrow function
const greet = (name = "Developer") => `Hello, ${name}!`;

// 2. Add two numbers
const add = (a = 0, b = 0) => a + b;

// 3. Check whether a number is even
const isEven = (number) => number % 2 === 0;

// 4. Find the largest number
const findMax = (...numbers) => Math.max(...numbers);

// 5. Calculate the average
const average = (...numbers) =>
  numbers.length
    ? numbers.reduce((sum, number) => sum + number, 0) / numbers.length
    : 0;

// 6. Convert text to uppercase
const toUpperCase = (text = "") => text.toUpperCase();

// 7. Return unique array values using spread
const uniqueValues = (items = []) => [...new Set(items)];

// 8. Create a user object
const createUser = (name, role = "Intern") => ({
  name,
  role,
  active: true
});

// 9. Promise-based asynchronous operation
const wait = (milliseconds = 500) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

// 10. Async function with try/catch and fetch
async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();
    console.log("Fetched posts:", posts);
    return posts;
  } catch (error) {
    console.error("Unable to fetch posts:", error.message);
    return [];
  }
}

// Test the functions
async function main() {
  console.log(greet("Intern"));
  console.log("Addition:", add(10, 20));
  console.log("Is 8 even?", isEven(8));
  console.log("Maximum:", findMax(5, 12, 3, 20));
  console.log("Average:", average(10, 20, 30));
  console.log("Uppercase:", toUpperCase("javascript"));
  console.log("Unique:", uniqueValues([1, 2, 2, 3, 3]));
  console.log("User:", createUser("Deepak"));

  await wait(500);
  console.log("Promise completed.");

  await fetchPosts();
}

main();
