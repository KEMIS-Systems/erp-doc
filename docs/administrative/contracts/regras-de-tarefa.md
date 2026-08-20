---
title: Regras de tarefa
slug: /modules/administrative/contracts/regras-de-tarefa
sidebar_position: 7
---

# Regras de tarefa

Define tarefas recorrentes ou pontuais do contrato — obrigações que a
empresa precisa cumprir periodicamente (por exemplo, "enviar relatório
mensal"). O sistema usa essas regras para gerar automaticamente as
**[Pendências de tarefa](./pendencias-de-tarefa.md)** correspondentes.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Título | **Sim** | — |
| Descrição | Não | Texto livre (aceita formatação) |
| Ativa | Não | Interruptor; regras inativas param de gerar novas pendências |
| Recorrente | Não | Interruptor; quando desligado, a regra gera no máximo uma pendência única |
| Tipo de recorrência | **Sim, se Recorrente** | Diária, Semanal, Quinzenal, Mensal, Bimestral, Trimestral, Semestral ou Anual |
| Dia de vencimento | **Sim, se Recorrente** | Dia do mês (1 a 31) em que a pendência daquele ciclo deve vencer |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra uma nova regra de tarefa |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita uma regra existente |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a regra |

Toda vez que uma regra é criada ou alterada, o sistema gera imediatamente a
pendência do ciclo atual, se ainda não existir uma. Além disso, uma rotina
diária percorre todos os contratos e avança as pendências recorrentes de
cada regra ativa, garantindo que o ciclo continue mesmo sem nenhuma edição
manual.
