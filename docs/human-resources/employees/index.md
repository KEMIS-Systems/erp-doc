---
title: Colaboradores
slug: /modules/human-resources/employees
sidebar_position: 1
---

# Colaboradores

Esta é a tela central de cadastro de pessoas do módulo de Recursos
Humanos. Cada colaborador é vinculado a uma
**[Categoria funcional / Cargo](../roles/index.md)**, que determina os documentos,
cursos e exames exigidos dele, e pode estar associado a um contrato de
cliente, departamento, centro de custo e gestores. A partir do cadastro do
colaborador é possível acompanhar arquivos, contratos, qualificações,
exames médicos, atividades críticas, equipamentos e outras informações em
abas específicas na página de detalhe.

O formulário de cadastro é dividido em quatro abas: dados principais, dados
de contato, dados complementares e documentos.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Empresa | Não | Só aparece quando o cliente tem mais de uma empresa cadastrada |
| Nome | **Sim** | Nome completo do colaborador |
| CPF | **Sim** | Validado como CPF válido |
| Matrícula | Não | Gerada automaticamente pelo sistema (sequencial) quando não informada |
| Data de nascimento | Não | — |
| Sexo | Não | — |
| Categoria funcional (cargo) | **Sim** | Define os documentos, cursos e exames exigidos do colaborador |
| Data de admissão | Não | — |
| Centro de custo | Não | — |
| Data de desligamento | Não | Ao preencher esta data com valor igual ou anterior a hoje, o colaborador é automaticamente marcado como desligado |
| Departamento | Não | — |
| Setor | Não | Depende do departamento selecionado |
| Telefone / Celular / E-mail | Não | Aba de dados de contato |
| CEP / Endereço | Não | Aba de dados de contato; ao preencher o CEP o endereço é buscado e preenchido automaticamente |
| Contrato | Não | Aba de dados complementares |
| Local de trabalho | Não | Depende do contrato selecionado |
| Gestor / Técnico de segurança / Usuário administrativo | Não | Aba de dados complementares |
| Senha | Não | Se não informada na criação, o sistema gera uma senha aleatória automaticamente |
| Código externo | Não | Aba de dados complementares |
| Observações | Não | Aba de dados complementares |
| CNH (número, categoria, validade) | Não | Aba de documentos |
| RG (número, órgão emissor, validade, estado) | Não | Aba de documentos |
| Passaporte | Não | Aba de documentos |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Abre o formulário de cadastro |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o detalhe do colaborador, com as doze abas listadas abaixo |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para alterar os dados do colaborador |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o colaborador. A exclusão pede confirmação antes de ser efetivada |
| Foto | Clique na miniatura de foto abre a visualização (com opção de editar ou remover) ou o upload, se ainda não houver foto cadastrada |
| Filtrar | Filtra a listagem por empresa, cargo, centro de custo, departamento, gestor, técnico de segurança, usuário administrativo, status, contrato e situação de assinatura digital |
| Upload (importação) | Importa colaboradores em massa a partir de uma planilha |
| Enviar lembrete de assinatura | Reenvia o lembrete de assinatura digital pendente para os colaboradores; limitado a uma vez a cada 7 dias por cliente |
| Exportar relatório | Gera de forma assíncrona um relatório em Excel da listagem filtrada |

O CPF é usado para evitar duplicidade: ao cadastrar um colaborador com o
mesmo CPF, matrícula e empresa de um registro já existente (mesmo que
removido), o sistema reaproveita e atualiza esse registro em vez de criar
um novo. O e-mail também precisa ser único — ao salvar, o sistema
remove o e-mail de qualquer outro colaborador que já o utilizasse. Existe
um limite de colaboradores cadastráveis conforme o pacote contratado pelo
cliente; ao atingi-lo, novos cadastros são bloqueados. Quando o próprio
colaborador acessa o sistema (autoatendimento), ele não pode alterar seu
nome, CPF, matrícula ou passaporte — esses campos ficam bloqueados nesse
contexto. O cadastro ou a edição de um colaborador dispara automaticamente
a sincronização da matriz de treinamentos e, quando parametrizado, a
integração com o módulo Pedagógico.

## Páginas desta seção

- [Matriz de treinamentos](./matriz-de-treinamentos.md)
- [Exames médicos](./exames-medicos.md)
- [Arquivos](./arquivos.md)
- [Documentos](./documentos.md)
- [Contratos](./contratos.md)
- [Atividades críticas](./atividades-criticas.md)
- [Eventos](./eventos.md)
- [Certificados](./certificados.md)
- [EPI](./epi.md)
- [Equipamentos](./equipamentos.md)
- [Suprimentos](./suprimentos.md)
- [Auditorias](./auditorias.md)
