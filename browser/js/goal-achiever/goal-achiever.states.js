'use strict';

app.config(function($stateProvider){
	$stateProvider.state('goal-achiever', {
		url: '/goal-achiever',
		templateUrl: '/js/goal-achiever/templates/goal-achiever.html',
		controller: 'GoalAchieverCtrl',
	});
});