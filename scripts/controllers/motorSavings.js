(function () {
	angular.module('myAngApp')
	.controller('motorSavings', ['$scope','Api' , function($scope, Api){

		var vm = this;
		vm.title = "Motor savings calculator";
		vm.motorMaster = {
			rating:["0.12","0.18","0.2","0.25","0.37","0.4","0.55","0.75",
			"1.1","1.5","2.2","3","4","5.5","7.5","11","15","18.5","22","30",
			"37","45","55","75","90","110","132","160","200","250","315","355",
			"400","450","500"],
			pole:["2 pole","4 pole","6 pole","8 pole"],
			ieRating:["IE1","IE2","IE3","IE4"]
		};

		vm.calcData = {ie1:"", kw1:"", pol1:"",ie2:"", kw2:"",
		pol2:"", eff1:"", eff2:"", elecCost:0.21, calcDisp:false,
		tableDisp:false};

		vm.calcSavings = calcSavings;
		function calcSavings() {

			if (vm.calcData.ie1 && vm.calcData.kw1 && vm.calcData.pol1
				&& vm.calcData.ie2 && vm.calcData.kw2 && vm.calcData.pol2) {

				var url = 'https://raw.githubusercontent.com/jebinson/motorSavings/master/scripts/motordetails.json';

			Api.Get(url).then(function(response) {
				//pulls efficiency data from JSON.
				vm.calcData.eff1 = response[vm.calcData.ie1][vm.calcData.kw1][vm.calcData.pol1];
				vm.calcData.eff2 = response[vm.calcData.ie2][vm.calcData.kw2][vm.calcData.pol2];
				//kw1 is a string, kWH = kW / (%eff / 100);
				var kwH1 = (parseFloat(vm.calcData.kw1) * 100) / vm.calcData.eff1;
				var kwH2 = (parseFloat(vm.calcData.kw2) * 100) / vm.calcData.eff2;
				//difference between kWH of motor 1 and motor 2, times electrical cost.
				var savingPerhour = Math.abs(kwH1 - kwH2) * vm.calcData.elecCost;
				vm.calcData.annualSaving = savingPerhour * 52; //savings per year.
				//calculation table ng-show control.
				vm.calcData.calcDisp = true;

				vm.effArray = [];
				for (i in vm.motorMaster.rating) {
					vm.effArray[i] = [];
					for (j in vm.motorMaster.ieRating) {
						for (k in vm.motorMaster.pole) {
							vm.effArray[i].push(response[vm.motorMaster.ieRating[j]][vm.motorMaster.rating[i]][vm.motorMaster.pole[k]]);
						}
					}
				}

			})

		} else {
			alert('Fill in motor deatils.')
		}
	};


}]);
})();