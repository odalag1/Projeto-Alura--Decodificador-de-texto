document.addEventListener("DOMContentLoaded", function() {
    const btnCriptografar = document.getElementById("btnCriptografar");
    const btnCopiar = document.getElementById("btnCopiar");
    const textArea = document.querySelector(".text-area");
    const mensagem = document.querySelector(".mensagem");
    const btnDesicripitografar =document.getElementById("btnDesicripitografar")

    btnCopiar.addEventListener("click", function() {
        mensagem.select();
        document.execCommand("copy");
    });

    btnCriptografar.addEventListener("click", function() {
        const textEncriptografado = encriptar(textArea.value);
        mensagem.value = textEncriptografado;
        textArea.value = "";
        btnCopiar.style.display = "block";
        mensagem.style.backgroundImage = "none";
    });

    btnDesicripitografar.addEventListener("click", function() {
        const textDesiptografado = desencriptar(textArea.value);
        mensagem.value = textDesiptografado;
        textArea.value = "";
    });

    function encriptar(stringCript) {
        let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringCript = stringCript.toLowerCase();
        for (let i = 0; i < matriz.length; i++) {
            if (stringCript.includes(matriz[i][0])) {
                stringCript = stringCript.replaceAll(matriz[i][0], matriz[i][1]);
            }
        }
        return stringCript;
    }
});

function desencriptar(stringDesicriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesicriptar = stringDesicriptar.toLowerCase();
        for (let i = 0; i < matriz.length; i++) {
            if (stringDesicriptar.includes(matriz[i][1])) {
                stringDesicriptar = stringDesicriptar.replaceAll(matriz[i][1], matriz[i][0]);
            }
        }
        return stringDesicriptar;
}

