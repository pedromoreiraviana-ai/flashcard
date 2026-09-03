
// ==========================================
// VIRADA DOS FLASHCARDS
// ==========================================

const flashcards = document.querySelectorAll(".flashcard");

flashcards.forEach((flashcard) => {
    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("virado");
    });

    flashcard.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            flashcard.classList.toggle("virado");
        }
    });

    flashcard.setAttribute("tabindex", "0");
    flashcard.setAttribute("role", "button");
    flashcard.setAttribute(
        "aria-label",
        "Clique para virar o flashcard"
    );
});

// ==========================================
// TAMANHO DE FONTES
// ==========================================

let tamanhoFonteAtual = 16;

const valorAdicionado = 2;
const valorSubtraido = 2;

const btnAumentaFonte =
    document.getElementById("btnAumentaTexto");

const btnDiminuiFonte =
    document.getElementById("btnDiminuiTexto");

const btnRestauraFonte =
    document.getElementById("btnRestauraTexto");

btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);
btnRestauraFonte.addEventListener("click", restauraFonte);

function aumentaFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
    document.documentElement.style.fontSize =
        `${tamanhoFonteAtual}px`;
}

function diminuiFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;

    if (tamanhoFonteAtual < 10) {
        tamanhoFonteAtual = 10;
    }

    document.documentElement.style.fontSize =
        `${tamanhoFonteAtual}px`;
}

function restauraFonte() {
    tamanhoFonteAtual = 16;

    document.documentElement.style.fontSize =
        `${tamanhoFonteAtual}px`;
}

// ==========================================
// LEITURA EM VOZ ALTA
// ==========================================

let lendo = false;

const btnOuvir = document.getElementById("btnOuvir");
const statusLeitura = document.getElementById("statusLeitura");

btnOuvir.addEventListener("click", lerEmVozAlta);

function lerEmVozAlta() {

    if (lendo == true) {

        if (speechSynthesis.paused == true) {
            speechSynthesis.resume();
            statusLeitura.textContent = "Leitura continuando...";
        } else {
            speechSynthesis.pause();
            statusLeitura.textContent = "Leitura pausada.";
        }

        return;
    }

    const texto = document.body.innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    speechSynthesis.cancel();
    speechSynthesis.speak(fala);

    lendo = true;

    statusLeitura.textContent = "Leitura iniciada.";

    fala.onend = finalizarLeitura;
}

function finalizarLeitura() {
    lendo = false;
    statusLeitura.textContent = "Leitura finalizada.";
}

// ==========================================
// CANCELAR LEITURA AO SAIR DA PÁGINA
// ==========================================

window.addEventListener("beforeunload", () => {
    speechSynthesis.cancel();
});
