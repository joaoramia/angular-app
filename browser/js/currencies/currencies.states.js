'use strict';

app.config(function($stateProvider){
	$stateProvider.state('currencies', {
		url: '/currencies',
		templateUrl: '/js/currencies/templates/currencies-list.html',
		controller: 'CurrenciesCtrl',
	});
});