/*   
  - quando o usúario clicar no botão de veja o trailer, 
 devemos abrir o modal com o vídeo do trailer.
  
 Passo 01 - Dar um jeito de pegar o elemento que represente o botão 
 na tela usando JS.
 
 Passo 02 - Dar um jeito de identificar quando o usúario clicar no botão.

 Passo 03 - Dar um jeito de pegar o elemento da modal JS.

 Passo 04 - Abrir a modal na tela.
 
 (OBJETIVO 2) - quando o usúario clicar no X devemos fechar a modal.

 Passo 01 - Dar um jeito de pegar o elemento de fechar modal usando JS.

 Passo 02 - Dar um jeito de identificar quando o usúario clicar no X

 Passo 03 - Fechar a modal.

*/
   
//códigos organizados pela ordem correta\\
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDovideo = video.src
 
// Criando a function alterna modal para remover o corrigir o atributo aberto qeu esta se repetindo. Ou seja repatoramos o código!\\
  
function alternarModal(){
  modal.classList.toggle("aberto")
  } 

/* trocando o .add pelo .toggle */ ;
  botaoTrailer.addEventListener("click", () => { 
    alternarModal()
    video.setAttribute("src",linkDovideo);
  });

  // toggle(alterna), usado para alterna ao realizar um tipo de ação.\\
    /*trocando o .remove pelo .toggle */
    botaoFecharModal.addEventListener("click", () =>{
    alternarModal()
    video.setAttribute("src","")
   });

   




// (OBJETIVO 1) \\
/*Passo 01 - Dar um jeito de pegar o elemento que represente o botão 
 na tela usando JS.*/

 // Usando o metodo (querySelection) vai buscar o elemento seletor dentro do parentese, que está no html//
     
 // Resposta - const botaoTrailer = document.querySelector(".botao-trailer"); \\
    
 // Passo 02 - Dar um jeito de identificar quando o usúario clicar no botão. //
 // (addEventListener - Adiciona um evento de escuta ou ouvinte !\\
   
 // Resposta - botaoTrailer.addEventListener("click", () => { \\
    
// Passo 04 - Abrir a modal na tela.\\
  //classList é uma propriedade do objeto modal, que tem a lista de class.Sendo assim podemos adicionar ou remover novas class.\\
   
  /* Resposta - modal.classList.add("aberto");\\
   
   //Atributi usado para assim que fechar a modal, abrir ela novamente! \\
   Resposta - video.setAttribute("src",linkDovideo);

});*/

// Passo 03 - Dar um jeito de pegar o elemento da modal JS.\\
    // Resposta - const modal = document.querySelector(".modal"); \\
   

//(OBJETIVO 2)\\
// Passo 01 - Dar um jeito de pegar o elemento de fechar modal usando JS.\\
   // Resposta - const botaoFecharModal = document.querySelector(".fechar-modal")

// Passo 02 - Dar um jeito de identificar quando o usúario clicar no X.\\
  /* Resposta - botaoFecharModal.addEventListener("click", () =>{
    
    // Passo 03 - Fechar a modal.\\
    Resposta - modal.classList.remove("aberto")
   
    //setAttribute para setar um atributo, atribudo usado para ao 
    fechar a modal fechar video junto com o audio.\\
    
    Resposta - video.setAttribute("src","")
});   *\
   
   //GetElementById pegue um elemnto pelo Id\\
   
   // Resposta - const video = document.getElementById("video")
   
   /* Um Possível medo que poderia ser feito e iria resolver o problema porém, não recomendavél
   colocar informações hardcode. Porque caso mudar vai er preciso vir no aqui no javaScript 
   e mudar o valor!
   const linkDovideo = "https://www.youtube.com/embed/Cb4WV4aXBpk"
   */
   
   // Metodo correto para trazer o valor do src\\
   
   // Respopsta - const linkDovideo = video.src \\
   
   




    
