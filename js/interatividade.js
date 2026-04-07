$(function(){


    //ENTRADA

    var botoes = $(".botao");
    var titulo = $("h1");
    var subtitulo = $("#segundo");
    var icones = $("svg")
    var fundo = $("body")
    var botao_modoEscuro = $("#modoEscuro");
    var imgpersona = $("#persona");


    var modoEscuro = false

    //PROCESSAMENTO

    botao_modoEscuro.click (()=>{

          
        if ( modoEscuro == false ){

            botoes.css("background-color", "black");
            botoes.css("color", "white");

            fundo.css("background-image", "url('https://i.ibb.co/93Bv2kMR/cdf72e93-1658-414c-989a-3689d414ca44.jpg')");

            titulo.css("color", "white")
            titulo.css("background-color" , "black")

            imgpersona.css("border" , "15px solid rgba(255, 255, 255, 0.42)")

        

            modoEscuro = true;
    
        }else{

            botoes.css("background-color", "white");
            botoes.css("color", "brown");

            fundo.css("background-image", "url('../recursos/img/fundo.jpg.jpg')");

            titulo.css("color", "brown")
            titulo.css("background-color" , "white")

            imgpersona.css("border" , "15px solid rgba(70, 110, 4, 0.418)")

            modoEscuro = false;

        }


    });

    
    //SAIDA


});
