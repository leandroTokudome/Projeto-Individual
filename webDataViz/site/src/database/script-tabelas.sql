CREATE DATABASE dinheirosClicker;
USE dinheirosClicker;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    email VARCHAR(50) UNIQUE,
	senha VARCHAR(100)
);

CREATE TABLE pontuacao (
	idPontuacao INT AUTO_INCREMENT,
	pontos BIGINT,
	fkUsuario INT,
    PRIMARY KEY (idPontuacao),
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT DISTINCT fkUsuario, pontos FROM pontuacao ORDER BY pontos DESC LIMIT 3;