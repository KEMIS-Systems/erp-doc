# Colaboradores

> Gerencie todos os colaboradores do sistema.

#### Formulário

| Campo               | Obrigatório | Descrição                                 |
| ------------------- | :---------: | ----------------------------------------- |
| Nome                |   **Sim**   | Nome completo do usuário                  |
| Categoria funcional |   **Sim**   | Posicion do usuário                       |
| Contrato            |     Não     | Contrato do usuário                       |
| Departamento        |     Não     | Departamento que pertence o usuário       |
| Status              |     Não     | Estado que pertence o usuário             |
| Ultima Actualização |     Não     | Usuario a cargo do actualização do status |

#### Ações

| Ícone                                      | Ação                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![logo](../../assets/icons/Pencil.png)     | Abre o formulário para edição do Colaboradores                                                         |
| ![logo](../../assets/icons/Trash.png)      | Apaga o Colaborador. _Somente usuários com **acesso avançado** irão visualizar esse ícone._            |
| ![logo](../../assets/icons/FolderOpen.png) | Acesso aos dados dos funcionários, onde você pode visualizar as diferentes abas que pertencem ao grupo |

## Home

> Caso queira voltar à página principal, basta clicar no título da página.

## Matriz de treinamentos

> Gere qualificações com base nos cursos realizados por seus funcionários com a correspondente validade.

| Campo              | Obrigatório | Descrição                             |
| ------------------ | :---------: | ------------------------------------- |
| Curso              |   **Sim**   | Nome do curso realizado               |
| Data de conclusão  |   **Sim**   | Data de término do curso              |
| Validade           |   **Sim**   | Validação em meses do curso realizado |
| Data do vencimento |     Não     | Expiração do curso realizado          |

## Exames medicos

> Gerar exames médicos para funcionários.

| Campo              | Obrigatório | Descrição                          |
| ------------------ | :---------: | ---------------------------------- |
| Exame médico       |   **Sim**   | Nome do exame médico               |
| Data de conclusão  |   **Sim**   | Data de término do exame médico    |
| Validade           |   **Sim**   | Validação em meses do exame médico |
| Data do vencimento |     Não     | Expiração do exame médico          |

## Arquivos

> Faça upload de arquivos para as diferentes seções que você precisa.

| Campo                | Obrigatório | Descrição                                   |
| -------------------- | :---------: | ------------------------------------------- |
| Arquivo              |   **Sim**   | Arquivo carregado pelo funcionario          |
| Categoria de arquivo |   **Sim**   | Categoria do arquivo carregado              |
| Descrição            |   **Sim**   | Descrição do arquivo                        |
| Data do vencimento   |     Não     | Data do vencimento do arquivo               |
| Obsoleto             |     Não     | Campo para saber se o arquivo expirou       |
| Ultima Actualização  |     Não     | Usuario a cargo do actualização do obsoleto |

## PPE

> Consulte os diferentes Equipamentos de Proteção Individual para utilizadores.

| Campo                 | Obrigatório | Descrição                                  |
| --------------------- | :---------: | ------------------------------------------ |
| EPI                   |     Não     | Nome do equipamento de proteção individual |
| Data de entrega       |     Não     | Data de entrega do EPI                     |
| Quantidade de entrega |     Não     | Quantidade de equipamentos entregues       |
| Data de devolução     |     Não     | Data de devolução do EPIs                  |
| Quantidade devolvida  |     Não     | Quantidade de EPIs devolvida               |
| Usuario de devolução  |     Não     | Usuário que devolveu o EPIs                |
| Observações           |     Não     | Observações sobre EPIs                     |

## Equipamentos

> Equipamentos correspondentes aos colaboradores com seu grupo, modelo, detalhes e muito mais.

| Campo           | Obrigatório | Descrição                      |
| --------------- | :---------: | ------------------------------ |
| Grupo           |     Não     | Grupo de equipamentos          |
| Modelo          |     Não     | Modelo de equipamento          |
| Detalhes        |     Não     | Detalhes do equipamento        |
| Número de série |     Não     | Número de série do equipamento |
| Entrega         |     Não     | O equipamento foi entregue     |
| Devolução       |     Não     | O equipamento foi devolvido    |

## Contratos

> Contrato dos diferentes funcionarios.

| Campo           | Obrigatório | Descrição                           |
| --------------- | :---------: | ----------------------------------- |
| Contrato        |   **Sim**   | Contrato de funcionário             |
| Fornecedor      |     Não     | provedor de funcionários            |
| Data de inicio  |     Não     | Data de início do funcionário       |
| Data de termino |     Não     | Data de término do funcionário      |
| Inativo         |     Não     | O funcionário está ativo ou inativo |

## Atividades críticas

> Atividades críticas realizadas pelos funcionários.

| Campo             | Obrigatório | Descrição                                         |
| ----------------- | :---------: | ------------------------------------------------- |
| Atividade crítica |   **Sim**   | Atividades críticas realizadas pelos funcionários |

## Evento

| Campo          | Obrigatório | Descrição                 |
| -------------- | :---------: | ------------------------- |
| Status         |   **Sim**   | Status do evento          |
| Data de inicio |   **Sim**   | Data de início do evento  |
| Data de final  |     Não     | Data de término do evento |
| Descrição      |     Não     | Descrição do evento       |
