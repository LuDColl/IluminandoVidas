create table imagem_aluno (
    id_img bigint generated by default as identity primary key,
    bta_imagem bytea not null
);
create table imagem_tutor (
    id_img bigint generated by default as identity primary key,
    bta_imagem bytea not null
);
create table aluno (
    id_aluno bigint generated by default as identity primary key,
    str_nomealuno varchar(100) not null,
    dte_nascimento date not null,
    bnt_nrdocumento bigint not null,
    str_natestado varchar(30) null,
    str_natcidade varchar(30) null,
    int_idade int not null,
    str_sexo varchar(2) not null,
    str_endereco varchar(100) not null,
    int_numeroend int not null,
    str_complemento varchar(50) not null,
    str_bairro varchar(30) not null,
    str_escola varchar(100) null,
    str_serie varchar(30) null,
    str_periodo varchar(20) null,
    str_nomemae varchar(100) null,
    str_enderecocomercialmae varchar(100) null,
    int_dddmae int not null,
    int_telefonemae int not null,
    int_dddcomercialmae int not null,
    int_telefonecomercialmae int not null,
    str_nomepai varchar(100) null,
    str_enderecocomercialpai varchar(100) null,
    int_dddpai int not null,
    int_telefonepai int not null,
    int_dddcomercialpai int not null,
    int_telefonecomercialpai int not null,
    bit_ativo boolean,
    fk_img int null,
    foreign key (fk_img) references imagem_aluno (id_img)
);
create table tutor (
    id_tutor bigint generated by default as identity primary key,
    str_nome varchar(100) not null,
    int_ddd int not null,
    int_telefone int not null,
    str_endereco varchar(100) not null,
    str_usuario varchar(60) not null,
    str_senha varchar(60) not null,
    bit_ativo boolean,
    bit_adm boolean,
    fk_img int null,
    foreign key (fk_img) references imagem_tutor (id_img)
);
create table parentes (
    id_parente bigint generated by default as identity primary key,
    str_parentesco varchar(50) not null,
    str_nomeparente varchar(100) not null,
    dte_nascimento date not null,
    int_ddd int not null,
    int_telefone int not null,
    str_endereco varchar(100) null,
    int_dddcomercial int not null,
    int_telefonecomercial int not null,
    str_enderecocomercial varchar(100) null,
    bit_prioritario boolean,
    fk_aluno int not null,
    foreign key (fk_aluno) references aluno (id_aluno)
);
create table materia (
    id_materia bigint generated by default as identity primary key,
    str_nome varchar(50) not null
);
create table sala (
    id_sala bigint generated by default as identity primary key,
    str_nome varchar(50) not null,
    dte_periodoinicio date not null,
    dte_periodofim date not null,
    fk_tutor int not null,
    fk_materia int not null,
    foreign key (fk_tutor) references tutor (id_tutor),
    foreign key (fk_materia) references materia (id_materia)
);
create table alunosala (
    fk_sala int not null,
    fk_aluno int not null,
    foreign key (fk_aluno) references aluno (id_aluno),
    foreign key (fk_sala) references sala (id_sala)
);
create table alunonota (
    id_alunonota bigint generated by default as identity primary key,
    fk_sala int not null,
    fk_aluno int not null,
    int_nota1 int null,
    int_nota2 int null,
    int_nota3 int null,
    int_nota4 int null,
    int_nota5 int null,
    int_notaex1 int null,
    int_notaex2 int null,
    int_notaex3 int null,
    int_notaex4 int null,
    int_notafinal int null,
    foreign key (fk_aluno) references aluno (id_aluno),
    foreign key (fk_sala) references sala (id_sala)
);
create table observacao (
    id_observacao bigint generated by default as identity primary key,
    fk_tutor int not null,
    fk_aluno int not null,
    str_observacao varchar(250) not null,
    dte_datainsercao date not null,
    foreign key (fk_tutor) references tutor (id_tutor),
    foreign key (fk_aluno) references aluno (id_aluno)
);