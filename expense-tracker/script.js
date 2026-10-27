const form = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const dateInput = document.getElementById("date");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");
const transactionList = document.getElementById("transaction-list");
const emptyState = document.getElementById("empty-state");
const clearAllButton = document.getElementById("clear-all");

let transactions = [];

// Restore saved transactions from localStorage.
try {
  const saved = JSON.parse(
    localStorage.getItem("pennywise-transactions") || "[]"
  );

  if (
    Array.isArray(saved) &&
    saved.every(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.description === "string" &&
        Number.isFinite(item.amount) &&
        item.amount > 0 &&
        ["income", "expense"].includes(item.type) &&
        typeof item.date === "string"
    )
  ) {
    transactions = saved;
  }
} catch (error) {
  console.error("Could not load saved transactions:", error);
}

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

dateInput.value = getToday();

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(amount);
}

function saveTransactions() {
  try {
    localStorage.setItem(
      "pennywise-transactions",
      JSON.stringify(transactions)
    );
    return true;
  } catch (error) {
    console.error("Could not save transactions:", error);
    alert("Unable to save data. Please check your browser storage.");
    return false;
  }
}

function updateSummary() {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  balanceElement.textContent = formatCurrency(income - expenses);
  incomeElement.textContent = formatCurrency(income);
  expensesElement.textContent = formatCurrency(expenses);
}

function renderTransactions() {
  transactionList.replaceChildren();
  emptyState.hidden = transactions.length > 0;

  const sortedTransactions = [...transactions].sort((a, b) =>
    b.date.localeCompare(a.date) || b.id.localeCompare(a.id)
  );

  sortedTransactions.forEach((transaction) => {
    const item = document.createElement("li");
    item.className = "transaction";

    const info = document.createElement("div");
    info.className = "transaction-info";

    const description = document.createElement("strong");
    description.textContent = transaction.description;

    const date = document.createElement("small");
    date.textContent = transaction.date;

    info.append(description, date);

    const right = document.createElement("div");
    right.className = "transaction-right";

    const amount = document.createElement("span");
    amount.className = `amount ${transaction.type}`;

    const sign = transaction.type === "income" ? "+" : "−";
    amount.textContent = `${sign}${formatCurrency(transaction.amount)}`;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute(
      "aria-label",
      `Delete transaction: ${transaction.description}`
    );
    deleteButton.dataset.id = transaction.id;

    right.append(amount, deleteButton);
    item.append(info, right);
    transactionList.appendChild(item);
  });

  updateSummary();
}

// Add a transaction.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = Number(amountInput.value);
  const type = typeInput.value;
  const date = dateInput.value;

  if (
    !description ||
    !Number.isFinite(amount) ||
    amount <= 0 ||
    !["income", "expense"].includes(type) ||
    !date
  ) {
    alert("Please enter a valid description, amount, type, and date.");
    return;
  }

  const transaction = {
    id: crypto.randomUUID(),
    description,
    amount,
    type,
    date
  };

  transactions.push(transaction);

  if (!saveTransactions()) {
    transactions.pop();
    return;
  }

  renderTransactions();
  form.reset();
  dateInput.value = getToday();
  descriptionInput.focus();
});

// Delete one transaction using event delegation.
transactionList.addEventListener("click", (event) => {
  const button = event.target.closest(".delete-button");

  if (!button) return;

  const previousTransactions = transactions;
  transactions = transactions.filter(
    (item) => item.id !== button.dataset.id
  );

  if (!saveTransactions()) {
    transactions = previousTransactions;
    return;
  }

  renderTransactions();
});

// Delete all transactions.
clearAllButton.addEventListener("click", () => {
  if (transactions.length === 0) return;

  const confirmed = confirm(
    "Delete all transactions? This cannot be undone."
  );

  if (!confirmed) return;

  const previousTransactions = transactions;
  transactions = [];

  if (!saveTransactions()) {
    transactions = previousTransactions;
    return;
  }

  renderTransactions();
});

// Show saved transactions on page load.
renderTransactions();