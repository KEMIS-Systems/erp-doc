---
title: Arquivos
slug: /arquivos
sidebar_position: 6
---

# Arquivos

Lista consolidada de todos os documentos — enviados e pendentes — que o
fornecedor precisa manter em dia com **todos** os clientes aos quais está
vinculado. Cada documento corresponde a uma exigência criada do lado do
cliente, em **[Configurações](/docs/modules/administrative/settings)** (categoria de
arquivo e regra de obrigatoriedade) e acompanhada no
**[Gerenciador de arquivos](/docs/modules/administrative/file-manager)** do ERP.

## Indicadores

Cinco cartões no topo resumem a situação de todos os documentos:
**Pendentes**, **Enviados**, **Aprovados**, **Rejeitados** e **Expirados**.

## Listagem

| Coluna | Descrição |
| --- | --- |
| Documento | Nome da categoria de arquivo exigida (ou a descrição informada no envio) |
| Cliente | Empresa-cliente que exige esse documento |
| Status | Ver tabela de status abaixo |
| Vencimento | Data de validade do documento, quando aplicável |

O botão **Ver documento**, em cada linha, abre o formulário de envio ou
consulta daquele documento específico — é o único jeito de abrir o
detalhe (não há ação ao clicar na linha).

### Status possíveis

| Status | Significado |
| --- | --- |
| Pendente | Ainda não foi enviado |
| Enviado | Enviado pelo fornecedor, aguardando análise do cliente |
| Aprovado | Aceito pelo cliente; não aceita novo envio |
| Rejeitado | Recusado pelo cliente, com um motivo — pode ser reenviado |
| Expirado | Passou da data de validade; não aceita novo envio por aqui |
| Dispensado | O cliente confirmou que o documento não se aplica a este fornecedor |

## Enviar um documento pendente

Abrindo **Ver documento** num item Pendente, Enviado ou Rejeitado (os
únicos status que aceitam envio), a tela mostra o cliente, o tipo de
documento, a referência e o prazo, e — se foi rejeitado — o motivo da
rejeição em destaque, para orientar a correção.

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Este documento não se aplica (N/A) | Depende | Só aparece quando o documento não é obrigatório; ao marcar, bloqueia e limpa os campos de arquivo e vencimento — o cliente ainda precisa validar essa declaração |
| Descrição | Não | Se deixado em branco, usa o nome do arquivo enviado |
| Vencimento não se aplica (N/A) | Não | Independe do N/A do documento; permite dizer que, neste envio específico, não há data de validade |
| Data de validade | Depende | Obrigatória quando a categoria de documento exige vencimento e "Vencimento não se aplica" não está marcado |
| Arquivo | **Sim** (se não for N/A) | Apenas PDF |

**Passo a passo:**

1. Na listagem, clique em **Ver documento** no item desejado (ou use o
   botão **Enviar** direto no **[Painel](./dashboard.md)**, quando
   disponível).
2. Confira os dados do documento exigido e, se houver, o motivo de uma
   rejeição anterior.
3. Se o documento não se aplicar ao seu caso e a opção estiver disponível,
   marque "Não se aplica"; caso contrário, preencha a descrição (opcional),
   a data de validade (quando exigida) e selecione o arquivo em PDF.
4. Clique em **Enviar arquivo**. O status passa a Enviado e a análise fica
   por conta do cliente.

Documentos Aprovados, Expirados ou Dispensados não aceitam novo envio por
esta tela — aparece o aviso "Este documento não aceita novo envio no
momento."

## Enviar um documento não solicitado

Além dos documentos exigidos pelo cliente, o fornecedor pode enviar por
iniciativa própria um documento que ainda não foi pedido, pelo botão
**Enviar documento**, no topo da listagem.

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Cliente | **Sim** | Define quais categorias de arquivo ficam disponíveis no campo seguinte |
| Categoria de arquivo | **Sim** | Carregada a partir do cliente escolhido |
| Descrição | Não | Se deixado em branco, usa o nome do arquivo |
| Vencimento | Depende | Obrigatório se a categoria escolhida exigir data de validade |
| Arquivos (PDF) | **Sim** | Permite selecionar mais de um arquivo; cada um é enviado separadamente |

**Passo a passo:**

1. Clique em **Enviar documento**.
2. Escolha o cliente e, em seguida, a categoria de arquivo.
3. Preencha a descrição (opcional) e o vencimento (se exigido pela
   categoria).
4. Selecione um ou mais arquivos em PDF e clique em **Enviar**.
5. O cliente avalia (aprova ou rejeita) o documento do mesmo jeito que um
   documento normalmente exigido.

Se algum arquivo falhar ao enviar (por exemplo, por problema de rede), o
sistema avisa quantos não foram enviados, sem descartar os que já tiveram
sucesso.
