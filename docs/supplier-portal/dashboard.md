---
title: Painel
slug: /supplier-portal/dashboard
sidebar_position: 3
---

# Painel

É a tela inicial do portal, logo após o login, com o resumo do que o
fornecedor precisa resolver em todos os clientes aos quais está vinculado.

## Cartões-resumo

Quatro cartões no topo, cada um leva direto à tela correspondente ao ser
clicado:

| Cartão | Leva para |
| --- | --- |
| Clientes ativos | [Clientes](./clientes.md) |
| Documentos pendentes | [Arquivos](./arquivos.md) |
| Formulários pendentes | [Formulários de avaliação](./formularios.md) |
| Documentos para assinar | [Assinaturas](./assinaturas.md) |

## Documentos que faltam enviar

Lista os documentos pendentes, com tipo, cliente e prazo (quando houver). O
botão **Enviar**, em cada item, abre o formulário de envio sem sair do
Painel — veja o passo a passo completo em
**[Arquivos](./arquivos.md#enviar-um-documento-pendente)**. Ao concluir o
envio, o próprio Painel é atualizado.

## Formulários que faltam concluir

Lista os formulários pendentes, com título, cliente, status e prazo. O
botão **Responder** abre a tela de preenchimento do formulário — veja
**[Formulários de avaliação](./formularios.md)**.

## Documentos aguardando assinatura

Lista os documentos enviados para assinatura eletrônica, com título,
cliente e uma etiqueta colorida de status. Duas ações por item:

| Ação | Descrição |
| --- | --- |
| Ver documento | Baixa e abre o arquivo em uma nova aba |
| Assinar | Só aparece quando o fornecedor é o destinatário da assinatura e ela ainda está pendente; abre em nova aba a página externa de assinatura eletrônica |

O link **Ver todos os documentos**, no topo do bloco, leva para
**[Assinaturas](./assinaturas.md)**.

## Clientes

Tabela com cada cliente vinculado ao fornecedor e a quantidade de
documentos e formulários pendentes para cada um. O link **Ver todos os
clientes** leva para **[Clientes](./clientes.md)**.

Quando o fornecedor atende a apenas um cliente, este bloco e o cartão
"Clientes ativos" mostram sempre o mesmo único registro — a utilidade de
ambos aparece quando há mais de um cliente vinculado.
