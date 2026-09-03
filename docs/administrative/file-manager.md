---
title: Gerenciador de arquivos
slug: /modules/administrative/file-manager
sidebar_position: 10
---

# Gerenciador de arquivos

Esta tela centraliza os documentos exigidos de clientes e fornecedores —
contratos sociais, certidões, apólices e demais categorias cadastradas em
**[Configurações](./settings.md)**. É a partir dela que a equipe analisa e
decide sobre os documentos enviados, e é a situação desses documentos que
alimenta o status de conformidade exibido na tela de
**[Fornecedores](./vendors/index.md)** e os indicadores do
**[Dashboard](./dashboard.md)**.

No topo da tela, cartões de resumo mostram a quantidade de documentos em
cada status; clicar em um cartão filtra a listagem por aquele status.

Cada documento tem uma **origem**, que indica como ele foi gerado: Manual
(cadastrado diretamente por um usuário nesta tela), Regra inicial ou Job de
recorrência (gerados automaticamente pelas regras de arquivo configuradas
para a categoria/classificação do fornecedor), Extra do fornecedor
(enviado voluntariamente pelo próprio fornecedor pelo portal) ou Renovação
por vencimento. Apenas documentos de origem **Manual** podem ser editados ou
excluídos por aqui — os demais são administrados automaticamente pelas
regras de arquivo.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria de arquivo | **Sim** | Só aparece ao cadastrar um novo documento; pode ser cadastrada uma nova categoria diretamente por este campo |
| Fornecedor/Cliente | **Sim** | Busca por nome ou documento |
| Descrição | Não | — |
| Data de vencimento | Depende | Obrigatória apenas quando a categoria de arquivo selecionada exige data de vencimento |
| Arquivo | Depende | Obrigatório apenas ao cadastrar um novo documento (na edição, é opcional) |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar / Enviar | Abre o formulário de cadastro/envio de um novo documento |
| ![Pencil](/img/icons/Pencil.png) Editar | Disponível apenas para documentos de origem Manual |
| ![Trash](/img/icons/Trash.png) Apagar | Disponível apenas para documentos de origem Manual que não fazem parte da matriz obrigatória |
| ![ShowFile](/img/icons/ShowFile.png) Visualizar arquivo | Abre o arquivo enviado, quando houver um anexado |
| Aprovar | Exibido apenas para documentos com status "Enviado"; aprova o documento |
| Reprovar | Exibido apenas para documentos com status "Enviado"; reprova o documento, exigindo um comentário com o motivo |
| Detalhes | Abre um painel com informações adicionais do documento |
| Filtrar | Filtra a listagem por diversos critérios do documento |

Um documento passa pelos status **Pendente** (ainda não enviado),
**Enviado** (aguardando análise), **Aprovado**, **Rejeitado**, **Expirado**
e **Dispensado**. Somente documentos no status Enviado exibem os botões de
aprovar e reprovar; ao reprovar, o comentário informado fica registrado
como motivo da reprovação para orientar o reenvio.
