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
var frequencia = parseFloat(document.getElementById("frequencia").value);
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)|| nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10|| nota3 > 10) {
    alert("Por favor, insira um valor entre 0 e 10");
    return;
  }

var media = (nota1 + nota2 + nota3) / 3;


var resultado = document.getElementById("resultado");
resultado.innerHTML = "A média do aluno é: " + media.toFixed(2) + '<br>';

if (media >= 7.0 && frequencia >= 70) {
    resultado.innerHTML += "Aluno Aprovado";
  } else {
    resultado.innerHTML += "Aluno Reprovado";
    if (frequencia < 70) {
      resultado.innerHTML += " por frequência insuficiente";
    }
  }
}

function calcularSalario() {///criei a função para calcular o salário
    var cargo = document.getElementById("cargo").value; // variavel cargo conforme a id
    var salario = parseFloat(document.getElementById("salario").value); // variavel salario conforme a id sendo transformada em float

    if (isNaN(salario)) { // criei uma mensagem de alerta caso em salario não seja inserido um valor numerico válido
        alert("Por favor, informe um valor válido para o salário.");
        return;
    }

    var aumento;
// - primeiro descobre--se o cargo, para encontrar o total que aumentou 
    if (cargo == "Gerente") {
        aumento = salario * 0.05;
    } else if (cargo == "Supervisor") {
        aumento = salario * 0.08;
    } else if (cargo == "Operador") {
        aumento = salario * 0.09;
    } else {
        aumento = salario * 0.1;
    }
// soma do sálario atual com o valor que aumentou descoberto anteriormente 
    var novoSalario =  salario + aumento;

    resultado1 = document.getElementById("Resultado"); //apresentação de resultado de aumento 
    aumento1 = document.getElementById("Aumento");
    novoSalario1 = document.getElementById("NovoSalario");

    resultado1.innerHTML = "Salário atual: R$" + salario.toFixed(2);
    aumento1.innerHTML = "Aumento: R$" + aumento.toFixed(2);
    novoSalario1.innerHTML = "Novo salário: R$" + novoSalario.toFixed(2);
}


/* static void exercicio2(){
    System.out.println("1-Gerente");
    System.out.println("2-Supervisor");
    System.out.println("3-Operador");
    System.out.println("4-Outros");
    
    int opcao = new Scanner(System.in).nextInt();
    if(opcao == 1) {
        //calculo para gerente
    }else if(opcao == 2) {
        //calculo para supervisor
    }else if(opcao == 3) {
        //calculo operador
    }else if(opcao == 4) {
        //calculo demais colaboradores
    }else {
        System.out.println("Opção inválida");
    }
}


   



     

     static void useSwitchex2() {
        	
        	String cargo = JOptionPane.showInputDialog(null,"Cargo do funcionário: Gerente|| Supervisor|| Operador|| Outros");
        	System.out.println(cargo);
        	
        
        	String salarioInput = JOptionPane.showInputDialog(null,"Digite o salário atual do funcionario");
            double salarioAtual = Double.parseDouble(salarioInput);
        	
        	double aumento = 0.0;
        	switch (cargo) {
        	case "Gerente":
        		aumento = salarioAtual * 0.05;
        		break;
        	case "Supervisor":
        		aumento = salarioAtual * 0.08;
        		break;
        	case "Operador":
        		aumento = salarioAtual * 0.09;
        		break;
        	case "Outros":
        		aumento = salarioAtual *0.1;
        		break;
        	}
    
	}
}*/






