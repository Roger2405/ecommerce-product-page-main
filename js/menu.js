
var botaoMenu = document.querySelector(".cabecalho__menu--botao");
var barraNav = document.querySelector(".cabecalho__menu--nav");
const divMenu = document.querySelector(".cabecalho__menu");


botaoMenu.addEventListener("click", function(){
    var menuOculto = barraNav.classList.toggle('nav-oculto');
    if(menuOculto) {
        divMenu.style.backgroundColor = 'unset';
        botaoMenu.src = '../images/icon-menu.svg';
    }
    else {
        divMenu.style.backgroundColor = 'hsla(0, 0%, 0%, 0.377)';
        botaoMenu.src = '../images/icon-close.svg';
    }
})




