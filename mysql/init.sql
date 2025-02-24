-- definizione delle tabelle
CREATE TABLE Proprietari(
	id int primary key auto_increment,
	nome varchar(20),
    cognome varchar(20)
);

CREATE TABLE Auto(
	id int primary key auto_increment,
	nome varchar(20),
    fkmodello smallint,
    fkpropietario int
);

CREATE TABLE ModelliAuto(
	id smallint primary key auto_increment,
	modello smallint,
);

ALTER TABLE Auto ADD CONSTRAINT FKautoproprietario FOREIGN KEY (fkpropietario) REFERENCES Proprietari(id);
ALTER TABLE Auto ADD CONSTRAINT FKautoModello FOREIGN KEY (fkmodello) REFERENCES ModelliAuto(id);