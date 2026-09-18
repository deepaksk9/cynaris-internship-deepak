// Week 1 Day 3 — JavaScript ES6+ Basics

// Product data
const products = [
    { id: 1, name: "Flexbox", category: "CSS", price: 299 },
    { id: 2, name: "CSS Grid", category: "CSS", price: 349 },
    { id: 3, name: "Responsive Design", category: "CSS", price: 399 }
];

// Object destructuring
const { name, category, price } = products[0];

console.log(`Featured: ${name} | ${category} | ₹${price}`);

// filter()
const cssProducts = products.filter(
    ({ category }) => category === "CSS"
);

// map()
const productNames = products.map(
    ({ name }) => name
);

// reduce()
const totalPrice = products.reduce(
    (total, { price }) => total + price,
    0
);

console.log("CSS Products:", cssProducts);
console.log("Product Names:", productNames);
console.log("Total Price:", totalPrice);

// Interactive cards
const cards = document.querySelectorAll("#cards article");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const heading = card.querySelector("h3");

        if (heading) {
            alert(`You selected: ${heading.textContent}`);
        } else {
            alert("You selected a card!");
        }
    });
});

// Navigation interaction
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        console.log(
            `Navigation selected: ${event.currentTarget.textContent}`
        );
    });
});

// Arrow function example
const greetUser = (user) => `Hello, ${user}!`;

console.log(greetUser("Deepak"));