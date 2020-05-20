'use strict';

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    incom: money,       // бюджет
    timeDate: time,
    expenses: {},          // обязат. расходы
    optionalExpenses: {},  // необяз. расходы
    income: [],            // доп. доход
    savings: false,
};

let expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
let expenseItemSum = +prompt("Во сколько обойдется?");
appData.expenses[expenseItem] = expenseItemSum;
console.log(appData.expenses);

expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
expenseItemSum = +prompt("Во сколько обойдется?");
appData.expenses[expenseItem] = expenseItemSum;
console.log(appData.expenses);

alert("Ваш расчетный заработок в день: " + (money / 30));