//módulo principal
var app = angular.module("app", ["ngRoute"]);


app.config(function ($routeProvider) {
    $routeProvider
            .when("/clientes", {
                templateUrl: "views/cliente.html",
                controller: "clienteController"}
            );
});