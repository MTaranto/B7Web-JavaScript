CREATE TABLE crm.fornecedores (
id INT auto_increment NOT NULL COMMENT 'id fornecedor',
nome varchar(100) NOT NULL,
telefone varchar(14) NULL,
CONSTRAINT fornecedores_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci
COMMENT='Banco de dados de fornecedores';
CREATE TABLE crm.produto (
id INT auto_increment NOT NULL,
descricao varchar(100) NOT NULL,
preco DOUBLE NOT NULL,
estoque INT NULL,
estoque_mininimo INT NULL,
fornecedor_id INT NOT NULL,
CONSTRAINT produto_PK PRIMARY KEY (id),
CONSTRAINT produto_FK FOREIGN KEY (fornecedor_id) REFERENCES crm.fornecedores(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci
COMMENT='tabela de produtos';
CREATE TABLE crm.usuarios (
id INT auto_increment NOT NULL,
nome varchar(100) NOT NULL,
data_cadastro DATE NOT NULL,
CONSTRAINT usuarios_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;