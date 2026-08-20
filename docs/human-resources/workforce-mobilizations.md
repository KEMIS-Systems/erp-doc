---
title: Mobilizações de força de trabalho
slug: /modules/human-resources/workforce-mobilizations
sidebar_position: 9
---

# Mobilizações de força de trabalho

Uma mobilização de força de trabalho representa a alocação de um
**[Colaborador](./employees.md)** já cadastrado para atender a um contrato
de cliente específico. Ao criar uma mobilização, o sistema reúne
automaticamente tudo o que aquele contrato exige do colaborador — os
treinamentos, os exames médicos e os arquivos previstos para o cargo dele
naquele contrato — e acompanha o envio e a aprovação desses itens pelo
cliente até que a mobilização esteja liberada.

Ao abrir o detalhe de uma mobilização, é possível consultar os
treinamentos, exames médicos, arquivos, remessas de envio ao cliente e o
histórico de eventos daquela mobilização.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Colaborador | **Sim** | Colaborador a ser mobilizado; não pode ser alterado depois de criada a mobilização |
| Contrato | **Sim** | Contrato do cliente ao qual o colaborador será mobilizado; não pode ser alterado depois de criada a mobilização |
| Número de registro | Não | — |
| Observação | Não | — |

A categoria funcional (cargo) não é informada no formulário — o sistema a
herda automaticamente do cargo atual do colaborador selecionado.

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cria uma nova mobilização; gera automaticamente os treinamentos, exames e arquivos exigidos pelo contrato |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe da mobilização, com treinamentos, exames médicos, arquivos, remessas e log |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera número de registro e observação; colaborador e contrato ficam bloqueados |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a mobilização |
| Cancelar | Marca a mobilização como rejeitada; disponível a qualquer momento, exceto quando já rejeitada ou cancelada |

O status de uma mobilização é calculado automaticamente pelo sistema com
base na situação dos treinamentos, exames e arquivos exigidos: aguardando
conclusão de treinamento/exame, aguardando recebimento de documento,
pronto para envio, enviado (aguardando resposta do cliente), retornado com
pendências, precisa reenviar, ou aprovado — este último quando todos os
itens são aprovados pelo cliente (ou quando não há nenhum item exigido). Os
únicos status definidos manualmente pelo usuário são rejeitado, cancelado e
suspenso; uma vez rejeitada ou cancelada, a mobilização não aceita mais
mudanças de status. A coluna de pendências na listagem sinaliza quando
algum item precisa ser reenviado ao cliente.
