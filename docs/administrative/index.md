---
title: Administrativo
sidebar_label: Visão geral
slug: /modules/administrative
sidebar_position: 1
---

# Administrativo

O módulo Administrativo é a base de acesso e de organização do KEMIS ERP:
é aqui que se definem quem pode entrar no sistema e o que cada pessoa pode
ver, como a empresa está estruturada internamente, quem são os clientes e
fornecedores com quem ela se relaciona, e como o cumprimento de obrigações
contratuais e documentais desses fornecedores é acompanhado ao longo do
tempo.

O ponto de partida é o controle de acesso. Cada usuário do sistema é
cadastrado em **[Usuários](./users.md)** e vinculado a um
**[Grupo de acesso](./access-groups/index.md)**, que determina, tela por tela, se
esse grupo tem apenas visualização, acesso completo ou acesso avançado
(que inclui exclusão de registros). É esse par — usuário e grupo de acesso
— que controla o que aparece no menu e quais botões de ação ficam
disponíveis em cada página do ERP.

A estrutura interna da empresa é organizada por
**[Departamentos](./departments/index.md)** (que se dividem em seções e podem ser
vinculados a mais de uma empresa do grupo) e por
**[Centros de custo](./cost-centers.md)**, usados para classificar despesas
e alocações em outros módulos. Sobre essa estrutura se apoia o cadastro de
**[Gestores](./managers.md)**, exibido como um organograma que relaciona
cada gestor a um usuário, uma empresa, um departamento e, opcionalmente, a
um gestor superior.

**[Clientes](./customers/index.md)** e **[Fornecedores](./vendors/index.md)** compartilham
o mesmo cadastro-base (razão social, CNPJ/CPF, endereço, contatos), mas cada
um tem sua própria tela e suas próprias regras: fornecedores recebem
categoria, classificação e um status de conformidade calculado a partir dos
documentos que devem manter em dia, enquanto clientes são o lado com quem a
empresa fecha **[Contratos](./contracts/index.md)** — que por sua vez organizam
locais de trabalho, colaboradores mobilizados, arquivos do contrato, regras
de tarefas recorrentes e pendências.

O cumprimento documental de fornecedores é acompanhado em duas frentes
complementares. O **[Gerenciador de arquivos](./file-manager.md)** centraliza
o envio, a análise e a aprovação ou reprovação dos documentos exigidos de
cada fornecedor (contratos sociais, certidões, apólices etc.), enquanto os
**[Formulários de Avaliação de Fornecedores](./evaluation-forms/index.md)** permitem
montar questionários próprios — com seções, perguntas, pontuação e fluxo de
aprovação — para qualificar ou homologar fornecedores conforme critérios
definidos pela própria empresa. As regras que definem quais documentos e
formulários se aplicam a quais fornecedores (por categoria, classificação ou
individualmente) ficam centralizadas em **[Configurações](./settings.md)**,
junto com o catálogo de categorias, classificações e tipos de arquivo usado
por todo o módulo.

Por fim, o **[Dashboard](./dashboard.md)** reúne indicadores visuais sobre a
conformidade da carteira de fornecedores (por categoria, classificação,
status e vencimento de documentos) e permite configurar o envio automático
de um relatório semanal por e-mail para os usuários responsáveis.

## Páginas deste módulo

- [Grupos de acesso](./access-groups/index.md)
- [Usuários](./users.md)
- [Clientes](./customers/index.md)
- [Fornecedores](./vendors/index.md)
- [Departamentos](./departments/index.md)
- [Centros de custo](./cost-centers.md)
- [Gestores](./managers.md)
- [Contratos](./contracts/index.md)
- [Gerenciador de arquivos](./file-manager.md)
- [Formulários de Avaliação de Fornecedores](./evaluation-forms/index.md)
- [Configurações](./settings.md)
- [Dashboard](./dashboard.md)
