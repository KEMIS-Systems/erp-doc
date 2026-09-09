---
title: Formulários de avaliação
slug: /supplier-portal/formularios
sidebar_position: 6
---

# Formulários de avaliação

Lista os questionários de qualificação/homologação criados pelos clientes
em **[Formulários de Avaliação de Fornecedores](../administrative/evaluation-forms/index.md)**
e atribuídos a este fornecedor. Diferente da tela de Arquivos, a listagem
sempre traz o histórico completo — pendentes, em preenchimento, enviados,
aprovados, rejeitados etc. — não só os pendentes.

## Listagem

| Coluna | Descrição |
| --- | --- |
| Formulário | Título do questionário |
| Cliente | Empresa-cliente que enviou o formulário |
| Status | Pendente, Em preenchimento, Enviado, Em revisão, Aprovado, Aprovado com ressalvas, Rejeitado, Aguardando assinatura, Correção solicitada ou Expirado |
| Prazo | Data-limite para responder |

O ícone de pasta em cada linha abre a tela de resposta do formulário.

## Responder um formulário

O formulário só pode ser preenchido ou editado enquanto o status é
**Pendente**, **Em preenchimento** ou **Correção solicitada** — este
último significa que o cliente pediu um ajuste pontual, sem reprovar o
formulário. Em qualquer outro status a tela fica somente para leitura, com
o aviso "Este formulário já foi enviado e não pode ser editado."

**Dados de contato** (nome e email de quem está respondendo) vêm
pré-preenchidos com os dados de quem está logado, mas podem ser
alterados; são obrigatórios para enviar.

O formulário é organizado em seções, cada uma com uma ou mais perguntas:

| Tipo de pergunta | Como responder |
| --- | --- |
| Texto curto / Texto longo | Campo de texto; pode ter a opção "Não se aplica (N/A)" |
| Número | Campo numérico |
| Data | Campo de data |
| Email | Campo de email |
| Escolha única / Sim-Não | Um único botão de opção |
| Múltipla escolha | Uma ou mais caixas de seleção |
| Upload de arquivo | Envia o arquivo assim que ele é selecionado (não é preciso salvar rascunho ou enviar o formulário depois) |
| Cabeçalho de seção | Texto informativo, não é uma pergunta |

Perguntas marcadas como obrigatórias pelo cliente precisam ser respondidas
para o envio ser aceito; quando a pergunta tem comentário obrigatório,
esse campo também precisa ser preenchido. Se o formulário tiver pontuação
habilitada, um total é calculado e mostrado ao final, conforme o fornecedor
vai respondendo — é só informativo.

**Passo a passo:**

1. Na listagem, clique no ícone de pasta do formulário desejado.
2. Confira ou ajuste nome e email de contato.
3. Responda as perguntas de cada seção, usando "Não se aplica" onde
   fizer sentido e onde a opção estiver disponível, e anexando arquivos
   onde for pedido.
4. Clique em **Salvar rascunho** a qualquer momento para não perder o
   progresso sem finalizar — o status muda para Em preenchimento.
5. Quando terminar, clique em **Enviar formulário** e confirme.
6. Se o formulário exigir assinatura digital, o status passa a **Aguardando
   assinatura**: o fornecedor recebe um email e precisa assinar o
   documento gerado (veja **[Assinaturas](./assinaturas.md)**) para o
   envio se completar automaticamente. Se não exigir assinatura, o status
   já vai direto para Enviado.
7. O cliente analisa e registra uma decisão — Aprovado, Aprovado com
   ressalvas, Rejeitado ou Correção solicitada. Neste último caso o
   formulário reabre para o fornecedor ajustar e reenviar; nos demais, a
   tela permanece somente para leitura.

O botão **Histórico**, no topo da tela de resposta, abre a linha do tempo
completa do formulário — criação, rascunhos salvos, envio, decisões e
comentários de quem avaliou — para acompanhar o que já aconteceu.
