app.factory('contactSvc', ['$scope', 'pocRestangularService', contactSvc]);
function contactSvc($scope, pocRestangularService){
    $scope.getData = function(){pocRestangularService.getdata('users?api_key=amo@gmail.com', function(response){
        $scope.users = response.data.users;
    })
}
}