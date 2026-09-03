---
title: Treinamentos
slug: /modules/training-management/trainings
sidebar_position: 5
---

# Treinamentos

Treinamentos é onde ficam registrados os treinamentos internos realizados
por cada colaborador: quem fez, qual curso, quando começou e terminou, e
qual foi o resultado. É a partir daqui que o certificado é emitido — com
número de certificado próprio, chave de validação pública e, quando
configurado, assinatura digital do colaborador — e é a conclusão de um
treinamento aqui que atualiza automaticamente a situação do colaborador na
**[Matriz de Treinamentos](./trainings-matrices.md)**.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Fornecedor | Não | Fornecedor/empresa responsável pelo treinamento, quando aplicável |
| Curso | **Sim** | Curso do catálogo realizado |
| Colaborador | **Sim** | Colaborador que realizou o treinamento (não pode ser alterado depois de criado) |
| Data de início | **Sim** | Data de início do treinamento |
| Data de término | Condicional | Obrigatória quando o Status é "Aprovado"; deve ser igual ou posterior à data de início |
| Validade | Não | Validade do treinamento, em meses (preenchida automaticamente a partir do curso selecionado, mas pode ser ajustada) |
| Carga horária | **Sim** | Carga horária do treinamento (preenchida automaticamente a partir do curso selecionado) |
| Valor | Não | Valor do treinamento |
| Progresso do treinamento | Não | Percentual de 0 a 100 informado manualmente |
| Status | **Sim** | Situação do treinamento (Agendado, Aprovado, Reprovado, etc.) |
| Status complementar | Não | Observação complementar de status, em texto livre |

## Filtros disponíveis

| Campo | Descrição |
| --- | --- |
| Colaborador | Filtra por nome ou matrícula |
| Curso | Filtra pelo nome do curso |
| Data inicial/final de criação | Filtra pela data de conclusão (término) do treinamento |
| Data inicial/final de vencimento | Filtra pela data calculada de vencimento do treinamento |
| Assinatura digital | Se o treinamento tem assinatura do colaborador armazenada |
| Externo | Se o treinamento é de um fornecedor externo |
| Matriculado no EAD? | Se o colaborador está matriculado no Moodle para este treinamento |
| Possui integração? | Se o treinamento tem alguma integração com sistema externo vinculada |
| Integração | Filtra por uma integração específica |
| Status | Situação do treinamento |
| Usuário de criação / Usuário de alteração | Filtra pelo usuário que criou ou alterou o registro |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra um novo treinamento |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita o treinamento. Indisponível para treinamentos importados da integração Pedagogo |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o treinamento. Indisponível para treinamentos importados do Pedagogo ou que já tenham um documento de assinatura digital vinculado |
| ![ShowFile](/img/icons/ShowFile.png) Ver certificado | Abre o certificado do treinamento. Disponível quando o treinamento está aprovado ou reprovado e já tem data de término |
| Atualizar matriz de treinamento | Cria ou atualiza manualmente o vínculo deste treinamento com a Matriz de Treinamentos do colaborador, quando o treinamento está concluído |
| Armazenar certificado | Gera o certificado, arquiva-o no controle de arquivos do colaborador e atualiza a data de conclusão/vencimento na matriz. Opcionalmente já envia o arquivo armazenado para assinatura digital |
| Sincronizar treinamento concluído | Reprocessa a sincronização deste treinamento concluído |
| Enviar diretamente para assinatura | Gera o certificado e já envia para assinatura digital do colaborador |
| Salvar sem enviar e editar | Gera o documento de assinatura digital e abre o editor, sem enviar ainda |
| Abrir documento em nova aba | Abre o documento de assinatura digital já criado para este treinamento |
| Assinatura manual ativada/desativada | Alterna se o treinamento usa a assinatura já armazenada do colaborador, sem passar pelo fluxo de assinatura digital |
| Verificar status no Moodle | Consulta no Moodle se o treinamento já foi concluído pelo colaborador |
| Matricular no EAD | Matricula o colaborador no curso correspondente no Moodle |
| Upload | Importa treinamentos em lote a partir de planilha |
| Integrar com o Moodle | Importa treinamentos a partir de um curso ou de um aluno já cadastrado no Moodle |
| Download | Baixa em lote os certificados dos treinamentos selecionados |
| Exportar (Excel) | Exporta a listagem de treinamentos filtrada |

Cada treinamento tem um espaço de **log**, com comentários que podem ser
adicionados manualmente para registrar observações sobre aquele
treinamento, além de anotações automáticas que o sistema grava quando
sincroniza o treinamento com integrações externas.

## Emissão de certificado e assinatura

Ao criar um treinamento, o sistema já gera um número de certificado
sequencial e uma chave única de validação, usada para que o certificado
possa ser conferido publicamente. A geração do PDF do certificado segue
esta ordem de prioridade: se já existe um documento de assinatura digital
para o treinamento, é ele que é exibido; se o treinamento veio da
integração com o Pedagogo, o certificado é obtido diretamente da
plataforma Pedagogo; caso contrário, o certificado é montado pelo próprio
KEMIS ERP, seguindo o modelo de certificado configurado para o cliente.

A assinatura digital do certificado é um fluxo separado da emissão: ao
enviar um treinamento concluído para assinatura, o sistema gera o
documento, cadastra o colaborador como signatário e um usuário responsável
como observador, e vincula o documento resultante ao treinamento. Um
treinamento que já tenha sido enviado para assinatura digital não pode ser
enviado novamente nem apagado por aqui. Quando não há assinatura digital
mas o colaborador já tem uma assinatura armazenada no sistema, é possível
usar essa assinatura diretamente no certificado, pela opção de assinatura
manual.
