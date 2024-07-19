# Curso

> Gerencie todos os cursos do sistema.

#### Formulário

| Campo         | Obrigatório | Descrição                    |
| ------------- | :---------: | ---------------------------- |
| Grupo         |   **Sim**   | Grupo ao qual pertence       |
| Curso         |   **Sim**   | Nome do Curso                |
| Validade      |   **Sim**   | validade em meses            |
| Carga horaria |   **Sim**   | Carga horária total do curso |
| Codigo        |   **Sim**   | Codigo do curso              |

#### Ações

| Ícone                                      | Ação                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| ![logo](../../assets/icons/FolderOpen.png) | Acesso aos dados do curso, onde poderá visualizar as páginas que pertencem ao curso   |
| ![logo](../../assets/icons/Pencil.png)     | Abre o formulário para edição do curso                                                |
| ![logo](../../assets/icons/Trash.png)      | Apaga o curso. _Somente usuários com **acesso avançado** irão visualizar esse ícone._ |
| ![logo](../../assets/icons/reload.png)     |                                                                                       |

# Home

> Caso queira voltar à página principal, basta clicar no título da página.

## Roles

> Aqui você cria as funções que pertencem aos cursos de gerenciamento de treinamento.

#### Formulário

| Campo               | Obrigatório | Descrição                  |
| ------------------- | :---------: | -------------------------- |
| Categoria funcional |   **Sim**   | Categoria funcional do rol |
| Contrato            |   **Sim**   | Contrato                   |

## Conteúdo programático

> Organização e gestão de cursos programados.

| Campo    | Obrigatório | Descrição                                   |
| -------- | :---------: | ------------------------------------------- |
| Ordem    |   **Sim**   | ordem correspondente do conteúdo programado |
| Conteúdo |   **Sim**   | Conteúdo                                    |

## Instrutores

> Dados correspondentes ao instrutor responsável pelo curso.

| Campo      | Obrigatório | Descrição                              |
| ---------- | :---------: | -------------------------------------- |
| Ordem      |   **Sim**   | Ordem do instrutor                     |
| Nome       |   **Sim**   | Nome do instrutor                      |
| Documento  |   **Sim**   | Documento do instrutor                 |
| Role       |   **Sim**   | Role do instrutor                      |
| Assinatura |   **Sim**   | Assinatura correspondente do instrutor |
