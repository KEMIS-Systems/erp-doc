---
title: Pendências de tarefa
slug: /modules/administrative/contracts/pendencias-de-tarefa
sidebar_position: 8
---

# Pendências de tarefa

Lista as pendências geradas automaticamente pelas
**[Regras de tarefa](./regras-de-tarefa.md)** do contrato, e também aceita
pendências avulsas, cadastradas manualmente e sem vínculo com nenhuma
regra.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Título | **Sim** | — |
| Data de vencimento | Não | — |
| Observações | Não | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra uma pendência manual (sem vínculo com uma regra de tarefa) |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a pendência |
| Concluir | Marca a pendência como concluída, com um comentário opcional. Fica disponível enquanto a pendência não está concluída |
| Cancelar conclusão | Desfaz a conclusão da pendência, reabrindo-a. Fica disponível apenas em pendências já concluídas |

Cada pendência tem um status — Pendente, Atrasada ou Concluída — calculado
automaticamente a partir da data de vencimento e de estar ou não
concluída. É esse conjunto de pendências que determina a **situação das
tarefas** exibida na listagem principal de Contratos (Sem tarefas, Em dia,
Pendente ou Atrasado).
