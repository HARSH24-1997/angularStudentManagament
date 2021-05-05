var api = angular.module('api', []);

// api.controller('api', function (mainService) {
//     var vm = this;
//     vm.serviceCreate = mainService.createUser;
// });



api.service('mainService', function($http){
    this.createUser = function(data){
        return  $http.post('http://localhost:3000/create',JSON.stringify(data));
    }
    this.search = function(data){
        return  $http.post('http://localhost:3000/search',{rollNos:data});
    }
    this.totalMarks = function(data){
        return  $http.post('http://localhost:3000/reports/totalMarks',JSON.stringify(data));
    }
    this.subjectTopper = function(data){
        return $http.post('http://localhost:3000/reports/subjectTopper',JSON.stringify(data));
    }
    this.rank = function(data){
        return $http.get('http://localhost:3000/reports/rank',JSON.stringify(data));
    }
})

api.factory('secondaryService', function($http) {
    
    var bulkAdd = function (data){
        return $http.post('http://localhost:3000/bulk/write',{number:data});
    }

    return {
        bulkAdd : bulkAdd
    }
    
});