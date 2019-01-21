function Bank(full, initial, balance) {
  this.fullName = full;
  this.initialDeposit = initial;
  this.balance= balance;
  
}

Bank.prototype.deposit = function(deposit) {
  console.log(deposit);
  return this.balance += deposit;
}

Bank.prototype.withdrawalMoney = function(withdrawalMoney) {
  return this.balance -= withdrawalMoney;
}

$(document).ready(function() {
  $("form#full-name").submit(function(event) {
    event.preventDefault();

  var inputtedFullName = $("input#full-name").val();
  var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());

  depositM= inputtedInitialDeposit;

  var FullNameInitialDeposit = new Bank(inputtedFullName, inputtedInitialDeposit, depositM);
  
  $("full-name").remove();

  $("ul#transaction").append("<li>" + FullNameInitialDeposit.fullName+"</li>"+"<li>"+FullNameInitialDeposit.initialDeposit+"</li>");
 

  $("input#full-name").val("");
  $("input#initial-deposit").val("");

  $("form#deposit").submit(function(event) {
    event.preventDefault();
  
    var inputtedDepositMoney= parseInt($("input#deposit").val());

    console.log(inputtedDepositMoney);
  
    FullNameInitialDeposit.deposit(inputtedDepositMoney);

    $("deposit").remove();
  
    $("ul#depositmoney").append("<li>" +  FullNameInitialDeposit.balance +"</li>");
    
  
  
  })

  $("form#withdrawalmoney").submit(function(event) {
    event.preventDefault();
  
    var inputtedwithdrawalMoney= parseInt($("input#withdrawalmoney").val());

    console.log(inputtedwithdrawalMoney);
  
    FullNameInitialDeposit.withdrawalMoney(inputtedwithdrawalMoney);
  
    $("ul#withdrawalmoney").append("<li>" +  FullNameInitialDeposit.balance +"</li>");
   
  
  
  })
 
});

});
 


