function logar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById("senha").value;
    if (nome === "c" && senha === "c") {
        alert('Login realizado com sucesso');
        location.href = "index.html";
    } else {
        alert('Usuário ou senha incorretos'); 
    }   
}