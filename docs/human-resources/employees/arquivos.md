---
title: Arquivos
slug: /modules/human-resources/employees/arquivos
sidebar_position: 4
---

# Arquivos

Repositório de arquivos avulsos do colaborador, organizados por tipo de
arquivo. É a mesma informação que aparece no
**[Gerenciador de arquivos](../file-manager.md)**, aqui filtrada para este
colaborador. Um arquivo cadastrado aqui pode ser enviado para assinatura
digital do próprio colaborador.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Arquivo | **Sim, exceto ao editar um documento já assinado** | Documento anexado |
| Tipo de arquivo | **Sim** | Categoria do documento; é possível cadastrar um novo tipo diretamente deste formulário |
| Descrição | **Sim** | Pré-preenchida com o nome do arquivo selecionado, quando vazia |
| Data de validade | Não | Data de vencimento do arquivo, se aplicável |
| Privado | Não | Interruptor; restringe a visualização/edição/exclusão do arquivo a usuários com permissão de nível Acesso avançado |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Anexa um novo arquivo ao colaborador |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita o arquivo. Indisponível enquanto o documento estiver com uma assinatura digital pendente de conclusão |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o arquivo. Indisponível quando já existe um documento de assinatura digital vinculado |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o arquivo, quando houver um upload |
| Marcar como obsoleto / Reativar | Alterna o documento entre válido e obsoleto |
| Enviar diretamente | Gera o documento de assinatura digital e já o envia para o colaborador assinar |
| Salvar sem enviar e editar | Gera o documento de assinatura digital e abre o editor, sem enviar ainda |
| Abrir documento | Abre em outra aba o documento de assinatura digital já criado para este arquivo |
| ![Copy](/img/icons/Copy.png) Copiar link | Copia o link de assinatura, enquanto o documento está aguardando assinatura |
| ![reload](/img/icons/reload.png) Reenviar link | Reenvia o link de assinatura ao colaborador, enquanto o documento está aguardando assinatura |
| Download (lote) | Baixa em um arquivo ZIP os arquivos selecionados (ou de todos os arquivos filtrados, se nada for selecionado) |
| Filtrar | Filtra por tipo de arquivo, descrição e outros critérios da listagem |

Arquivos marcados como privados só ficam visíveis, editáveis e
excluíveis para usuários com nível de acesso Acesso avançado. Depois que
um documento é enviado para assinatura digital, ele fica bloqueado para
edição e exclusão até que a assinatura seja concluída ou o processo seja
cancelado.
