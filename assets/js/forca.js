var palavraSecreta;
var letrasCorretas = new Map();
var erros = [];
var acertos = [];
var play = true;
var listaDePalavras = ['cuscuz','pamonha', 'munguza', 'canjica','curau', 'tapioca', 'macaxeira', 'manoe', 'cocada', 'rapadura', 'beiju'];

var buttonStartPlayer = document.querySelector("#start-game");
var body = document.querySelector("body");


buttonStartPlayer.addEventListener("click", function (event) {
    event.preventDefault();
    desenhaTabuleiroJogo();
    letrasCorretas.clear();
    erros.length = 0;
    acertos.length = 0;
    palavraSecreta = sortearPalavraSecreta();
    desenhaTracos(palavraSecreta);
    window.scroll(0, 500);      
});

function sortearPalavraSecreta() {
    var palavraSorteada = Math.floor(Math.random() * listaDePalavras.length);
    return listaDePalavras[palavraSorteada];
}

body.addEventListener("keyup", function (event) {   
    event.preventDefault();
    if (play) {
        var caractere = event.key; 
        var qtdCaracteres = caractere.length;
        var pattern = /[a-z]/
        if(qtdCaracteres == 1) {
            if ((pattern.test(caractere))) {
                verificarTeclaPressionada(caractere)
                console.log(caractere);
                console.log(qtdCaracteres)

            }
        }
        console.log(caractere.length)
        
    }   
});

function verificarTeclaPressionada(letra) {
    var letrasPressionadas = new Map();
    for (var indice = 0; indice <= palavraSecreta.length; indice++) {
        if (letra === palavraSecreta[indice]){
            letrasPressionadas.set(indice, letra);
            letrasCorretas.set(indice, letra);
        }
    newLetra = letrasPressionadas;
    }

    if (letrasPressionadas.size > 0) {       
        if (acertos.includes(letra)){         
            alert("A letra "+letra.toUpperCase()+" já foi digitada.");
        } else {
            desenhaLetraCorreta(letrasCorretas);
            verificarVencedor(letrasCorretas.size);
        } 
        acertos.push(letra); 
    } else {
        if (erros.includes(letra)){       
            alert("A letra "+letra.toUpperCase()+" já foi digitada.");
        } else {
            desenharLetraErrada(letra);
            erros.push(letra);
            desenharForca(erros.length);
            verificarFimDoJogo(erros.length);
        }
    }
}

function verificarFimDoJogo(qtdErros) {
    if (qtdErros == 8) {
        vocePerdeu();
        play = false;
    }
}

function verificarVencedor(qtdAcertos) {
    if (qtdAcertos == parseInt(palavraSecreta.length)) { 
        voceVenceu();
        play = false;
    }
}