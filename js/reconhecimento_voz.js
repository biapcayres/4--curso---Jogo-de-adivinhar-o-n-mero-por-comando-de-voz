window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition(); // const que guarda as infos ditas

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', function onSpeak(e){
    chute = e.results[0][0].transcript; // acessando o que foi dito ex: guilherme
    mostrar_chute_na_tela(chute);
    verifica_se_chute_e_valido(chute);
    retorna_resultado(chute);

})

const elemento_chute = document.querySelector('#numero_chute');

function mostrar_chute_na_tela(chute) {
    elemento_chute.innerHTML = `
        <div> 
            <h2>Você disse:</h2>
            <h3 class="box">${chute}</h3>
        </div>
    `;
    
}

const frase_resposta = document.querySelector('#frase_resposta')

function retorna_resultado(chute){

    if (numero_secreto > chute) {
        frase_resposta.innerHTML = `
        <div>
            <h2>O número é maior <i class="fa-solid fa-arrow-up"></i></h2>
        </div>
    `
    } else if (numero_secreto < chute) {
        frase_resposta.innerHTML = `
        <div>
            <h2>O número é menor <i class="fa-solid fa-arrow-down"></i></h2>
        </div>
    `
    } else if (numero_secreto === Number(chute)){
        frase_resposta.innerHTML = `
            <div>
                <h2>Parabéns! Você acertou! O número era ${numero_secreto}.</h2>
            </div>
            <div>
                <button id="jogar_novamente" type="button">Jogar novamente</button>
            </div>
        `
    jogar_novamente();
    }
}

// recomeçando a function recognition que escutará novamente um chute pelo reconhecimento de voz
recognition.addEventListener('end', () => recognition.start());