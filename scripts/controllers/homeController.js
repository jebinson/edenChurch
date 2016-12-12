(function(){
	angular.module('EdenApp')
	.controller('homeController', ['$scope','Api' , function($scope, Api){

		var vm = this;

		Api.Get('/templates/songsData.json').then(function (response) {
			vm.songsData = response;
		})

		vm.data = {search:"", tempUrl:""};

		vm.loadTemplate = function (songID, songTitle) {
			vm.data.tempUrl = "/templates/" + songID + ".html";
			vm.data.songID = songID;
			vm.data.songTitle = songTitle;
		}

	}])
})();