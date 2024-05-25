------------------------------------------------------------------
-- VIEW vw_LstAlunosAtivos
------------------------------------------------------------------
Create View vw_lstAlunosAtivos as
Select aln.id_aluno,
    aln.str_nomeAluno,
    prt.str_parentesco,
    prt.str_nomeParente
from aluno aln
    left join parentes prt on prt.fk_aluno = aln.id_aluno
    and prt.bit_prioritario = true
where (bit_ativo = true);
------------------------------------------------------------------	
-- VIEW vw_LstTutoresAtivos
------------------------------------------------------------------
Create View vw_lstTutoresAtivos as
Select id_tutor,
    str_nome
from tutor
where (bit_ativo = true);