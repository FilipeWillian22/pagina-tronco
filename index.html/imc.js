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

