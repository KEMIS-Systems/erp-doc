---
title: Recursos Humanos
sidebar_label: Visão geral
slug: /modules/human-resources
sidebar_position: 1
---

# Recursos Humanos

O módulo de Recursos Humanos reúne o cadastro de colaboradores e todo o
controle documental e de conformidade associado a eles: quais documentos
cada função exige, se esses documentos estão em dia, como um candidato é
contratado e mobilizado para um contrato, e como a empresa é avisada quando
algo está prestes a vencer.

O ponto de partida é o cadastro de **[Colaboradores](./employees.md)**, com
dados pessoais, de contato, contratuais e documentais de cada pessoa. Cada
colaborador está vinculado a uma **[Categoria funcional / Cargo](./roles.md)**,
que por sua vez determina quais documentos, cursos e exames médicos são
exigidos dele. Essa exigência documental é definida em
**[Tipos de arquivos](./file-types.md)** (o catálogo de categorias de
documento que podem ser cobradas) e materializada na
**[Matriz de arquivos](./file-matrices.md)**, que cruza cargo × tipo de
arquivo × contrato para saber exatamente quais documentos cada colaborador
precisa manter válidos. Os documentos em si — enviados, substituídos ou
consultados — são administrados pelo **[Gerenciador de arquivos](./file-manager.md)**,
uma visão de todos os arquivos de todos os colaboradores.

Além da exigência documental por cargo, algumas funções envolvem tarefas de
maior risco. Essas são cadastradas em **[Atividades críticas](./critical-activities.md)**,
que relaciona a atividade aos cursos e exames médicos que ela exige — reforçando
a matriz de qualificação do colaborador que a exerce.

Quando a empresa precisa contratar alguém, o processo passa por
**[Contratações](./hirings.md)**: um convite é gerado para o candidato
preencher seus próprios dados e enviar os documentos exigidos pela função,
antes de se tornar efetivamente um colaborador. Já quando um colaborador já
existente precisa ser alocado para atender a um contrato específico de
cliente, isso é feito em **[Mobilizações de força de trabalho](./workforce-mobilizations.md)**,
que acompanha o envio e a aprovação dos documentos, treinamentos e exames
exigidos por aquele contrato.

Como toda essa documentação tem prazo de validade, a
**[Gestão de vencimentos](./expiration-management.md)** monitora continuamente
o vencimento de treinamentos, exames médicos e arquivos, e dispara
notificações automáticas — por e-mail, WhatsApp ou dentro do próprio sistema
— para os destinatários certos, com base em regras configuráveis de prazo,
prioridade e canal.

Por fim, o **[Dashboard](./dashboard.md)** reúne indicadores visuais de todo
esse ecossistema: conformidade documental, matriz de treinamentos e exames,
relatórios semanais e análises por contrato ou colaborador, permitindo
acompanhar a saúde do quadro de pessoal em um único lugar.

## Páginas deste módulo

- [Tipos de arquivos](./file-types.md)
- [Categorias funcionais / Cargos](./roles.md)
- [Colaboradores](./employees.md)
- [Gerenciador de arquivos](./file-manager.md)
- [Matriz de arquivos](./file-matrices.md)
- [Atividades críticas](./critical-activities.md)
- [Contratações](./hirings.md)
- [Mobilizações de força de trabalho](./workforce-mobilizations.md)
- [Gestão de vencimentos](./expiration-management.md)
- [Dashboard](./dashboard.md)
