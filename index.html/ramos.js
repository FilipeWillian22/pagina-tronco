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
/*public static void main(String[] args) {
	
	
		
    Exercicio4 ();

    
        //Criação de Inteiros 
            int nota1;
            int nota2;
            int nota3;
        
            
        // Associar a string com JOptionpane 
        String nome = JOptionPane.showInputDialog("informe o nome do aluno ");
        System.out.println(" Aluno: " + nome); // para registrar e visualizar na tela as notas já registradas
        
        String nota1s = JOptionPane.showInputDialog("informe a primeira nota ");
        System.out.println("priemria nota: " + nota1s);
        
        String nota2s = JOptionPane.showInputDialog("informe a segunda nota" );
        System.out.println("segunda nota: " + nota2s);
        
        String nota3s  = JOptionPane.showInputDialog("informe a terceira nota ");
        System.out.println("Terceira nota: " + nota3s);
        

        
        // converter as notas para inteiros
        nota1 = Integer.parseInt(nota1s);
        nota2 = Integer.parseInt(nota2s);
        nota3 = Integer.parseInt(nota3s);
        
        double media = (nota1 + nota2+ nota3) / 3.0;
        System.out.println("a media do aluno é :" + media);

        JOptionPane.showMessageDialog(null, "a media do aluno é :" + media );


          if (media < 7.0) {
              JOptionPane.showMessageDialog(null, "Aluno reprovado");  
              System.out.println("Aluno reprovado");
            } else {
                System.out.println("Aluno aprovado");
                JOptionPane.showMessageDialog(null, "Aluno aprovado");
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
}

*/