let addBtn = document.getElementById("addBtn");
let totalElement = document.getElementById("total");
let expensesDiv = document.getElementById("expenses");

let total = 0;

// Load saved data
window.onload = function () {

    expensesDiv.innerHTML = localStorage.getItem("expenses") || "";

    total = Number(localStorage.getItem("total")) || 0;

    totalElement.textContent = total;
};

addBtn.addEventListener("click", function() {

    let expenseName = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("amount").value);

    if(expenseName === "" || amount === 0){
        alert("Please fill all fields");
        return;
    }

    expensesDiv.innerHTML += `
        <div>
            <h3>${expenseName}</h3>
            <p>₹${amount}</p>
            <button onclick="deleteExpense(this, ${amount})">Delete</button>
        </div>
    `;

    total += amount;

    totalElement.textContent = total;

    localStorage.setItem("expenses", expensesDiv.innerHTML);
    localStorage.setItem("total", total);

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
});

function deleteExpense(button, amount){

    button.parentElement.remove();

    total -= amount;

    totalElement.textContent = total;

    localStorage.setItem("expenses", expensesDiv.innerHTML);
    localStorage.setItem("total", total);
}
