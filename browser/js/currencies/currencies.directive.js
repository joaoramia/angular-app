'use strict';

//the directive below changes the input value to currency format, basically using regular expressions and not allowing here (other than in the input type='number') non alphanumeric characters.
app.directive('usdamount', function ($filter) {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: {
			currency: '='
		},
		link: function(scope, element, attrs, ctrl) {
			if (!ctrl) return;

            ctrl.$parsers.push(function (value) {
				element[0].value = element[0].value.replace(/[^0-9]/g, '');
				element[0].value = Number(element[0].value.replace(/[\$,]/g, ''));
				element[0].value = Number(element[0].value).format();
				return Number(element[0].value.replace(/[\$,]/g, '')); //this translates it back to number, so the controller has the normal number format
            })
			ctrl.$formatters.push(function (value) {
				element[0].value = element[0].value.replace(/[^0-9]/g, '');
				element[0].value = Number(element[0].value.replace(/[\$,]/g, ''));
				element[0].value = Number(element[0].value).format();
				return Number(element[0].value.replace(/[\$,]/g, '')); //this translates it back to number, so the controller has the normal number format
            });
		}
	};
});

//The format function was put inside the Number prototype for simplicity purposes in the exercise
Number.prototype.format = function(){
	return '$' + this.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};