'use strict';

app.controller('ContactsCtrl', function ($scope, $stateParams, ContactsFactory) {

	$scope.allContacts = ContactsFactory.allContacts;

	//since the email is unique for every contact, it will be the way to find a specific contact and go to their contact state:
	$scope.findContact = function (email){
		let contact;
		for (let i = 0; i < $scope.allContacts.length; i++){
			if ($scope.allContacts[i].email === email) {
				contact = $scope.allContacts[i];
				break; //for efficiency purposes
			}
		}
		return contact;
	}

	$scope.propertyName = 'name';

	$scope.sortBy = function(propertyName) {
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};

	$scope.theContact = $scope.findContact($stateParams.email);

});