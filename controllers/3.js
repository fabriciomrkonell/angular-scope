'use strict';

angular.module('app').controller('ctrl3', ['$scope', function($scope){
	angular.extend($scope, {
		title: '3',
		body: 'Ctrl 3'
	});
}]);