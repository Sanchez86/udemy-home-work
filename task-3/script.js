'use strict';
let money, time, month = 30;
    
function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();    
    
let appData = {
    moneyData : money,     //бюджет
    timeData : time,       //данные времени
    expenses : {},         //объект с обязательными расходами         
    optionalExpenses : {}, //объект с необязательными расходами
    income : [],           // массив данных с доп. доходом
    savings : true,
};

function chooseExpenses() {
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
}
chooseExpenses();

let result;
function detectDayBudget(){
    result = (appData.moneyData / month).toFixed();
    alert('бюджет на 1 день составляет ' + result);
}
detectDayBudget();

function detectLevel() {
    if(result < 100){
        console.log('Минимальный уровень достатка');
    } else if(result > 100 && result < 2000){
        console.log('Средний уровень достатка');
    }else if(result > 2000){
        console.log('Высокий уровень достатка');
    }else{
        console.log('произошла ошибка');
    }
}
detectLevel();

function checkSavings(){
    if(appData.savings){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего дипозита составляет: " + appData.monthIncome + " в месяц");    
    }
}
checkSavings();

function chooseOptExpenses(){
    for(let i=1; i<4; i++){
        let question = +prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = question;
    }
}
chooseOptExpenses();