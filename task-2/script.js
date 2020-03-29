'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    month = 30;
    

let appData = {
    moneyData : money,     //бюджет
    timeData : time,       //данные времени
    expenses : {},         //объект с обязательными расходами         
    optionalExpenses : {}, //объект с необязательными расходами
    income : [],           // массив данных с доп. доходом
    savings : false,
};
//appData.expenses.firstQestion = secondQuestion;

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

let result = appData.moneyData / month;
alert('бюджет на 1 день составляет ' + result);


/* пример с использованием цикла while
let i = 0;
while( i < 2){
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
    i++;    
}
*,
/* пример с использованием цикла do while
let i = 1;
do{
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
        i = 0; // запускаю цикл занова
    }
    i++;    
}while( i < 2);
*/