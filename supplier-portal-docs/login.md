---
title: Login
slug: /login
sidebar_position: 2
---

# Login

O acesso ao Portal do Fornecedor é feito em **https://supplier.kemis.app/**,
um endereço separado do KEMIS ERP. Todas as telas de acesso compartilham o
mesmo layout: a logo do KEMIS ERP, um seletor de idioma (Português, Inglês
ou Espanhol) no canto superior direito e um rodapé com o ano vigente.

Quem ainda não tem cadastro deve se registrar antes de entrar — veja
**[Registro](./registro.md)**.

## Entrar

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Email | **Sim** | — |
| Senha | **Sim** | — |

**Passo a passo:**

1. Acesse **https://supplier.kemis.app/**.
2. Preencha email e senha e clique em **Entrar**.
3. O sistema confirma os dados e leva o fornecedor direto ao
   **[Painel](./dashboard.md)**.
4. Como alternativa, é possível entrar com uma conta Google pelo botão
   **Entrar com Google**, sem precisar digitar senha.

Se o email ou a senha estiverem incorretos, aparece o aviso "Usuário não
cadastrado ou dados inválidos. Registre-se ou verifique seu e-mail e
senha."; se a conta ainda não foi ativada, o aviso é "Usuário não ativado,
verifique seu e-mail."

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
