---
title: Contratos
slug: /modules/administrative/contracts
sidebar_position: 9
---

# Contratos

Esta tela cadastra os contratos firmados com **[Clientes](./customers.md)**.
Além dos dados básicos do contrato (vigência, valor, gestor responsável), a
página de detalhe de cada contrato reúne sete abas que organizam toda a
operação em torno dele: locais de trabalho, usuários vinculados, arquivos do
contrato, colaboradores mobilizados, arquivos do cliente, regras de tarefa e
pendências de tarefa.

Na listagem, cada contrato mostra também uma **situação das tarefas**
(Sem tarefas, Em dia, Pendente ou Atrasado), calculada a partir das
pendências geradas pelas regras de tarefa daquele contrato.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Contrato | **Sim** | Nome/identificação do contrato |
| Cliente | **Sim** | Pode ser cadastrado um novo cliente diretamente por este campo |
| Valor | Não | — |
| Data de início | Não | — |
| Data de término | Não | — |
| Contato | Não | Depende do cliente selecionado; lista os contatos cadastrados para aquele cliente |
| Valor de reajuste | Não | — |
| Gerente | Não | Usuário responsável pelo contrato |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro de um novo contrato |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do contrato, com as sete abas descritas abaixo |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados do contrato |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o contrato |
| Filtrar | Filtra a listagem por contrato, cliente, situação das tarefas, período e situação (ativo/inativo) |
| Exportar relatório | Gera de forma assíncrona um relatório em Excel da listagem filtrada |

### Abas do detalhe do contrato

- **Local de trabalho** — cadastra os locais de trabalho vinculados ao
  contrato (campo obrigatório: nome do local), usados para alocar
  colaboradores mobilizados para esse contrato.
- **Usuários** — vincula usuários do sistema ao contrato.
- **Arquivos** — repositório de arquivos do próprio contrato, organizados
  por grupo/categoria (as categorias são cadastradas em
  **[Configurações](./settings.md)**), com descrição e data de vencimento
  opcional.
- **Colaboradores** — lista, em modo de apenas leitura, os colaboradores do
  módulo de Recursos Humanos mobilizados para o contrato, com a
  conformidade de treinamentos e exames de cada um.
- **Arquivos do cliente** — exibe os arquivos cadastrados para o cliente
  dono do contrato (a mesma listagem acessível pelo detalhe do cliente).
- **Regras de tarefa** — define tarefas recorrentes do contrato: título,
  descrição, se possui recorrência (e qual o tipo) e o dia de vencimento
  (1 a 31) em que a pendência deve ser gerada a cada ciclo.
- **Pendências** — lista as pendências geradas pelas regras de tarefa (e
  também aceita pendências manuais, com título, data de vencimento e
  observações), cada uma com status Pendente, Atrasada ou Concluída. Uma
  pendência pode ser confirmada como concluída, com um comentário
  opcional de confirmação, ou ter essa confirmação desfeita.

Como nas demais telas do sistema, os botões de editar e excluir dentro
dessas abas exigem, no mínimo, permissão de Acesso completo na tela de
Contratos.
