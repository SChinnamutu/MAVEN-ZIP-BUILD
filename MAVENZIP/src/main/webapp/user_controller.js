'use strict';

angular.module('CountryManagement').controller('CountryController', ['$scope', 'CountryService', function($scope, CountryService) {
   /* var self = this;*/
    /*self.user={id:null,username:'',address:'',email:''};
    self.users=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;*/
    $scope.countries = [];
    $scope.countryForm = {
        id : -1,
        countryName : "",
        population : ""
    };

    //Now load the data from server
    _refreshCountryData();

    function _refreshCountryData(){
    	//alert("Controller called");
    	CountryService._refreshCountryData().
    	then(
    			function successCallback(response) {
    				alert("Data is " + response.data);
    	            $scope.countries = response.data;
    	        }, function errorCallback(response) {
    	            console.log(response.statusText);
    	        }
    	    );
    }
    
    function submitCountry(){
    	//var country =  angular.toJson($scope.countryForm);
    	//alert("Insdie submitCountry " + $scope.countryForm);
    	//CountryService.createUser($scope.countryForm)
    	alert("Insdie submitCountry ");
    	CountryService.createUser()
            .then(
        		function successCallback(response) {
        			 _refreshCountryData;
    	        }, function errorCallback(response) {
    	        	alert("Error occured");
    	            console.log(response.statusText);
    	        }
        );
    }

   /* function createUser(user){
    	CountryService.createUser(user)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    }

    function updateUser(user, id){
    	CountryService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    }

    function deleteUser(id){
    	CountryService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }

    function submit() {
        if(self.user.id===null){
            console.log('Saving New User', self.user);
            createUser(self.user);
        }else{
            updateUser(self.user, self.user.id);
            console.log('User updated with id ', self.user.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.user.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteUser(id);
    }


    function reset(){
        self.user={id:null,username:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }*/

}]);
