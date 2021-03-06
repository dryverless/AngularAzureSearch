﻿(function () {
    'use strict';

    angular.module('app')
        .controller('trailsController', ["$scope", "trailService", "authService", "ModalService", "signalRHub",
            function ($scope, trailService, authService, ModalService, signalRHub) {
                
                $scope.trails = [];
                $scope.trail = {};

                $scope.trailFormIsVisible = false;

                $scope.dialogTitle = "";


                // Load the list of trails.
                trailService.getTrails()
                                .then(function (data) {
                                    $scope.trails = data;
                                    //console.log("trails: " + angular.toJson(data));
                                });

                $scope.showAddTrailForm = function () {
                    hideAllForms();
                    $scope.trail = {};
                    $scope.trailFormIsVisible = true;
                    $scope.dialogTitle = "Add";
                    ModalService.showModal({
                        templateUrl: "app/dialogs/dTrailModalTemplate.html",
                        controller: "dTrailModalController",
                        inputs: {
                            "trail": $scope.trail,
                            "dialogTitle": $scope.dialogTitle
                        }
                    }).then(function(modal) {
                        modal.element.modal();
                        modal.close.then(function(result) {
                            submitTrailForm(result.isValid, result.trail);
                        });
                    });
                };

                function submitTrailForm(isValid, trail) {
                    if (!isValid) {
                        return;
                    }

                    if (trail.id == null) {
                        trailService.insertTrail(trail).then(function (data) {
                            //trail.id = data.id;
                            $scope.trails.push(data.Result);
                            $scope.trailFormIsVisible = false;
                            $scope.trail = {};
                        });
                    } else {
                        trailService.updateTrail(trail).then(function (data) {
                            $scope.trailFormIsVisible = false;
                            //var trailIdx = $scope.trails.indexOf(data.id);
                            var trailIdx = _.findIndex($scope.trails, { id: data.id });
                            $scope.trails[trailIdx] = data;
                            $scope.trail = {};
                        });
                    }
                };

                $scope.cancelTrailForm = function () {
                    //$("#trailform input").removeAttr("required");
                    $scope.trailFormIsVisible = false;
                    $scope.trail = {};
                };

                $scope.update = function (idx) {
                    hideAllForms();
                    $scope.dialogTitle = "Edit";
                    $scope.trail = $scope.trails[idx];
                    $scope.trailFormIsVisible = true;
                    ModalService.showModal({
                        templateUrl: "app/dialogs/dTrailModalTemplate.html",
                        controller: "dTrailModalController",
                        inputs: {
                            "trail": $scope.trail,
                            "dialogTitle": $scope.dialogTitle
                        }
                    }).then(function (modal) {
                        modal.element.modal();
                        modal.close.then(function (result) {
                            submitTrailForm(result.isValid, result.trail);
                        });
                    });
                };

                $scope.delete = function (idx) {
                    if (confirm("Are you sure you want to delete this trail?")) {
                        var g = $scope.trails[idx];
                        trailService.deleteTrail(g).then(function (data) {
                            $scope.trails.splice(idx, 1);
                        });
                    }
                };
                
                $scope.sortColumn = function (column) {
                    $scope.sortBy = column;
                    $scope.reverse = !$scope.reverse;
                }

                function hideAllForms() {
                    $scope.trailFormIsVisible = false;
                }

                // Trail Hub Integration

                // Posted Trail Added to Data
                signalRHub.on('postNewTrail', function (postedTrail) {
                    $scope.trails.push(postedTrail);

                    console.log(postedTrail);
                });

                // Put Trail Added to Data
                signalRHub.on('putNewTrail', function (putTrail) {
                    var putIdx = _.findIndex($scope.trails, { id: putTrail.id });

                    console.log(putTrail);
                    console.log("putIdx: " + putIdx);

                    if (putIdx === undefined) {
                        $scope.trails.push(putTrail);
                    }
                    else {
                        $scope.trails[putIdx] = putTrail;
                    }
                });

                // Remove Deleted Trail from Data
                signalRHub.on('deleteTrail', function (trailId) {
                    var deletedIdx = _.findIndex($scope.trails, { id: trailId });
                    
                    console.log(trailId);

                    $scope.trails.splice(deletedIdx, 1);
                });

            }]);
})();