let area = document.getElementById('area');
let botao = document.getElementById("botao");
let nomeCadastro = []; // Inicializa um array vazio para armazenar os nomes de usuário cadastrados

function entrar() {
  let encontrou = false;
  let nome = prompt("Digite o seu nome");

  if (nome === '' || nome === null) {
    alert("Ops, algo deu errado!");
    area.innerHTML = "Clique no botão para acessar.";
  } else {
    for (let i = 0; i < nomeCadastro.length; i++) {
      if (nomeCadastro[i] === nome) {
        area.innerHTML = "Bem-vindo(a), " + nome + "<br>";
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
        botao.setAttribute("hidden", "true");
        encontrou = true;
        return;
      }
    }
  }
  if (!encontrou) {
    alert("Nome não cadastrado!");
  }
}

function sair() {
  alert("Até mais!");
  area.innerHTML = "Você saiu.";
  botao.removeAttribute("hidden");
}

function cadastrarUsuario() {
  let novoUsuario = prompt("Digite seu nome");

  if (novoUsuario === '' || novoUsuario === null) {
    alert('Ops, algo deu errado!');
    area.innerHTML = "Clique no botão para cadastrar novamente.";
  } else {
    nomeCadastro.push(novoUsuario);
    alert("Cadastro realizado com sucesso!");
  }
}
