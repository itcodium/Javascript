
app.factory('AppControlText', function () {
    return {
            submit: "Enviar",
            cancel: "Cancelar",
            select: "Seleccionar...",
            search: "Buscar...",
            acept: "Aceptar",
            edit: "Editar",
            delete: "Borrar",
    };
})
.factory('MathService', function() {
    var factory = {};
            
    factory.multiply = function(a, b) {
        return a * b ;
    };
    return factory;
});
