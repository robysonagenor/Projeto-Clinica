let servicos = document.querySelector('.servicos');

let containerSubServicos = document.querySelector('.container-menu-servicos');
let mouseSobreServicos = false;
let mouseSobreSubServicos = false;


// let botaoMenuHamburguer = document.querySelector("#menu-hamburguer");


let imagensBanner = document.querySelectorAll('.banner img');
let imagemBannerAtiva = 0;

servicos.onmouseenter = () => {
    containerSubServicos.style.display = 'block';
    mouseSobreServicos = true;
}

servicos.onmouseleave = () => {
    mouseSobreServicos = false;
    checarMouseMenu();
}

containerSubServicos.onmouseenter = () => {
    mouseSobreSubServicos = true;
}

containerSubServicos.onmouseleave = () => {
    mouseSobreSubServicos = false;
    checarMouseMenu();
}

function checarMouseMenu() {
    if (!mouseSobreServicos && !mouseSobreSubServicos) {
        containerSubServicos.style.display = 'none';
    }
}


// function mudarMenu() {
//     let menu = document.querySelector('header nav');
//     if (menu.style.display === 'none') {
//         menu.style.display === 'block';
//     }
//     else {
//         menu.style.display = 'none';
//     }
// }


// botaoMenuHamburguer.onclick = mudarMenu;



function mudarSlide(){
    let imagemAtual = imagensBanner[imagemBannerAtiva];

    imagemAtual.classList.remove('ativa');

    imagemBannerAtiva++;

    if(imagemBannerAtiva == imagensBanner.length){
        imagemBannerAtiva = 0;
    }

    let proximaImagem = imagensBanner[imagemBannerAtiva];

    proximaImagem.classList.add('ativa');
}

setInterval(mudarSlide, 3000);


// for(let i = 0; i < imagensBanner.length; i++){
//     let imagem = imagensBanner[i];

//     imagem.classList.remove('ativa');
// }

// for(let imagem of imagensBanner){

// }