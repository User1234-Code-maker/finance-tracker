let expenses = [
    {
        amount: 500,
        category: "food"
    },
    {
        amount: 300,
        category: "transport"
    },
    {
        amount: 1200,
        category: "rent"
    },
    {
        amount: 700,
        category: "food"
    }
];

let foodExpenses = expenses.filter(expense => expense.category === "food")
console.log(foodExpenses);

let amounts = expenses.map(expense => expense.amount);
console.log(amounts);

let total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
console.log(total);