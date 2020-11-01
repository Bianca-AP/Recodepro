CREATE SCHEMA `fseletro`;
  
  CREATE TABLE `fseletro`.`produto` (
  `idproduto` int NOT NULL AUTO_INCREMENT,
  `categorias` varchar(45) NOT NULL,
  `nome_produto` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco_anterior` decimal(8,2) NOT NULL,
  `preco_atual` decimal(8,2) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idproduto`));

SELECT * FROM fseletro.produto;
INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Geladeiras', 'Geladeira 1', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', 6389.00, 5019.00, 'imagens/geladeira1.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Geladeiras', 'Geladeira 2', 'Geladeira Frost Free Brastemp Branca 375 litros', 2068.60, 1910.90, 'imagens/geladeira2.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Geladeiras', 'Geladeira 3', 'Geladeira Frost Free Consul Prata 340 litros', 2199.90, 2069.00, 'imagens/geladeira3.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Fogões', 'Fogão 1', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1209.90, 1129.00, 'imagens/fogao1.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Fogões', 'Fogão 2', 'Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático', 609.90, 519.70, 'imagens/fogao2.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Micro-ondas', 'Micro-ondas 1', 'Micro-ondas Consul 32 Litros Inox 220V', 580.90, 409.88, 'imagens/microondas1.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Micro-ondas', 'Micro-ondas 2', 'Microondas 25L Espelhado Philco 220V', 508.70, 464.53,'imagens/microondas2.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Micro-ondas', 'Micro-ondas 3', 'Forno de Microondas Eletrolux 20L Branco', 459.90, 436.05, 'imagens/microondas3.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lava-louças', 'Lava-louça 1', 'Lava-Louça Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', 3599.00, 2799.90, 'imagens/lavadoralouca1.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lava-louças', 'Lava-louça 2', 'Lava Louça Compacta 8 Serviços Branca 127V Brastemp', 1970.50, 1730.61, 'imagens/lavadoralouca2.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lavadoras', 'Lavadora de roupas 1', 'Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca', 1699.00, 1214.10, 'imagens/maquina1.jpg');

INSERT INTO `fseletro`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lavadoras', 'Lavadora de roupas 2', 'Lavadora de Roupas Philco Inverter 12KG', 2399.90, 2179.90, 'imagens/maquina2.jpg');


CREATE TABLE `fseletro`.`pedidos` (
  `idpedidos` int NOT NULL AUTO_INCREMENT,
  `cliente` varchar(45) NOT NULL,
  `endereço` varchar(150) NOT NULL,
  `telefone` varchar(17) NOT NULL,
  `nome_produto` varchar(45) NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` int NOT NULL,
  `valor_total` decimal(8,2) NOT NULL,
  PRIMARY KEY (`idpedidos`)
);

SELECT * FROM fseletro.pedidos;
INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente A', 'Rua A', '(11) 9999-9999', 'Geladeira 1', 5019.00, 1, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente B', 'Rua B', '(11) 8888-8888', 'Fogão 1', 1129.00, 3, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente C', 'Rua C', '(11) 7777-7777', 'Lavadora de roupas 1', 1214.10, 1, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente D', 'Rua D', '(11) 6666-6666', 'Fogão 2', 519.70, 2, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente E', 'Rua E', '(11) 5555-5555', 'Fogão 2', 519.70, 3, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente F', 'Rua F', '(11) 4444-4444', 'Lavadora de roupas 2', 2179.90, 2, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente G', 'Rua G', '(11) 3333-3333', 'Geladeira 2', 1910.90, 2, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente H', 'Rua H', '(11) 2222-2222', 'Micro-ondas 2', 464.53, 2, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente I', 'Rua I', '(11) 1111-1111', 'Micro-ondas 1', 409.88, 5, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente J', 'Rua J', '(11) 0000-0000', 'Micro-ondas 3', 436.05, 4, 0.00);

UPDATE pedidos 
SET valor_total=(`valor_unitario` * `quantidade`);


CREATE TABLE `fseletro`.`comentario` (
  `idcoment` int AUTO_INCREMENT,
  `nome` varchar(100),
  `mensagem` varchar(300),
  `data` datetime default now(),  
  PRIMARY KEY (`idcoment`)
);