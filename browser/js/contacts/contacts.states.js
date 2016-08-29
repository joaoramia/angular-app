'use strict';

app.config(function($stateProvider){
	$stateProvider.state('contacts', {
		url: '/contacts',
		templateUrl: '/js/contacts/templates/contacts-list.html',
		controller: 'ContactsCtrl',
	});

	//the contact ID here will be its index in the allContacts array for simplicity purposes
	$stateProvider.state('contact', {
		url: '/contacts/:email/',
		templateUrl: '/js/contacts/templates/contact.html',
		controller: 'ContactsCtrl'
	});
});