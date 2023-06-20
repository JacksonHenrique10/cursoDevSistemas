let area = document.getElementById('area');
let botao = document.getElementById("botao");
let nomeCadastro = ["jackson", "fulano1", "fulano2", "fulano3", "fulano4"];

function entrar() {
    let encontrou = false;
    let nome = prompt("Digite o seu nome");

    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        for (let i = 0; i <= 4; i++) {
            if ((nomeCadastro[i] === nome)) {
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                encontrou = true;
                return;
            }
        }
        if (encontrou == false) {
            alert("Nome não cadastrado, favor realizar cadastro!")
        }
    }
}



function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu";
    botao.hidden = false;

    setTimeout(function () {
        area.innerHTML = "";
    }, 3000);
}
