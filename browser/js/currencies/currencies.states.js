'use strict';

app.config(function($stateProvider){
	$stateProvider.state('currencies', {
		url: '/currencies',
		templateUrl: '/js/currencies/templates/currencies-list.html',
		controller: 'CurrenciesCtrl',
	});

	//the currency ID here will be its index in the currencies array for simplicity purposes
	$stateProvider.state('currency', {
		url: '/currencies/:id/:goal?',
		templateUrl: '/js/currencies/templates/currency.html',
		controller: 'CurrenciesCtrl'
	});
});