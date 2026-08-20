---
title: Matriz de Treinamentos
slug: /modules/training-management/trainings-matrices
sidebar_position: 4
---

# Matriz de Treinamentos

A Matriz de Treinamentos é onde ficam definidas as exigências de
capacitação: quais cursos cada função precisa ter, se são obrigatórios ou
apenas recomendados, e com que validade. Cada matriz pertence a um
contrato (ou, quando não há contrato, à empresa como um todo), e dentro
dela existe uma grade cruzando cursos e funções — é essa grade que o
sistema usa para calcular se cada colaborador está em dia, a vencer ou
vencido em relação a cada treinamento exigido pela função que ocupa.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Título | **Sim** | Nome da matriz |
| Empresa | Não | Empresa à qual a matriz pertence (só aparece quando a conta tem mais de uma empresa cadastrada) |
| Contrato | Não | Contrato ao qual a matriz pertence. Só é possível vincular um contrato no cadastro; uma matriz que já existe sem contrato não pode receber um depois |
| Revisão | Não | Identificação da revisão da matriz |
| Data de revisão | Não | Data da última revisão |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| ![FolderOpen](/img/icons/FolderOpen.png) Abrir | Abre a grade de cursos x funções desta matriz |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para editar a matriz |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a matriz. Só fica disponível para matrizes vinculadas a um contrato |

## A grade da matriz

Dentro de uma matriz, os cursos exigidos ficam organizados em uma grade:
as funções nas linhas e os cursos nas colunas. Cada célula preenchida
representa uma exigência — obrigatória ou recomendada — daquele curso para
aquela função.

### Formulário — adicionar curso à matriz

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Curso | **Sim** | Curso a ser exigido |
| Funções | **Sim** | Uma ou mais funções às quais o curso passa a ser exigido |
| Esse curso é recomendado? | Não | Quando desligado (padrão), o curso é obrigatório para a função; quando ligado, passa a ser apenas recomendado |

### Formulário — editar exigência

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Alterado? | Não | Liga a possibilidade de definir uma validade diferente da validade padrão do curso, só para esta função |
| Validade (meses) | Não | Validade específica para esta função. Só pode ser editada quando "Alterado?" está ligado — caso contrário, a função usa a validade padrão do curso |
| Esse curso é recomendado? | Não | Mesma opção do cadastro |

### Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário para exigir um novo curso para uma ou mais funções |
| Buscar/filtrar | Filtra a grade por grupo de curso, curso ou função |
| Exportar (Excel) | Baixa a grade completa em planilha |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita a exigência de um curso para uma função (abre a partir da célula da grade) |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a exigência daquele curso para aquela função |
| Clicar no nome de uma função | Mostra a lista de colaboradores daquela função, com o treinamento, a data de conclusão e a data de vencimento de cada um |
| Clicar no nome de um curso | Mostra a lista de colaboradores que precisam daquele curso, com data de conclusão e vencimento |

Cursos marcados como **obrigatórios** entram no cálculo de vencidos e a
vencer; cursos marcados como apenas **recomendados** nunca aparecem como
vencidos — para eles, o sistema só indica se o colaborador já concluiu ou
ainda não. Quando a validade não é customizada por função ("Alterado?"
desligado), a função herda a validade padrão definida no cadastro do
curso, em [Cursos](./courses/index.md).

A situação de cada colaborador (em dia, vencendo em 30/60/90 dias ou
vencido) é recalculada automaticamente sempre que um treinamento interno
dele é registrado ou atualizado em **[Treinamentos](./trainings.md)**: ao
concluir um treinamento aprovado, o sistema já atualiza a data de
conclusão e o vencimento da exigência correspondente na matriz, sem
precisar de nenhuma ação manual nesta tela.
