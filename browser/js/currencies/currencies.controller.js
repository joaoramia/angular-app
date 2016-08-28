'use strict';

app.controller('CurrenciesCtrl', function ($scope) {

	//the below values are hypothetical and dollarAmount values are hard coded using currency exchange as of August 28, 2016
	$scope.allCurrencies = [
		{
			type: 'USD',
			amount: 1000,
			dollarAmount: 1000
		},
		{
			type: 'EUR',
			amount: 2000,
			dollarAmount: 2239
		},
		{
			type: 'BRL',
			amount: 2000,
			dollarAmount: 613
		}
	];

	//the below function could have been in a factory in case the array values were provided by a server-side data base. For purposes of this exercise and simplicity, it was made inside the controller.
	$scope.getTotalDollarAmount = function(){
		let result = 0;
		$scope.allCurrencies.forEach((cur) => result += cur.dollarAmount);
		return Number(result);
	}

});