define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/docente/tarjetaProfesionalListTemplate.html',
    'text!templates/docente/tarjetaProfesionalEditTemplate.html'
], function ($, _, Backbone, tarjetaProfesionalListTemplate, tarjetaProfesionalEditTemplate) {
    
  var TarjetaProfesional= Backbone.Model.extend({
            urlRoot: '/models'
            
        });
    var TarjetaProfesionalListView = Backbone.View.extend({
        el: $("#tarjetaprof"),
        render: function (accion,id) {
            
            id = id || 0
            if(accion == "view"){
                var data = {};
                var template = _.template(tarjetaProfesionalListTemplate);
                var compiledTemplate = template(data);
                $("#tarjetaprof").html(compiledTemplate);  
            }else if(accion == "edit"){
                var data = {};
                var template = _.template(tarjetaProfesionalEditTemplate);
                var compiledTemplate = template(data);
                $("#tarjetaprof").html(compiledTemplate);  
            }else if(accion == "editt"){
                
            }
           
        },
         
       
        events : {
            "click #editarTrajetaProfesional": "Editar",
            "click #guardarCambios":"Guardar" ,
            "click #agregarTarjeta":"Agregar"
        },
        
        Editar : function(){
            console.log("entro a la funcion Editar...");
            this.render("edit");
        }
        ,
        Guardar : function () {
            this.render("view");
            var tarjetaProfesional = new TarjetaProfesional();           
            tarjetaProfesional.set({numDocProfesional:"inputNumDoc", lugardeExpedicion:"inputLugarExpedicion", documentoProfesional:"tipoDocumento"});
            tarjetaProfesional.save({
                succes: function(tarjetaProfrsional){
                    console.log(tarjetaProfrsional)
                }
            });
        }
        ,
        Agregar : function (){
           
            console.log("entro a la funcion Agregar...");
             $("#header ul").append('<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Tarjeta</a></li>');
        }
    });
    return TarjetaProfesionalListView;
});