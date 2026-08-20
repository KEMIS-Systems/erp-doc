---
title: Tipos de arquivos
slug: /modules/human-resources/file-types
sidebar_position: 2
---

# Tipos de arquivos

Esta tela cadastra as categorias de documento que podem ser exigidas de um
colaborador — por exemplo, "CNH", "ASO", "Certificado de curso" ou "Contrato
assinado". Cada tipo de arquivo cadastrado aqui fica disponível para ser
associado a uma ou mais categorias funcionais (cargos), o que é feito na
aba "Categoria funcional" desta mesma tela ou diretamente em
**[Categorias funcionais / Cargos](./roles.md)**. Essa associação é o que
alimenta a **[Matriz de arquivos](./file-matrices.md)**: ao vincular um
tipo de arquivo a um cargo, o sistema passa a cobrar esse documento de todo
colaborador que exerça aquele cargo, gerando automaticamente uma pendência
de arquivo para quem ainda não o enviou.

Ao abrir o detalhe de um tipo de arquivo, é possível ver e gerenciar quais
cargos exigem aquele documento.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria de arquivo | **Sim** | Nome do tipo de documento |
| Único | Não | Indica se o colaborador pode ter apenas um arquivo ativo desse tipo — ao enviar um novo arquivo do mesmo tipo, o existente é substituído em vez de duplicado |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do tipo de arquivo, com a lista de cargos que o exigem |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar o tipo de arquivo |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o tipo de arquivo. A exclusão pede confirmação antes de ser efetivada |

Na tela de detalhe, a aba "Categoria funcional" lista os cargos vinculados
ao tipo de arquivo e permite adicionar novos vínculos (um ou vários cargos
de uma vez, opcionalmente restritos a um contrato).

Não há validação de nome único: é possível cadastrar dois tipos de arquivo
com o mesmo nome. Ao vincular o tipo de arquivo a um cargo, o sistema gera
automaticamente, para cada colaborador daquele cargo que ainda não tenha o
documento, uma pendência de arquivo (registro sem upload, aguardando envio)
— essas pendências aparecem no **[Gerenciador de arquivos](./file-manager.md)**
e na **[Matriz de arquivos](./file-matrices.md)**. Ao remover o vínculo com
um cargo, as pendências correspondentes que ainda não tiverem documento
enviado são removidas junto.
