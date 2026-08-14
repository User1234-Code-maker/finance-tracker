let balance = 1000;

const expenses = [
    { name: "coffee", price: 100 },
    { name: "tea", price: 200 },
    { name: "bread", price: 300 }
];

for (let i = 0; i < expenses.length; i++) {
    balance -= expenses[i].price;
};

console.log(balance);