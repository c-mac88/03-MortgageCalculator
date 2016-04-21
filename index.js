
$('button').click(function (){
	var numberOfPayments = $('#loanTerm').val() * $('#period').val();
	var monthlyInterestRate = ($('#interestRate').val() / 100) / $('#period').val();
	var compoundInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient = (monthlyInterestRate * compoundInterestRate) / (compoundInterestRate - 1);
	var monthlyPayment = $('#loanBalance').val() * interestQuotient;
	$('#message').text("Your monthly payment is: $" + (Math.round(100 * (monthlyPayment)) / 100).toFixed(2));
});



