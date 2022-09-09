function verifica_se_chute_e_valido(chute){

    const numero = +chute; // Number(chute)
    
    //se o numero passado for um NaN
    if (Number.isNaN(numero)){

        elemento_chute.innerHTML += `
            <div class="frase_invalida">Valor inválido! Diga um número.</div>
        `;
        frase_resposta.innerHTML = '';

    } else if (numero < numero_menor || numero > numero_maior){

        elemento_chute.innerHTML += `
            <div class="frase_invalida">Valor inválido! O número precisa estar entre ${numero_maior} e ${numero_menor}.</div>
        `;
        frase_resposta.innerHTML = '';

    }
}

function jogar_novamente(){

    const botao_jogar_novamente = document.querySelector('#jogar_novamente');

    botao_jogar_novamente.addEventListener('click', (e) => window.location.reload());
}
