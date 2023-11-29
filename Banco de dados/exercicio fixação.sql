/*Deseja se informatizar uma loja. O sistema deve registrar as compras efetuadas bem como as vendas realizadas. 
Todas as vezes devem ser registradas informando qual o cliente realizou a venda. 
Os produtos vendidos podem ser de diferentes categorias, bem como de diferentes fornecedores.
Postar no git o modelo, os scripts DDL e os scripts de inserção de dados.*/


-- Tabela de Fornecedores
CREATE TABLE tb_fornecedor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    cnpj VARCHAR(18),
    telefone VARCHAR(12),
    email VARCHAR(45),
    categoria_de_produto VARCHAR(3)
);

-- Tabela de Funcionários
CREATE TABLE tb_funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    telefone VARCHAR(15),
    qtd_compras_reais decimal(10,2),
    qtd_vendas_reais decimal(10,2)
);

-- Tabela de Produtos
CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo CHAR(8),
    descricao VARCHAR(45),
    valor_unitario DECIMAL(10, 2), 
    categoria_do_produto VARCHAR(3)
);

-- Tabela de Categorias
CREATE TABLE tb_categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo CHAR(8),
    categoria varchar(15)
);

-- Tabela de Clientes
CREATE TABLE tb_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telefone VARCHAR(12),
    email VARCHAR(45),
    nome VARCHAR(45)
);

-- Tabela de Vendas
CREATE TABLE tb_vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(45),
    categoria CHAR(8),
    quantidade DECIMAL(10),
    valor DECIMAL(10, 2), 
    fornecedor VARCHAR(45),
    tb_cliente_id INT,
    tb_funcionarios_id INT
);

-- Tabela de Itens nas Vendas
CREATE TABLE tb_produto_has_tb_vendas (
    tb_produto_id INT,
    tb_vendas_id INT,
    quantidade DECIMAL(10, 2),
    valor_unitario DECIMAL(10, 2)
);

-- Tabela de Relacionamento entre Fornecedores e Produtos
CREATE TABLE tb_fornecedor_has_tb_produto (
    tb_fornecedor_id INT,
    tb_produto_id INT
);



-- Tabela de Formas de Pagamento
CREATE TABLE tb_formas_pgto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    tb_receber_cliente INT,
    tb_pagar_id INT,
    tb_vendas_id INT
);

-- Tabela de Pagamentos a Fornecedores
CREATE TABLE tb_pagar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fornecedor VARCHAR(45),
    forma_pgto VARCHAR(45),
    tb_fornecedor_id INT
);

-- Tabela a receber
CREATE TABLE tb_receber (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id VARCHAR(45),
    formas_pgto VARCHAR(45),
    data_vcto DATE,
    valor DECIMAL(10, 2)
);

-- Tabela de Condições de Pagamento
CREATE TABLE tb_condicao_de_pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    prazo TINYINT,
    tb_formas_pgto_id INT
);

-- inserções pra dr vida ao exercicio

insert into tb_fornecedor (nome, telefone, cnpj, email,  categoria_de_produto)
values
('nestle','0000-0000', '32120240000101','nestle@gmil.com','1'), 
('friboy','02030-0700', '32324940000101','friboy@gmil.com','2'),
('aurora','0001-2030', '12324240000125','aurorae@gmil.com','1'),
('omo','2500-1230', '12340240000101','nomo@gmil.com','4');


INSERT INTO tb_funcionarios (nome, telefone, qtd_compras_reais, qtd_vendas_reais)
VALUES 
('Ana', '47-0001-2345', 1500.00, 90.00), 
('Filipe', '47-0002-4321', 5500.56, 112.25), 
('Caio', '47-1231-9945', 8000.32, 35.50);  


INSERT INTO tb_produto (codigo, descricao, valor_unitario, categoria_do_produto)
VALUES
('1234','Leite','4.50','1'),
('4321','Alcatra','22.45','2'),
('8765','mingau de veia','4.60','3'),
('5555','Sabão em pó', '8.50', '4');


INSERT INTO tb_categoria (codigo, categoria)
VALUES
('1', 'laticinios'),
('2', 'carnes'),
('3','ceeais'),
('4','limpeza');


INSERT INTO  tb_cliente (nome, telefone, email)
VALUES
('Ricardo', '0000-0001', 'ricardo@gmail.com'),
('josé', '0000-0002','josé@gmail.com'),
('Americo','0000-0003','americo@gmil.com'),
('Luiz','0000-0004','luiz@gmail.com');

INSERT INTO tb_vendas (descricao, categoria, quantidade, valor, fornecedor, tb_cliente_id, tb_funcionarios_id)
VALUES
('Venda de Leite', '1', 20, 90.00, 'nestle', 1, 1),
('Venda de Alcatra', '2', '5', '112.25', 'friboy', 2, 1),
('Venda de Leite', '1', '10', '35.50', 'aurora', 3, 2),
('venda de sabão em pó', '4', '4', '34.00', 'omo', 4, 3),
('venda de migau de aveia', '3', '7', '32.20', 'netle', 1, 1);


insert into tb_produto_has_tb_vendas (tb_produto_id, tb_vendas_id, quantidade, valor_unitario)
values 
('1','1','20','4.50'),
('2','2','5','22.45'),
('1','3','10','3.55'),
('5','4','4','8.50'),
('4','5','7','4.60');


insert into tb_fornecedor_has_tb_produto (tb_fornecedor_id, tb_produto_id )
values
('1','1'),
('2','2'),
('3','1'),
('1','3'),
('5','4');


-- inserções nas Tabelas de  Formas de Pagamento--
insert into tb_formas_pgto ( nome,  tb_vendas_id)
values
('credito','1'),
('debito','2'),
('pix','3'),
('dinheiro','4'),
('debito','5');


insert into tb_pagar (fornecedor, forma_pgto, tb_fornecedor_id)
values
('Nestle',' Promissioria','1'),
('Friboy','Promisoria','2'),
('Aurora','Débito','3'),
('Omo','credito','4');


INSERT INTO tb_receber (cliente_id, formas_pgto, data_vcto, valor)
VALUES 
('1', 'credito', '2023-11-30', 90.00),
('2', 'debito', '2023-10-20', 112.25),
('3', 'pix', '2023-10-20', 32.20),
('4', 'debito', '2023-10-20', 34.00);

INSERT INTO tb_condicao_de_pagamento (nome, prazo, tb_formas_pgto_id)
VALUES
('prcelado', '5', '1'),
('à vista', '0', '2'),
('à vista', '0', '3'),
('à vista', '0', '4'),
('à vista', '0', '5');




-- uso do select SELECT--

select *from tb_fornecedor;
select*from  tb_produto;
select*from tb_funcionarios;
select*from  tb_categoria;
select*from tb_cliente;
select*from tb_vendas;
select*from tb_produto_has_tb_vendas;
select*from tb_fornecedor_has_tb_produto;

select*from tb_formas_pgto;
select*from tb_pagar;
select*from tb_receber;
select*from tb_condicao_de_pagamento;



