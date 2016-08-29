'use strict';

app.directive('multipleInputs', function ($filter) {
	return {
		restrict: 'A',
		scope: {
			currency: '='
		},
		link: function($scope, element) {
            element.on("input", function(e) {
            	let currentInputId = element[0].id;
                if(element.val().length == element.attr("maxlength")) {
                	let nextInputId = "input" + (Number(currentInputId[currentInputId.length-1]) + 1);
					let $nextElement = $("#" + nextInputId);
                    if ($nextElement.length) {
                        $nextElement[0].focus();
                    }
                }
                if(element.val().length === 0){
					let previousInputId = "input" + (Number(currentInputId[currentInputId.length-1]) - 1);
					let $prevElement = $("#" + previousInputId);

					if ($prevElement.length) {
					    $prevElement[0].focus();
					}
				}
            });
		}
	};
});

//The formatPhone function was put inside the Number prototype for simplicity purposes in the exercise
Number.prototype.formatPhone = function(){
	return this.toString().replace(/(\d{3})(\d{3})/, '($1) $2-');
};