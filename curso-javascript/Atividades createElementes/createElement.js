var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

var texto = document.createTextNode("Este é o conteúdo do paragrafo...");
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var corpoPagina = document.querySelector("body");
console.log(corpoPagina);
corpoPagina.appendChild(novoParagrafo);

var divContainer = document.getElementById("container");
console.log(divContainer);

elementSpan = document.createElement("span");
elementSpan.appendChild(document.createTextNode("Inserindo um texto dentro do Span"));
console.log(elementSpan);
divContainer.appendChild(elementSpan);

