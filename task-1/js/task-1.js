'use strict';

let appData = {
    incom: '',       // бюджет
    timeDate: '',
    expenses: {},          // обязат. расходы
    optionalExpenses: {},  // необяз. расходы
    chooseIncome: [],            // доп. доход
    savings: false,

};

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = 
        document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = 
        document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = 
    document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = 
    document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = 
    document.getElementsByClassName('yearsavings-value')[0],
    yearValue = document.querySelectorAll('.year-value')[0],
    monthValue = document.querySelectorAll('.month-value')[0],
    dayValue = document.querySelectorAll('.day-value')[0],
    expensesItem = document.querySelectorAll('.expenses-item'),
    btnAll = document.getElementsByTagName('button'),
    expensesItemBtn = btnAll[0],
    optionalExpensesBtn = btnAll[1],
    countBudgetBtn = btnAll[2],
    buttonStart = btnAll[3],
    optionalExpensesItem = 
        document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    sum = 0;

    startBtn.addEventListener('click', function() { 

    appData.timeDate = prompt("Введите дату в формате DD-MM-YYYY", '');
    appData.incom = +prompt("Ваш бюджет на месяц?", '');

     while (isNaN(appData.incom) || appData.incom == "" || 
                            appData.incom == null) {
     appData.incom = +prompt("Ваш бюджет на месяц?", '');
     }

    let re = /^(?:(?:31(-)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(-)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(-)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

     while ( !re.test(appData.timeDate) ) { 
     appData.timeDate = prompt("Введите дату в формате DD-MM-YYYY",'');
    }

    budgetValue.textContent = appData.incom.toFixed();
    // 11-06-2020
    let tempUpDate = 
       appData.timeDate.replace(/^(..)(.)(..)(.)(....)/,'$5$2$3$4$1'); // меняет местами символы в строке
    
    yearValue.value = 
        new Date(Date.parse(tempUpDate)).getFullYear(); // здесь работаем с value потому как input <input class="year-value"> а не с textContent, новый объект Data парсит и вытаскивает полный год
    monthValue.value = 
        new Date(Date.parse(tempUpDate)).getMonth() + 1; // счет месяца начинается с 0 (январь и т.д.) поэтому + 1
    dayValue.value = 
    appData.timeDate.replace(/^(..)......../,'$1');

});

expensesItemBtn.addEventListener('click', function() {

        let a = expensesItem[0].value,
            b = expensesItem[1].value;
   
    if ((typeof(a) === 'string'  && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != ''
        && a.length < 50 )) {
    appData.expenses[a] = b;
    sum += +b;    
    }
    expensesValue.textContent = sum;

    expensesItem.forEach(function (item) {
      item.value = "";
    });

});

optionalExpensesBtn.addEventListener('click', function() {
    
    for (let i = 0; i < optionalExpensesItem.length; i++) {
    
        let opt = optionalExpensesItem[i].value;

        if ((typeof(opt)) === 'string' && (typeof(opt)) != null 
            && opt != '' && opt.length < 50 ) {
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += 
            appData.optionalExpenses[i] + ' '; 
        }
    }

    optionalExpensesItem.forEach(function (item) {
        item.value = "";
    });

});

countBudgetBtn.addEventListener('click', function() {

    appData.moneyPerDay = (appData.incom / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay >= 1 && appData.moneyPerDay <= 700) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay >= 701 
        && appData.moneyPerDay <= 3000) {
                    levelValue.textContent = "Средний уровень достатка";   
                }
    else if (appData.moneyPerDay > 3000) {
        levelValue.textContent = "Высокий уровень достатка";

    } else {
        dayBudgetValue.textContent = "> Начать расчет <";
        appData.moneyPerDay = "";        
    }

});

chooseIncome.addEventListener('input', function() {
   
    let items = chooseIncome.value;
    appData.chooseIncome = items.split(',');
    incomeValue.textContent = appData.chooseIncome;

});

checkSavings.addEventListener('click', function() {

    if (appData.savings == false) {
    appData.savings = true;
    } else {
    appData.savings = false;
    }
    
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
            
        appData.monthIncom = sum/100/12*percent;
        appData.yearIncom = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncom.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncom.toFixed(1);
    }

});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncom = sum/100/12*percent;
    appData.yearIncom = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncom.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncom.toFixed(1);
    }

});