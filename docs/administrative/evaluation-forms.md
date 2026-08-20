---
title: Formulários de Avaliação de Fornecedores
slug: /modules/administrative/evaluation-forms
sidebar_position: 11
---

# Formulários de Avaliação de Fornecedores

Formulários de Avaliação de Fornecedores é o construtor de questionários que
a empresa usa para qualificar ou homologar seus fornecedores segundo
critérios próprios — para além do controle documental feito pelo
**[Gerenciador de arquivos](./file-manager.md)**. Cada formulário é montado
com seções e perguntas, pode exigir assinatura digital do respondente,
pode pontuar as respostas para chegar a um resultado de aptidão, e pode
exigir aprovação interna antes de ser considerado concluído.

Um formulário tem três status: **Rascunho** (em edição, ainda não visível
aos fornecedores), **Ativo** (publicado; fornecedores com uma regra
associada podem respondê-lo) e **Inativo** (despublicado; fornecedores
deixam de conseguir respondê-lo). Um formulário só pode ser editado ou
excluído enquanto está em Rascunho — ao ser ativado, ele deixa de poder ser
editado. Ativar e inativar são ações reversíveis entre si, mas não desfazem
a trava de edição.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Título | **Sim** | — |
| Tipo de arquivo padrão para assinatura | Depende | Obrigatório quando "Requer assinatura" está habilitado; categoria de arquivo em que o documento assinado será arquivado no fornecedor |
| Validade (meses) | Não | De 1 a 600 meses |
| Limiar de pontuação | Não | Nota mínima para aptidão, quando a pontuação está habilitada |
| Tipo de limite de pontuação | Depende | Obrigatório quando "Pontuação habilitada" está habilitado; Percentual ou Absoluto |
| Requer assinatura | Não | Interruptor; exige assinatura digital do respondente ao concluir o formulário |
| Pontuação habilitada | Não | Interruptor; habilita a pontuação das respostas |
| Requer aprovação do formulário de avaliação | Não | Interruptor; exige aprovação interna da resposta antes de concluída |
| Descrição | Não | — |
| Arquivo | Não | Anexo de referência (PDF ou Word) |

A construção de seções, perguntas e opções acontece no mesmo formulário de
cadastro/edição, em um construtor de estrutura:

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Título da seção | **Sim** | — |
| Descrição da seção | Não | — |
| Requer aprovação (seção) | Não | Permite designar um aprovador específico para essa seção |
| Rótulo da pergunta | **Sim** | — |
| Texto de ajuda | Não | — |
| Tipo de pergunta | **Sim** | Texto curto, Texto longo, Número, Data, Email, Escolha única, Múltipla escolha, Sim/Não, Upload de arquivo ou Cabeçalho de seção |
| Obrigatório (pergunta) | Não | — |
| Comentário | Não | Permite que o respondente adicione um comentário à resposta |
| Mapeamento do campo do fornecedor | Não | Vincula a resposta a um campo do cadastro do fornecedor |
| Rótulo da opção | **Sim** | Para perguntas de escolha única ou múltipla |
| Pontuação da opção | Não | Usada quando a pontuação está habilitada |
| Desqualificante | Não | Marca a opção como reprovação automática do fornecedor |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro de um novo formulário de avaliação |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do formulário, com as abas Regras, Aprovadores, Seções, Questões e Respostas |
| ![Pencil](/img/icons/Pencil.png) Editar | Disponível apenas em formulários no status Rascunho |
| ![Trash](/img/icons/Trash.png) Apagar | Disponível apenas em formulários no status Rascunho |
| ![Copy](/img/icons/Copy.png) Duplicar | Cria uma cópia do formulário (com sua estrutura de seções e perguntas) em Rascunho |
| Ativar | Publica o formulário; a partir daí ele não pode mais ser editado |
| Inativar | Despublica o formulário; fornecedores deixam de conseguir respondê-lo |
| Ver formulário | Abre uma pré-visualização do formulário como o fornecedor o veria, com respostas apenas locais |

### Abas do detalhe do formulário

- **Regras** — define quais fornecedores devem responder o formulário: cada
  regra vincula um fornecedor (campo obrigatório) e pode ser marcada como
  obrigatória, ativa, e limitada a um período de vigência (início/fim). Um
  mesmo fornecedor não pode ter mais de uma regra para o mesmo formulário.
- **Aprovadores** — define quem aprova as respostas, quando o formulário
  exige aprovação: cada aprovador tem um escopo, **Formulário inteiro** ou
  **Seção** (neste caso, com a seção obrigatoriamente informada), e um
  usuário responsável (campos obrigatórios).
- **Seções** e **Questões** — telas de apoio à mesma estrutura editada no
  construtor do formulário, para consulta e ajustes pontuais.
- **Respostas** — lista as respostas de cada fornecedor vinculado por uma
  regra, com status (Pendente, Em preenchimento, Enviado, Em revisão,
  Aprovado, Aprovado com ressalvas, Rejeitado ou Expirado), se já foi
  respondido, pontuação obtida e resultado. Ao abrir uma resposta enviada,
  o aprovador pode registrar a decisão — Aprovar, Aprovar com ressalvas ou
  Reprovar — sendo o comentário obrigatório nas duas últimas opções.

O sistema não permite editar a estrutura de um formulário já ativo
justamente para preservar a integridade das respostas já coletadas ou em
andamento; para alterar um formulário publicado, o caminho é duplicá-lo,
ajustar a cópia em Rascunho e ativá-la no lugar do original.
