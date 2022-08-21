const rightButton = document.querySelector('#rightButton');
const leftButton = document.querySelector('#leftButton');
const imagemPrincipal = document.querySelector(".imagem-principal");
const imagemPrincipalLightbox = document.querySelector('.imagem-principal-lightbox');
var imagemPrincipalSrc = imagemPrincipal.src;

var imagens = document.querySelectorAll(".thumbnail");

//checkButtons();

imagens.forEach(imagem => {
    imagem.addEventListener("click", () => {
        var imagemAtual = document.querySelector(".imagem-ativa");
        imagemAtual.classList.remove("imagem-ativa");
        imagem.classList.toggle("imagem-ativa");
        var srcImagemAtiva = imagem.src;

        srcNovaImagem = srcImagemAtiva.replace("-thumbnail", "");
        
        refreshImage(srcNovaImagem);
    })
});

function refreshImage(newSrc) {
    imagemPrincipalSrc = newSrc;
    imagemPrincipal.src = newSrc;
    imagemPrincipalLightbox.src = newSrc;
    //checkButtons();
}

rightButton.addEventListener('click', () => {
    console.log('right');
    newSrc(idImagem() + 1);
});
leftButton.addEventListener('click', () => {
    console.log('left')
    newSrc(idImagem() - 1);
})


async function imageValid(src) {
    setTimeout(() => {
        let isValid = false;
        fetch(new Request(src, {method: 'GET', mode: 'no-cors'}))
        .then(response => {
            if(response.status == 200) {
                isValid = true;
            }
            else {
                isValid = false;
            }
        })
        return isValid;
    }, 500);
}

async function newSrc(num) {
    
    var newSrc = mountUrl(num);
    var isImgValid = await imageValid(newSrc);
    
    console.log("imagem é válida: " + isImgValid);
    
    if(isImgValid) {
        refreshImage(newSrc);
    }
    
}
function mountUrl(id) {
    const firstSubstr = imagemPrincipalSrc.slice(0, -5);
    const secondSubstr = imagemPrincipalSrc.slice(-4);
    
    var src = firstSubstr + id + secondSubstr;


    return src;
}

function checkButtons() {
    const nextImage = mountUrl(idImagem() + 1);
    const previousImage = mountUrl(idImagem() - 1);

    if(!imageValid(nextImage)) {
        rightButton.classList.add('hide');
    }
    else {
        rightButton.classList.remove('hide');
    }

    if(!imageValid(previousImage)) {
        leftButton.classList.add('hide');
    }
    else {
        leftButton.classList.remove('hide');
    }
}

function idImagem() {
    var numStr = imagemPrincipalSrc.slice(-5, -4);
    var num = Number.parseInt(numStr);
    return num;
}