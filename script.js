let app = angular.module("myApp", [])

app.controller("FormController", function ($scope, $rootScope,$filter) {
    
    let largeArray = []
    $scope.settingFormValues = function () {
        $scope.firstName = ""
        $scope.lastName = ""
        $scope.date = ""
        $scope.mobile = ""
        $scope.email = ""
        $scope.myform.$setPristine();
        $scope.myform.$setUntouched();
    }
    $scope.firstName = ""
    $scope.lastName = ""
    $scope.date = ""
    $scope.mobile = ""
    $scope.email = ""
    
 
    $scope.objectCreation = function (event, $document) {
        
        if ($scope.firstName && $scope.lastName && $scope.date && $scope.mobile && $scope.email) {
            let obj = {}
            obj.firstName = $scope.firstName
            obj.lastName = $scope.lastName
            console.log($scope.date)
            obj.dateFullFormat = $scope.date
            obj.date = $filter('date')($scope.date, 'yyyy-MM-dd')
            obj.mobile = $scope.mobile
            obj.email = $scope.email
            let newDate = new Date()
            obj.id = newDate.getTime()
            largeArray.push(obj)
           
        $scope.settingFormValues()
            $rootScope.bigArray = $scope.sortingArray(largeArray)
        } else {
            $scope.firstName = $scope.firstName
            $scope.lastName = $scope.lastName
            $scope.date = $scope.date
            $scope.mobile = $scope.mobile
            $scope.email = $scope.email
        }
     }
    
    
    $scope.editFunc = function (e) {
        for(let i=0;i<$rootScope.bigArray.length;i++){
            if($rootScope.bigArray[i].id===Number(e.currentTarget.dataset.address)){
                $scope.indexOfBtn = i
                $scope.firstName = $rootScope.bigArray[i].firstName
                $scope.lastName = $rootScope.bigArray[i].lastName
                $scope.date = $rootScope.bigArray[i].dateFullFormat
                $scope.mobile = $rootScope.bigArray[i].mobile
                $scope.email = $rootScope.bigArray[i].email
                $rootScope.bigArray.splice($scope.indexOfBtn,1)
            }
        }
        
    }
    $scope.dateFormatter=function(str){

    }
    $scope.deleteFunc = function (e) {
         $scope.index;
       for(let i=0;i<$rootScope.bigArray.length;i++){
           if($rootScope.bigArray[i].id === Number(e.currentTarget.dataset.address)){
               index = i
               
               break
           }
       }
       $rootScope.bigArray.splice(index,1)
    }
    $scope.updateFunc = function(){
        
    } 
       $scope.sortingArray=function(array) {
           let newArray = array.sort(compare)

           function compare(a, b) {
               let firstDate = new Date(a["date"]); // Your timezone!
               let secondDate = new Date(b["date"])
               let firstEpoch = firstDate.getTime() / 1000.0;
               let secondEpoch = secondDate.getTime() / 1000.0;
               return secondEpoch - firstEpoch
           }
          
           return newArray
       }
    
})

console.log(angular)