---
title: Gerenciador de arquivos
slug: /modules/human-resources/file-manager
sidebar_position: 5
---

# Gerenciador de arquivos

O Gerenciador de arquivos é a visão centralizada de todos os documentos
enviados para todos os colaboradores — a mesma informação que aparece na
aba **[Arquivos](./employees/arquivos.md)** do cadastro individual de cada
**[Colaborador](./employees/index.md)**, aqui reunida em uma única listagem
pesquisável. É aqui que se enviam documentos avulsos ou se preenchem as
pendências geradas automaticamente pela **[Matriz de arquivos](./file-matrices.md)**
quando um cargo passa a exigir um novo tipo de documento (ver
**[Tipos de arquivos](./file-types.md)**).

Ao cadastrar um novo arquivo, o sistema oferece a opção de usar um
assistente com inteligência artificial: ao enviar um ou mais PDFs, o
assistente analisa o conteúdo e pré-preenche automaticamente o colaborador,
o tipo de documento, a descrição e a data de validade antes de salvar.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Arquivo | **Sim** (na criação) | Documento anexado. Formatos aceitos: PDF, Word, Excel, PowerPoint, texto e formatos OpenDocument |
| Colaborador | **Sim** (na criação) | Colaborador ao qual o arquivo pertence; não pode ser alterado depois de salvo |
| Tipo de arquivo | **Sim** (na criação) | Categoria do documento, cadastrada em [Tipos de arquivos](./file-types.md); é possível cadastrar um novo tipo diretamente deste formulário |
| Descrição | Não | O formulário exige o preenchimento, mas o backend aceita o envio vazio |
| Data de validade | Não | Usada para calcular o vencimento do documento |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Oferece a opção de cadastro tradicional ou assistido por inteligência artificial |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar o arquivo |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o registro. Quando o arquivo é uma exigência da matriz cargo × tipo de arquivo, a pendência não é excluída — apenas o upload, a descrição e a validade são limpos, mantendo a exigência em aberto |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre/baixa o documento anexado, quando houver um arquivo enviado |
| Marcar como obsoleto / Reativar | Alterna o documento entre válido e obsoleto |
| Filtrar | Filtra por nome do colaborador, cargo, tipo de arquivo, nome do arquivo e intervalo de data de validade |

Cada cliente possui uma cota de armazenamento em disco; o envio de um novo
arquivo é bloqueado caso o total já utilizado ultrapasse essa cota. Quando
o tipo de arquivo está marcado como "Único" (ver
[Tipos de arquivos](./file-types.md)), o envio de um novo documento
substitui o anterior em vez de criar um registro duplicado. Arquivos podem
ser marcados como privados na aba de arquivos do próprio colaborador —
usuários com nível de acesso mais baixo não conseguem visualizar, editar
nem excluir arquivos privados. Um documento que já foi enviado para
assinatura digital não pode mais ser editado ou excluído até que o processo
de assinatura seja concluído ou cancelado.
