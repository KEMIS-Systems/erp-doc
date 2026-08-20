---
title: Cursos
slug: /modules/training-management/courses
sidebar_position: 3
---

# Cursos

Cursos é o catálogo de treinamentos da empresa. Cada curso cadastrado aqui
pode ser usado tanto na **[Matriz de Treinamentos](./trainings-matrices.md)**
(para definir quais funções precisam dele) quanto no registro de
**[Treinamentos](./trainings.md)** realizados por colaboradores. Além dos
dados básicos (nome, carga horária, validade), cada curso tem uma página
própria com abas para conteúdo programático, instrutores, integrações e
vínculo com a plataforma Pedagogo.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Grupo | Não | Grupo ao qual o curso pertence (ver [Grupos](./groups.md)) |
| Curso | **Sim** | Nome do curso |
| Substitui à | Não | Outro curso do catálogo que este substitui/atualiza |
| Validade (meses) | Não | Validade do curso, em meses. Ao ser alterada, é aplicada automaticamente a todos os treinamentos já registrados para este curso — inclusive os já concluídos — e a todas as regras da matriz de treinamentos que não tenham sido individualmente customizadas |
| Carga horária | **Sim** | Carga horária total do curso |
| Código | Não | Código interno do curso |
| Norma | Não | Norma regulamentadora ou referência associada ao curso |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| ![FolderOpen](/img/icons/FolderOpen.png) Abrir | Abre a página do curso, com as abas descritas abaixo |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para editar o curso |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o curso e desfaz seus vínculos com a matriz de treinamentos |
| Upload | Importa cursos em lote a partir de uma planilha Excel |
| Exportar | Baixa a listagem de cursos em Excel |

Ao editar a carga horária ou a validade de um curso, o sistema propaga a
mudança para todos os treinamentos já lançados para ele (mesmo os
concluídos), para a situação de matriz de cada colaborador e para as
funções da matriz que ainda usam a validade padrão do curso (ou seja, que
não tiveram a opção "Alterado?" marcada individualmente).

## Categoria funcional

Lista, em modo de consulta, as funções e contratos para os quais este
curso está configurado como exigência na Matriz de Treinamentos, com a
validade aplicada a cada um. Essa aba não tem cadastro próprio — a
vinculação entre curso e função é feita na página da
**[Matriz de Treinamentos](./trainings-matrices.md)**.

## Conteúdo programático

Lista os tópicos que compõem o conteúdo programático do curso, na ordem em
que devem aparecer no certificado.

### Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Ordem | Não | Posição do tópico na lista |
| Carga horária | Não | Carga horária do tópico |
| Conteúdo | **Sim** | Texto do tópico |
| Conteúdo em inglês | Não | Texto do tópico em inglês |

### Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra um novo tópico do conteúdo programático |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita um tópico existente |
| ![Trash](/img/icons/Trash.png) Apagar | Remove um tópico |
| Separar tópicos automaticamente | Cola um texto com várias linhas e transforma cada linha em um tópico separado, no formato como o certificado imprime — marcadores de lista colados (como `-` ou `•`) são removidos automaticamente. Os tópicos separados são acrescentados ao final da lista já existente, sem alterar os que já foram cadastrados |

## Instrutores

Cadastro dos instrutores responsáveis pelo curso.

### Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Ordem | Não | Ordem de exibição do instrutor |
| Nome | **Sim** | Nome do instrutor |
| Categoria funcional | Não | Função/categoria do instrutor |
| Documento | Não | Documento de identificação do instrutor |
| Data inicial | Não | Início da vigência do instrutor para este curso |
| Data de término | Não | Fim da vigência do instrutor para este curso |
| Assinatura | Não | Imagem da assinatura do instrutor, usada na emissão do certificado |

### Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra um novo instrutor |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita um instrutor existente |
| ![Trash](/img/icons/Trash.png) Apagar | Remove um instrutor |

Um mesmo curso pode ter vários instrutores cadastrados ao longo do tempo;
as datas de vigência definem qual instrutor aparece como responsável em
cada treinamento, de acordo com a data de conclusão dele.

## Integrações

Vincula o curso a códigos usados em plataformas externas integradas ao
KEMIS ERP (por exemplo, Moodle). Esta aba só aparece para usuários com
permissão de nível avançado e quando a empresa tem alguma dessas
integrações ativa.

### Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Integração | **Sim** | Plataforma integrada à qual o código se refere |
| Código | **Sim** | Código do curso na plataforma externa |
| Descrição | **Sim** | Descrição do curso na plataforma externa |

### Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Cadastra uma nova integração para o curso |
| ![Pencil](/img/icons/Pencil.png) Editar | Edita uma integração existente |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a integração |

## Pedagogo

Vincula este curso do catálogo KEMIS ao curso equivalente cadastrado na
plataforma parceira Pedagogo, permitindo trazer para o ERP os alunos já
matriculados por lá.

### Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Gestora de treinamento corporativo | Não | Empresa parceira usada para filtrar a busca do curso no Pedagogo |
| Curso | **Sim** | Curso correspondente no catálogo da plataforma Pedagogo |

### Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Vincula o curso a um curso equivalente no Pedagogo |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o vínculo com o Pedagogo |
| Sincronizar | Busca, no Pedagogo, os alunos matriculados no curso vinculado e traz (ou atualiza) os treinamentos correspondentes em [Treinamentos](./trainings.md), inclusive quando o treinamento já existir por aqui |

Esta aba só fica disponível quando a importação automática do Pedagogo está
habilitada nas configurações do cliente.

## Imagem de verso

Armazena a imagem usada no verso do certificado impresso deste curso, para
os clientes cujo modelo de certificado é personalizado a ponto de usar essa
imagem. Cada curso tem apenas uma imagem de verso ativa por vez: enviar uma
nova imagem substitui a anterior.

### Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Adicionar | Envia uma nova imagem de verso (substitui a atual, se houver) |
| ![Trash](/img/icons/Trash.png) Apagar | Remove a imagem de verso do curso |
