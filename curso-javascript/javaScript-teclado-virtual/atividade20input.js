let inputtags = document.getElementById("inputtags");
let radiotags = document.getElementById("radiotags");
let paragrafostags = document.getElementById("paragrafostags");
let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");


function criarInput() {
    for (var i = 1; i <= 20; i++) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input" + i);
        inputtags.appendChild(input);
        botao1.style.display = "none";
    }
}

function criarRadio() {

    for (var i = 1; i <= 20; i++) {
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", "radio" + i);
        // radio.setAttribute("disabled",false );
        radiotags.appendChild(radio);
        botao2.style.display = "none";
    }
}
function criarParagrafo() {

    for (var i = 1; i <= 30; i++) {
        var paragrafo = document.createElement("p");
        paragrafo.setAttribute("class", "text");
        paragrafo.setAttribute("id", "paragrafo" + i);
        paragrafo.textContent = "Paragrafo " + i;
        paragrafostags.appendChild(paragrafo);
        // botao3.setAttribute("haidden", "true");
        botao3.style.display = "none";
    }

}
