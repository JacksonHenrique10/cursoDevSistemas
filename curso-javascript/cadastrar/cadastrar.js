var area = document.getElementById("area");

function entrar() {
    var nomeCadastro = prompt("Digite seu login.: ");
    var senha = prompt("Digite sua senha");

    if (nomeCadastro === "Jackson" && senha === "Jackson") {
        area.innerHTML = "Bem Vindo " + nomeCadastro;
    } else if (nomeCadastro === "" || nomeCadastro === null || senha === "" || senha === null) {
        alert("Login incorreto");
        area.innerHTML = "Por favor, indique o login correto";
    } else {
        area.innerHTML = "Login ou senha incorretos, tente novamente";
    }

    document.getElementById("idBotao").style.display = "none";

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);

}

function sair(){
alert("Até mais");
area.innerHTML = "Você saiu";
}
