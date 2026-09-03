---
title: Páginas
slug: /modules/administrative/access-groups/paginas
sidebar_position: 2
---

# Páginas

Cadastra as permissões do grupo em cada tela (controller) do sistema,
agrupadas por módulo.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Página | **Sim** | Uma ou mais telas do sistema, selecionadas em uma lista agrupada por módulo (só é exibida ao adicionar; não aparece ao editar uma permissão já existente) |
| Permissão | **Sim** | Somente visualização, Acesso completo ou Acesso avançado |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Vincula uma ou mais páginas ao grupo, com o nível de permissão escolhido |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera o nível de permissão de um vínculo já existente |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o vínculo daquela página com o grupo |

A lista de páginas disponíveis para vincular depende dos módulos/pacotes
ativos no plano contratado pelo cliente.
