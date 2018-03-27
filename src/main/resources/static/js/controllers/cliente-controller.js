/* global app */

app.controller("clienteController", function ($scope, $http) {

    $scope.buscarTodos = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/test-app/api/clientes'
        }).then(function (response) {
            $scope.clientes = response.data['_embedded']['clientes'];
        }, function (response) {
            console.log(response.status);
        });
    };

    $scope.salvar = function () {
        var alteracao = $scope.cliente.id;
        $http({
            method: alteracao ? 'PUT' : 'POST',
            url: 'http://localhost:8080/test-app/api/clientes' + (alteracao ? '/' + $scope.cliente.id : ''),
            data: $scope.cliente
        }).then(function (response) {
            $scope.buscarTodos();
        }, function (response) {
            console.log(response.status);
        });
        $scope.limparDados();
    };
    
    $scope.excluir = function (cliente){
        $http({
            method: 'DELETE',
            url: 'http://localhost:8080/test-app/api/clientes/' + cliente.id
        }).then(function (response) {
            $scope.buscarTodos();
        }, function (response) {
            console.log(response.status);
        });
        $scope.limparDados();
    };
    
    $scope.editar = function (cliente){
        $scope.cliente = angular.copy(cliente);
    };
    
    $scope.limparDados = function (){
        $scope.cliente = {};
        $scope.buscarTodos();
    };

    $scope.buscarTodos();

});