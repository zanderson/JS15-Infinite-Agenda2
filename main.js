angular.module('agendaapp', [])
    .controller('appcontroller', ['$scope', function($scope){
         // $scope.username = '';
         // $scope.sayHello = function() {
         // $scope.greeting = 'Hello ' + $scope.username + '!';

  // };
            $scope.agendaDays = [];
            $scope.newItem = '';
            for (var i = 0; i<7; i++) {
                var date = new Date();
                date.setDate(date.getDate() + i);
                $scope.agendaDays.push({
                    date: date,
                    items: []
                });
            }
            // Edit day
            // $scope.agendaDays[0].items=['feed dexter'];
            $scope.setEditDay = function(day){
                $scope.editDay = day;
            }
            // Add new Agenda item to list
            $scope.addItem = function() {
                $scope.editDay.items.push($scope.newItem);
                $scope.newItem = '';
                $scope.editDay = null;
            }
            // Submit input box on enter
            $scope.submitit = function(e) {
                if(e.keyCode === 13){
                $scope.addItem();
                }
            }
            
        }
]);



