'use strict';


let appData = {
    incom: '',       // бюджет
    timeDate: '',
    expenses: {},          // обязат. расходы
    optionalExpenses: {},  // необяз. расходы
    income: [],            // доп. доход
    savings: true,
};

function detectDayBudget() {

appData.incom = +prompt("Ваш бюджет на месяц?", '');
appData.timeDate = prompt("Введите дату в формате YYYY-MM-DD", '');

while (isNaN(appData.incom) || appData.incom == "" || 
                               appData.incom == null) {
    appData.incom = +prompt("Ваш бюджет на месяц?", '');
        }

let re = /^\d{4}-\d{2}-\d{2}$/;
while ( !re.test(appData.timeDate) ) { 
    appData.timeDate = prompt("Введите дату в формате YYYY-MM-DD",'');
}
// toFixed менят значение на строковое
appData.moneyPerDay = (appData.incom / 30).toFixed(); 
alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {

    if (appData.moneyPerDay <= 700) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 701 
                && appData.moneyPerDay <= 3000) {
                console.log("Средний уровень достатка");   
                }
      else if (appData.moneyPerDay > 3000) {
          console.log("Высокий уровень достатка");
      } else {
          console.log("Произошла ошибка");
      }
}

function chooseOptExpenses() {

    let b = 1;
    for (let i = 0; i < 3; i++) {

        let a = prompt("Введите ст. необязательных расходов");

        if ((typeof(a)) === 'string' && (typeof(a)) != null 
            && a != '' && a.length < 50 ) {
            appData.optionalExpenses[b++] = a;
            console.log(appData.optionalExpenses);
        } else {
        --i;
        continue;
    }
}
}

function chooseExpenses() {

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную ст. расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
   
    if ((typeof(a) === 'string'  && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != ''
        && a.length < 50 )) {
    appData.expenses[a] = b;
    console.log(appData.expenses);
    } else {
        --i;
        continue;
    }
}
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        
        appData.monthIncome = save / 100 / 12 * persent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}

detectDayBudget();
detectLevel();
chooseExpenses();
chooseOptExpenses();
checkSavings();
