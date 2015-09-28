var listControllers = angular.module('listControllers', []);

listControllers.controller('PersonalController', ['$scope', function ($scope) {
    $scope.tasks = [];
    
    // Save list to local machine
    $scope.saveLocal = function(array){
        storageString = JSON.stringify($scope.tasks);
        localStorage.setItem("personalList", storageString);
    };
    
    // Retrieve locally stored data
    $scope.getLocal = function() {
        data = localStorage.getItem('personalList');
        //console.info("Personal List is here");
        storageData = JSON.parse(data);
        $scope.tasks = storageData;
    };
    
    $scope.setfocus = function() {
        document.getElementById('inputToDo').focus();
    };
    
    $scope.submit = function() {
        $scope.tasks.push({item: $scope.taskDescrip, done: false});
        console.info("Added Item" + $scope.tasks);
        $scope.saveLocal();
        $scope.taskDescrip = '';
        $scope.setfocus();
    };
    
    $scope.delete = function(idx) {
        $scope.tasks.splice($scope.tasks.indexOf(idx), 1);
        //$scope.delete(idx);
        //$scope.saveLocal();
        //$scope.done = false;
        $scope.setfocus();
    };
    
    $scope.getLocal();
}]);
