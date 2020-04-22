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

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
    
function start(){
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
    appData.budget = money;
    budgetValue.textContent = money.toFixed(); //вывожу сумму бютжета и округляю её с помощью метода toFixed()
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
}
startBtn.addEventListener('click', function(){
    start();
    if(appData.budget != 0){
        expensesBtn.disabled = false;
        optionalExpensesBtn.disabled = false;
        countBtn.disabled = false;
    }
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for(let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,   // получаю в цикле с нулевого инпута его значение (в первой итерации) 
            b = expensesItem[++i].value; // получаю в цикле с первого инпута его значение (в первой итерации) 
        if( (typeof(a)) != null && 
            (typeof(b)) != null && 
            a != '' && b != '' &&
            a.length < 50){ // проверяю на правильность введённых данных
            appData.expenses[a] = b; // заполняю обьект данными зачем-то 
            sum += +b;
        }else{
            alert('Вы не корректно ввели данные. Попробуйте ещё раз');
            i = i - 1; // запускаю цикл занова
        }    
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    let result = 0;

    for(let i=0; i<optionalExpensesItem.length; i++){
        let sum = +optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = sum;
        //result += sum;
        optionalExpensesValue.textContent += appData.optionalExpenses[i]+' ';
    }
    //optionalExpensesValue.textContent = result;
});
    
countBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent)/ 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100){
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = 'Средний уровень достатка';
        }else if(appData.moneyPerDay > 2000){
            levelValue.textContent = 'Высокий уровень достатка';
        }else{
            levelValue.textContent = 'произошла ошибка';
        }
    }else{
        levelValue.textContent = 'произошла ошибка';
    }
});

incomeItem.addEventListener('input', function(event){
    appData.income = event.target.value.split(', ');
    incomeValue.textContent = appData.income;
});

percentValue.disabled = true;
sumValue.disabled = true;
checkSavings.addEventListener('click', function(){
    if(appData.savings == false){
        appData.savings = true;
        percentValue.disabled = false;
        sumValue.disabled = false;
    }else{
        appData.savings = false;
        percentValue.disabled = true;
        sumValue.disabled = true;   
    }
});

function countPercent(){
    if(appData.savings == true){
        let summa = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = summa/100/12*percent;
        appData.yearIncome = summa/100*percent;
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
}
sumValue.addEventListener('input', function(){
    countPercent();
});
percentValue.addEventListener('input', function(){
    countPercent();
});


let appData = {
    budget : money,     //бюджет
    timeData : time,       //данные времени
    expenses : {},         //объект с обязательными расходами         
    optionalExpenses : {}, //объект с необязательными расходами
    income : [],           // массив данных с доп. доходом
    savings : false,
};