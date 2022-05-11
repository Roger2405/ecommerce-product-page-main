

var botaoMenu = document.querySelector(".cabecalho__menu");
var botaoFechar = document.querySelector(".barra-lateral__close");
var spanSombra = document.querySelector(".conteudo-ofuscado");
var barraNav = document.querySelector(".barra-lateral");

botaoMenu.addEventListener("click", function(){
    barraNav.classList.remove("barra-lateral--oculta");
})
botaoFechar.addEventListener("click", function(){
    barraNav.classList.add("barra-lateral--oculta");
})

var imagens = document.querySelectorAll(".thumbnail");

imagens.forEach(imagem => {
    imagem.addEventListener("click", function(){
        var imagemPrincipal = document.querySelector(".imagem-principal");
        var imagemAtivaAntiga = document.querySelector(".imagem-ativa");
        imagemAtivaAntiga.classList.remove("imagem-ativa");
        imagem.classList.toggle("imagem-ativa");

        var srcImagemAtiva = imagem.src;
        
        srcImagemAtiva = srcImagemAtiva.replace("-thumbnail", "");

        imagemPrincipal.src = srcImagemAtiva;
    })
    
});