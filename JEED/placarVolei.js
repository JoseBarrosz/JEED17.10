let setsA = 0;
let setsB = 0;
let jogoEncerrado = false;

function incrementarPonto(pontosId, setsId) {
    if (jogoEncerrado) return;

    let pontos = document.getElementById(pontosId);
    let sets = document.getElementById(setsId);
    let pontosAdversarioId = pontosId === 'pontosA' ? 'pontosB' : 'pontosA';
    let setsAdversarioId = setsId === 'setsA' ? 'setsB' : 'setsA';
    let pontosAdversario = document.getElementById(pontosAdversarioId);
    let setsAdversario = document.getElementById(setsAdversarioId);

    pontos.textContent = parseInt(pontos.textContent) + 1;

    let pontosParaVencer = (setsA === 2 && setsB === 2) ? 15 : 25;

    if (pontos.textContent >= pontosParaVencer && (pontos.textContent - parseInt(pontosAdversario.textContent)) >= 2) {
        pontos.textContent = 0;
        pontosAdversario.textContent = 0;

        sets.textContent = parseInt(sets.textContent) + 1;

        if (setsId === 'setsA') {
            setsA++;
        } else {
            setsB++;
        }

        if (setsA === 3 || setsB === 3) {
            alert(`O jogo acabou! ${setsA === 3 ? 'Time A' : 'Time B'} venceu!`);
            jogoEncerrado = true; // Bloqueia a alteração de pontos após o jogo acabar
        }
    }
}

function decrementarPonto(pontosId) {
    if (jogoEncerrado) return;

    let pontos = document.getElementById(pontosId);
    if (pontos.textContent > 0) {
        pontos.textContent = parseInt(pontos.textContent) - 1;
    }
}

// Nova função para reiniciar o jogo
function reiniciarJogo() {
    setsA = 0;
    setsB = 0;
    jogoEncerrado = false;

    // Reinicia os pontos e sets nos elementos do DOM
    document.getElementById('pontosA').textContent = '0';
    document.getElementById('setsA').textContent = '0';
    document.getElementById('pontosB').textContent = '0';
    document.getElementById('setsB').textContent = '0';
}

// Exemplo de como chamar a função ao salvar resultados
document.getElementById('saveResultadoBtn').addEventListener('click', function() {
    // Salva os resultados no h2 correspondente
    const placar1 = document.getElementById('placar1');
    const placar2 = document.getElementById('placar2');
    placar1.textContent = pontosA.textContent; // Supondo que você tenha um ponto para Time A
    placar2.textContent = pontosB.textContent; // Supondo que você tenha um ponto para Time B

    // Reinicia o jogo
    reiniciarJogo();

    // Fecha o modal, se necessário
    const modal = document.getElementById('placarModal');
    modal.style.display = 'none'; // Ou a lógica que você usa para fechar o modal
});
