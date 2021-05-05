var app = angular.module('studentManagement',
    [
        'basicInfo',
        // 'model',
        'reports',
        'search',
        'bulk',
        'ui.router',
        'ui.bootstrap'
    ]);

app.controller('studentManagementController', function () {
    var vm = this;
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            template: "<basic-info></basic-info>"
        })
        .state('basicInfo', {
            url: "/basicInfo",
            template: "<basic-info></basic-info>"
        })
        .state('reports', {
            url: "/reports",
            template: "<reports></reports>"
        })
        .state('search', {
            url: "/search",
            template: "<search></search>"
        })
        .state('bulk', {
            url: "/bulk",
            template: "<bulk></bulk>"
        })
})



