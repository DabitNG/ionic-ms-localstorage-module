/**
*  LocalStorage services. 
*  @author DabitNG 
*/

(function() {

	'use strict';

	/**
	* LocalStorage services module 
	*/
	angular.module('local-storage.services', [])

	.factory('LocalStorage', localStorageFctr);

	function localStorageFctr($window){
	  return {
	    set: function(key, value) {
	      $window.localStorage[key] = value;
	    },
	    get: function(key, defaultValue) {
	    	var df = defaultValue || '';
	      return $window.localStorage[key] || defaultValue;
	    },
	    setObject: function(key, value) {
	      $window.localStorage[key] = JSON.stringify(value);
	    },
	    getObject: function(key, defaultValue) {
	    	var df = defaultValue || '{}';
	      return JSON.parse($window.localStorage[key] || df);
	    }
	  }
	};

})();

