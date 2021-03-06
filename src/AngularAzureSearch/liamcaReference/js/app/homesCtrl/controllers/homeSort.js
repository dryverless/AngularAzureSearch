﻿/**
           * Controller for sorting results
           */
.controller('homeSort', function ($scope, $location) {

    $scope.$watch('model.query.order', function (newValue) {
        if (newValue) {
            var parts = newValue.split(' ');
            $scope.orderBy = { field: parts[0], label: $scope.orderFields[parts[0]] };
            $scope.orderDir = parts[1] || 'asc';
        }
    });

    $scope.orderFields = {
        dom: 'days on market',
        price: 'price',
        pricePerSqft: 'price per sqft.',
        yearBuilt: 'year built',
        hoa: 'association fee',
        location: 'distance'
    };

    $scope.toggleDirUrl = function () {
        if (!$scope.orderBy) return;
        var urlParams = angular.copy($location.search())
                  , path = $location.path()
          , dir = $scope.orderDir == 'asc' ? 'desc' : 'asc';

        urlParams.order = $scope.orderBy.field + ' ' + dir;
        return '#' + path + '?' + $.param(urlParams, true);
    };

    $scope.orderUrl = function (field) {
        var urlParams = angular.copy($location.search())
                  , path = $location.path();

        urlParams.order = field + ' ' + $scope.orderDir;
        return '#' + path + '?' + $.param(urlParams, true);
    };
})