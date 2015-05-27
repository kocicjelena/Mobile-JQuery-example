function Controller($scope) {
  $scope.master= {};
 
  $scope.update = function(user) {
    $scope.master= angular.copy(user);
  };
 
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.sayHello = function() {
    $scope.greeting = angular.copy($scope.master.name)
  };
  $scope.reset();
}
function addPerson($scope, e) {
$scope.master = {};
 
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };
 
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
 
  $scope.isUnchanged = function(user) {
    return angular.equals(user, $scope.master);
  };
 
  $scope.reset();
	$scope.user.name = angular.element(document.querySelector("#name").value);
	$scope.user.email = angular.element(document.querySelector("#email").value);

	console.log("About to add "+$scope.user.name+"/"+$scope.user.email);

	//Get a transaction
	//default for OS list is all, default for type is read
	var transaction = db.transaction(["people"],"readwrite");
	//Ask for the objectStore
	var store = transaction.objectStore("people");

	//Define a person
	var person = {
		name:name,
		email:email,
		created:new Date()
	}

	//Perform the add
	var request = store.add(person);

	request.onerror = function(e) {
		alert("Sorry, that email address already exists.");
		console.log("Error",e.target.error.name);
		console.dir(e.target);
		//some type of error handler
	}

	request.onsuccess = function(e) {
		console.log("Woot! Did it");
	}
}

//execute on login event
function ongetperson(e) {
	// pass user info to angular
	angular.element(document.getElementById("status")).scope().$apply(
		function($scope) {
			$scope.getperson(e);
		}
	);
}
function getPerson(e) {
	$scope.name = angular.element(document.querySelector("#nameSearch").value);
	if(name === "" ) return;

	var transaction = db.transaction(["people"],"readonly");
	var store = transaction.objectStore("people");
	var index = store.index("name");

	var request = index.get($scope.name);

	request.onsuccess = function(e) {

		var result = e.target.result;
		if(result) {
			var s = "<h2>Name "+$scope.name+"</h2><p>";
			for(var field in result) {
				s+= field+"="+result[field]+"<br/>";
			}
			angular.element(document.querySelector("#status").innerHTML).scope().$apply(s);
		} else {
			angular.element(document.querySelector("#status").innerHTML) = "<h2>No match</h2>";
		}	
	}	


}