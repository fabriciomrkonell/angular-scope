'use strict';

angular.module('app').controller('ctrl2', ['$scope', function($scope){
	angular.extend($scope, {
		title: '2',
		body: 'Ctrl 2'
	});
}]);