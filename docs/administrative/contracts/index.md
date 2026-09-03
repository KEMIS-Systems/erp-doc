---
title: Contratos
slug: /modules/administrative/contracts
sidebar_position: 1
---

# Contratos

Esta tela cadastra os contratos firmados com **[Clientes](../customers/index.md)**.
Além dos dados básicos do contrato (vigência, valor, gestor responsável), a
página de detalhe de cada contrato reúne sete páginas que organizam toda a
operação em torno dele: locais de trabalho, usuários vinculados, arquivos do
contrato, colaboradores mobilizados, arquivos do cliente, regras de tarefa e
pendências de tarefa — cada uma listada e documentada abaixo.

Na listagem, cada contrato mostra também uma **situação das tarefas**
(Sem tarefas, Em dia, Pendente ou Atrasado), calculada a partir das
pendências geradas pelas regras de tarefa daquele contrato.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Contrato | **Sim** | Nome/identificação do contrato |
| Cliente | **Sim** | Pode ser cadastrado um novo cliente diretamente por este campo |
| Valor | Não | — |
| Data de início | Não | — |
| Data de término | Não | Ao atingir esta data (hoje ou antes), o contrato é automaticamente marcado como inativo, e as vinculações de colaboradores que ultrapassem essa data são ajustadas para terminar junto com o contrato |
| Contato | Não | Depende do cliente selecionado; lista os contatos cadastrados para aquele cliente |
| Valor de reajuste | Não | — |
| Gerente | Não | Usuário responsável pelo contrato |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro de um novo contrato |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do contrato, com as sete páginas listadas abaixo |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados do contrato |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o contrato |
| Filtrar | Filtra a listagem por contrato, cliente, situação das tarefas, período e situação (ativo/inativo) |
| Exportar relatório | Gera de forma assíncrona um relatório em Excel da listagem filtrada |

A situação (ativo/inativo) do contrato é calculada automaticamente a partir
da data de término — não é um campo editável diretamente.

## Páginas desta seção

- [Locais de trabalho](./locais-de-trabalho.md)
- [Usuários](./usuarios.md)
- [Arquivos](./arquivos.md)
- [Colaboradores](./colaboradores.md)
- [Arquivos do cliente](./arquivos-do-cliente.md)
- [Regras de tarefa](./regras-de-tarefa.md)
- [Pendências de tarefa](./pendencias-de-tarefa.md)
