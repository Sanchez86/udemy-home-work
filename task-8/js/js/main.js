'use strict';
let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, month = 30;
    
function start(){
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?');
    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
}
    

startBtn.addEventListener('click', function(){
    start();
});
    
let appData = {
    moneyData : money,     //бюджет
    timeData : time,       //данные времени
    expenses : {},         //объект с обязательными расходами         
    optionalExpenses : {}, //объект с необязательными расходами
    income : [],           // массив данных с доп. доходом
    savings : true,
    chooseExpenses: function (){
        for(let i = 0; i < 2; i++){
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = prompt('Во сколько обойдется?');
            if( //(typeof(a)) === 'string' &&     зачем нужна эта проверка на стрку, если prompt всегда возвращает строку?
                (typeof(a)) != null && 
                (typeof(b)) != null && 
                a != '' && b != '' &&
                a.length < 50){
                appData.expenses[a] = b;
            }else{
                alert('Вы не корректно ввели данные. Попробуйте ещё раз');
                i = -1; // запускаю цикл занова
            }    
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.moneyData / month).toFixed();
        alert('бюджет на 1 день составляет ' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log('Минимальный уровень достатка');
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        }else if(appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        }else{
            console.log('произошла ошибка');
        }
    },
    checkSavings: function(){
        if(appData.savings){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего дипозита составляет: " + appData.monthIncome + " в месяц");    
        }
    },
    chooseOptExpenses: function(){
        for(let i=1; i<4; i++){
            let question = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = question;
        }
    },
    chooseIncome:function(){
        for(let i = 0; i < 1; i++){
            let items = prompt('Что принесёт дополнительный доход? (Перечислете через запятую)','');
            
            // не понимаю смысла проверять на возврат строки. если prompt всегда возвращает строку.
            if(typeof(items) === 'string' && typeof(items) != null && items !== ""){
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё забыли про дополнительный доход?',''));
                appData.income.sort();
            }else{
                alert('Вы не корректно ввели данные. Попробуйте ещё раз');
                i = -1; // запускаю цикл занова
            }    
        }

        // не получилось сделать начала отчёта с еденицы.
        // если во втоом prompt не дописывать дополнительный доход, то скрипт ниже ломается.
        appData.income.forEach(function(elementt, i){
            alert("Способы доп. заработка: "+ (i+1) +" - "+ elementt);
        });
    }
    
    
};

// console.log("Наша программа включает в себя данные:");
// for (let key in appData){
//     console.log(key);
// }


appData.detectDayBudget();
appData.detectLevel();