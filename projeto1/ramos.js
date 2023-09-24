function verificarIdade() {
    // primeiro obetr o valor da idade inserida pelo usuário
    var idade = parseInt(document.getElementById("idadeInput").value);

    // Oobter um  elemento <p> onde  exibir a mensagem
    var resultadoElement = document.getElementById("resultado");

    // Criar uma condição se a idade é maior ou igual a 18
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

function verificarimc(){
    // para inserir o valor do peso do usuário e a altura//
    var Peso = parseFloat (document.getElementById("Peso").value);
    var Altura = parseFloat(document.getElementById("Altura").value);
    Altura.toFixed(3)
    Peso.toFixed(2)

//criar uma condição para colocar numeros maiores que zeros//
if (isNaN(Peso) || isNaN(Altura) || Peso <= 0 || Altura <= 0) {
    alert("Por favor, insira um valor válidos");
    return;
  }

//calcular o imc//
var imc = Peso / (Altura * Altura);

//para obter o resultado//
var resultado = document.getElementById("resultado");
resultado.innerHTML = "Seu IMC é: " +  imc.toFixed(2);


// classificação do IMC//
var classificação = document.getElementById("Classificação");
if( imc < 17){
classificação.innerHTML = "Você está muito abaixo do peso. ";
}
else if (imc <= 18.49) {
classificação.innerHTML = "Você está abaixo do peso. ";
}
else if (imc <= 24.99) {
classificação.innerHTML = "Seu peso está normal. ";
}
else if (imc <= 29.99){
classificação.innerHTML = "Você está acima do peso. ";
}
else if (imc <= 34.99){
classificação.innerHTML = "Obesidade I. ";
}
else if (imc <= 39.99){
classificação.innerHTML = "Obesidade II (severa). ";
}
else if (imc > 40){
classificação.innerHTML = "Obesidade III (mórbida). ";
}

}

function calculanota(){
var nota1 = parseFloat(document.getElementById("nota1").value);
var nota2 = parseFloat(document.getElementById("nota2").value);
var nota3 = parseFloat(document.getElementById("nota3").value);

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)|| nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10|| nota3 > 10) {
    alert("Por favor, insira um valor entre 0 e 10");
    return;
  }

var media = (nota1 + nota2 + nota3) / 3;

var resultado = document.getElementById("resultado");
resultado.innerHTML = "a media do alune é: " +  media.toFixed(2);

if (media => 7.0) {
    media.innerHTML = "Aluno Aprovdo ";
} else {
    media.innerHTML = "Aluno Reprovado.";
 }
}
