'use strict';

app.controller('GoalAchieverCtrl', function ($scope) {

	$scope.plans = [
		{
			year: 1,
			gains: 100000
		},
		{
			year: 2,
			gains: 110000
		},
		{
			year: 3,
			gains: 130000
		},
	];

	$scope.findFinalNetProfit = function(){
		let totalGains = 0;
		for (let i = 0; i < $scope.plans.length; i++){
			totalGains += $scope.plans[i].gains;
		}
		return totalGains;
	}

	$scope.finalNetProfit = $scope.findFinalNetProfit();

	$scope.previousNetProfit = $scope.findFinalNetProfit(); //this will keep track of the previous net profit in order to see the proportional change a user might make directly on it, and use the same proportion to change the other three years gain values (assuming expenses will stay zero)

	$scope.compute = function(itemChanged){
		if (itemChanged === 'netProfit'){
			console.log($scope.finalNetProfit, 'prev', $scope.previousNetProfit);
			let changeProportion = ($scope.finalNetProfit - $scope.previousNetProfit)/$scope.previousNetProfit; //this will take care of negative changes as well
			for (let i = 0; i < $scope.plans.length; i++){
				$scope.plans[i].gains += $scope.plans[i].gains*changeProportion;
			}
			$scope.previousNetProfit = $scope.finalNetProfit;
		}
		else {
			$scope.finalNetProfit = $scope.findFinalNetProfit();
			$scope.previousNetProfit = $scope.findFinalNetProfit();		
		}
	}

	//the below inputs are made for the task #8:
	$scope.input1;

	$scope.input2;
	
	$scope.input3;

});



