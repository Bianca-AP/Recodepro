CREATE SCHEMA `fseletro`;

CREATE TABLE `fseletro`.`produto` (
  `idproduto` int NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `preco_venda` decimal(8,2) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  PRIMARY KEY (`idproduto`)
);

SELECT * FROM fseletro.produto;

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Geladeira Side', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', 6389.00, 5019.00, 'imagens/geladeira_side.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Geladeira Branca', 'Geladeira Frost Free Brastemp Branca 375 litros', 2068.60, 1910.90, 'imagens/geladeira_branca.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Geladeira Prata', 'Geladeira Frost Free Consul Prata 340 litros', 2199.90, 2069.00, 'imagens/geladeira_prata.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Fogão Consul', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1209.90, 1129.00, 'imagens/fogao_consul.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Fogão Atlas', 'Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático', 609.90, 519.70, 'imagens/fogao_atlas.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Micro-ondas Consul', 'Micro-ondas Consul 32 Litros Inox 220V', 580.90, 409.88, 'imagens/microondas_consul.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Micro-ondas Philco', 'Microondas 25L Espelhado Philco 220V', 508.70, 464.53,'imagens/microondas_philco.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Micro-ondas Eletrolux', 'Forno de Microondas Eletrolux 20L Branco', 459.90, 436.05, 'imagens/microondas_eletrolux.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Lava-louça Eletrolux', 'Lava-Louça Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', 3599.00, 2799.90, 'imagens/lavadoralouca_eletrolux.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Lava-louça Brastemp', 'Lava Louça Compacta 8 Serviços Branca 127V Brastemp', 1970.50, 1730.61, 'imagens/lavadoralouca_brastemp.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Máquina Brastemp', 'Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca', 1699.00, 1214.10, 'imagens/maquina_brastemp.jpg');

INSERT INTO `fseletro`.`produto`(`nome_produto`, `descricao`, `preco`, `preco_venda`, `imagem`)
VALUES ('Máquina Philco', 'Lavadora de Roupas Philco Inverter 12KG', 2399.90, 2179.90, 'imagens/maquina_philco.jpg');




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
VALUES ('Cliente Um', 'Endereço Um', ' (11) 9999-8888', 'Fogão Atlas', 519.70, 6, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Dois', 'Endereço Dois', ' (11) 9999-7777', 'Micro-ondas Philco', 464.53, 3, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Três', 'Endereço Três', ' (11) 9999-6666', 'Geladeira Side', 5019.00, 4, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Quatro', 'Endereço Quatro', ' (11) 9999-5555', 'Lava-louça Brastemp', 1730.61, 1, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Cinco', 'Endereço Cinco', ' (11) 9999-44444', 'Geladeira Brastemp', 1910.90, 2, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Seis', 'Endereço Seis', ' (11) 9999-3333', 'Micro-ondas Eletrolux', 436.05, 3, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Sete', 'Endereço Sete', ' (11) 9999-2222', 'Fogão Consul', 1129.00, 5, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Oito', 'Endereço Oito', ' (11) 9999-1111', 'Micro-ondas Eletrolux', 436.05, 2, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Nove', 'Endereço Nove', ' (11) 9999-1122', 'Lava-louça Eletrolux', 2799.90, 3, 0.00);

INSERT INTO `fseletro`.`pedidos` (`cliente`, `endereço`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente Dez', 'Endereço Dez', ' (11) 9999-2233', 'Geladeira Consul', 2069.00, 2, 0.00);

UPDATE pedidos 
SET valor_total=(`valor_unitario`* `quantidade`);