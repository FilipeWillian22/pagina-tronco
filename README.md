A página  se refere ao primeiro progeto academico em html css e JavaScript decidi chama-lá de # pagina-tronco por haver links dentro desta que levam a otras páginas
<!DOCTYPE html>
<html lang="pt-BR">
    <header>
        <h1><span class="destaque">Losa pessoal</span></h1>
    </header>
<head>
<style>
    body{
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb1nEU2OXnZ61106bL6E2ZMx1Dl_cX4kCTg&usqp=CAU');
        font-size: 20px;
            background-size: cover;
    }
    h1{
    color: ghostwhite;
    justify-content: center;
    align-items: center;
    text-align: center;
    }
    footer{
       bottom: 0;
        position: absolute;
         width: 100%;
         height: 2.5rem;     
         margin-top: auto;  
         text-align: end;
  
    }

</style>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Losa pessoal</title>
</head>
<body>  
    
        <form>
            <h1><span class="destaque">Formulário de Registros</span></h1>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required><br><br>
    
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
    
        </form>
        <div>
            <button class="button-as-link">
                <a href="paginatronco2.html">
               Entrar
            </a>
        
            </button>
        </div>
    

        <footer><strong><u>Autor Filipe Willian - Estudante de programação- curso: entra21</u></strong></footer>  
</body>
</html>
