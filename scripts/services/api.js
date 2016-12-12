(function () {
    
    angular.module('EdenApp')
    .factory('Api', ['$http',
        function ($http) {
    // List all interface / public end points that can be consumed
    var factory = {
        Get: Get,
        Post: Post
    };

    //get data for api's
    function Get(apiActionName) {

        return $http.get(apiActionName)
        .then(function (response) {
            if (response.status == 200) {
                return response.data;
            }
            alert('Error getting data from Api - ' + response.data.message);
        },
        function (error) {
                //report thr error
                alert('Error getting data from Api - ' + apiActionName);
            },
            function (progress) {
                //report the progress
            })
    }

    //post data for api's
    function Post(apiActionName, apiData) {

        return $http.post(apiActionName, apiData)
        .then(function (response) {
            if (response.status == 200) {
                return response.data;
            }
            alert('Error getting data from Api - ' + response.data.message);
        },
        function (error) {
                //report thr error
                alert('Error getting data from Api - ' + apiActionName);
            },
            function (progress) {
                //report the progress
            })
    }

    return factory;
}]);

})();
