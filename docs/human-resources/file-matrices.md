---
title: Matriz de arquivos
slug: /modules/human-resources/file-matrices
sidebar_position: 6
---

# Matriz de arquivos

A Matriz de arquivos mostra, em forma de grade, quais tipos de documento
(ver **[Tipos de arquivos](./file-types.md)**) cada
**[Categoria funcional / Cargo](./roles/index.md)** exige, e o quanto essa
exigência está sendo cumprida pelos colaboradores de cada cargo. É a
ferramenta de acompanhamento da conformidade documental por cargo e,
opcionalmente, por contrato — enquanto a associação individual entre cargo
e tipo de arquivo pode ser feita nas telas de Tipos de arquivos ou
Categorias funcionais, é aqui que se enxerga o resultado consolidado, com
totais de documentos em dia, vencidos e a vencer.

Cada matriz cadastrada é um cabeçalho (com título, contrato opcional e data
de revisão); ao abrir uma matriz, a grade cruza tipos de arquivo (colunas)
com cargos (linhas).

## Formulário

### Cabeçalho da matriz

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Título | **Sim** | Nome da matriz |
| Contrato | Não | Restringe a matriz a um contrato específico; uma vez definido, não pode mais ser removido do registro |
| Data de revisão | Não | — |
| Revisão | Não | Texto livre (editor de texto) descrevendo a revisão |

### Vínculo na grade

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Tipo de arquivo | **Sim** | Documento exigido |
| Cargo(s) | **Sim** | Um ou mais cargos que passam a exigir esse tipo de arquivo (seleção múltipla) |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cria um novo cabeçalho de matriz |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre a grade da matriz |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera título, contrato, data e texto de revisão do cabeçalho |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o cabeçalho da matriz; só fica disponível para matrizes vinculadas a um contrato |
| Adicionar vínculo (dentro da grade) | Associa um tipo de arquivo a um ou mais cargos |
| Excluir vínculo (célula preenchida da grade) | Remove a exigência daquele tipo de arquivo para o cargo |
| Exportar Excel | Exporta a grade da matriz |
| Clique nos totais / cabeçalhos | Abre uma lista dos colaboradores que compõem aquele total (em dia, vencido, a vencer em 30/60/90 dias, por cargo ou por tipo de arquivo) |

Ao cadastrar uma nova matriz para um cliente que já tenha uma matriz sem
contrato definido (ou com o mesmo contrato), o sistema reaproveita a matriz
existente em vez de criar uma duplicada. Vincular um tipo de arquivo a um
cargo dentro da grade gera automaticamente, para cada colaborador daquele
cargo que ainda não tenha o documento, uma pendência de arquivo — a mesma
lógica usada nas telas de Tipos de arquivos e Categorias funcionais, já que
esse vínculo é a mesma informação usada em ambas. Os totais de
conformidade exibidos na grade (em dia, vencido, a vencer) são calculados a
partir da situação real dos arquivos de cada colaborador do cargo.
