---
title: Usuários
slug: /modules/administrative/users
sidebar_position: 3
---

# Usuários

Esta tela cadastra as pessoas que acessam o KEMIS ERP com login e senha.
Cada usuário é vinculado a um **[Grupo de acesso](./access-groups/index.md)**, que
define o que ele pode ver e fazer no sistema, e opcionalmente a um
departamento e a uma ou mais empresas do cliente. A listagem mostra, além
dos dados de cadastro, se o usuário está online no momento (com data de
login e de expiração da sessão) e a data do último acesso.

Cada usuário também pode ter uma chave de API pessoal, usada para integrações
externas, e uma foto de perfil.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Grupo de acesso | **Sim** | Define as permissões do usuário no sistema |
| Departamento | Não | — |
| Nome | **Sim** | Nome do usuário |
| Email | **Sim** | Usado para login |
| Celular | Não | — |
| Senha | Não | Se deixado em branco, o backend não valida como obrigatório, mas normalmente é necessário definir uma senha para o usuário conseguir entrar |
| Empresa | Não | Só aparece quando o cliente tem mais de uma empresa cadastrada |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro de um novo usuário |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do usuário (indisponível para o usuário de id 1, reservado ao sistema) |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados do usuário (indisponível para o usuário de id 1) |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o usuário; não é possível excluir o próprio usuário logado nem o usuário de id 1 |
| ![Key](/img/icons/Key.png) Gerar chave de API | Gera uma nova chave de acesso à API para o usuário |
| Foto | Clique na miniatura de foto abre a visualização ou o formulário de upload, se ainda não houver foto cadastrada |
| Exportar relatório | Gera de forma assíncrona um relatório em Excel da listagem de usuários |

A geração da chave de API substitui qualquer chave anterior do usuário e é
exibida por completo **apenas nesse momento**: uma vez fechado o modal, a
chave não pode mais ser consultada, sendo necessário gerar uma nova caso ela
se perca.

![Gerar chave para API](/img/screenshots/administrative.users.key.png)
![Chave de API gerada](/img/screenshots/administrative.users.key_generated.png)
