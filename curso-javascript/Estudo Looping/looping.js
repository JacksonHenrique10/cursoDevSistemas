// var i=0;
// document.write(i+"<br> ");
// i=1;
// document.write(i+"<br>");
// i=1;
// document.write(i+"<br>");
// i=2;
// document.write(i+"<br>");
// i=3;
// document.write(i+"<br>");
// i=4;
// document.write(i+"<br>");
// i=5;
// document.write(i+"<br>");
// i=6;
// document.write(i+"<br>");
// i=7;
// document.write(i+"<br>");
// i=8;
// document.write(i+"<br>");
// i=9;
// document.write(i+"<br>");

// exemplo da apostila

// for(let i=1 ; i<1000;i++){
//     if(i===1000){
//     brake;
//     }
//     console.log("Numero total de carros: " +i)
//     document.write("Esse numero é = " +i+"<br>");

// }

//primeiro exercicio


// for(let i=15 ; i<=200;i++){
    
//     document.write("O quadrado de "+i+" é  ="   +i*i+" <br>");

// }

let soma = 0;
for(i=0; i<=500; i++){
    let verifica = i%2;
    if (verifica == 0 ){
        soma = soma + i;
    }
}
document.write("O resultado dos numeros pares = "+soma+"<br>")