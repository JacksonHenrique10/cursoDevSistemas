let inputtags = document.getElementById("inputtags");
let radiotags = document.getElementById("radiotags");
let paragrafostags = document.getElementById("paragrafostags");

function criar() {
    for (var i = 1; i <= 20; i++) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input" + i);
        inputtags.appendChild(input);
    }

    for (var i = 1; i <= 20; i++) {
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", "radio" + i);
        // radio.setAttribute("disabled",false );
        radiotags.appendChild(radio);
    }

    for(var i=1; i<=30; i++){
        var paragrafo = document.createElement("p");
        paragrafo.setAttribute("class", "text");
        paragrafo.setAttribute("id", "paragrafo" + i );
        paragrafo.textContent = "Paragrafo " + i ;
        paragrafostags.appendChild(paragrafo);
    }
}

