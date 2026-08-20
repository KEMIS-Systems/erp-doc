---
title: Dashboard
slug: /modules/human-resources/dashboard
sidebar_position: 11
---

# Dashboard

O Dashboard reúne, em painéis visuais, os principais indicadores do módulo
de Recursos Humanos: composição do quadro de colaboradores, conformidade
das matrizes de treinamento e de exames médicos (as mesmas exigências
definidas em **[Categorias funcionais / Cargos](./roles/index.md)** e
**[Atividades críticas](./critical-activities.md)**), situação dos
documentos controlados no **[Gerenciador de arquivos](./file-manager.md)**,
agendamento de exames, relatórios semanais de pendências e análises por
contrato ou por colaborador. É uma tela de consulta — não há cadastro de
registros aqui, apenas filtros e detalhamento (drill-down) dos números
exibidos.

O painel é organizado em abas:

- **Colaboradores** — distribuição por status, setor/departamento, sexo, e
  vencimento e categoria da CNH.
- **Matriz de treinamentos** — indicador de itens vencidos, percentual de
  conformidade e tabelas de risco por curso, categoria funcional e
  contrato.
- **Matriz de exames** — mesma estrutura da matriz de treinamentos, voltada
  a exames médicos ocupacionais.
- **Arquivos** — percentual e quantidade de vencimento de arquivos de
  colaboradores e de contratos.
- **Treinamentos** — horas de treinamento concluídas por mês, por
  colaborador e por grupo de curso, além do ranking de empresas
  fornecedoras de treinamento.
- **Agendamento de exames** — agendamentos por status e por tipo de exame.
- **Análise** — visão por contrato (treinamentos, exames e arquivos de cada
  colaborador) e visão de elegibilidade a promoção por colaborador/função.
- **Relatório semanal** — lista de arquivos e treinamentos de colaboradores
  pendentes de envio na semana.

## Formulário

A maioria das abas não tem formulário de cadastro — apenas filtros para
recortar os indicadores exibidos.

| Campo (filtro) | Obrigatório | Descrição |
| --- | :---: | --- |
| Empresa / Cargo / Centro de custo / Departamento | Não | Restringe os indicadores ao recorte selecionado |
| Contrato | Não | — |
| Gestor / Técnico de segurança / Usuário administrativo | Não | — |

A aba Relatório semanal permite cadastrar manualmente um arquivo ou
treinamento pendente, com exclusão disponível na mesma listagem.

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Filtrar | Aplica os filtros disponíveis na aba (varia conforme a aba) |
| Clique em gráfico ou totalizador | Abre a lista detalhada de colaboradores ou contratos que compõem aquele número |
| ![Trash](/img/icons/Trash.png) Apagar (Relatório semanal) | Remove o item pendente cadastrado manualmente |

Os dados de conformidade das matrizes de treinamento e de exames médicos
refletem diretamente as exigências definidas pelo cargo e pelas atividades
críticas de cada colaborador; qualquer ajuste feito nessas telas se reflete
nos indicadores do dashboard.

Uma observação: o frontend deste módulo inclui uma aba adicional,
"Notificações inteligentes", com seu próprio formulário de regras e
destinatários. Não foi possível confirmar no código do backend nenhuma rota
ou controlador correspondente a essa aba — o que sugere que ela pode ser
uma funcionalidade legada, substituída pela **[Gestão de vencimentos](./expiration-management.md)**,
que cobre o mesmo tipo de necessidade (regras de notificação com
destinatários por empresa, departamento, setor ou centro de custo) de
forma mais completa e com backend confirmado. Por isso, essa aba não está
documentada aqui como funcionalidade ativa.
