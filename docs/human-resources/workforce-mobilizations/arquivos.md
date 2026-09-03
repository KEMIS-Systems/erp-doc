---
title: Arquivos
slug: /modules/human-resources/workforce-mobilizations/arquivos
sidebar_position: 4
---

# Arquivos

Lista os arquivos exigidos do colaborador para atender ao cargo dele naquele
contrato. Ao criar a mobilização, o sistema já cadastra automaticamente um
item para cada tipo de arquivo exigido pela
**[Matriz de arquivos](../file-matrices.md)** do cargo — também é possível
adicionar arquivos avulsos, de qualquer tipo, fora dessa exigência.

Cada item aponta para o registro real do colaborador em
**[Arquivos](../file-manager.md)**; enquanto o tipo de arquivo exigido ainda
não tem nenhum documento anexado, o item fica pendente, o que mantém a
mobilização no status "Aguardando recebimento de documento".

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Arquivo | **Sim**, ao cadastrar | Documento a ser anexado; opcional ao editar, para substituir o arquivo já enviado |
| Tipo de arquivo | **Sim**, ao cadastrar | Bloqueado ao substituir o arquivo de um item já existente |
| Descrição | **Sim** | Pré-preenchida com o nome do arquivo selecionado |
| Data de vencimento | Não | — |
| Comentários | Não | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Anexa um novo arquivo à mobilização, avulso ou para um tipo exigido ainda pendente |
| ![Pencil](/img/icons/Pencil.png) Editar | Substitui o arquivo, a descrição, a data de vencimento ou os comentários |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o item. Disponível para arquivos avulsos, ou para arquivos exigidos que já tenham um documento anexado — um item exigido ainda pendente de anexo não pode ser apagado |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o documento anexado, quando houver |

Editar e Apagar ficam indisponíveis para um arquivo que já foi enviado para
assinatura digital, até que o processo de assinatura seja concluído ou
cancelado — nesse caso a coluna de assinatura mostra o status do processo
(enviado, assinado, recusado etc.). Um indicador (**!**) aparece quando o
arquivo foi alterado depois que este item já havia sido aprovado em uma
**[Remessa](./remessas.md)** anterior — o item precisa ser reenviado ao
cliente.
