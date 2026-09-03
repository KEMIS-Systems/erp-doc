---
title: Treinamentos
slug: /modules/human-resources/workforce-mobilizations/treinamentos
sidebar_position: 2
---

# Treinamentos

Lista os treinamentos exigidos do colaborador para atender ao cargo dele
naquele contrato. Ao criar a mobilização, o sistema já cadastra
automaticamente um item para cada treinamento exigido pela regra do cargo
(**[Matriz de treinamentos](../../training-management/trainings-matrices.md)**)
ou por uma **[Atividade crítica](../critical-activities.md)** do cargo —
também é possível adicionar treinamentos avulsos, fora dessas exigências.

Cada item aponta para o registro real do colaborador na Matriz de
treinamentos (data de conclusão, validade e certificado); enquanto o
colaborador ainda não realizou o treinamento, o item fica pendente (sem
data de conclusão), o que mantém a mobilização no status "Aguardando
treinamento/exame".

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Curso | **Sim**, ao adicionar um item avulso | Não aparece ao editar um item já existente |
| Data de conclusão | Não | Data em que o colaborador concluiu o curso; materializa (ou atualiza) o registro do colaborador na Matriz de treinamentos |
| Tipo de arquivo | Não | Tipo do certificado anexado |
| Arquivo | Não | Certificado do treinamento; habilitado apenas depois de selecionar um tipo de arquivo |
| Comentários | Não | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Inclui um treinamento avulso na mobilização, além dos exigidos automaticamente pelo cargo/contrato |
| ![Pencil](/img/icons/Pencil.png) Editar | Registra a data de conclusão e o certificado do treinamento |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o item. Só disponível para treinamentos avulsos — os exigidos pela Matriz de treinamentos ou por Atividade crítica não podem ser removidos |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o certificado anexado, quando houver |

A validade e a data de vencimento seguem a mesma regra de cores usada na
Matriz de treinamentos do colaborador (vencido, a vencer em 30, 60 ou 90
dias). Um indicador (**!**) aparece quando o registro do colaborador foi
alterado depois que este item já havia sido aprovado em uma
**[Remessa](./remessas.md)** anterior — o item precisa ser reenviado ao
cliente.
