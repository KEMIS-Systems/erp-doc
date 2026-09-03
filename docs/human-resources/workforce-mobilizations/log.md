---
title: Log
slug: /modules/human-resources/workforce-mobilizations/log
sidebar_position: 6
---

# Log

Histórico de eventos da mobilização — um registro de auditoria imutável,
sem opção de editar ou apagar entradas já lançadas. Além dos comentários
manuais, o sistema grava automaticamente um log a cada remessa criada,
item de remessa respondido, item adicionado ou removido de uma remessa,
remessa cancelada e pendência de reenvio sinalizada em algum item.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria | Não | Só é possível selecionar manualmente "Comentário manual" ou "Cobrança por e-mail ao cliente" — as demais categorias são geradas apenas pelos logs automáticos do sistema |
| Descrição | **Sim** | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Registra um comentário manual (ou uma cobrança por e-mail) no histórico da mobilização |
| Ver envio | Aparece nas entradas vinculadas a uma **[Remessa](./remessas.md)**; abre o painel lateral daquela remessa |
