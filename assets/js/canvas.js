var tabuleiro = document.querySelector("#forca");
var pincel = tabuleiro.getContext("2d");
var posicao = 0; 
var closeWinn = document.querySelector(".close-winn");
var closeLose = document.querySelector(".close-lose");


function desenhaTabuleiroJogo() {
   pincel.fillStyle = 'rgba(17, 116, 165, 0.8)';
   pincel.fillRect(0, 0, 800, 530);
   pincel.fill();
   baseForca();
}
function baseForca() {
   pincel.beginPath();
   pincel.moveTo(100,500);
   pincel.lineTo(200, 470);
   pincel.lineTo(300, 500);
   pincel.lineTo(100,500)
   pincel.lineWidth = 5;
   pincel.stroke();
}

function desenhaTracos(palavraSecreta) {
   var posicao = 0; 
   for (var count = 0; count < palavraSecreta.length; count ++) {
      pincel.beginPath();
      pincel.moveTo(350+posicao, 500);
      pincel.lineTo(350+posicao+25, 500);
      pincel.lineWidth = 5;
      pincel.stroke();
      posicao += 50;
   }
}

function desenhaLetraCorreta(letrasCorretas) {   
   for (var [indice, letra] of letrasCorretas) {
      
      pincel.fillStyle = 'black';
      pincel.font = '30px Georgia'; 
      pincel.fillText(letra.toUpperCase(), 353 + (indice * 50), 490);
   }
}

function desenharLetraErrada(letraErrada) {
   pincel.fillStyle = 'black';
   pincel.font = '30px Georgia';
   pincel.fillText(letraErrada.toUpperCase(), 550 + (posicao * 30), 250);
   posicao += 1;
}

function desenharForca(erroAtual){
   switch (erroAtual) {
      case 1:
         desenharLinha(200, 470, 200, 80);
         desenharLinha(200, 83, 500, 83);
         break;
      case 2: 
         desenharLinha(498, 83, 498, 115);
         break;
      case 3:
         pincel.beginPath();
         pincel.arc(498, 150, 35, 0,2 * 3.14);
         pincel.fill();
         pincel.fillStyle = '#CFD8DC';
         pincel.beginPath();
         pincel.arc(498, 150, 30, 0,2 * 3.14);
         pincel.fill();
         break;
      case 4:
         desenharLinha(498, 185, 498, 300);
         break;
      case 5:
         desenharLinha(498, 300, 450, 350);
         break;
      case 6:
         desenharLinha(498, 300 ,546, 350);
         break;
      case 7:
         desenharLinha(498, 225, 450, 175);
         break;
      case 8:      
         desenharLinha(498, 225, (498 + 48), 175);
         break;
      default:
         break;
   }
}

function desenharLinha(xInicial, yInicial, xFinal, yFinal){  
   pincel.fillStyle = 'black';
   pincel.beginPath();
   pincel.moveTo(xInicial,yInicial);
   pincel.lineTo(xFinal,yFinal);
   pincel.stroke();
}

function vocePerdeu(){
   var exibePalavraSecreta = document.querySelector(".exibe-palavra-secreta");
   exibePalavraSecreta.innerHTML = palavraSecreta;

   var perdeuModal = document.querySelector(".perdeu-modal");   
   perdeuModal.style.display = "block";

   closeLose.addEventListener("click", () =>{
      perdeuModal.style.display = "none"

      reload()
   });
   function reload(){
      location.reload()
   }
}

function voceVenceu() {    
   var venceuModal = document.querySelector(".venceu-modal"); 
   venceuModal.style.display = "block";

   closeWinn.addEventListener("click", () =>{
      venceuModal.style.display = "none";

      reload()
   });
   function reload(){
      location.reload()
   }

   
}