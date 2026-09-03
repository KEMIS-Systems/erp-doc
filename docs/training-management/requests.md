---
title: Solicitações
slug: /modules/training-management/requests
sidebar_position: 7
---

# Solicitações

Solicitações é usada para pedir que uma gestora de treinamento parceira
(um "pedagogo") agende um curso para um participante — diferente da
**[Matriz de Treinamentos](./trainings-matrices.md)**, que define
exigências, aqui o pedido é pontual: para um participante (colaborador já
cadastrado ou uma pessoa ainda sem cadastro no ERP), é possível solicitar
um ou mais cursos de uma vez, enviar o pedido à gestora escolhida e
acompanhar a resposta.

Cada solicitação registrada corresponde, na prática, a um curso pedido
para um participante — ao adicionar vários cursos de uma vez no
formulário, o sistema cria uma solicitação para cada um deles.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Gestora de treinamento | **Sim** | Gestora de treinamento parceira (pedagogo) à qual o pedido será enviado |
| Colaborador | Não | Busca de um colaborador já cadastrado, para preencher automaticamente os dados do participante |
| Nome completo | **Sim** | Nome do participante — preenchido automaticamente ao escolher um colaborador, ou digitado livremente quando o participante ainda não tem cadastro |
| E-mail | Não | E-mail do participante |
| Data de nascimento | Não | Data de nascimento do participante |
| Função | Não | Função do participante |
| Tipo de documento | Não | CPF ou Passaporte |
| Número do documento | Não | Número do documento informado |
| Curso do catálogo | Não | Curso já existente no catálogo, quando aplicável |
| Curso externo | Não | Nome do curso, quando não está no catálogo |
| Carga horária | Não | Carga horária pretendida para o curso |
| Validade | Não | Validade pretendida para o curso |
| Modalidade | Não | Presencial, Online ou Híbrido |
| Data de início preferencial | Não | Data de início desejada |
| Data de término preferencial | Não | Data de término desejada |
| Observações | Não | Observações livres sobre o pedido |

É necessário informar ao menos um curso por solicitação. O participante
não precisa ser, obrigatoriamente, um colaborador com cadastro no ERP: os
dados podem ser digitados livremente para alguém que ainda não está
cadastrado.

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Salvar | Registra a solicitação sem enviá-la ainda à gestora de treinamento |
| Salvar e Enviar | Registra a solicitação e já a envia à gestora de treinamento |
| Enviar ao pedagogo | Envia uma solicitação já registrada (ou várias, selecionadas em lote) para a gestora de treinamento |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a solicitação. Só fica disponível enquanto ela ainda não tiver sido enviada |

## Fluxo da solicitação

Ao ser criada, a solicitação começa como **rascunho**. Ao ser enviada — pela
ação "Salvar e Enviar" ou pelo botão "Enviar ao pedagogo" — o sistema
registra a data de envio e a solicitação passa a aguardar resposta da
gestora de treinamento. A resposta chega de volta ao KEMIS ERP pela própria
gestora parceira, atualizando a solicitação para uma das situações
seguintes: aguardando agendamento, agendado, concluído, cancelado ou
rejeitado — quando rejeitada, a gestora pode informar um motivo, exibido
no campo de motivo da rejeição. Todas as solicitações enviadas para a
gestora de treinamento numa mesma ação precisam ser da mesma gestora.
