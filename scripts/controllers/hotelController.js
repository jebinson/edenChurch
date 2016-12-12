(function () {

	angular.module('myAngApp')
	.controller('hotelController', ['$scope', 'Api',function($scope, Api){

		var vm = this;
		vm.title = "Café Search";
		vm.data = [];

		var url = 'https://raw.githubusercontent.com/jebinson/myAngularPG/master/data/hotelData.json';

		Api.Get(url).then(function(response){
			vm.data = response;
			vm.cuisines = [];
			vm.locations = [];
			for (var i = response.length - 1; i >= 0; i--) {
				if (!vm.cuisines.includes(response[i].cuisine)) {vm.cuisines.push(response[i].cuisine)}
				if (!vm.locations.includes(response[i].borough)) {vm.locations.push(response[i].borough)}
			}
		})

		vm.totalDisplayed = 5;

		vm.loadMore = function () {
			vm.totalDisplayed += 5;
		}

	}]);
	
})();