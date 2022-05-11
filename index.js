

var botaoMenu = document.querySelector(".cabecalho__menu");
var botaoFechar = document.querySelector(".barra-lateral__close");
var spanSombra = document.querySelector(".conteudo-ofuscado");
var barraNav = document.querySelector(".barra-lateral");
var lightbox = document.querySelector(".lightbox");

botaoMenu.addEventListener("click", function(){
    barraNav.classList.remove("barra-lateral--oculta");
})
botaoFechar.addEventListener("click", function(){
    barraNav.classList.add("barra-lateral--oculta");
})


var imagemPrincipal = document.querySelector(".imagem-principal");
imagemPrincipal.addEventListener("click", function(){
    lightbox.classList.add("lightbox-ativo");
});
var botaoFechar = document.querySelector(".botao-fechar");
botaoFechar.addEventListener("click", function(){
    lightbox.classList.remove("lightbox-ativo");
})

var imagens;
var buscaPorLightbox = document.querySelector(".lightbox-ativo");
if(buscaPorLightbox != null){
    imagens = document.querySelectorAll(".thumbnail-lightbox");
}
else {
   imagens = document.querySelectorAll(".thumbnail");
}

imagens.forEach(imagem => {
    imagem.addEventListener("click", function(){
        var imagemAtivaAntiga = document.querySelector(".imagem-ativa");
        imagemAtivaAntiga.classList.remove("imagem-ativa");
        imagem.classList.toggle("imagem-ativa");

        var srcImagemAtiva = imagem.src;
        
        srcImagemAtiva = srcImagemAtiva.replace("-thumbnail", "");

        imagemPrincipal.src = srcImagemAtiva;
    })
    
});