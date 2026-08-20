---
title: Contratações
slug: /modules/human-resources/hirings
sidebar_position: 8
---

# Contratações

A tela de Contratações administra o processo de admissão de um candidato
antes que ele se torne efetivamente um **[Colaborador](./employees.md)**.
Ao cadastrar uma contratação, o sistema gera um link exclusivo para um
portal externo, onde o próprio candidato preenche seus dados pessoais, de
endereço e envia os documentos exigidos pela categoria funcional (cargo)
para a qual está sendo contratado — os mesmos tipos de arquivo definidos em
**[Tipos de arquivos](./file-types.md)** e associados ao cargo em
**[Categorias funcionais / Cargos](./roles.md)**.

O link pode ser copiado ou enviado diretamente por WhatsApp para o
candidato a partir da listagem.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Categoria funcional (cargo) | **Sim** | Define os tipos de arquivo que serão exigidos do candidato |
| Nome | **Sim** | Nome do candidato |
| CPF | Não | Validado como CPF válido quando informado |
| Passaporte | Não | — |
| Data de nascimento | Não | — |
| E-mail | Não | — |
| Arquivos exigidos | Não | Pré-preenchido automaticamente com os tipos de arquivo exigidos pelo cargo escolhido |
| Telefone / Celular | Não | Aba de dados pessoais |
| CEP / Endereço | Não | Aba de dados pessoais; ao preencher o CEP o endereço é buscado e preenchido automaticamente |
| Observações internas | Não | Aba de dados complementares |
| Orientações para o colaborador | Não | Aba de dados complementares |
| Sobre mim (descrito pelo colaborador) | Não | Aba de dados complementares |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra uma nova contratação e gera o link do candidato |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados da contratação |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o registro de contratação |
| ![Copy](/img/icons/Copy.png) Copiar link | Copia o link do portal externo de preenchimento para a área de transferência |
| Enviar por WhatsApp | Abre o WhatsApp com uma mensagem pronta contendo o link do portal, disponível quando o candidato tem celular cadastrado |

Cada contratação tem um status: aguardando preenchimento dos dados, dados
completos ou contratado. O candidato só consegue editar seus próprios
dados pelo link externo enquanto a contratação estiver no status inicial
("aguardando preenchimento dos dados"). O sistema não valida CPF duplicado
nem exige unicidade entre contratações — cada registro gera um link próprio
e independente.
