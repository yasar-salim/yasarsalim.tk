var app=angular.module('todo',[]);

app.controller('myctrl',function($scope){

$scope.list=[];
$scope.data={};
$scope.data.item="";

$scope.additem=function(){
    if($scope.data.item.length>0){
        $scope.list.push({"name":$scope.data.item,"show":false});
        $scope.data.item="";
    }
};

$scope.striketext=function(i){
    $scope.list[i].show=!$scope.list[i].show;
};

});