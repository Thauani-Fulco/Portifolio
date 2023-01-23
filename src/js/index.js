/*

OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer 

OBJETIVO 2 -Quando o usuário clicar no X devemos fechar a modal


OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer
    - Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - Passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - Passo 3 - dar um jeito de pegar o elemento da modal no js
    - Passo 4 - abrir a modal na tela

    OBJETIVO 2 -Quando o usuário clicar no X devemos fechar a modal
    - Passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
    - Passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - Passo 3 - fechar modal

*/


const botaoTrailer = document.querySelector(".botao-trailer");
const boaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal"); 
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
   video.setAttribute("src", linkDoVideo);
})

boaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

