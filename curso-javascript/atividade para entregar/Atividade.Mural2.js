function entrar(){
    nome = prompt("Digite seu nome");

    if(nome==null || nome==""){
        alert("Por Favor Preencha a campo de nome!!");
        bemVindo.innerHTML = "Clique em acessar";

    }else{
        bemVindo.innerHTML = "Bem Vindo "+nome;
    }
}


function calcularMatriz(){
    let matrizA = new Array;

    matrizA[0] = parseInt(document.getElementById("num1").value);
    matrizA[1] = parseInt(document.getElementById("num2").value);
    matrizA[2] = parseInt(document.getElementById("num3").value);
    matrizA[3] = parseInt(document.getElementById("num4").value);
    matrizA[4] = parseInt(document.getElementById("num5").value);
    matrizA[5] = parseInt(document.getElementById("num6").value);
    matrizA[6] = parseInt(document.getElementById("num7").value);
    matrizA[7] = parseInt(document.getElementById("num8").value);
    matrizA[8] = parseInt(document.getElementById("num9").value);
    matrizA[9] = parseInt(document.getElementById("num10").value);    
    matrizA[10] = parseInt(document.getElementById("num11").value);
    matrizA[11] = parseInt(document.getElementById("num12").value);
    matrizA[12] = parseInt(document.getElementById("num13").value);
    matrizA[13] = parseInt(document.getElementById("num14").value);
    matrizA[14] = parseInt(document.getElementById("num15").value);
    matrizA[15] = parseInt(document.getElementById("num16").value);
    matrizA[16] = parseInt(document.getElementById("num17").value);
    matrizA[17] = parseInt(document.getElementById("num18").value);
    matrizA[18] = parseInt(document.getElementById("num19").value);
    matrizA[19] = parseInt(document.getElementById("num20").value);

    let matrizB = new Array;

    matrizB[0] = parseInt(document.getElementById("num21").value);
    matrizB[1] = parseInt(document.getElementById("num22").value);
    matrizB[2] = parseInt(document.getElementById("num23").value);
    matrizB[3] = parseInt(document.getElementById("num24").value);
    matrizB[4] = parseInt(document.getElementById("num25").value);
    matrizB[5] = parseInt(document.getElementById("num26").value);
    matrizB[6] = parseInt(document.getElementById("num27").value);
    matrizB[7] = parseInt(document.getElementById("num28").value);
    matrizB[8] = parseInt(document.getElementById("num29").value);
    matrizB[9] = parseInt(document.getElementById("num30").value);    
    matrizB[10] = parseInt(document.getElementById("num31").value);
    matrizB[11] = parseInt(document.getElementById("num32").value);
    matrizB[12] = parseInt(document.getElementById("num33").value);
    matrizB[13] = parseInt(document.getElementById("num34").value);
    matrizB[14] = parseInt(document.getElementById("num35").value);
    matrizB[15] = parseInt(document.getElementById("num36").value);
    matrizB[16] = parseInt(document.getElementById("num37").value);
    matrizB[17] = parseInt(document.getElementById("num38").value);
    matrizB[18] = parseInt(document.getElementById("num39").value);
    matrizB[19] = parseInt(document.getElementById("num40").value);

    
    let matrizC = new Array;

    matrizC[0] = matrizA[0] - matrizB[0];
    matrizC[1] = matrizA[1] - matrizB[1];
    matrizC[2] = matrizA[2] - matrizB[2];
    matrizC[3] = matrizA[3] - matrizB[3];
    matrizC[4] = matrizA[4] - matrizB[4];
    matrizC[5] = matrizA[5] - matrizB[5];
    matrizC[6] = matrizA[6] - matrizB[6];
    matrizC[7] = matrizA[7] - matrizB[7];
    matrizC[8] = matrizA[8] - matrizB[8];
    matrizC[9] = matrizA[9] - matrizB[9];
    matrizC[10] = matrizA[10] - matrizB[10];
    matrizC[11] = matrizA[11] - matrizB[11];
    matrizC[12] = matrizA[12] - matrizB[12];
    matrizC[13] = matrizA[13] - matrizB[13];
    matrizC[14] = matrizA[14] - matrizB[14];
    matrizC[15] = matrizA[15] - matrizB[15];
    matrizC[16] = matrizA[16] - matrizB[16];
    matrizC[17] = matrizA[17] - matrizB[17];
    matrizC[18] = matrizA[18] - matrizB[18];
    matrizC[19] = matrizA[19] - matrizB[19];

    document.getElementById("resultado1").value = matrizC[0];
    document.getElementById("resultado2").value = matrizC[1];
    document.getElementById("resultado3").value = matrizC[2];
    document.getElementById("resultado4").value = matrizC[3];
    document.getElementById("resultado5").value = matrizC[4];
    document.getElementById("resultado6").value = matrizC[5];
    document.getElementById("resultado7").value = matrizC[6];
    document.getElementById("resultado8").value = matrizC[7];
    document.getElementById("resultado9").value = matrizC[8];
    document.getElementById("resultado10").value = matrizC[9];
    document.getElementById("resultado11").value = matrizC[10];
    document.getElementById("resultado12").value = matrizC[11];
    document.getElementById("resultado13").value = matrizC[12];
    document.getElementById("resultado14").value = matrizC[13];
    document.getElementById("resultado15").value = matrizC[14];
    document.getElementById("resultado16").value = matrizC[15];
    document.getElementById("resultado17").value = matrizC[16];
    document.getElementById("resultado18").value = matrizC[17];
    document.getElementById("resultado19").value = matrizC[18];
    document.getElementById("resultado20").value = matrizC[19];
}