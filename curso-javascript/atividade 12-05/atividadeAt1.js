var area = document.getElementById("area");

function entrar() {
    var nome = prompt("Digite seu nome");
    var sobrenome = prompt("Digite seu sobrenome");

    area.innerHTML = "Bem Vindo " + nome + sobrenome;

    if (nome === "" || nome === null) {
        alert("Ops, Algo deu errado!!");
        // document.write("Por favor digite novamente seu nome");
        area.innerHTML = "Por favor, clique no botão para acessar";

    }else {
        // document.write("Bem vindo " + nome + " " + sobrenome);
        area.innerHTML = "Bem vindo " + nome + "<br> ";
    }

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair
    area.appendChild(botaoSair);

}

function sair(){
    alert("Até mais!")
    area.innerHTML = "Voce saiu"
}
