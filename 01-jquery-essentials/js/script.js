// Forma Padrão de INICIALIZAR O JQUERY
// $(document).ready(function(){
//    $(".jquery_essentials").html("JQuery Iniciado!");    
// });

// FORMA PADRÃO SIMPLIFICADA
// $(function (){
//        $(".jquery_essentials").html("JQuery Iniciado com Gatilho!");
//    });


// CARREGAR ANTES DE OUTRA LIB
// jQuery(function($){
//    $(".jquery_essentials").html("JQuery Antes de Outrsa Lib");
// });

// CARREGAR DEPOIS DE OUTRA LIB
// var $j = jQuery.noConflict();
// $j(document).ready(function(){
//     $j(".jquery_essentials").html("JQuery Depois de Outra Lib");
// });

$(function () {
    $(".jquery_essentials").html("JQuery Iniciado com Gatilho!");
});