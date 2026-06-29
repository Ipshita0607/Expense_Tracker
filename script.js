const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");
const count = document.getElementById("count");

let totalAmount = 0;
let totalItems = 0;

// Add Expense
function addExpense() {
    const expenseName = nameInput.value.trim();
    const expenseAmount = Number(amountInput.value);

    if (expenseName === "" || expenseAmount <= 0) {
        alert("Please enter valid details!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="expense-info">
            <span>${expenseName}</span>
            <span class="amount">₹${expenseAmount}</span>
        </div>

        <button class="delete">
            <i class="fa-solid fa-trash"></i> Delete
        </button>
    `;

    // Increase totals
    totalAmount += expenseAmount;
    total.textContent = totalAmount;

    totalItems++;
    count.textContent = totalItems;

    // Delete Expense
    li.querySelector(".delete").addEventListener("click", function () {

        totalAmount -= expenseAmount;
        total.textContent = totalAmount;

        totalItems--;
        count.textContent = totalItems;

        li.remove();
    });

    // Add to list
    expenseList.appendChild(li);

    // Clear inputs
    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
}

// Button Click
addBtn.addEventListener("click", addExpense);

// Press Enter to Add Expense
nameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addExpense();
    }
});

amountInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addExpense();
    }
});
