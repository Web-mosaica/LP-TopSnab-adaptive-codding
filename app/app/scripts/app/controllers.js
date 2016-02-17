'use strict';

/* Controllers */

var tobSnabControllers = angular.module('tobSnabControllers',[])

tobSnabControllers.controller("mainCtrl", function(Data, $scope){
    var models = Data.get();
    
    $scope.model = models;
    
},['Data', '$scope']);


//tobSnabControllers.controller("chooseWindowCtrl", function($scope){
//    
//    
//},['$scope']);

tobSnabControllers.controller("bootstrapCtrl", function(Data, $scope){
    
    if ( $scope.model == undefined)
        {
            $scope.model = Data.get();
        }
    
},['Data', '$scope'])
.directive("bootstrapslider", function(){
   return {        
        controller: "bootstrapCtrl",
        link: function($scope, element, attributes) {                        
            
            switch (attributes.ngModel){                
                case "listWorks": { $scope = $scope.model.listWorks; break;}
                default:break;
            }
            
           app.initSlider($scope.list, element, attributes);
        }
    }
});