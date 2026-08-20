---
title: Matriz de exames
slug: /modules/occupational-health/examinations-matrices
sidebar_position: 4
---

# Matriz de exames

A Matriz de exames define, para cada função/cargo, quais exames do
catálogo de **[Exames](./examinations.md)** são obrigatórios ou apenas
recomendados, e com qual periodicidade. A tela de listagem cadastra o
**cabeçalho** da matriz — um título, opcionalmente vinculado a um
contrato e a uma empresa — e a tela de detalhe (aberta a partir de cada
linha) é onde a matriz em si é montada: uma grade cruzando funções
(linhas) com exames (colunas), célula a célula.

Cada cliente tem uma matriz "padrão", sem contrato vinculado — o sistema
permite apenas uma matriz sem contrato por cliente, reaproveitando a
existente caso se tente cadastrar outra. Já matrizes vinculadas a um
contrato específico são uma por combinação de contrato e empresa.

## Formulário (cabeçalho da matriz)

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Título | **Sim** | Nome/identificação da matriz |
| Empresa | Não | Empresa à qual a matriz pertence. Só aparece no formulário quando o cliente tem mais de uma empresa cadastrada |
| Contrato | Não | Contrato ao qual a matriz está vinculada. Só é possível escolher um contrato ao cadastrar uma matriz nova, ou editar o contrato de uma matriz que já tinha um — não é possível adicionar um contrato a uma matriz "padrão" que nunca teve um |
| Revisão | Não | Identificação da revisão da matriz (texto livre) |
| Data de revisão | Não | Data da última revisão da matriz |

## Ações disponíveis (listagem)

| Ação | Descrição |
| --- | --- |
| ![FolderOpen](/img/icons/FolderOpen.png) Visualizar | Abre a tela de detalhe da matriz, onde a grade função × exame é montada |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para editar o cabeçalho da matriz |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a matriz. Só aparece para matrizes vinculadas a um contrato — a matriz "padrão" (sem contrato) não pode ser excluída por esta tela |

## Tela de detalhe: a grade função × exame

Na tela de detalhe, a aba **Matriz** mostra uma grade com as funções nas
linhas e os exames do catálogo nas colunas. Cada célula preenchida mostra
um ícone indicando se o exame é obrigatório (exclamação vermelha) ou
recomendado (estrela) para aquela função, e, se a validade padrão do
exame foi customizada para essa função, o número de meses customizado.

### Vincular exame(s) a função(ões)

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Exame médico | **Sim** | Um ou mais exames do catálogo a vincular |
| Funções | **Sim** | Uma ou mais funções às quais os exames serão vinculados |
| Este exame é recomendado? | Não | Alternador: quando marcado, o vínculo é criado como "Recomendado"; quando desmarcado, como "Obrigatório" (padrão) |

### Editar um vínculo (célula da grade)

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Alterado? | Não | Alternador que indica se a validade padrão do exame foi customizada para esta função. Se desligado, o sistema sempre recalcula a validade a partir do valor padrão cadastrado em Exames, ignorando o que estiver no campo Validade |
| Validade (meses) | Não | Periodicidade customizada, em meses. Só pode ser preenchida quando "Alterado?" está ligado |
| Este exame é recomendado? | Não | Mesmo alternador Obrigatório/Recomendado do vínculo |

## Ações disponíveis (grade)

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário para vincular um ou mais exames a uma ou mais funções |
| Filtrar | Filtra a grade exibida por função e/ou exame |
| Exportar (Excel) | Gera uma planilha da matriz |
| ![Pencil](/img/icons/Pencil.png) Editar (por célula) | Edita o vínculo daquele exame com aquela função |
| ![Trash](/img/icons/Trash.png) Apagar (por célula) | Remove o vínculo daquele exame com aquela função |

Clicar no nome de uma função ou no nome de um exame, no cabeçalho da
grade, abre uma lista dos colaboradores daquela função (ou sujeitos
àquele exame) com a respectiva data de vencimento, incluindo um botão
para exportar essa lista em Excel.

Ao criar, editar ou apagar um vínculo na matriz, o sistema recalcula
automaticamente as exigências de exame dos colaboradores que ocupam
aquela função — é essa sincronização que mantém o histórico individual
de exames de cada colaborador atualizado conforme a matriz muda.
