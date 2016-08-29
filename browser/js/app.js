define(['angular'], function (angular) {
  app = angular.module('app', ['ui.router', 'ngAnimate']);

  app.init = function () {
    angular.bootstrap(document, ['app']);
  };

  return app;
});