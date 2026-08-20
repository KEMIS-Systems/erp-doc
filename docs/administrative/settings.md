---
title: Configurações
slug: /modules/administrative/settings
sidebar_position: 12
---

# Configurações

Esta tela reúne os catálogos e as regras usadas por outras telas do módulo
para classificar fornecedores e definir automaticamente quais documentos
cada um deve enviar. É dividida em duas abas: **Fornecedores** e
**Contratos**.

Na aba Fornecedores ficam quatro cadastros: **Categorias** e
**Classificações** (usadas no cadastro de fornecedores e como critério de
segmentação em filtros e relatórios), **Categorias de arquivo** (o catálogo
de tipos de documento que podem ser exigidos de um fornecedor, como
"Contrato social" ou "Certidão negativa") e **Regras de arquivos por
categoria**, que automatizam a geração de documentos exigidos: cada regra
associa uma categoria de arquivo a uma categoria e/ou classificação de
fornecedor e define se é obrigatória, se o próprio fornecedor pode fazer o
upload, se tem recorrência e o período de vigência. Sempre que um
fornecedor é cadastrado ou tem categoria/classificação alterada, essas
regras são reprocessadas automaticamente para gerar (ou remover) os
documentos exigidos dele no **[Gerenciador de arquivos](./file-manager.md)**.

Na aba Contratos fica o cadastro de **Categorias de arquivo de contrato**,
usado para organizar os arquivos anexados na aba Arquivos de cada
**[Contrato](./contracts.md)**.

## Formulário

Categorias:

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria | **Sim** | — |

Classificações:

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Classificação | **Sim** | — |

Categorias de arquivo:

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria de arquivo | **Sim** | — |
| Dias para alerta de vencimento | Não | — |
| Possui data de vencimento | Não | Interruptor; quando habilitado, exige data de vencimento nos documentos dessa categoria |

Regras de arquivos por categoria:

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria de arquivo | **Sim** | — |
| Categoria (do fornecedor) | Não | — |
| Classificação (do fornecedor) | Não | — |
| Tipo de recorrência | Não | — |
| Dia de vencimento | Não | De 1 a 31 |
| Início | Não | — |
| Fim | Não | Deve ser igual ou posterior ao início |
| Obrigatório | Não | Interruptor |
| Permite upload fornecedor | Não | Interruptor |
| Recorrência | Não | Interruptor |
| Ativo | Não | Interruptor |

Categorias de arquivo de contrato:

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria de arquivo de contrato | **Sim** | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro em cada um dos cinco painéis desta tela |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar o registro selecionado |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o registro selecionado |

Todos os cadastros desta tela funcionam de forma independente entre si, com
o mesmo padrão de adicionar/editar/excluir; o que os conecta é o uso que
outras telas do módulo — principalmente Fornecedores e o Gerenciador de
arquivos — fazem deles.
