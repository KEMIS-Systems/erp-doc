---
title: Exames médicos
slug: /modules/human-resources/employees/exames-medicos
sidebar_position: 3
---

# Exames médicos

Mostra a situação do colaborador em relação aos exames médicos
ocupacionais exigidos dele: data de conclusão, validade, data de
vencimento, nível de exigência (obrigatório ou recomendado) e status de
conformidade. A exigência de cada exame é sincronizada automaticamente a
partir do **[Cargo](../roles/exames-medicos.md)**, dos contratos e das
**[Atividades críticas](./atividades-criticas.md)** do colaborador. A
conclusão de um exame pode ser lançada manualmente aqui, ou preenchida
automaticamente quando o exame é concluído em um agendamento do módulo
Saúde Ocupacional.

Assim como na matriz de treinamentos, cada linha pode ter uma ou mais
**fontes** — os motivos que exigem aquele exame — abertas pelo botão "Ver
Fontes".

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Exame médico | **Sim, apenas ao adicionar** | Exame a incluir na matriz; não pode ser alterado depois de criado |
| Data de conclusão | Não | Data em que o exame foi realizado |
| Obrigatório | Não | Interruptor; só aparece ao adicionar ou ao editar uma linha incluída manualmente. Define se o exame é obrigatório ou apenas recomendado |
| Tipo de arquivo | Não | Categoria do arquivo de comprovação (ASO, por exemplo); é possível cadastrar um novo tipo diretamente deste formulário |
| Arquivo | **Sim, quando um tipo de arquivo é selecionado** | Comprovante do exame |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Inclui manualmente um exame na matriz do colaborador |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera a data de conclusão, o arquivo ou (para linhas incluídas manualmente) se o exame é obrigatório |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a linha da matriz. Indisponível para linhas travadas por regras automáticas do sistema |
| ![ShowFile](/img/icons/ShowFile.png) Ver arquivo | Abre o arquivo de comprovação vinculado, quando houver |
| Ver Fontes | Lista as origens (cargo, contrato, atividade crítica ou inclusão manual) que exigem aquele exame para o colaborador |
| Concluir (em lote) | Marca uma data de conclusão para todos os exames selecionados de uma vez |

Quando um exame agendado no módulo Saúde Ocupacional é concluído por lá, o
sistema atualiza automaticamente a linha correspondente nesta matriz —
não é necessário lançar a conclusão duas vezes.
