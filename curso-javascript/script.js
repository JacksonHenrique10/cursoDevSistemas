// teste = "isto é um teste";
// teste = new String("isto é um teste");
// teste1 = "isto é um teste. ";
// teste2 = " somente um teste";
// teste3 = teste1 + teste2;
// teste3+="!"
// // alert(teste3)

// var frase = "Este é o meu Brasil."
// document.write(frase.length)

// var frase1 = "Ouvindo você esquece. Lendo você aprende. Fazendo você sabe.";
// alert(frase1.toUpperCase());
// alert(frase1.toLowerCase());

// var frase3 = "Brasil, meu Brasil Brasileiro...";
// var ind = frase3.indexOf("meu");
// document.write(ind);

// var a = prompt("Digite um numero");
// if (a>2){
//     alert("A é maior que 2");
// }else{
//     alert("A é menor que 2");
// }

// var x = 2;
// var y = 4;
// if((x==2)&&(y==3)){
//     var z= x + y;
//     alert("O valor de z = "+z);
// }else{
//     alert("Alguma informação deu como false!!!")}

var diaSemana = 1;
switch(diaSemana){
    case 0 : document.write("Domingo");break;
    case 1 : document.write("Segunda");break;
    case 2 : document.write("Terça");break;
    case 3 : document.write("Quarta");break;
    case 4 : document.write("Quinta");break;
    case 5 : document.write("Sexta");break;
    case 6 : document.write("Sabado");break;
    default : alert("Dia da semana invalido")

}