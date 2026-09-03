---
title: Regras de arquivo
slug: /modules/administrative/vendors/regras-de-arquivo
sidebar_position: 5
---

# Regras de arquivo

Define quais documentos este fornecedor específico precisa manter em dia —
a base do status de conformidade exibido na listagem de Fornecedores. É o
mesmo mecanismo configurado por padrão em
**[Configurações](../settings.md)** para cada combinação de categoria e
classificação, mas aqui pode ser customizado individualmente para este
fornecedor.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Tipo de arquivo | **Sim** | Tipo de documento exigido |
| Obrigatório | Não | Interruptor; documento obrigatório ou apenas recomendado |
| Permitir upload pelo fornecedor | Não | Interruptor; se o próprio fornecedor pode enviar este documento pelo portal de autoatendimento |
| Ativa | Não | Interruptor; regras inativas deixam de gerar exigência |
| Recorrência | Não | Interruptor; se a exigência se repete periodicamente |
| Tipo de recorrência | Depende | Obrigatório quando Recorrência está habilitada |
| Dia de vencimento | Não | Dia do mês em que o documento vence, quando recorrente |
| Início da vigência | Não | — |
| Fim da vigência | Não | Deve ser igual ou posterior ao início |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cria uma nova regra manual para este fornecedor |
| ![Pencil](/img/icons/Pencil.png) Editar | Só aparece em regras de origem **Manual** |
| ![Trash](/img/icons/Trash.png) Apagar | Só aparece em regras de origem **Manual** |

Cada regra tem uma origem: **Modelo** (herdada automaticamente da categoria
e classificação do fornecedor, configurada em Configurações), **Manual**
(criada diretamente aqui) ou **Sistema**. Só as regras de origem Manual
podem ser editadas ou excluídas por esta tela — as demais são somente
leitura. Ao alterar a categoria ou a classificação do fornecedor, o sistema
resincroniza automaticamente as regras herdadas de Modelo (com um pequeno
atraso), sem afetar as regras Manuais já customizadas.
