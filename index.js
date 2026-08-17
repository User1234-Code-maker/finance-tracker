let balance = 750;
let expenses = [250, 100, 150];

for(let i = 0; i < expenses.length; i++) {

if(expenses[i] <= balance) {
    balance -= expenses[i];
    console.log("Потрачено:" , expenses[i]);   
    console.log("Осталось:" , balance);
} else {
    console.log("не хватает"); 
    console.log("Осталось:" , balance);
    }
}