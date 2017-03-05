/**
 * Created by Process531 on 06-Mar-17.
 */
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkAmount = function () {
            var messageJoy = "Enjoy!";
            var messageMuch = "Too much!";
            var messageEnterData = "Please enter data first";
            $scope.message = messageEnterData;

            var inputArray =  $scope.lunchItems.split(', ');
            
            if (inputArray.length >= 1 &&  inputArray.length <= 3 && $scope.lunchItems) {
                $scope.message = messageJoy;
            } else  {
                if (inputArray.length > 3)
                    $scope.message = messageMuch;
            }


            return $scope.message;

        }


    }

})();
