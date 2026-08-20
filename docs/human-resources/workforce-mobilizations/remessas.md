---
title: Remessas
slug: /modules/human-resources/workforce-mobilizations/remessas
sidebar_position: 5
---

# Remessas

Uma remessa é um lote de itens — treinamentos, exames médicos e/ou arquivos
— enviado de uma só vez ao cliente para aprovação. Ao criar uma remessa,
cada item selecionado fica com status "Aguardando resposta"; o cliente
aprova ou reprova cada item individualmente, e o status da remessa é
recalculado automaticamente a partir das respostas.

Um item só pode estar em uma remessa aberta por vez: enquanto estiver em
uma, fica bloqueado para seleção em outra remessa nova.

## Formulário

| Campo | Obrigatório | Descrição |
| --- | :---: | --- |
| Data de envio | **Sim** | — |
| Comentário | Não | — |
| Itens | **Sim** | Um ou mais **[Treinamentos](./treinamentos.md)**, **[Exames médicos](./exames-medicos.md)** e/ou **[Arquivos](./arquivos.md)** da mobilização, selecionados em três listas de marcação |

Cada item da lista de seleção mostra a data e o status da última remessa em
que participou, quando houver, e sinaliza quando os dados foram alterados
depois de uma aprovação anterior (motivo do reenvio: data de conclusão,
data de vencimento, validade, arquivo ou tipo de arquivo).

## Ações disponíveis

| Ação | Descrição |
| --- | --- |
| Novo envio | Cria uma nova remessa com os itens selecionados |
| ![FolderOpen](/img/icons/FolderOpen.png) Ver | Abre o painel lateral da remessa, com a lista de itens e as ações de resposta |
| Adicionar itens | Inclui mais itens em uma remessa ainda aberta |
| Aprovar | Marca o item como aprovado pelo cliente. Disponível apenas em itens aguardando resposta, em remessas abertas |
| Reprovar | Marca o item como reprovado, com motivo (documento ilegível, documento vencido, documento incorreto/divergente, assinatura ausente ou inválida, dados incompletos ou outro) e observação opcional. Disponível apenas em itens aguardando resposta, em remessas abertas |
| Remover | Remove um item de uma remessa ainda aberta; o item volta a ficar disponível para entrar em outra remessa |
| Cancelar envio | Cancela a remessa inteira. Disponível apenas enquanto a remessa está aberta |

O status da remessa é calculado automaticamente a partir do status dos
itens: **aberta** enquanto qualquer item aguarda resposta (inclusive quando
todos os itens foram removidos); **aprovada** quando todos os itens são
aprovados; **reprovada** quando todos são reprovados; **parcialmente
resolvida** quando há uma mistura de itens aprovados e reprovados; ou
**cancelada**, quando cancelada manualmente. Uma barra de progresso mostra
a porcentagem de itens aprovados dentro da remessa e, na tela de detalhe da
mobilização, o progresso agregado de todos os itens em todas as remessas.
