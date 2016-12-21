'use strict';

angular.module('app', []);

angular.module('app').run(['$rootScope', function($rootScope){

	angular.extend($rootScope, {
		titleScope: 'Hello Solar Escope',
		title: 'Other'
	});

}]);

angular.module('app').controller('ctrl', ['$scope', function($scope){

	var self = this;

	angular.extend(self, {
		title: 'Hello Solar',
		includes: ['/views/1.html', '/views/2.html', '/views/3.html', '/views/4.html']
	});

}]);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['app']);
});