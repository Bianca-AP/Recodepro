CREATE SCHEMA `fseletro_bianca`;
 USE `fseletro_bianca`;  
  CREATE TABLE `fseletro_bianca`.`produto` (
  `idproduto` int NOT NULL AUTO_INCREMENT,
  `categorias` varchar(45) NOT NULL,
  `nome_produto` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco_anterior` decimal(8,2) NOT NULL,
  `preco_atual` decimal(8,2) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idproduto`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8;

SELECT * FROM fseletro_bianca.produto;
INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Geladeiras', 'Geladeira 1', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', 6389.00, 5019.00, 'geladeira1.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Geladeiras', 'Geladeira 2', 'Geladeira Frost Free Brastemp Branca 375 litros', 2068.60, 1910.90, 'geladeira2.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Geladeiras', 'Geladeira 3', 'Geladeira Frost Free Consul Prata 340 litros', 2199.90, 2069.00, 'geladeira3.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Fogões', 'Fogão 1', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1209.90, 1129.00, 'fogao1.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Fogões', 'Fogão 2', 'Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático', 609.90, 519.70, 'fogao2.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Micro-ondas', 'Micro-ondas 1', 'Micro-ondas Consul 32 Litros Inox 220V', 580.90, 409.88, 'microondas1.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Micro-ondas', 'Micro-ondas 2', 'Microondas 25L Espelhado Philco 220V', 508.70, 464.53,'microondas2.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Micro-ondas', 'Micro-ondas 3', 'Forno de Microondas Eletrolux 20L Branco', 459.90, 436.05, 'microondas3.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lava-louças', 'Lava-louça 1', 'Lava-Louça Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', 3599.00, 2799.90, 'lavadoralouca1.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lava-louças', 'Lava-louça 2', 'Lava Louça Compacta 8 Serviços Branca 127V Brastemp', 1970.50, 1730.61, 'lavadoralouca2.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lavadoras', 'Lavadora de roupas 1', 'Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca', 1699.00, 1214.10, 'maquina1.jpg');

INSERT INTO `fseletro_bianca`.`produto`(`categorias`, `nome_produto`, `descricao`, `preco_anterior`, `preco_atual`, `imagem`)
VALUES ('Lavadoras', 'Lavadora de roupas 2', 'Lavadora de Roupas Philco Inverter 12KG', 2399.90, 2179.90, 'maquina2.jpg');

CREATE TABLE `fseletro_bianca`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `cliente` VARCHAR(150) NOT NULL,
  `endereço` VARCHAR(250) NOT NULL,
  `telefone` TEXT(17) NOT NULL,
  PRIMARY KEY (`idcliente`))
COMMENT = 'dados do cliente'
ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `fseletro_bianca`.`pedidos` (
  `idpedidos` int NOT NULL AUTO_INCREMENT,
  `clientep` VARCHAR(150) NOT NULL,
  `nome_produto` varchar(45) NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` int NOT NULL,
  `valor_total` decimal(8,2) NOT NULL,
  PRIMARY KEY (`idpedidos`))
ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `fseletro_bianca`.`pedido_cliente` (
  `id_cliente` INT NOT NULL,
  `id_pedidos` INT NOT NULL,
  PRIMARY KEY (`id_pedidos`, `id_cliente`))
COMMENT = 'Pedidos dos clientes especificos'
ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `fseletro_bianca`.`pedido_cliente` 
ADD CONSTRAINT `fkc`
  FOREIGN KEY (`id_cliente`)
  REFERENCES `fseletro_bianca`.`cliente` (`idcliente`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fkp`
  FOREIGN KEY (`id_pedidos`)
  REFERENCES `fseletro_bianca`.`pedidos` (`idpedidos`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

SELECT * FROM fseletro_bianca.cliente;
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente A', 'Endereço A', '(11) 9999-9999');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente B', 'Endereço B', '(11) 8888-8888');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente C', 'Endereço C', '(11) 7777-7777');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente D', 'Endereço D', '(11) 6666-6666');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente E', 'Endereço E', '(11) 5555-5555');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente F', 'Endereço F', '(11) 4444-4444');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente G', 'Endereço G', '(11) 3333-3333');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente H', 'Endereço H', '(11) 2222-2222');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente I', 'Endereço I', '(11) 1111-1111');
INSERT INTO `fseletro_bianca`.`cliente` (`cliente`, `endereço`, `telefone`)
VALUES ('Cliente J', 'Endereço J', '(11) 0000-0000');


SELECT * FROM fseletro_bianca.pedidos;
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente A', 'Geladeira 1', 5019.00, 1, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente A', 'Fogão 1', 1129.00, 1, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente C', 'Lavadora de roupas 1', 1214.10, 1, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente G', 'Fogão 2', 519.70, 4, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente C', 'Fogão 2', 519.70, 3, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente G', 'Lavadora de roupas 2', 2179.90, 2, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente E', 'Geladeira 2', 1910.90, 2, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente I', 'Micro-ondas 2', 464.53, 3, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente H', 'Micro-ondas 1', 409.88, 5, `valor_unitario` * `quantidade`);
INSERT INTO `fseletro_bianca`.`pedidos` (`clientep`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
VALUES ('Cliente G', 'Micro-ondas 3', 436.05, 4, `valor_unitario` * `quantidade`);

SELECT * FROM fseletro_bianca.pedido_cliente;
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (1, 1);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (1, 2);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (3, 3);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (7, 4);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (3, 5);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (7, 6);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (5, 7);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (9, 8);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (8, 9);
INSERT INTO `fseletro_bianca`.`pedido_cliente` (`id_cliente`, `id_pedidos`)
VALUES (7, 10);

CREATE TABLE `fseletro_bianca`.`comentario` (
  `idcoment` int AUTO_INCREMENT,
  `nome` varchar(100),
  `mensagem` varchar(300),
  `data` datetime default now(),  
  PRIMARY KEY (`idcoment`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8;
  
SELECT * FROM fseletro_bianca.comentario;
INSERT INTO `fseletro_bianca`.`comentario` (`nome`, `mensagem`)
VALUES ('João', 'Ótimo atendimento!');
INSERT INTO `fseletro_bianca`.`comentario` (`nome`, `mensagem`)
VALUES ('Carlos', 'Excelentes produtos! Já recomendei sua loja para várias outras pessoas!');

CREATE VIEW compras AS SELECT * FROM cliente inner join pedidos on clientep=cliente order by idpedidos desc;
