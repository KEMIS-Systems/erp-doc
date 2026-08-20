---
title: Arquivos
slug: /modules/administrative/vendors/arquivos
sidebar_position: 7
---

# Arquivos

O repositório de documentos de conformidade deste fornecedor — a mesma
listagem que também aparece consolidada, junto com a de todos os outros
fornecedores, no **[Gerenciador de arquivos](../file-manager.md)**.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Tipo de arquivo | **Sim, apenas ao adicionar** | Tipo de documento |
| Descrição | Não | — |
| Data de vencimento | Depende | Obrigatória quando o tipo de arquivo exige data de vencimento |
| Arquivo | **Sim, apenas ao adicionar** | O arquivo em si |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Anexa um novo documento. Também é possível criar um novo tipo de arquivo diretamente por este formulário |
| ![Pencil](/img/icons/Pencil.png) Editar | Só disponível para documentos de origem **Manual** |
| ![Trash](/img/icons/Trash.png) Apagar | Só disponível para documentos de origem **Manual** |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o arquivo enviado. Só aparece quando já há um arquivo enviado |
| Detalhes | Abre um painel com as datas de cada etapa: solicitado, enviado, aprovado, rejeitado e dispensado |

Cada documento tem um **status** (Pendente, Enviado, Aprovado, Rejeitado,
Expirado ou Dispensado) e uma **origem** (Manual, Regra inicial, Job de
recorrência ou Extra do fornecedor — documentos enviados pelo próprio
fornecedor pelo portal de autoatendimento entram como "Extra do
fornecedor"). Só documentos de origem Manual podem ser editados ou
excluídos por aqui; os demais são gerados automaticamente pelas
**[Regras de arquivo](./regras-de-arquivo.md)** e só podem ser aprovados ou
rejeitados, no **[Gerenciador de arquivos](../file-manager.md)**.
