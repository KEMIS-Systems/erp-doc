---
title: Cursos
slug: /modules/training-management/courses
sidebar_position: 1
---

# Cursos

Cursos é o catálogo de treinamentos da empresa. Cada curso cadastrado aqui
pode ser usado tanto na **[Matriz de Treinamentos](../trainings-matrices.md)**
(para definir quais funções precisam dele) quanto no registro de
**[Treinamentos](../trainings.md)** realizados por colaboradores. Além dos
dados básicos (nome, carga horária, validade), cada curso tem uma página
própria com abas para conteúdo programático, instrutores, integrações e
vínculo com a plataforma Pedagogo — cada uma documentada em sua própria
página, listada abaixo.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Grupo | Não | Grupo ao qual o curso pertence (ver [Grupos](../groups.md)) |
| Curso | **Sim** | Nome do curso |
| Substitui à | Não | Outro curso do catálogo que este substitui/atualiza |
| Validade (meses) | Não | Validade do curso, em meses. Ao ser alterada, é aplicada automaticamente a todos os treinamentos já registrados para este curso — inclusive os já concluídos — e a todas as regras da matriz de treinamentos que não tenham sido individualmente customizadas |
| Carga horária | **Sim** | Carga horária total do curso |
| Código | Não | Código interno do curso |
| Norma | Não | Norma regulamentadora ou referência associada ao curso |

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| ![FolderOpen](/img/icons/FolderOpen.png) Abrir | Abre a página do curso, com as abas listadas abaixo |
| ![Pencil](/img/icons/Pencil.png) Editar | Abre o formulário para editar o curso |
| ![Trash](/img/icons/Trash.png) Apagar | Remove o curso e desfaz seus vínculos com a matriz de treinamentos |
| Upload | Importa cursos em lote a partir de uma planilha Excel |
| Exportar | Baixa a listagem de cursos em Excel |

Ao editar a carga horária ou a validade de um curso, o sistema propaga a
mudança para todos os treinamentos já lançados para ele (mesmo os
concluídos), para a situação de matriz de cada colaborador e para as
funções da matriz que ainda usam a validade padrão do curso (ou seja, que
não tiveram a opção "Alterado?" marcada individualmente).

## Páginas desta seção

- [Categoria funcional](./categoria-funcional.md)
- [Conteúdo programático](./conteudo-programatico.md)
- [Instrutores](./instrutores.md)
- [Integrações](./integracoes.md)
- [Pedagogo](./pedagogo.md)
- [Imagem de verso](./imagem-de-verso.md)
