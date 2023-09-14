function verificarIdade() {
    // Obtenha o valor da idade inserida pelo usuário
    var idade = parseInt(document.getElementById("idadeInput").value);

    // Obtenha o elemento <p> onde você deseja exibir a mensagem
    var resultadoElement = document.getElementById("resultado");

    // Verifique se a idade é maior ou igual a 18
    if (idade >= 18) {
        resultadoElement.textContent = "Você é maior de idade!";
        resultadoElement.classList.remove("menor-deidade");
        resultadoElement.classList.add("maior-deidade");
    } else {
        resultadoElement.textContent = "Você é menor de idade.";
        resultadoElement.classList.remove("maior-deidade");
        resultadoElement.classList.add("menor-deidade");
    }
}
