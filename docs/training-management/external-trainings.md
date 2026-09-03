---
title: Treinamentos Externos
slug: /modules/training-management/external-trainings
sidebar_position: 6
---

# Treinamentos Externos

Treinamentos Externos reúne, em modo de consulta, os treinamentos que os
colaboradores realizaram através de plataformas parceiras de treinamento
(Pedagogo e o sistema Cemal) — diferente de **[Treinamentos](./trainings.md)**,
que registra o que é feito diretamente dentro do KEMIS ERP. Não é possível
cadastrar, editar ou apagar um treinamento externo por aqui: os registros
já vêm prontos das plataformas parceiras, atualizados automaticamente
conforme o andamento de cada aluno lá. Esta tela serve para acompanhar
matrículas e vencimentos, e para distribuir os certificados emitidos por
essas plataformas.

A tela é dividida em duas abas: **Dashboard** e **Treinamentos**.

## Dashboard

Mostra um panorama dos treinamentos externos da empresa.

### Filtros disponíveis

| Campo | Descrição |
| --- | --- |
| Gestora do treinamento | Empresa parceira responsável pelo treinamento |
| Curso | Nome do curso |
| Colaborador | Nome do colaborador |
| Status | Situação do treinamento |
| Data do treinamento | Período da realização |
| Vencimento | Período de vencimento |
| Ano / Mês | Recorte por ano e mês |
| Assinatura digital | Se o certificado já foi assinado digitalmente |

### Cartões e gráficos

| Item | Descrição |
| --- | --- |
| Matriculados | Total de colaboradores matriculados no período filtrado |
| Em andamento | Total de treinamentos ainda não concluídos |
| Concluídos | Total de treinamentos concluídos |
| Aguardando prática | Colaboradores que já concluíram a parte teórica de um curso com prática obrigatória, mas ainda não têm a data da prática registrada |
| Concluído / Em andamento | Gráfico com a proporção entre treinamentos concluídos e em andamento |
| Matriculados por curso | Total de matriculados, concluídos e em andamento, agrupado por curso |
| Vencimento | Treinamentos concluídos agrupados por vencidos, a vencer em 30 dias e a vencer em 60 dias |
| Vencimento por curso | O mesmo agrupamento de vencimento, detalhado por curso |

Clicar em um cartão ou em uma fatia/barra de gráfico abre a lista de
treinamentos correspondente já filtrada por aquele recorte.

## Treinamentos

Lista os treinamentos externos individualmente.

### Filtros disponíveis

| Campo | Descrição |
| --- | --- |
| Colaborador | Nome do colaborador |
| Curso | Nome do curso |
| Fornecedor | Empresa/gestora responsável pelo treinamento |
| Status | Situação do treinamento |
| Início do treinamento / Término do treinamento | Período de realização |
| Início do vencimento / Término do vencimento | Período de vencimento |
| Assinatura digital | Se o certificado tem assinatura digital |
| Certificado emitido? | Se o certificado já foi emitido |

### Ações disponíveis

| Ação | Descrição |
| --- | --- |
| ![ShowFile](/img/icons/ShowFile.png) Visualizar certificado | Abre o certificado do treinamento, quando disponível |
| Download certificado | Baixa o certificado em PDF |
| Enviar link por Email | Envia por e-mail o link de cadastro/assinatura do certificado ao colaborador |
| Enviar link por WhatsApp | Envia por WhatsApp o link de cadastro/assinatura do certificado ao colaborador |
| ![Copy](/img/icons/Copy.png) Copiar link | Copia o link de cadastro/assinatura para a área de transferência |
| Baixar arquivos em lote | Baixa em um arquivo compactado os certificados dos treinamentos selecionados. É possível selecionar no máximo dez certificados por vez |
| Exportar (Excel) | Exporta a listagem filtrada em planilha |

O certificado de cada treinamento externo é identificado por uma chave
própria, que permite sua conferência pública — a mesma chave usada no link
enviado por e-mail ou WhatsApp para o colaborador. A situação (concluído,
em andamento, etc.) e a data de vencimento vêm diretamente da plataforma
parceira; o KEMIS ERP não altera esse status por aqui.
