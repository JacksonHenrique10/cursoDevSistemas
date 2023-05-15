var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite seu nome:");
    if(nome==""|| nome == null){
        alert("Por favor preencher o campo de nome !!");
        area.innerHTML = "Clique no butão para acessar..."

    }else{
        area.innerHTML = "Bem vindo "+nome;
    }
}

function mostrarNumeros(){
    
 var arrayG = new Array(5)
 arrayG[0] = parseInt(document.getElementById("numero1").value);
 arrayG[1] = parseInt(document.getElementById("numero2").value);
 arrayG[2] = parseInt(document.getElementById("numero3").value);
 arrayG[3] = parseInt(document.getElementById("numero4").value); 
 arrayG[4] = parseInt(document.getElementById("numero5").value); 

 var arrayH = new Array (6)
 arrayH[0] = parseInt(document.getElementById("numero6").value);
 arrayH[1] = parseInt(document.getElementById("numero7").value);
 arrayH[2] = parseInt(document.getElementById("numero8").value);
 arrayH[3] = parseInt(document.getElementById("numero9").value);
 arrayH[4] = parseInt(document.getElementById("numero10").value);
 arrayH[5] = parseInt(document.getElementById("numero11").value);

 var arrayI = new Array (11)
  arrayI[0] = arrayG[0];
  arrayI[1] = arrayG[1];
  arrayI[2] = arrayG[2];
  arrayI[3] = arrayG[3];
  arrayI[4] = arrayG[4];
  arrayI[5] = arrayH[0];
  arrayI[6] = arrayH[1];
  arrayI[7] = arrayH[2];
  arrayI[8] = arrayH[3];
  arrayI[9] = arrayH[4];
  arrayI[10] = arrayH[5];

  
    document.getElementById("resultados1").value  = arrayI[0];
    document.getElementById("resultados2").value  = arrayI[1];
    document.getElementById("resultados3").value  = arrayI[2];
    document.getElementById("resultados4").value  = arrayI[3];
    document.getElementById("resultados5").value  = arrayI[4];
    document.getElementById("resultados6").value  = arrayI[5];
    document.getElementById("resultados7").value  = arrayI[6];
    document.getElementById("resultados8").value  = arrayI[7];
    document.getElementById("resultados9").value  = arrayI[8];
    document.getElementById("resultados10").value = arrayI[9];
    document.getElementById("resultados11").value = arrayI[10];
  }

  
// var notas = new Array(5);
// notas[0] = 8.5;
// notas[1] = 5.0;
// notas[2] = 10.0
// notas[3] = 9.0;
// notas[4] = 4.5;

// document.write("Notas: "+notas[0]+" , "+notas[1]+" e "+notas[2]+"<br>");

// //dia semana

// var dia_semana = new Array(7);
// dia_semana[0] = "Domingo";
// dia_semana[1] = "Segunda-Feira";
// dia_semana[2] = "Terça-Feira";
// dia_semana[3] = "Quarta-Feira";
// dia_semana[4] = "Quinta-Feira";
// dia_semana[5] = "Sexta-Feira";
// dia_semana[6] = "Sabado";

// document.write("<br>Quais são os dias da semana :"+dia_semana[0]+", "+dia_semana[1]+", "+dia_semana[2]+", "+dia_semana[3]+", "+dia_semana[4]+", "+dia_semana[5]+", "+dia_semana[6]+"<br>");

// document.write("<br>Hoje é "+dia_semana[2]);

// var diaSemana = new Array("domingo", "Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "sexta-feira", "Sabado");

// document.write("<br>Na semana seguinte teremos aulas da google cloud na "+diaSemana[4]+" e "+diaSemana[5]+"<br>"+"<br>");





// var arrayA = new Array(5);
// arrayA[0] = prompt("Digite o 1 numero"+"<br>");
// arrayA[1] = prompt("Digite o 2 numero"+"<br>");
// arrayA[2] = prompt("Digite o 3 numero"+"<br>");
// arrayA[3] = prompt("Digite o 4 numero"+"<br>");
// arrayA[4] = prompt("Digite o 5 numero"+"<br>");
// console.log(arrayA);
// document.write(arrayA[0]+"<br>");
// document.write(arrayA[1]+"<br>");
// document.write(arrayA[2]+"<br>");
// document.write(arrayA[3]+"<br>");
// document.write(arrayA[4]+"<br>");
// var arrayB = new Array(5);
// arrayB[0] = parseInt(arrayA[0]*arrayA[0]+"<br>");
// arrayB[1] = parseInt(arrayA[1]*arrayA[1]+"<br>");
// arrayB[2] = parseInt(arrayA[2]*arrayA[2]+"<br>");
// arrayB[3] = parseInt(arrayA[3]*arrayA[3]+"<br>");
// arrayB[4] = parseInt(arrayA[4]*arrayA[4]+"<br>");

// document.write(arrayB[0]+"<br>");
// document.write(arrayB[1]+"<br>");
// document.write(arrayB[2]+"<br>");
// document.write(arrayB[3]+"<br>");
// document.write(arrayB[4]+"<br>");

////////ex.2

// var arrayC = new Array(5);
// arrayC[0] = prompt("Digite o 1 numero da lista C "+"<br>");
// arrayC[1] = prompt("Digite o 2 numero da lista C "+"<br>");
// arrayC[2] = prompt("Digite o 3 numero da lista C "+"<br>");
// arrayC[3] = prompt("Digite o 4 numero da lista C "+"<br>");
// arrayC[4] = prompt("Digite o 5 numero da lista C "+"<br>");


// var arrayD = new Array(5);
// arrayD[0] = prompt("Digite o 1 numero da lista D "+"<br>");
// arrayD[1] = prompt("Digite o 2 numero da lista D "+"<br>");
// arrayD[2] = prompt("Digite o 3 numero da lista D "+"<br>");
// arrayD[3] = prompt("Digite o 4 numero da lista D "+"<br>");
// arrayD[4] = prompt("Digite o 5 numero da lista D "+"<br>");

// var arrayE = new Array(5);
// arrayE[0] = arrayC[0] + "<br>"; 
// arrayE[1] = arrayC[1] + "<br>";
// arrayE[2] = arrayC[2] + "<br>";
// arrayE[3] = arrayC[3] + "<br>";
// arrayE[4] = arrayC[4] + "<br>";
// arrayE[5] = arrayD[0] + "<br>";
// arrayE[6] = arrayD[1] + "<br>";
// arrayE[7] = arrayD[2] + "<br>";
// arrayE[8] = arrayD[3] + "<br>";
// arrayE[9] = arrayD[4] + "<br>";

// document.write(arrayE[0]+"<br>");
// document.write(arrayE[1]+"<br>");
// document.write(arrayE[2]+"<br>");
// document.write(arrayE[3]+"<br>");
// document.write(arrayE[4]+"<br>");
// document.write(arrayE[5]+"<br>");
// document.write(arrayE[6]+"<br>");
// document.write(arrayE[7]+"<br>");
// document.write(arrayE[8]+"<br>");
// document.write(arrayE[9]+"<br>");


