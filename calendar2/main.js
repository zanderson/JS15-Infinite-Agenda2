angular.module('agendaapp', [])
    angular.module('agendaapp', [])
    .controller('appcontroller', ['$scope', '$interval', function($scope, $interval){
     // console.log("hello")
     var today = new Date();
     $scope.days = [today];
     today.tasks = [];
     $scope.whichDay = today;

     $scope.addDays = function(numDays){
        var n = numDays || 1;
        for (var i=0; i<n; i++) {
            var lastDay = $scope.days[$scope.days.length-1];
            var newDay = new Date(lastDay);
            
            newDay.tasks = [];

            var x = newDay.getDate()
            newDay.setDate(x+1)
            $scope.days.push(newDay)
        }
     }
     $scope.addDays(7)

     $scope.showForm = function(index, day){
        day.currentlyAddingTask = true;
        $scope.whichDay = $scope.days[index];
        console.log($scope.whichDay)
     }

    $scope.submitTask = function(day){
        $scope.whichDay.tasks.push({
            name: day.inputNewName,
            description: day.inputNewDescription,
            editing: false

        });
  
    // clear form
    day.inputNewName = "";
    day.inputNewDescription = "";
     day.currentlyAddingTask = !day.currentlyAddingTask;
    }
//click on appointment; convert it to form; prefill form fields with appointment text 
//convert it back to a non-form element
    $scope.toggleEditing = function(task){
        task.editing = !task.editing;
    }

    $scope.stopProp = function(event){
        event.stopPropagation();
    }

    $interval(function(){
            var distanceScrolled = document.body.scrollTop;
            var currentWindowHeight = window.innerHeight;
            var totalBodyHeight = document.body.scrollHeight;

            if(distanceScrolled + currentWindowHeight === totalBodyHeight){
                $scope.addDays(7);
            }
    }, 1000)


}]);



