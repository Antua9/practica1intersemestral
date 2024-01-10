// evento de clic en el boton "decir"
document.getElementById("hablar").addEventListener("click", () => {
    decir(document.getElementById("texto").value);

});

// funcion para realizar la sintesis de voz
function decir(texto) {
    //crea un objeto de sintesis de voz y establecer el texto a hablar
    const utterance = new SpeechSynthesisUtterance(texto);

    // Realizar la sintresis de voz
    speechSynthesis.speak(utterance);

    //ajustar el tono de voz 
    texto.pitch = 2;
    texto.voices[7];

}