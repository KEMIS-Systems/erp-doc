---
title: Grupos de acesso
slug: /modules/administrative/access-groups
sidebar_position: 1
---

# Grupos de acesso

Um grupo de acesso define o que um conjunto de usuários pode ver e fazer no
KEMIS ERP. Todo usuário do sistema pertence a um único grupo de acesso, e é
esse vínculo — não o usuário individualmente — que controla, tela por tela
(cada tela é uma "página" no sentido usado aqui), se o grupo não tem acesso
algum, se tem apenas visualização, se tem acesso completo (pode criar e
editar) ou acesso avançado (que também permite excluir registros).

Ao abrir um grupo de acesso, a página de detalhe mostra duas páginas,
listadas abaixo: **Páginas**, onde são cadastradas as permissões do grupo em
cada tela do sistema (agrupadas por módulo), e **Usuários**, com a lista de
usuários vinculados àquele grupo. Existe sempre um grupo de acesso
"administrador" no cliente, que não pode ser editado nem excluído por esta
tela — ele concentra acesso total ao sistema.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Grupo de acesso | **Sim** | Nome do grupo (ex.: "RH", "Financeiro", "Fiscal") |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro de um novo grupo de acesso |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do grupo, com as páginas listadas abaixo |
| ![Pencil](/img/icons/Pencil.png) Editar | Renomeia o grupo de acesso (indisponível para o grupo administrador) |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o grupo de acesso (indisponível para o grupo administrador) |
| ![ShowFile](/img/icons/ShowFile.png) Gerar relatório | Gera um PDF com os dados do grupo |

Como em praticamente todas as telas do sistema, os botões de editar,
excluir e adicionar só aparecem para usuários cujo grupo de acesso tenha,
no mínimo, permissão de Acesso completo na tela de Grupos de acesso —
usuários com Somente visualização veem a listagem, mas não os botões de
ação.

![Formulário de grupo de acesso](/img/screenshots/administrative.access_groups.controllers_form.png)

## Páginas desta seção

- [Páginas](./paginas.md)
- [Usuários](./usuarios.md)
