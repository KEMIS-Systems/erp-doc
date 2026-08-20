---
title: Fornecedores
slug: /modules/administrative/vendors
sidebar_position: 5
---

# Fornecedores

Esta tela cadastra os fornecedores da empresa e é o ponto de partida do
controle de conformidade documental: cada fornecedor recebe uma categoria e
uma classificação, que determinam — em conjunto com as regras cadastradas em
**[Configurações](./settings.md)** — quais documentos ele deve manter em dia
no **[Gerenciador de arquivos](./file-manager.md)** e quais
**[Formulários de Avaliação de Fornecedores](./evaluation-forms.md)** ele
precisa responder.

O cadastro compartilha a mesma estrutura de dados da tela de
**[Clientes](./customers.md)** (dados principais e dados de contato), mas
acrescenta categoria, classificação e responsável, e a listagem exibe um
status de conformidade calculado a partir da situação dos documentos do
fornecedor.

Como em Clientes, ao informar o CNPJ o sistema busca automaticamente os
dados na Receita Federal, e ao informar o CEP busca o endereço.

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
| Categoria | Não | — |
| Classificação | Não | — |
| Responsável | Não | — |
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
| Adicionar | Abre o formulário de cadastro de um novo fornecedor |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do fornecedor, com abas de contatos, arquivos, regras de arquivo, tokens de acesso, histórico de status e cursos |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados do fornecedor |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o fornecedor |
| Filtrar | Filtra a listagem por nome, status, categoria e classificação |
| Importar (upload) | Importa fornecedores em massa a partir de uma planilha |
| Gerar relatório (PDF) | Gera um PDF com a listagem filtrada de fornecedores |
| Exportar relatório (Excel) | Gera de forma assíncrona um relatório em Excel da listagem filtrada |

O status de conformidade exibido na listagem é calculado automaticamente a
partir da situação dos documentos exigidos do fornecedor, com cinco valores
possíveis: **Não há exigência** (nenhum documento obrigatório), **Irregular**,
**Pendente do fornecedor**, **Pendente da empresa** e **Compliant**. Ele não é
preenchido manualmente nesta tela — para acompanhar e agir sobre os
documentos que definem esse status, use o
**[Gerenciador de arquivos](./file-manager.md)**. A tela de detalhe do
fornecedor também expõe um portal de acesso próprio (tokens de acesso), pelo
qual o próprio fornecedor pode enviar seus documentos sem precisar de um
usuário no ERP.
