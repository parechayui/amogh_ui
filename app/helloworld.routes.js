'use strict';


app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/home');
  
    $stateProvider
     
      .state('home', {
        url: '/home',
        templateUrl: 'main.html',
        controller: 'HelloCtrl as home',
        
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact-list.html',
        controller: 'HelloworldContactCtrl as hello'
      
      })
      // .state('bargraph',{
      //   url: '/bargraph',
      //   templateUrl: 'bargraph.html',
      //   controller: 'bargraphCtrl'
      // })
      // .state('linegraph',{
      //   url: '/linegraph',
      //   templateUrl:'linegraph.html',
      //   controller:'linegraphCtrl'
      // })

  });
