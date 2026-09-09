---
title: Login e primeiro acesso
slug: /supplier-portal/login
sidebar_position: 2
---

# Login e primeiro acesso

Todas as telas de acesso ao Portal do Fornecedor compartilham o mesmo
layout: a logo do KEMIS ERP, um seletor de idioma (Português, Inglês ou
Espanhol) no canto superior direito e um rodapé com o ano vigente.

## Entrar

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Email | **Sim** | — |
| Senha | **Sim** | — |

**Passo a passo:**

1. Preencha email e senha e clique em **Entrar**.
2. O sistema confirma os dados e leva o fornecedor direto ao
   **[Painel](./dashboard.md)**.
3. Como alternativa, é possível entrar com uma conta Google pelo botão
   **Entrar com Google**, sem precisar digitar senha.

Se o email ou a senha estiverem incorretos, aparece o aviso "Usuário não
cadastrado ou dados inválidos. Registre-se ou verifique seu e-mail e
senha."; se a conta ainda não foi ativada, o aviso é "Usuário não ativado,
verifique seu e-mail."

## Criar conta (primeiro acesso)

Quem ainda não tem cadastro clica em **Criar conta**, na tela de login, e
preenche um formulário em três etapas.

**1. Dados da empresa**

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| CNPJ | **Sim** | Ao ser completado, busca automaticamente Razão social, Nome fantasia, Telefone e endereço |
| Razão social | **Sim** | Preenchida automaticamente a partir do CNPJ, mas pode ser ajustada |
| Nome fantasia | **Sim** | — |
| Email | **Sim** | Email da empresa |

**2. Endereço**

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| CEP | **Sim** | Ao ser completado, busca automaticamente o endereço |
| Número | **Sim** | — |
| Rua | **Sim** | — |
| Bairro | **Sim** | — |
| Complemento | Não | — |
| Cidade | **Sim** | — |
| Estado | **Sim** | — |

**3. Dados de acesso**

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Nome | **Sim** | Nome da pessoa que vai usar o login |
| Email | **Sim** | Pré-preenchido com o email da empresa informado na primeira etapa |
| Senha | Não | Se deixada em branco, o cadastro é criado sem login automático |

**Passo a passo:**

1. Informe o CNPJ da empresa — o sistema busca os dados na Receita Federal
   automaticamente — confira e complete Razão social, Nome fantasia e
   Email, e clique em **Continuar**.
2. Informe o CEP — o endereço é preenchido automaticamente — confira e
   complete Número e Complemento, e clique em **Continuar**. É possível
   clicar em **Voltar** para revisar a etapa anterior.
3. Informe nome, email e (opcionalmente) uma senha de acesso e clique em
   **Obter acesso**.
4. Se uma senha foi definida, o sistema já faz login automaticamente e
   leva ao Painel; caso contrário, o fornecedor é levado à tela de login
   para entrar com os dados cadastrados.

Nenhum dado é enviado ao KEMIS ERP entre uma etapa e outra — o cadastro só
é gravado ao concluir a terceira etapa.

## Esqueci minha senha

Na tela de login, o link **Esqueci minha senha** abre um formulário com um
único campo, **Email** (obrigatório). Ao clicar em **Enviar**, o sistema
sempre confirma o envio ("Email enviado para a definição de nova senha"),
por segurança, mesmo que o email informado não esteja cadastrado. O
fornecedor deve checar a caixa de entrada e clicar no link recebido, que
abre a tela de redefinição de senha.

## Redefinir senha

A tela é aberta a partir do link recebido por email e mostra dois campos,
ambos rotulados **Senha**: o primeiro é a nova senha, o segundo é a
confirmação. Os dois são obrigatórios e precisam ser idênticos — se forem
diferentes, aparece o aviso "As senhas não correspondem, verifique os
dados" e nada é enviado.

Ao clicar em **Redefinir senha** com os dois campos iguais, o sistema salva
a nova senha e leva o fornecedor de volta à tela de login. Se o link
estiver expirado ou já tiver sido usado, aparece um erro genérico — nesse
caso, é preciso solicitar um novo link em **Esqueci minha senha**.
