---
title: Matriz de treinamentos
slug: /modules/human-resources/employees/matriz-de-treinamentos
sidebar_position: 2
---

# Matriz de treinamentos

Mostra, curso a curso, a situação do colaborador em relação a tudo o que
ele precisa cursar: data de conclusão, validade, data de vencimento, se o
curso é obrigatório ou recomendado e o status de conformidade. A maior
parte das linhas é gerada e mantida automaticamente pelo sistema, a partir
do **[Cargo](../roles/matriz-de-treinamentos.md)** do colaborador, dos
contratos e das **[Atividades críticas](./atividades-criticas.md)**
atribuídas a ele — a exigência em si é definida na
**[Matriz de Treinamentos](../../training-management/trainings-matrices.md)**,
no módulo Treinamentos. É possível, além disso, adicionar manualmente um
curso extra à matriz do colaborador, fora dessas regras automáticas.

Cada linha pode ter uma ou mais **fontes**: os motivos que exigem aquele
curso (cargo, contrato, atividade crítica ou inclusão manual). O botão
"Ver Fontes" abre essa lista quando existe pelo menos uma fonte ativa.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Curso | **Sim, apenas ao adicionar** | Curso a incluir na matriz; não pode ser alterado depois de criado |
| Data de conclusão | Não | Data em que o colaborador concluiu o curso |
| Esse curso é recomendado? | Não | Interruptor; só aparece ao adicionar ou ao editar uma linha incluída manualmente. Define se o curso é obrigatório ou apenas recomendado |
| Tipo de arquivo | Não | Categoria do arquivo de comprovação; é possível cadastrar um novo tipo diretamente deste formulário |
| Arquivo | **Sim, quando um tipo de arquivo é selecionado** | Comprovante do curso (certificado, por exemplo) |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Inclui manualmente um curso extra na matriz do colaborador |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera a data de conclusão, o arquivo ou (para linhas incluídas manualmente) se o curso é recomendado |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a linha da matriz. Indisponível para linhas geradas automaticamente pelas regras do sistema |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o arquivo de comprovação vinculado, quando houver |
| Ver Fontes | Lista as origens (cargo, contrato, atividade crítica ou inclusão manual) que exigem aquele curso para o colaborador. Fontes incluídas manualmente podem ser removidas por aqui |
| Download (lote) | Baixa em um arquivo ZIP os comprovantes dos cursos selecionados (ou de todos os cursos filtrados, se nada for selecionado) |

Uma linha travada pelo sistema (gerada por uma regra ativa de cargo,
contrato ou atividade crítica) não pode ser apagada por aqui — a
exigência precisa ser removida na origem para que a linha deixe de ser
exigida.
