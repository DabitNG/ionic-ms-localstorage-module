/**
 *  LocalStorage services module. 
 *  @author DabitNG 
 */
(function() {

  'use strict';

  /**
  * LocalStorage Module Service
  */
  angular.module('local-storage.services',['ngStorage'])

  /**
  * LocalStorage Factory
  */
  .factory('LocalStorageSrvc', storeFactory);

  /**
   * Function that implements CRUD operations on LocalStorage
   * @param  {[type]} $localStorage [description]
   * @return {[type]}               [description]
   */
  function storeService($localStorage){
    
    var _load = function(){
        return $localStorage.mydata;
    };

    var _save = function (data){
      $localStorage.mydata.push(data);
    };

    var _remove = function (data){
      var index = $localStorage.mydata.indexOf(data);
      $localStorage.mydata.splice(index);
    };

    return {
      load: _load,
      save: _save,
      remove: _remove
    }

  }
})();

