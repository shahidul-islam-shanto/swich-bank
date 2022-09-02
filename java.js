//login button event handler
const loginBtn = document.getElementById('login').addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = "none";
    //transaction area
    const transact = document.getElementById('transaction');
    transact.style.display = "block";
})

//deposit button event handler
const depositBtn = document.getElementById('addDeposit').addEventListener('click', function () {
    const depositNum = updateValue("depositAmount");
    console.log(depositNum);
    updateDeposit("currentDeposit", depositNum);
    updateDeposit("currentBalance", depositNum);
    document.getElementById('depositAmount').value = "";

    //comment
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNum = parseFloat(depositAmount);
    // const currentDep = document.getElementById('currentDeposit').innerText;
    // const currentDepNum = parseFloat(currentDep);
    // const totalDeposit = depositNum + currentDepNum;
    // document.getElementById('currentDeposit').innerText = totalDeposit;
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalNum = parseFloat(currentBalance);
    // const totalBalance = depositNum + currentBalNum;
    // document.getElementById("currentBalance").innerText = totalBalance;   
})

const addWithdraw = document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawAmountNum = updateValue("withdrawAmount");  
    updateDeposit('currentWithdraw', withdrawAmountNum);
    updateDeposit("currentBalance", -1 * withdrawAmountNum);
    document.getElementById('withdrawAmount').value = "";
})

function updateValue(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawAmountNum = parseFloat(withdrawAmount);
    return withdrawAmountNum;
}

function updateDeposit(id, depositNum){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalNum = parseFloat(currentBalance);
    const totalBalance = depositNum + currentBalNum;
    document.getElementById(id).innerText = totalBalance;
}







