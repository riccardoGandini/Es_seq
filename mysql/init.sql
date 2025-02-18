-- definizione delle tabelle
CREATE TABLE Proprietari(
	id int primary key auto_increment,
	nome varchar(20),
    cognome varchar(20)
);

CREATE TABLE Auto(
	id int primary key auto_increment,
	nome varchar(20),
    modello varchar(20),
    fkpropietario int
);



ALTER TABLE Auto ADD CONSTRAINT FKautoproprietario FOREIGN KEY (fkpropietario) REFERENCES Proprietari(id);