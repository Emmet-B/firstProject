let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц");
    time = prompt("Дата в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц");
    }
}
start();

appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

function chooseExpenses(){
    let i = 0;
    while (i < 2){
        let expensesItem = prompt ("Введите обязательную статью расходов в этом месяце"),
            cost = +prompt ("Во сколько обойдется?");
        if(typeof(expensesItem) === "string" && typeof(expensesItem) != null && typeof(cost) != 0 &&
        expensesItem != "" && cost != "" && expensesItem.length <= 50){

            appData.expenses[expensesItem] = cost;  
            i++;

        }else{
            continue;
        }
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert(appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень дохода");  
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень дохода");
    }else if(appData.moneyPerDay >= 2000){
        console.log("Высокий уровень достатка")
    }else{
        console.log("Error")
    }
    console.log(appData.expenses);
}

detectLevel();


//функция расчета прибыли вложении накоплений под процент
function checkSavings(){
    if (appData.saving){
        let save = +prompt("Введите сумму накоплений");
        let percent = prompt("Под какой процент вкладывать?");

        appData.monthIncome = save * percent / 100 / 12;

        alert("Прибыль в месяц составит: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses(){
    for (let i = 1; i <= 3; i++){
        let optExpense = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = optExpense;
    }
}
chooseOptExpenses();