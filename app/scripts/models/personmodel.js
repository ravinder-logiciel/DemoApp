'use strict';

/**
 *app
 */
var app  = angular.module('demoAngularApp');

/**
*@Record factory
*/
app.factory('Persons',['$http','$q',function($http,$q){

	var rec = {};

	rec.getRecords = function(){

		var defer = $q.defer();
		
		$http.get('scripts/json/people.json')
		.then(function( success ){
			defer.resolve(success);
		},function( error ){
			defer.reject(error);
		});

		return defer.promise;
	}

	return rec;
}]);