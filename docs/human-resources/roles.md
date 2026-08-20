---
title: Categorias funcionais / Cargos
slug: /modules/human-resources/roles
sidebar_position: 3
---

# Categorias funcionais / Cargos

Esta tela cadastra as categorias funcionais (cargos) da empresa. Todo
colaborador cadastrado em **[Colaboradores](./employees.md)** é vinculado a
um cargo, e é esse vínculo que determina o que é exigido dele: quais tipos
de arquivo deve manter válidos (associação feita aqui ou em
**[Tipos de arquivos](./file-types.md)**, e refletida na
**[Matriz de arquivos](./file-matrices.md)**), quais cursos compõem a matriz
de treinamentos do cargo e quais exames médicos ocupacionais são
obrigatórios.

Ao abrir o detalhe de um cargo, é possível consultar (em modo somente
leitura, a partir desta tela) a matriz de treinamentos, as categorias de
arquivo e os exames médicos associados a ele.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria funcional | **Sim** | Nome do cargo |
| Código | Não | Código interno do cargo |
| CBO | Não | Classificação Brasileira de Ocupações |
| Descrição | Não | Texto livre descrevendo o cargo |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do cargo, com as abas Matriz de treinamentos, Categorias de arquivos e Exames médicos |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar o cargo |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o cargo. A exclusão pede confirmação antes de ser efetivada |
| Importar | Permite importar cargos em massa a partir de uma planilha (nome, código e CBO), com opção de baixar um modelo pronto |
| Corrigir matriz | Recalcula a matriz de treinamentos, a matriz de exames médicos e as pendências de arquivo do cargo, disponível apenas para usuários com perfil de administrador do sistema |

Não há validação de nome único no cadastro, mas o sistema evita duplicidade
internamente: ao cadastrar um cargo com nome já existente (mesmo que
removido anteriormente), o registro existente é reaproveitado em vez de
criar um novo. A ação "Corrigir matriz" existe tanto por cargo individual
quanto para todos os cargos de uma vez, e serve para resincronizar as
exigências do cargo (treinamentos, exames e arquivos) caso alguma alteração
recente não tenha se refletido corretamente nos colaboradores. Antes de
cadastrar um novo cargo, o sistema verifica se o plano contratado já
atingiu o limite de registros do módulo e bloqueia o cadastro nesse caso.
