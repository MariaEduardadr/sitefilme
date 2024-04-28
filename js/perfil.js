var pessoaArmazenada = localStorage.getItem("cadastroPessoa");
var pessoa = JSON.parse(pessoaArmazenada);


var nomeElement = document.createElement("p");
nomeElement.textContent = "Nome: " + pessoa.nome;

var emailElement = document.createElement("p");
emailElement.textContent = "Email: " + pessoa.email;

var telefoneElement = document.createElement("p");
telefoneElement.textContent = "Telefone: " + pessoa.telefone;

var sexoElement = document.createElement("p");
sexoElement.textContent = "Sexo: " + (pessoa.sexo === "F" ? "Feminino" : "Masculino");

var dataNascimentoElement = document.createElement("p");
dataNascimentoElement.textContent = "Data de Nascimento: " + pessoa.dataNascimento;


var perfilInfoElement = document.getElementById("perfilInfo");
perfilInfoElement.appendChild(nomeElement);
perfilInfoElement.appendChild(emailElement);
perfilInfoElement.appendChild(telefoneElement);
perfilInfoElement.appendChild(sexoElement);
perfilInfoElement.appendChild(dataNascimentoElement);