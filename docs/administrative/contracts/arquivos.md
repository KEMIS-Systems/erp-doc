---
title: Arquivos
slug: /modules/administrative/contracts/arquivos
sidebar_position: 4
---

# Arquivos

Repositório de arquivos do próprio contrato (por exemplo, o contrato
assinado e seus aditivos), organizados por categoria. As categorias são
cadastradas em **[Configurações](../settings.md)**.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria | Não | Categoria/grupo do arquivo |
| Descrição | **Sim** | Descrição do arquivo |
| Data de validade | Não | Data de vencimento do arquivo, se aplicável |
| Privado | Não | Interruptor; restringe a visualização/edição/exclusão do arquivo a usuários com permissão de nível Acesso avançado |
| Arquivo | **Sim, apenas ao adicionar** | O arquivo em si |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Anexa um novo arquivo ao contrato |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita a descrição/categoria/validade do arquivo. Indisponível para arquivos marcados como privados quando o usuário não tem Acesso avançado |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o arquivo. Mesma restrição de arquivos privados que a edição |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o arquivo. Mesma restrição de arquivos privados |
| Mover para tipo de arquivo do cliente | Reclassifica o arquivo, movendo-o deste repositório do contrato para o repositório de arquivos do cliente (a mesma lista usada em Arquivos do cliente), associando-o a um tipo de arquivo do cliente. É um movimento definitivo: o arquivo deixa de existir aqui e passa a existir apenas no cadastro do cliente |

A categoria de um arquivo de contrato é diferente do tipo de arquivo usado
nos arquivos do cliente — são duas taxonomias distintas, e é por isso que
mover um arquivo entre elas exige escolher um tipo de arquivo do cliente no
momento da mudança.
