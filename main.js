
let money = +prompt("Ваш бюджет на месяц"),
    time = prompt("Дата в формате YYYY-MM-DD");

appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
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
appData.moneyPerDay = appData.budjet / 30;

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
