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
    saving: true,
    chooseExpenses: function(){
        //Ввод данных в объект с обязательными расходами
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
    },
    detectDayBudget: function(){
        //Расчет дневного бюджета
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert(appData.moneyPerDay);
    },

    detectLevel: function(){
        //Уровень достатка
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
    
    },

    checkSavings: function(){
        //метод расчета прибыли вложении накоплений под процент
        if (appData.saving){
            let save = +prompt("Введите сумму накоплений");
            let percent = prompt("Под какой процент вкладывать?");
    
            appData.monthIncome = save * percent / 100 / 12;
    
            alert("Прибыль в месяц составит: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function(){
        //Ввод данных в объект с необязательными расходами
        for (let i = 1; i <= 3; i++){
            let optExpense = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optExpense;
        }
    },

    chooseIncome: function(){
        //Ввод дополнительного заработка в массив
        let inc = prompt("Введите через запятую виды дополнительного заработка", "");
        while(typeof(inc) != "string" || inc == "" || inc == null){
            inc = prompt("Введите через запятую виды дополнительного заработка", "");
        }
        appData.income = inc.split(", ");
        console.log("Способы доп. заработка: ");
        let counter = 1;
        appData.income.forEach(function(item){
            console.log(counter + ". " + item);
            counter++;
        })
    },

    allData: function(){
        console.log("Наша программа включает в себя данные: ");
        for(let item in appData){
            console.log(item);
        }
    }

};






