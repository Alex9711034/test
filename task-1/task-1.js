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

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную ст. расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");

    if ((typeof(a)) === 'string' && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != ''
        && a.length < 50 ) {
    appData.expenses[a] = b;
    console.log(appData.expenses);
    } else {
        --i;
        continue;
    }
}

appData.moneyPerDay = appData.incom / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 700) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay >= 701 
            && appData.moneyPerDay <= 3000) {
             console.log("Средний уровень достатка");   
            }
  else if (appData.moneyPerDay > 3000) {
      console.log("Высокий уровень достатка");
  } else {
      console.log("Произошла ошибка");
  }
