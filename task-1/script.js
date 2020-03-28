'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    month = 30,
    firstQestion = prompt('Введите обязательную статью расходов в этом месяце'),
    secondQuestion = prompt('Во сколько обойдется?');

let appData = {
    moneyData : money,     //бюджет
    timeData : time,       //данные времени
    expenses : {},         //объект с обязательными расходами         
    optionalExpenses : {}, //объект с необязательными расходами
    income : [],           // массив данных с доп. доходом
    savings : false,
};
appData.expenses.firstQestion = secondQuestion;


let result = appData.moneyData / month;
alert('бюджет на 1 день составляет ' + result);


// Вопросы к этому заданию
// Сколько типов данных существует в JS? Ответ - в ES6 существует восемь типов данных.

// Как вывести информацию в консоль? Ответ - через console.log();

// Какая функция операторов || и &&? Ответ - это логические операторы сравнения. Возвращают true или false. || это логическое "или". && это логическое "и"