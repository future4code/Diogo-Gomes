/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert('Bem vindo ao jogo de Blackjack!')
 //início do jogo
 if (confirm('Quer iniciar uma rodada?')) {
   
   //Novas cartas do Usuário 
   let cartaUmUsuario = comprarCarta() 
   let cartaDoisUsuario = comprarCarta()

   //Novas cartas do  Computador 
   let cartaUmComputador = comprarCarta()
   let cartaDoisComputador = comprarCarta()

   //Guardando o resultado da soma
   totalUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor
   totalComputador = cartaUmComputador.valor + cartaDoisComputador.valor

   //Mostra as cartas / pontuação
   console.log(`Usuário - cartas: ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto} - pontuação: ${String(totalUsuario)}`)
   console.log(`Computador - cartas: ${cartaUmComputador.texto} ${cartaDoisComputador.texto} - pontuação: ${String(totalComputador)}`)
   
   //Comporando os resultados, Empate, vitória ou derrota.
   if (totalUsuario > totalComputador) {
      console.log('O usuário ganhou!')
   } else if ( totalUsuario < totalComputador) {
      console.log('O computador venceu!')
   } else {
      console.log('Empate!')
   }
 } else {
    console.log('O jogo acabou') 
} 