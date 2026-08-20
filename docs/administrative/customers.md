---
title: Clientes
slug: /modules/administrative/customers
sidebar_position: 4
---

# Clientes

Esta tela cadastra os clientes da empresa — o lado com quem ela firma
**[Contratos](./contracts.md)**. O cadastro é dividido em duas abas: dados
principais (razão social, nome fantasia, CNPJ, contato) e dados de contato
(endereço e observações).

Ao informar o CNPJ, o sistema consulta a Receita Federal automaticamente e
preenche razão social, nome fantasia, telefone e endereço; ao informar o
CEP, na aba de contato, o endereço também é buscado e preenchido
automaticamente.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| CNPJ | **Sim** | Validado como CPF ou CNPJ; ao ser completado, busca automaticamente os dados na Receita Federal |
| Razão social | **Sim** | — |
| Nome fantasia | Não | — |
| Código externo | Não | — |
| Celular | Não | — |
| Email | Não | — |
| URL | Não | — |
| CEP | Não | Aba de dados de contato; ao ser completado, busca automaticamente o endereço |
| Número | Não | Aba de dados de contato |
| Endereço | Não | Aba de dados de contato |
| Complemento | Não | Aba de dados de contato |
| Bairro | Não | Aba de dados de contato |
| Cidade | Não | Aba de dados de contato |
| Estado | Não | Aba de dados de contato |
| Comentário | Não | Aba de dados de contato |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro de um novo cliente |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do cliente, com abas de contatos, arquivos e arquivos de contrato |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados do cliente |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o cliente |
| Gerar relatório (PDF) | Gera um PDF com a listagem de clientes |
| Exportar relatório (Excel) | Gera de forma assíncrona um relatório em Excel da listagem de clientes |

Clientes e fornecedores compartilham a mesma tabela de cadastro-base
(razão social, documento, endereço); o que diferencia um registro criado
aqui de um registro criado em **[Fornecedores](./vendors.md)** é a tela pela
qual ele foi cadastrado, não o CNPJ/CPF em si — em tese, o mesmo documento
pode existir como cliente e, separadamente, como fornecedor.
