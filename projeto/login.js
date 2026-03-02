function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "adm@1234" && senha === "1234") {
        alert("Login realizado com sucesso!");
        window.location.href = "projeto/html/adm.html";
        return false;
    } else {
        alert("Usuário ou senha incorretos!");
        return false;
    }

}






