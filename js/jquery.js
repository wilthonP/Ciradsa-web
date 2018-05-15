$(document).ready(function() {
    $("#c-industrial").click(function(){
        $("#collapse-industrial").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#seguridad").click(function(){
        $("#collapse-seguridad").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#educacion").click(function(){
        $("#collapse-educacion").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#comercio").click(function(){
        $("#collapse-comercio").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#sss").click(function(){
        $("#collapse-sss").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#tecno").click(function(){
        $("#collapse-tecno").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#constructoras").click(function(){
        $("#collapse-constructoras").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#bancos").click(function(){
        $("#collapse-bancos").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#miscelaneos").click(function(){
        $("#collapse-miscelaneos").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#transporte").click(function(){
        $("#collapse-transporte").animate({
            top: '0px',
            opacity: '1'
        });
    });
    $("#alimentos").click(function(){
        $("#collapse-alimentos").animate({
            top: '0px',
            opacity: '1'
        });
    });

    $(".titulo").textrotator({
      animation: "fade",
      separator: ",",
      speed: 4000 
	});
    $('.card').smoove({
	offset:'35%',
        moveX:'10%'
	});

});