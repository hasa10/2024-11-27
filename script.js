let totalIncome = 0;
let totalExpenses = 0;

document.getElementById('addIncome').addEventListener('click', function() {
    const incomeInput = document.getElementById('incomeInput').value;
    totalIncome += parseFloat(incomeInput);
    document.getElementById('totalIncome').innerText = totalIncome;
    document.getElementById('balance').innerText = totalIncome - totalExpenses;
    document.getElementById('incomeInput').value = ''; // Clear input
});

document.getElementById('addExpense').addEventListener('click', function() {
    const expenseInput = document.getElementById('expenseInput').value;
    totalExpenses += parseFloat(expenseInput);
    document.getElementById('totalExpenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = totalIncome - totalExpenses;
    document.getElementById('expenseInput').value = ''; // Clear input
});
