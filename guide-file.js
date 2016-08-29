1) Use ui-route to create at least 3 pages that share a single state for loading them. To achieve this, have state url parameters by dynamic and load views/controllers based on those parameters.
Create a method which can load the controller and template of each page on demand, when route changes. Make the state url option have 2 parameters with the second one optional (this can be done by using regexp on the url parameters) so that one of the pages can load additional information inside another ui-view based on that parameter.
// --- Please see browser/js/currencies

2) Provide example on how to pass data between page controllers. Have an input field in one page of which contents is displayed in the second page. Please do not use $rootScope.
// --- Please see browser/js/currencies and browser/js/contacts. For this item, the ContactsFactory was created, which has the list of contacts and is shared with both the ContactsCtrl and the CurrenciesCtrl 


4) Create an array of 50 items, each item having 3 properties. Create an option to sort the array by one or two properties. Make the array be filterable by a search input.
// --- Please see files inside of browser/js/contacts