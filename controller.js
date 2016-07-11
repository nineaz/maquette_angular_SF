app.controller("AppCtrl", function ($scope, $http){
$scope.getData = function(){
	
$http.get("http://api.openweathermap.org/data/2.5/weather?q="+$scope.location+"&APPID=d30aa1e237af2f0852452d1985903bc3&units=metric") //j'appelle mon url, ma base de donéée + je met +scopelocation+ qui sera relié au scope de l'input. Remplace londo par ce que va mettre l'utilisateur, &units=metrics pour l'avoir en degré (doc weather)




.success(function(response){
$scope.mydata = response //là ou on stock les données pour pouvoir les scoper et les utiliser
	console.log("Ca marche");
	console.log($scope.mydata); //reponse de la requete en json
})

.error(function(response){ //pas obligatoire mais bonne pratique car indique si marche ou pas
	console.log("NOOON");
});
//

//
}
$scope.location="Paris";
});