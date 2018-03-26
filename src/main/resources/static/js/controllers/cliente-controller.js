app.controller("clienteController", function ($scope, $http) {

    $scope.buscarTodos = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/test-app/clientes'
        }).then(function (response) {
            $scope.clientes = response.data;
        }, function (response) {
            console.log(response.status);
        });
    };

    $scope.salvar = function () {
        $http({
            method: $scope.cliente.id ? 'PUT' : 'POST',
            url: 'http://localhost:8080/test-app/clientes',
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
            url: 'http://localhost:8080/test-app/clientes/' + cliente.id
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