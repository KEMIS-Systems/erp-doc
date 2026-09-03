---
title: Gestores
slug: /modules/administrative/managers
sidebar_position: 8
---

# Gestores

Ao contrário das demais telas do módulo, Gestores não é exibida como uma
lista: é apresentada como um **organograma**, montado a partir da hierarquia
de gestor superior de cada registro. Cada nó do organograma representa um
gestor (um usuário do sistema associado a uma empresa, departamento, seção
e cargo/posição) e pode ter subordinados, que aparecem como nós filhos
abaixo dele.

Esse cadastro de gestores é a referência usada em outras telas do módulo —
Departamentos, Seções e Empresas de departamento — para indicar quem é o
responsável por cada unidade da estrutura.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Usuário | **Sim** | Usuário do sistema que exerce a função de gestor |
| Gestor superior | Não | Só aparece quando já existe ao menos um gestor cadastrado; define a posição do novo gestor no organograma |
| Empresa | Não | — |
| Departamento | Não | — |
| Seção | Não | Depende do departamento selecionado |
| Posição | Não | Cargo/função exibida no organograma |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Botão flutuante no canto superior direito; abre o formulário de cadastro de um novo gestor |
| Editar | Passe o mouse sobre um nó do organograma para revelar o menu de ações; abre o formulário para alterar os dados do gestor |
| Excluir | Passe o mouse sobre um nó do organograma para revelar o menu de ações; remove o gestor, com confirmação antes de ser efetivada |

Diferente da maioria das telas do sistema, os botões de editar e excluir do
organograma não ficam condicionados ao nível de permissão do usuário — eles
aparecem para qualquer usuário com acesso à tela.
