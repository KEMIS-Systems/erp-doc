---
title: Saúde Ocupacional
sidebar_label: Visão geral
slug: /modules/occupational-health
sidebar_position: 1
---

# Saúde Ocupacional

O módulo Saúde Ocupacional organiza o controle dos exames médicos
ocupacionais dos colaboradores: quais exames existem, quais são exigidos
para cada função, e o acompanhamento de cada exame agendado e realizado.
Ele é o módulo que garante que a empresa consiga comprovar que seus
colaboradores estão com os exames em dia — importante tanto para a
gestão de saúde e segurança do trabalho quanto para atender exigências
de clientes e contratos.

Vale destacar que este módulo é diferente do QHSA, outro módulo do
sistema que trata de feriados, acidentes de trabalho e absenteísmo. Os
dois convivem separadamente: QHSA cuida de segurança e frequência,
enquanto Saúde Ocupacional cuida especificamente do ciclo de exames
médicos ocupacionais.

O módulo é formado por quatro telas que se complementam:

- **[Tipos de exame](./types.md)** é um cadastro simples que classifica
  a natureza de cada agendamento — por exemplo, exame admissional,
  periódico ou demissional. Cada agendamento é classificado com um
  desses tipos.
- **[Exames](./examinations.md)** é o catálogo dos exames médicos em si
  (por exemplo, audiometria ou hemograma), cada um com sua validade
  padrão em meses. Esse catálogo alimenta tanto a Matriz de exames
  quanto os Agendamentos.
- **[Matriz de exames](./examinations-matrices.md)** define, para cada
  função/cargo (opcionalmente vinculado a um contrato e a uma empresa),
  quais exames do catálogo são exigidos ou recomendados, com qual
  periodicidade. É essa matriz que determina o que cada colaborador
  precisa fazer, de acordo com a função que ocupa.
- **[Agendamentos](./schedules.md)** é onde o exame é efetivamente
  marcado para um colaborador: quem vai realizar, em qual clínica ou
  fornecedor, em qual data, quais exames do catálogo estão incluídos
  nesse agendamento, e o acompanhamento do status (agendado, realizado,
  concluído, cancelado etc.) até a conclusão. Ao concluir um
  agendamento, os resultados (data de realização e validade) são
  gravados no histórico de exames do colaborador, que é o que a Matriz
  de exames usa para saber se alguém está em dia ou não.

Em resumo, o fluxo típico é: cadastra-se os **Tipos de exame** e o
catálogo de **Exames**; monta-se a **Matriz de exames** definindo o que
cada função exige; e no dia a dia, os **Agendamentos** são criados para
levar os colaboradores a realizar os exames pendentes, até serem
concluídos.
