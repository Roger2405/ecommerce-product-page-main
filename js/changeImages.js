const rightButton = document.querySelector('#rightButton');
const leftButton = document.querySelector('#leftButton');
const imagemPrincipal = document.querySelector(".imagem-principal");
const imagemPrincipalLightbox = document.querySelector('.imagem-principal-lightbox');
var imageSource = imagemPrincipal.src;

var imagens = document.querySelectorAll(".thumbnail");
var newSrcImage = newSrc(idImagem());

imagens.forEach(imagem => {
    imagem.addEventListener("click", () => {
        newSrcImage = imagem.src.replace("-thumbnail", "");
        refreshImage();
        /*
        resetActiveImageClass();
        imagem.classList.add("imagem-ativa");
        
        var srcImagemAtiva = imagem.src;
        */
    })
});

function refreshImage() {
    imageSource = newSrcImage;
    imagemPrincipal.src = newSrcImage;
    imagemPrincipalLightbox.src = newSrcImage;
    refreshThumbnail();
}
function refreshThumbnail() {
    let srcThumbnail = newSrcImage.replace(".jpg", "-thumbnail.jpg");
    imagens.forEach((imagem => {
        if(imagem.src == srcThumbnail) {
            imagem.classList.add("imagem-ativa");
        }
        else {
            imagem.classList.remove("imagem-ativa");
        }
    }))
}

rightButton.addEventListener('click', () => {
    rightImage();
});
leftButton.addEventListener('click', () => {
    leftImage();
})

window.addEventListener('keydown', () => {
    if(window.event.keyCode == '37') {
        leftImage();
    }
    else if(window.event.keyCode == '39') {
        rightImage();
    }
})



function leftImage() {
    newSrcImage = newSrc(idImagem() - 1);
    checkImage();
}
function rightImage() {
    newSrcImage = newSrc(idImagem() + 1);
    checkImage();
}

function checkImage() {
    fetch(new Request(newSrcImage, {method: 'GET', mode: 'no-cors'}))
    .then(response => {
        if(response.status == 200) {
            refreshImage(newSrcImage);
        }
    })
    
}
function newSrc(id) {
    const firstSubstr = imageSource.slice(0, -5);
    const secondSubstr = imageSource.slice(-4);
    
    var src = firstSubstr + id + secondSubstr;
    return src;
}
function idImagem() {
    var numStr = imageSource.slice(-5, -4);
    var num = Number.parseInt(numStr);
    return num;
}