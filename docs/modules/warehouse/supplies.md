# Suprimento

> Gerencie todo os suprimentos do seu sistema.

#### Formulário

| Campo          | Obrigatório | Descrição                           |
| -------------- | :---------: | ----------------------------------- |
| Grupo          |   **Sim**   | Grupo responsável pelo fornecimento |
| Suprimento     |   **Sim**   | Tipo de fornecimento                |
| Codigo         |   **Sim**   | Fornecer codigo de registro         |
| Fabricante     |     Não     | Fabricante de suprimentos           |
| Quantidade     |     Não     | Quantiade a fornecer                |
| Preco de custo |   **Sim**   | Valor de custo                      |

#### Ações

| Ícone                                      | Ação                                                                                         |
| ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| ![logo](../../assets/icons/FolderOpen.png) | Acesso aos dados do suprimentos, onde poderá visualizar as páginas pertencem ao suprimentos  |
| ![logo](../../assets/icons/Pencil.png)     | Abre o formulário para suprimentos                                                           |
| ![logo](../../assets/icons/Trash.png)      | Apaga os suprimentos. _Somente usuários com **acesso avançado** irão visualizar esse ícone._ |

## Home

> Caso queira voltar à página principal, basta clicar no título da página.

## Certificações

> Aqui temos as certificações referentes aos suprimentos.

#### Formulário

| Campo                  | Obrigatório | Descrição                         |
| ---------------------- | :---------: | --------------------------------- |
| Certificações          |   **Sim**   | Nome da certificação              |
| Numero da certificação |   **Sim**   | Número de certificação            |
| Data de certificação   |   **Sim**   | Data de certificação              |
| Validade               |   **Sim**   | Validade em meses da certificação |
| Data de vencimiento    |   **Sim**   | Data de vencimento                |

## Arquivos

> Nesta seção arquivos relacionados às certificações correspondentes

#### Formulário

| Campo        | Obrigatório | Descrição                      |
| ------------ | :---------: | ------------------------------ |
| Descrição    |   **Sim**   | Descrição do arquivo           |
| Certificação |   **Sim**   | Certificação a que corresponde |
