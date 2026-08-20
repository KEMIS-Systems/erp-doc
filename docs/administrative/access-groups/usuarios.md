---
title: Usuários
slug: /modules/administrative/access-groups/usuarios
sidebar_position: 3
---

# Usuários

Lista os usuários vinculados a este grupo de acesso, com cadastro completo
— não é apenas uma lista de membros: cadastrar, editar ou excluir um
usuário por esta página cadastra, edita ou exclui o usuário de verdade no
sistema (o mesmo registro gerenciado em **[Usuários](../users.md)**), já
vinculado a este grupo.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Nome | **Sim** | Nome do usuário |
| Email | **Sim** | Usado para login |
| Celular | Não | — |
| Departamento | Não | — |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra um novo usuário já vinculado a este grupo. Se nenhuma senha for gerada automaticamente, o sistema cria uma e a envia por e-mail ao usuário |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita o usuário (indisponível para o usuário de id 1, reservado ao sistema) |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o usuário (indisponível para o usuário de id 1) |

Para gerar uma chave de API ou trocar a foto do usuário, use a tela
**[Usuários](../users.md)** diretamente — essas ações não estão disponíveis
a partir daqui.
