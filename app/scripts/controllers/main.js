'use strict';

/**
 * @ngdoc function
 * @name demoAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAngularAppApp
 */
var app = angular.module('demoAngularApp')
 
/**
*@Main Controller
*/
app.controller('MainCtrl',['$scope', '$rootScope', 'Persons', '$injector',
	function($scope, $rootScope, Persons, $injector){

	$scope.records = [];
	$scope.search = {};
	$scope.find = {};
	
	/**
	*@Setup
	*/
	var setup = function(){

		/**
		*@Set data
		*/
		Persons.getRecords().then(function( result ){
			angular.forEach(result.data.people,function(val){
				$scope.records.push(val.person);
			});
		});
	
	};
	
	/**
	*@filter
	*/
	$scope.filterBy=function(val){
		$scope.find.firstName=val.firstName;
		$scope.find.lastLast=val.lastName;
		$scope.find.age=val.age;
		$scope.find.sex=val.sex;
	};

	/**
	*@Reset filter
	*/
	$scope.resetFilter = function(){
		$scope.find = {};
	}

	/**
	*@sorting(Sort by)
	*/
	$scope.sortBy = function(val){
		$scope.sort = val;
	    $scope.reverse = ($scope.sort === val) ? !$scope.reverse : false;
	};

	/**
	*@sort 
	*/
	$scope.sortBy('name');
	
	/**
	*$injector
	*/
	$injector.invoke(setup);
}]);