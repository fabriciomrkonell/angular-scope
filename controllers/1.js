'use strict';

angular.module('app').controller('ctrl1', ['$scope', function($scope){
	angular.extend($scope, {
		title: '1',
		body: 'Ctrl 1'
	});
}]);