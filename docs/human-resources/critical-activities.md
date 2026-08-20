---
title: Atividades críticas
slug: /modules/human-resources/critical-activities
sidebar_position: 7
---

# Atividades críticas

Atividades críticas são tarefas de maior risco que exigem qualificação
específica para serem realizadas — por exemplo, trabalho em altura ou
espaço confinado. Cada atividade crítica cadastrada aqui define quais
cursos e quais exames médicos ocupacionais são obrigatórios para que um
colaborador possa exercê-la. Essa exigência se soma à que já vem do
**[Cargo](./roles.md)** do colaborador, reforçando a matriz de treinamentos
e de exames médicos sempre que a atividade crítica é atribuída a alguém no
cadastro do colaborador.

Ao abrir o detalhe de uma atividade crítica, duas listas lado a lado
mostram os cursos e os exames médicos exigidos por ela.

## Formulário

### Atividade crítica

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Atividade crítica | **Sim** (na criação) | Nome da atividade |

### Curso exigido

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Curso | **Sim** | Curso exigido para exercer a atividade |
| Nível de exigência | Não | — |
| Validade | Não | Prazo de validade do curso, em dias |
| Requer renovação | Não | Indica se o curso precisa ser renovado periodicamente |

### Exame médico exigido

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Exame médico | **Sim** (na criação) | Exame ocupacional exigido para exercer a atividade |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra uma nova atividade crítica |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe da atividade, com os cursos e exames exigidos |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera o nome da atividade, do curso exigido ou do exame exigido |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a atividade crítica, o vínculo de curso ou o vínculo de exame, conforme a lista em que a ação for usada |

Ao vincular um curso ou um exame médico a uma atividade crítica, o sistema
sincroniza automaticamente a matriz de treinamentos e a matriz de exames
médicos dos colaboradores que exercem aquela atividade, refletindo a nova
exigência. Uma atividade crítica só passa a valer para um colaborador
específico quando atribuída a ele no cadastro do
**[Colaborador](./employees.md)**; o cadastro feito nesta tela define
apenas o que a atividade exige, de forma geral.
