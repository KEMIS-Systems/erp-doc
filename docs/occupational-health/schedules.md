---
title: Agendamentos
slug: /modules/occupational-health/schedules
sidebar_position: 5
---

# Agendamentos

Um agendamento é o registro de que um colaborador vai realizar (ou
realizou) um ou mais exames do catálogo de **[Exames](./examinations.md)**,
em uma data e clínica/fornecedor específicos, classificado por um dos
**[Tipos de exame](./types.md)** cadastrados. É aqui que o ciclo de
exames de fato acontece: o agendamento é criado, acompanhado por um
status até ser concluído, e a conclusão grava os resultados (data de
realização e validade) no histórico de exames do colaborador — o mesmo
histórico usado pela Matriz de exames para saber quem está em dia.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Funcionário | **Sim** | Colaborador para quem o agendamento é criado |
| Clínica | Não | Clínica ou fornecedor responsável pela realização dos exames |
| Data | Condicional | Data do agendamento. Obrigatória quando uma Clínica é selecionada |
| Tipo | **Sim** | Tipo de exame do agendamento (ver [Tipos de exame](./types.md)) |
| Status | Não | Status atual do agendamento, entre os que ainda não são de conclusão |
| Exames | **Sim, apenas no cadastro** | Um ou mais exames do catálogo incluídos neste agendamento. Só aparece ao criar um agendamento novo — depois de criado, os exames do agendamento são administrados pela aba Exames da tela de detalhe |
| Custo total | Não | Custo total do agendamento |
| Data de conclusão | Não | Data em que o agendamento foi concluído |
| Arquivo | Não | Um arquivo PDF anexado ao agendamento |

## Ações disponíveis (listagem)

| Ação | Descrição |
| --- | --- |
| ![FolderOpen](/img/icons/FolderOpen.png) Visualizar | Abre a tela de detalhe do agendamento |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita o agendamento. Só fica disponível enquanto o status é Agendado, Aguardando data ou Aguardando agendamento |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o agendamento. Só fica disponível nos mesmos status em que a edição está disponível |
| ![ShowFile](/img/icons/ShowFile.png) Ver guia | Abre o PDF do guia de encaminhamento do agendamento. Só aparece quando há Clínica e Data preenchidas |
| Concluir | Conclui rapidamente o agendamento a partir da listagem, preenchendo automaticamente a data de realização (igual à data do agendamento) e a validade padrão de cada exame incluído. Só aparece quando há Clínica e Data preenchidas e o status é Realizado |

O sistema também permite filtrar a listagem por cliente/fornecedor,
colaborador, período (data de início/fim), tipo e status.

## Status do agendamento

Um agendamento passa pelos seguintes status: Agendado, Realizado,
Ausente, Cancelado, Concluído, Parcialmente concluído, Aguardando data e
Aguardando agendamento. Um agendamento só pode ser concluído quando tem
Clínica e Data preenchidas: ele fica **Concluído** se todos os exames
incluídos tiverem data de conclusão registrada, ou **Parcialmente
concluído** se algum exame ainda não tiver.

## Tela de detalhe

A tela de detalhe mostra a data, o colaborador e a clínica do
agendamento, além de um botão para concluir o agendamento (disponível
nas mesmas condições da ação Concluir da listagem — Clínica e Data
preenchidas e status Realizado). Abaixo, três abas organizam o restante
das informações.

### Aba Exames

Lista os exames incluídos no agendamento, com data de conclusão,
validade e data de validade (vencimento) de cada um.

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Exames (ao adicionar) | **Sim** | Um ou mais exames a incluir no agendamento |
| Data de conclusão (ao editar) | **Sim** | Data em que aquele exame específico foi realizado |
| Validade (meses) (ao editar) | **Sim** | Validade daquele exame para este agendamento, pré-preenchida com a validade padrão do exame |

| Ação | Descrição |
| --- | --- |
| Adicionar | Inclui mais exames no agendamento. Só disponível enquanto o status é Agendado |
| ![Pencil](/img/icons/Pencil.png) Editar | Registra a data de conclusão e a validade daquele exame. Só disponível enquanto o status é Realizado |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o exame do agendamento. Só disponível enquanto o status é Agendado ou Aguardando agendamento |

### Aba Arquivos

Lista os arquivos anexados ao agendamento (comprovantes, laudos etc.),
com categoria, descrição e data de validade.

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria de arquivo | **Sim, apenas ao adicionar** | Categoria do arquivo |
| Descrição | **Sim** | Descrição do arquivo |
| Data de validade | Não | Data de validade do arquivo, se aplicável |
| Arquivo | **Sim, apenas ao adicionar** | O arquivo em si (PDF, PNG ou JPG) |

| Ação | Descrição |
| --- | --- |
| Adicionar | Anexa um novo arquivo. Só disponível enquanto o status é Realizado |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita a descrição/validade do arquivo. Só disponível enquanto o status é Realizado |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o arquivo. Não fica disponível para arquivos gerados automaticamente pela sincronização com a Matriz de exames |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o arquivo anexado |
| Marcar como obsoleto | Alterna o arquivo entre válido e obsoleto |

### Aba Log

Histórico de comentários registrados manualmente sobre o agendamento,
com autor e data.

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Comentário | **Sim** | Texto do comentário (aceita formatação) |

Só é possível adicionar comentários ao log — não há edição ou exclusão,
preservando o histórico como um registro de auditoria.
