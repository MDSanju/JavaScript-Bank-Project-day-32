// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function() {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;


    // clear the deposit input field
    depositInput.value = '';



    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(newDepositAmount);
    balanceTotal.innerText = totalBalance;
});






// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;


    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawTotal.innerText;

    const newWithdrawBalance = parseFloat(withdrawAmountText) + parseFloat(previousWithdraw);
    withdrawTotal.innerText = newWithdrawBalance;


    // clear withdraw input
    withdrawInput.value = '';



    // update withdraw balance
    const decreaseBalance = document.getElementById('balance-total');
    const gotBalance = decreaseBalance.innerText;
    const newGetBalance = parseFloat(gotBalance) - parseFloat(withdrawAmountText);
    decreaseBalance.innerText = newGetBalance;
});