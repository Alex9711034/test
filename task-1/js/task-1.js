'use strict';

let appData = {
    incom: '',       // бюджет
    timeDate: '',
    expenses: {},          // обязат. расходы
    optionalExpenses: {},  // необяз. расходы
    chooseIncome: [],            // доп. доход
    savings: true,
    chooseExpenses: function() {        
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
    },
    detectDayBudget: function() {
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
    // Number.isInteger - определяет, является ли переданное значение
    // целым числом. Number - переводит в число. Math.round - отсек.
    // дробь
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

// (1) Получить кнопку "Начать расчет" через id
// (2) Получить все блоки в правой части программы через классы
// (которые имеют класс название-value, начиная с и заканчивая)
// (3) Получить поля(input) c обязательными расходами через класс.
// (class=”expenses-item”)
// (4) Получить кнопки “Утвердить” и “Рассчитать” через Tag, 
// каждую в своей переменной. btn[0] - утвердить
// (5) Получить поля для ввода необязательных расходов
// (optionalexpenses-item) при помощи querySelectorAll
// (6) Получить оставшиеся поля через querySelector 
// (статьи возможного дохода, чекбокс, сумма, процент, 
// год, месяц, день)


let start = document.getElementById('start'),
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




    