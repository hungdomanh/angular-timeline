var app = angular.module('myApp',  []);

app.controller('timeline', function($scope){
	$scope.items = data;
	var leng = $scope.items.length;
	$scope.leng = $scope.items[$scope.items.length-1].date.end + 257 ;
	
	$scope.sizeText = '20px';
	$scope.scale = 2;
	$scope.h = $scope.leng*$scope.scale + 200 + 'px';
	$scope.show = [];
	var string = [{
		r: 200,
		g: 200,
		b: 0
	}];
	$scope.messageStyle = [];


	var k = Math.floor(250/$scope.items.length);

	for(var i=0; i<$scope.items.length; i++) {
		string[i] = {};
		string[i].r = 200;
		string[i].g = 200;
		string[i].b = 250-i*k;
	}


	var colors = [];

	for(var i=0; i<$scope.items.length; i++) {
		colors[i] = "rgb(" + string[i].r + "," + string[i].g + "," + string[i].b + ")" ;
	}
	$scope.colors  = colors;

    $scope.sizeText = Math.floor(0.01*window.innerWidth)*1.5+ 'px';
    $scope.heightMessage = 'auto';
    for(var i=0; i<$scope.items.length; i++) {
		$scope.messageStyle[i] = {};
		$scope.messageStyle[i] = {
			'background-color': colors[i], 
	       	'margin-top': ($scope.items[i].date.begin + 257)*$scope.scale + 'px',
		  	'font-size': $scope.sizeText, 
	       	'height': $scope.heightMessage
		}
	}

	$(window).resize(function(){
	    var width = window.innerWidth;
	    $scope.$apply(function(){
	       $scope.sizeText = Math.floor(0.01*width)*1.5+ 'px';
	       $scope.heightMessage = 'auto';
	        for(var i=0; i<$scope.items.length; i++) {
				$scope.messageStyle[i] = {};
				$scope.messageStyle[i] = {
					'background-color': colors[i], 
			       	'margin-top': ($scope.items[i].date.begin + 257)*$scope.scale + 'px',
				  	'font-size': $scope.sizeText, 
			       	'height': $scope.heightMessage,
			       	'z-index': 0	
				}
			}
	    });
	});

	var cur = 1;
	$scope.showContent = function(index) {
		if($scope.show[index] == true)	$scope.show[index] = false;
		else {
			for(var i=0; i<leng; i++) {
				$scope.show[i] = false;
			}
			$scope.show[index] = true;
		}
		$scope.messageStyle[index] = {
			'background-color': colors[index], 
	       	'margin-top': ($scope.items[index].date.begin + 257)*$scope.scale + 'px',
		  	'font-size': $scope.sizeText, 
	       	'height': $scope.heightMessage,
	       	'z-index': cur++
		}
	}





















});
