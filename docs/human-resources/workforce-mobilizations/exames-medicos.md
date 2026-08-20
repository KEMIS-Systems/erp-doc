---
title: Exames médicos
slug: /modules/human-resources/workforce-mobilizations/exames-medicos
sidebar_position: 3
---

# Exames médicos

Lista os exames médicos exigidos do colaborador para atender ao cargo dele
naquele contrato. Ao criar a mobilização, o sistema já cadastra
automaticamente um item para cada exame exigido pela regra do cargo
(**[Matriz de exames](../../occupational-health/examinations-matrices.md)**)
ou por uma **[Atividade crítica](../critical-activities.md)** do cargo —
também é possível adicionar exames avulsos, fora dessas exigências.

Cada item aponta para o registro real do colaborador na Matriz de exames
(data de conclusão e validade); enquanto o colaborador ainda não realizou o
exame, o item fica pendente (sem data de conclusão), o que mantém a
mobilização no status "Aguardando treinamento/exame".

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Exame | **Sim**, ao adicionar um item avulso | Não aparece ao editar um item já existente |
| Data de conclusão | Não | Data em que o colaborador realizou o exame; materializa (ou atualiza) o registro do colaborador na Matriz de exames |
| Comentários | Não | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Inclui um exame avulso na mobilização, além dos exigidos automaticamente pelo cargo/contrato |
| ![Pencil](/img/icons/Pencil.png) Editar | Registra a data de conclusão do exame |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o item. Só disponível para exames avulsos — os exigidos pela Matriz de exames ou por Atividade crítica não podem ser removidos |

A validade e a data de vencimento seguem a mesma regra de cores usada na
Matriz de exames do colaborador (vencido, a vencer em 30, 60 ou 90 dias). Um
indicador (**!**) aparece quando o registro do colaborador foi alterado
depois que este item já havia sido aprovado em uma
**[Remessa](./remessas.md)** anterior — o item precisa ser reenviado ao
cliente.
