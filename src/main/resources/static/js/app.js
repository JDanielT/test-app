//módulo principal
var app = angular.module('app', ['ngRoute']);


app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when("/clientes", {
                templateUrl: "views/cliente.html",
                controller: "clienteController"}
            );
    
    $locationProvider.html5Mode(true);
    
});