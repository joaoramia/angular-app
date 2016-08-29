require.config({

    paths: {
        'angular': '../angular/angular',
        'ui.router': '../angular-ui-router/release/angular-ui-router',
        'ngAnimate': '../angular-animate/angular-animate',
        'app': 'app',
        'sidebar': 'sidebar/sidebar.directive',
        'CurrenciesCtrl': 'currencies/currencies.controller',
        'usdamount': 'currencies/currencies.directive',
        'currencies': 'currencies/currencies.states',
        'GoalAchieverCtrl': 'goal-achiever/goal-achiever.controller',
        'multipleInputs': 'goal-achiever/goal-achiever.directive',
        'goal-achiever': 'goal-achiever/goal-achiever.states',
        'ContactsCtrl': 'contacts/contacts.controller',
        'phone': 'contacts/contacts.directive',
        'ContactsFactory': 'contacts/contacts.factory',
        'contacts': 'contacts/contacts.states',
        'contact': 'contacts/contacts.states'
    },

    shim: {
      angular: {
          exports : 'angular'
      },
      'app': {
        deps: ['ui.router', 'ngAnimate']
      },
      'sidebar': {
        deps: ['app']
      },
      'CurrenciesCtrl': {
        deps: ['app']
      },
      'usdamount': {
        deps: ['app']
      },
      'currencies': {
        deps: ['app']
      },
      'currency': {
        deps: ['app']
      },
      'GoalAchieverCtrl': {
        deps: ['app']
      },
      'multipleInputs': {
        deps: ['app']
      },
      'goal-achiever': {
        deps: ['app']
      },
      'ContactsCtrl': {
        deps: ['app']
      },
      'phone': {
        deps: ['app']
      },
      'ContactsFactory': {
        deps: ['app']
      },
      'contacts': {
        deps: ['app']
      },
      'contact': {
        deps: ['app']
      }
    }
});

// Angular Bootstrap 
require(['app', 'angular', 'sidebar', 'CurrenciesCtrl', 'usdamount', 'currencies', 'GoalAchieverCtrl', 'multipleInputs', 'goal-achiever', 'ContactsCtrl', 'phone', 'ContactsFactory', 'contacts'], function (app) {
  app.init();
});