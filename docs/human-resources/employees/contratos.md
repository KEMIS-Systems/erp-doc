---
title: Contratos
slug: /modules/human-resources/employees/contratos
sidebar_position: 6
---

# Contratos

Lista os vínculos do colaborador com os contratos de cliente do módulo
**Administrativo › Contratos**, com o período de vigência de cada
vínculo. Não é possível cadastrar um contrato novo por aqui — apenas
vincular o colaborador a um contrato administrativo já existente.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Contrato | **Sim, apenas ao adicionar** | Contrato administrativo ao qual o colaborador será vinculado; não pode ser alterado depois de criado o vínculo |
| Data de início | Não | Início da vigência do vínculo |
| Data de término | Não | Fim da vigência do vínculo |
| Inativo | Não | Interruptor; marca o vínculo como inativo |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Vincula o colaborador a um contrato administrativo |
| ![Pencil](/img/icons/Pencil.png) Editar | Altera as datas de vigência ou marca o vínculo como inativo |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o vínculo. Indisponível para o contrato marcado como atual do colaborador no cadastro principal |

Vincular, editar ou remover um contrato aqui gera automaticamente um
registro na aba **[Auditorias](./auditorias.md)** do colaborador.
