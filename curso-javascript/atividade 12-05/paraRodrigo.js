var nome = prompt("Digite o grupo de caracteres");
var caracteresRepitidos = {};

for ( i = 0; i < nome.length; i++) {
  var string = nome[i];
  if (caracteresRepitidos[string]) {
    alert("Caracteres repetidos");
    break;
  } else {
    caracteresNao[string] = 1;
  }
}

if (i === nome.length) {
  alert("não tem repetido");
}









