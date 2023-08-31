
let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Дата в формате YYYY-MM-DD");

appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
let question1_1 = prompt ("Введите обязательную статью расходов в этом месяце"),
    question1_2 = prompt ("Во сколько обойдется?"),
    question2_1 = prompt ("Введите обязательную статью расходов в этом месяце"),
    question2_2 = prompt ("Во сколько обойдется?");
appData.expenses.question1_1 = question1_2;
appData.expenses.question2_1 = question2_2;
// console.log(appData.expenses);
alert(appData.money / 30);