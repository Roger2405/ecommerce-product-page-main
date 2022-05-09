

var botaoMenu = document.querySelector(".cabecalho__menu");
var botaoFechar = document.querySelector(".barra-lateral__close");
var spanSombra = document.querySelector(".conteudo-ofuscado");
var barraNav = document.querySelector(".barra-lateral");
spanSombra.classList.toggle("conteudo-ofuscado");

botaoMenu.addEventListener("click", function(){
    barraNav.classList.remove("barra-lateral--oculta");
    spanSombra.classList.toggle("conteudo-ofuscado");
})
botaoFechar.addEventListener("click", function(){
    barraNav.classList.add("barra-lateral--oculta");
    spanSombra.classList.toggle("conteudo-ofuscado");
})
