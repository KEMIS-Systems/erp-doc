---
title: Gestão de vencimentos
slug: /modules/human-resources/expiration-management
sidebar_position: 10
---

# Gestão de vencimentos

A Gestão Ativa de Vencimentos monitora continuamente os treinamentos e
exames médicos obrigatórios de cada colaborador — as mesmas exigências
definidas pela **[Categoria funcional / Cargo](./roles.md)** e por
**[Atividades críticas](./critical-activities.md)** — e dispara
notificações automáticas antes, no dia ou depois do vencimento, de acordo
com regras configuráveis. Cada regra define o gatilho de disparo, a
prioridade, os canais de envio (e-mail, notificação no sistema ou
WhatsApp) e quem deve ser avisado.

Uma varredura diária identifica os itens vencendo ou já vencidos de cada
cliente e os cruza com as regras ativas; quando há correspondência, o
sistema calcula os destinatários efetivos e envia as notificações pelos
canais configurados, registrando cada envio.

## Formulário

### Regra de notificação

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Nome | **Sim** | Nome da regra |
| Descrição | Não | — |
| Gatilho | **Sim** | Quando a regra dispara: antes do vencimento, no vencimento, após o vencimento ou recorrente até a resolução |
| Prioridade | **Sim** | Baixa, normal, alta ou crítica |
| Dias antes do vencimento | Condicional | Obrigatório quando o gatilho é "antes do vencimento" ou "recorrente até a resolução" |
| Intervalo de recorrência (dias) | Não | Usado apenas quando o gatilho é "recorrente até a resolução" |
| Máximo de lembretes | Não | Usado apenas quando o gatilho é "recorrente até a resolução" |
| Aplica-se a treinamentos | **Sim** | A regra precisa se aplicar a pelo menos treinamentos ou exames médicos |
| Aplica-se a exames médicos | **Sim** | A regra precisa se aplicar a pelo menos treinamentos ou exames médicos |
| Canais | **Sim** | Um ou mais canais de envio (e-mail, sistema, WhatsApp) |

A regra é sempre criada inativa; a ativação é feita por uma ação separada,
depois de cadastrado pelo menos um destinatário.

### Destinatário da regra

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Tipo de destinatário | **Sim** | Usuário fixo, o próprio colaborador, o gestor imediato, o gestor do gestor, ou o responsável pelo departamento |
| Usuário | Condicional | Obrigatório quando o tipo de destinatário é "usuário fixo" |
| Empresa / Departamento / Setor / Centro de custo | Não | Restringe o escopo de colaboradores considerados pelos tipos de destinatário dinâmicos |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra uma nova regra (inativa) |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe da regra |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera os dados da regra |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a regra |
| Ativar / Inativar | Ativa a regra (exige ao menos um destinatário cadastrado) ou a inativa |

Dentro do detalhe de uma regra ativa, ficam disponíveis as abas
Destinatários (configuração, sempre visível), Destinatários efetivos (lista
calculada de quem realmente recebe os avisos), Pendências (itens vencidos
ou a vencer que casaram com a regra), Sugestões (datas sugeridas de
agendamento de exame ou treinamento, com ação para agendar ou solicitar) e
Entregas (histórico de mensagens enviadas, com status de envio/entrega/
leitura e visualização do conteúdo).

A severidade de cada pendência é calculada automaticamente a partir do
prazo restante: vencido ou vencendo hoje é crítica, até 7 dias é alta, até
30 dias é normal, e o restante é baixa; itens obrigatórios nunca realizados
são sempre críticos. Uma pendência não regride para um estado anterior
enquanto estiver em andamento (aguardando disponibilidade, agendada,
treinamento solicitado, resolvida ou ignorada) e é fechada automaticamente
quando o item de origem passa a ter validade posterior ao vencimento
registrado. Os envios de uma mesma regra, destinatário e canal são
agrupados em uma única mensagem-resumo, evitando notificações repetidas
para as mesmas pendências; regras recorrentes reenviam respeitando o
intervalo e o número máximo de lembretes configurados.
