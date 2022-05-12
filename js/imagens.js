var imagens = document.querySelectorAll(".thumbnail");
var imagensPrincipais = document.querySelectorAll(".imagem-principal");
var botaoFechar = document.querySelector(".botao-fechar");

var lightbox = document.querySelector(".lightbox");

imagensPrincipais[0].addEventListener("click", function(){
    lightbox.classList.add("lightbox-ativo");
})

imagens.forEach(imagem => {
    imagem.addEventListener("click", function(){
        var imagensAntiga = document.querySelector(".imagem-ativa");
        imagensAntiga.classList.remove("imagem-ativa");
        
        
        console.log("Classes pertencentes à imagem clickada: " + imagem.classList);
        imagem.classList.toggle("imagem-ativa");
        var srcImagemAtiva = imagem.src;
        srcImagemAtiva = srcImagemAtiva.replace("-thumbnail", "");
        
        imagensPrincipais[0].src = srcImagemAtiva;
        imagensPrincipais[1].src = srcImagemAtiva;
    })
});

botaoFechar.addEventListener("click", function(){
    lightbox.classList.remove("lightbox-ativo");
    
})