var listControllers = angular.module('listControllers', []);

listControllers.controller('ToDoController', ['$scope', function ($scope) {
//    $scope.tasks = [
//          {item: "Give Justin an A", done: false, category: 'personal'},
//          {item: "Feed the cat", done: false, category: 'work'},
//          {item: "Cut the lawn", done: false, category: 'school'},
//          {item: "Haircut", done: false, category: 'personal'},
//          {item: "Clip toenails", done: false, category: 'work'},
//          {item: "wass the car", done: false, category: 'school'}
//    ];
//    
    
    $scope.category = 'personal';
//$scope.tasks = [];
    
  //  $scope.tasks = [{item: "Give Justin an A", done: false, category: 'personal'}];
    
    $scope.setfocus = function() {
        document.getElementById('inputToDo').focus();
    };
    

    $scope.submit = function(task) {
           console.log("Inside Submit: " + $scope.tasks);

        $scope.tasks.push({item: $scope.taskDescrip, done: false, category: $scope.category});
        //$scope.tasks.push(task);
        console.log($scope.taskDescrip + " " + $scope.category);
        console.log($scope.tasks);
        $scope.saveToLocal($scope.tasks);
        $scope.tasks = $scope.getFromLocal();

        $scope.taskDescrip = '';
        $scope.setfocus();
    };
    

    $scope.delete = function(tsk) {
        $scope.tasks.splice($scope.tasks.indexOf(tsk), 1);
        console.log($scope.tasks);
        $scope.saveToLocal($scope.tasks);
        $scope.tasks = $scope.getFromLocal();

        $scope.setfocus();
    };
    

    $scope.setCategory = function(cat) {
        console.log(cat);
        $scope.category = cat;
        $scope.setfocus();
    };
    

    $scope.getCategory = function () {
        return $scope.category;
    };
    
    $scope.saveToLocal = function(arry) {
        storageString = JSON.stringify(arry);
        localStorage.setItem('list', storageString);
        console.log(storageString);
    };
    
    $scope.getFromLocal = function() {
        return JSON.parse(localStorage.getItem('list'));
    
                          
    };
        
    console.log("Call from getLocal: " + $scope.getFromLocal());
    //$scope.saveToLocal(null);
    
    $scope.tasks = $scope.getFromLocal();
}]);