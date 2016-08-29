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
			let zeroGain; //in case one of the numbers is zero, I will add an equal proportion for all once the final sum changes, so it doesn't stay zero forever.

			$scope.plans.forEach(plan => {
				if (plan.gains <= 0) zeroGain = true;
			})

			if((zeroGain && $scope.finalNetProfit > $scope.previousNetProfit) || $scope.previousNetProfit <= 0){
				let changeAmount = ($scope.finalNetProfit - $scope.previousNetProfit)/$scope.plans.length; //this will add the same amount to each plan, when one is zero

				for (let i = 0; i < $scope.plans.length; i++){
					$scope.plans[i].gains += changeAmount;
					$scope.plans[i].gains = Math.floor($scope.plans[i].gains);
				}
			}
			else if($scope.previousNetProfit > 0){ //this will take care of infinity problems in the changeproportion variable
				let changeProportion = ($scope.finalNetProfit - $scope.previousNetProfit)/$scope.previousNetProfit; //this will take care of negative changes as well
				for (let i = 0; i < $scope.plans.length; i++){
					$scope.plans[i].gains += $scope.plans[i].gains*changeProportion;
					$scope.plans[i].gains = Math.floor($scope.plans[i].gains);
				}
				$scope.previousNetProfit = $scope.finalNetProfit;
			}
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



