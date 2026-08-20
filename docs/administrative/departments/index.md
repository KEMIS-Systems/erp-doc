---
title: Departamentos
slug: /modules/administrative/departments
sidebar_position: 1
---

# Departamentos

Esta tela cadastra os departamentos usados para organizar a estrutura
interna da empresa. Um departamento serve de referência em outras telas do
ERP — por exemplo, no cadastro de **[Usuários](../users.md)** e de
colaboradores — e pode receber um gestor responsável.

Ao abrir o detalhe de um departamento, duas páginas ficam disponíveis:
**Seções**, que subdividem o departamento em unidades menores (cada uma com
seu próprio gestor), e **Empresas**, que vincula o departamento a uma ou
mais empresas do cliente (só aparece quando o cliente tem mais de uma
empresa cadastrada) — nesse caso, cada vínculo também define um gestor
responsável por aquele departamento naquela empresa, e opcionalmente uma
seção.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Departamento | **Sim** | Nome do departamento |
| Código | Não | — |
| Gestor | Não | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro de um novo departamento |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do departamento, com as páginas Seções e Empresas |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados do departamento |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o departamento |

## Páginas desta seção

- [Seções](./secoes.md)
- [Empresas](./empresas.md)
