'use strict';

//the directive below changes the input value to phone format, basically using regular expressions and not allowing here (other than in the input type='number') non alphanumeric characters.
app.directive('phone', function ($filter) {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: {
			currency: '='
		},
		link: function(scope, element, attrs, ctrl) {
			if (!ctrl) return;

			ctrl.$formatters.push(function (value) {
				element[0].value = element[0].value.replace(/[^0-9]/g, '');
				element[0].value = Number(element[0].value.replace(/[\$,]/g, ''));
				element[0].value = Number(element[0].value).formatPhone();
				return element[0].value;
			});

            ctrl.$parsers.push(function (value) {
				element[0].value = element[0].value.replace(/[^0-9]/g, '');
				element[0].value = Number(element[0].value.replace(/[\$,]/g, ''));
				element[0].value = Number(element[0].value).formatPhone();
				return element[0].value;
            })
            element[0].value = Number(element[0].value.replace(/[\$,]/g, ''));
		}
	};
});

//The formatPhone function was put inside the Number prototype for simplicity purposes in the exercise
Number.prototype.formatPhone = function(){
	return this.toString().replace(/(\d{3})(\d{3})/, '($1) $2-');
};