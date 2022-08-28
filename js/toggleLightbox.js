var lightbox = document.querySelector(".div-lightbox");
var botaoFechar = document.querySelector(".botao-fechar");
imagemPrincipal = document.querySelector(".imagem-principal");

imagemPrincipal.addEventListener("click", function(){
    if(window.innerWidth >= 1440) {
        lightbox.classList.add("lightbox-ativo");
    }

});

botaoFechar.addEventListener("click", function(){
    lightbox.classList.remove("lightbox-ativo");
    
});

window.onresize = () => {
    if(window.innerWidth <= 1440) {
        if(lightbox.className.includes('lightbox-ativo')) {
            lightbox.classList.remove("lightbox-ativo");
            
        }
    }
}


window.addEventListener('keydown', () => {
    if(window.event.keyCode == '27') {
        lightbox.classList.remove("lightbox-ativo");
    }

});