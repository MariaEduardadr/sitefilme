document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault(); 


    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var dataNascimento = document.getElementById("dataNascimento").value;

    var pessoa = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
        sexo: sexo,
        dataNascimento: dataNascimento
    };

    localStorage.setItem("cadastroPessoa", JSON.stringify(pessoa));

    document.getElementById("cadastroForm").reset();

    alert("Cadastro realizado com sucesso!");

     var pessoaArmazenada = localStorage.getItem("cadastroPessoa");
     var pessoa = JSON.parse(pessoaArmazenada);
     console.log(pessoa);
});
