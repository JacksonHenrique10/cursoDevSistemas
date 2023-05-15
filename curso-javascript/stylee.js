// var nome = prompt("Qual é o seu nome?")
// var sobrenome = prompt("Qual é o seu sobrenome?")

// document.write("<h1>Bem Vindo " +nome+ " "+ sobrenome+"</h1>")
// document.write("<img src=img/images.jpg>")

// var numero1 = parseInt(prompt("Digite um numero: "));
// var numero2 = parseInt(prompt("Digite o segundo numero: "));
// var resultado =  numero1 + numero2;
// document.write("<h1>O Resultado = </h1>" + resultado);


// var numB = parseFloat(prompt("Digite um numero")); //trabalhar com numero inteiro
// alert(numB + " É do tipo " + typeof (numB)) //typeof indica o tipo da variavel


// var a = 10/3
// document.write( a);

// a = a.toFixed(2);
// document.write("<br>"+ a);

// var valorDigitado = prompt("Digite: ");
// var a = valorDigitado/3;
// document.write( a);

// a = a.toFixed(2);
// document.write("<br>"+ a);

// var a = parseInt(prompt("Digite o valor: "));
// var b = parseInt(prompt("Digite o valor: "));
// var c = a%b;
// document.write("O resto da divisão de "+a+" por "+b+" é = "+c)

//relacionais
// var a = 5;
// var b = 6; 
// alert(a<b);

// var a = 3;
// var b = 5;
// alert("A = B: "+(a==b));
// alert("A é diferente de B: "+(a!=b));

// var a =6;
// var b=3;
// var c=1;
// alert((a>b)&&(b>c));

// var a =6;
// var b=3;
// var c=1;
// alert((a>b)&&(b>c));
// alert((a>b)|| (b==c));

// var filho = prompt("O seu filho esta se formando? Se sim digitar 1, senão digitar = 0");
// var prova = prompt("seu filho gabaritou a prova? Se sim digite 1, senão digite = 1");

// alert("O filho vai ganhar o carro, se formar e gabaritar a prova ")
// alert((filho==1) || (prova==1) );

//--------------- função

function somarNumeros(){
    var numero1 = parseInt( document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value); 
    soma = numero1 + numero2;
    alert("A soma é = "+soma);

}