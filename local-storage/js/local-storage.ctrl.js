/**
 *  LocalStorage services module. 
 *  @author DabitNG 
 */
(function() {

	'use strict';

	/**
	* LocalStorage Module Controller
	*/
	angular.module('local-storage.controllers',['local-storage.services'])

	/**
	* LocalStorage Controller
	*/
	.controller('LocalStorageCtrl', storeController);

	/**
	 * Store controller. LocalStorageSrvc as dependency
	 * @param  $scope
	 * @param  LocalStorageSrvc
	 * @return 
	 */
	function storeController($scope, LocalStorageSrvc){
		
		// The following functions are NOT TESTED. Do not use in production environments
		$scope.load() = function(){
			LocalStorageSrvc.load().then(function(data){
				$scope.data = data;
			});
		};

		$scope.save() = function(data){
			LocalStorageSrvc.save(data);
		};

		$scope.remove() = function(data){
			LocalStorageSrvc.remove(data);
		};
	} 

})();

