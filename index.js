let expenses = [
    {
        amount: 500,
        category: "Food",
    },
    {
        amount: 300,
        category: "transport",
    },
    {
        amount: 1200,
        category: "rent",
    }
];

let total = 0;
let balance = 5000;
for (let expense of expenses) {
    total += expense.amount;
    balance -= expense.amount;
    console.log(expense.amount);
    console.log(expense.category);
    console.log(total);
    console.log(balance);
}

if (balance >= 0) {
    console.log("Денег достаточно");
} else { 
    console.log("Денег не достаточно");
}

function calculateTotal(expenses) {
    let total = 0;
    for (let expense of expenses) {
        total += expense.amount;
    }
    return total;
}

calculateTotal(expenses);
console.log(calculateTotal(expenses));

function getBalanceStatus(balance) {
    if (balance >= 0) {
        return "Денег достаточно";
    } else {
        return "Денег не достаточно"
    }
}

getBalanceStatus(balance);
console.log(getBalanceStatus(balance));