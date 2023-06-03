let pessoa = {
    nome: "antonio cesar",
    idade: 99,
    altura: 1.75,
    cargo: "professor"
};
// console.log(pessoa);
document.write(`nome: ${pessoa.nome} <br>`);
document.write(`idade: ${pessoa.idade}<br>`);
document.write(`idade: ${pessoa.altura}<br>`);
document.write(`idade: ${pessoa.cargo}<br>`);

let usuario = [
    { nome: "fulano", cargo: "dev jr", status: "ativo" },
    { nome: "fulanob", cargo: "dev pl", status: "ativo" },
    { nome: "fulanoc", cargo: "dev sr", status: "ativo" },
];

document.write("Nome: "+usuario[1].nome+"<br>")
document.write("cargo: "+usuario[1].cargo+"<br>")
document.write("status: "+usuario[1].status+"<br>")