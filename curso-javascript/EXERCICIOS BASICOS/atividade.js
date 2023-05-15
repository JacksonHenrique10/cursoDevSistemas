function calcular(){
    let nota1 = parseFloat(document.getElementById("p1").value);
    let nota2 = parseFloat(document.getElementById("p2").value);
    let nomeAluno = document.getElementById("nomeAluno").value;

    resultado = (nota1 + nota2) / 2;
    document.getElementById("media").value = resultado;
    document.getElementById("nome").innerHTML = nomeAluno;

    if(resultado>=7){
        document.getElementById("aprovadoReprovado").value = "APROVADO"

    }else{
        document.getElementById("aprovadoReprovado").value = "REPROVADO"
    }




}