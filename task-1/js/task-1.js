'use strict';

let appData = {
    incom: '',       // бюджет
    timeDate: '',
    expenses: {},          // обязат. расходы
    optionalExpenses: {},  // необяз. расходы
    chooseIncome: [],            // доп. доход
    savings: true,
    chooseExpenses: function() {        
        
    },
    detectDayBudget: function() {
 
        // toFixed менят значение на строковое
        appData.moneyPerDay = (appData.incom / 30).toFixed(); 
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Сумма накоплений?"),
                persent = +prompt("Под какой процент?");   
            appData.monthIncome = save / 100 / 12 * persent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
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
    },

    ChooseIncome: function() {
        let a = +prompt("Сколько статей доп. дохода?", "");

        for (let i = 0; i < a; i++) {
           
            let ans = prompt("Какие статьи доп. дохода?", "");
            
            if ( (typeof(ans)) === 'string'  
            && (typeof(ans)) != null 
            && ans != '' && !Number.isInteger(Math.round(Number(ans))) ) {
    // Number.isInteger - определяет, является ли переданное значение целым числом. Number - переводит в число. Math.round - отсек.дробь
                appData.chooseIncome[i] = ans;
            } else {
                --i;
                continue;
            }
        }
    appData.chooseIncome.sort();    
    appData.chooseIncome.forEach(function(item,i) {
        console.log((i+1) + ' : ' + item);
    });

    },
    database: function() {
        console.log('\nНаша программа включает в себя данные:\n');
        for (let key in appData) {   // покажет ключи
            console.log( key + ' => ' + appData[key] );
        }        
    }
};


let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = 
        document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = 
        document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = 
    document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = 
    document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = 
    document.getElementsByClassName('yearsavings-value')[0],
    //timeData = document.querySelectorAll('.time-data')[0],
    yearValue = document.querySelectorAll('.year-value'),
    monthValue = document.querySelectorAll('.month-value'),
    dayValue = document.querySelectorAll('.day-value'),


    resultTable = document.querySelectorAll('.result-table'),
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
    
    yearValue[0].value = 
        new Date(Date.parse(tempUpDate)).getFullYear(); // здесь работаем с value потому как input <input class="year-value"> а не с textContent, новый объект Data парсит и вытаскивает полный год
    monthValue[0].value = 
        new Date(Date.parse(tempUpDate)).getMonth() + 1; // счет месяца начинается с 0 (январь и т.д.) поэтому + 1
    dayValue[0].value = 
        appData.timeDate.replace(/^(..)......../,'$1');

});

expensesItemBtn.addEventListener('click', function() {

        let a = expensesItem[0].value,
            b = expensesItem[1].value;
   
    if ((typeof(a) === 'string'  && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != ''
        && a.length < 50 )) {
    appData.expenses[a] = b;
    // console.log(appData.expenses[i]);
    sum += +b;    
    }
    expensesValue[0].textContent = sum;

    expensesItem.forEach(function (item) {
      item.value = "";
    });

});

