CREATE DATABASE dinheirosClicker;
USE dinheirosClicker;

CREATE TABLE usuario (
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    email VARCHAR(50) UNIQUE,
	senha VARCHAR(100)
);

CREATE TABLE pontuacao (
	idRank INT PRIMARY KEY AUTO_INCREMENT,
	pontos BIGINT,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idLogin)
);
