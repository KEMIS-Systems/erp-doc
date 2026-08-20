---
title: Exames
slug: /modules/occupational-health/examinations
sidebar_position: 3
---

# Exames

Esta tela mantém o catálogo de exames médicos ocupacionais que a empresa
utiliza — por exemplo, audiometria ou hemograma. Cada exame cadastrado
aqui tem uma validade padrão (em meses), usada como referência de
periodicidade. Este catálogo é a base para duas outras telas: é a partir
dele que a **[Matriz de exames](./examinations-matrices.md)** define
quais exames cada função exige, e é dele também que se escolhem os
exames incluídos em um **[Agendamento](./schedules/index.md)**.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Exame médico | **Sim** | Nome do exame (ex.: Audiometria, Hemograma) |
| Validade (meses) | Não | Periodicidade padrão do exame, em meses. Usada como referência para calcular a data de vencimento quando um agendamento com esse exame é concluído |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para editar o exame |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o exame. Além do próprio exame, a exclusão também remove seus vínculos na Matriz de exames e no histórico de exames dos colaboradores |
| ![reload](/img/icons/reload.png) Corrigir matriz | Reprocessa a Matriz de exames para todas as funções vinculadas a este exame, reaplicando as exigências padrão. Disponível apenas para usuários do grupo de acesso administrador |

Ao apagar um exame do catálogo, o sistema também limpa (soft delete)
qualquer vínculo dele na Matriz de exames e no histórico individual de
exames dos colaboradores — por isso vale conferir se o exame não está
mais em uso antes de excluí-lo.
