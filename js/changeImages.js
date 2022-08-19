const rightButton = document.querySelector('#rightButton');
const leftButton = document.querySelector('#leftButton');
var imagemPrincipal = document.querySelector(".imagem-principal");
var imagemPrincipalLightbox = document.querySelector('.imagem-principal-lightbox');

var imagens = document.querySelectorAll(".thumbnail");

imagens.forEach(imagem => {
    imagem.addEventListener("click", () => {
        var imagemAtual = document.querySelector(".imagem-ativa");
        imagemAtual.classList.remove("imagem-ativa");
        imagem.classList.toggle("imagem-ativa");
        var srcImagemAtiva = imagem.src;

        srcNovaImagem = srcImagemAtiva.replace("-thumbnail", "");
        
        imagemPrincipal.src = srcNovaImagem;
        imagemPrincipalLightbox.src = srcNovaImagem;
    })
});

rightButton.addEventListener('click', () => {
    var scr = imagemPrincipal.src;
    //var newSrc = src.
})

