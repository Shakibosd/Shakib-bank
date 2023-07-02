
/*Login Button Event Handler*/
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const TranscctionArea = document.getElementById("Transaction-Area");
    TranscctionArea.style.display="block";
});  
/*Login Button Event Handler*/



/*Deposit Button Event Handler*/
 const depositBtn = document.getElementById("addDeposit");
 depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
 });

/*Deposit Button Event Handler*/




