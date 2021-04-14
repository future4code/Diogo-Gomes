/// 1 - Exercícios de interpretação de código
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a. O que vai ser impresso no console?
//Resposta: 10, 50

//b. O que aconteceria se retirasse os dois console.log e simplesmente 
//invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//Resposta: Nada, pois a função precisa de um retorno.


/// 2 - Exercícios de interpretação de código
// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

//a. Explicite quais são as saídas impressas no console
//Reposta: Imprime darvas e caio

//b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
//Reposta: Imprime Amanda e Caio


/// 3 - Exercícios de escrita de código
//O código abaixo mostra uma função que recebe um array e devolve outro array. 
//Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

// const metodo = (array) => {
   
//     let arrayFinal = [];
  
//     for (let x of array) {
//       if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//       }
//     }
  
//     return arrayFinal;
//   }
// Cria um novo array vazio. 
// Depois verifica se os elementos são impares.
// Adiciona o valor ao array arrayFinal multiplicando o valor por ele mesmo.
// Retornando o arrayFinal com o valor.

/// 4 - Exercícios de escrita de código

//a -
// const quemSou = () =>{
//   console.log("Eu sou Diogo Silva, tenho 33 anos, moro em Barueri - SP e sou estudante.")
// }

// quemSou();

//b - 
// const quemSou = (nome, idade, cidade, estudante) =>{
//   nome = "Diogo",
//   idade = Number(33),
//   cidade = "Barueri",
//   estudante = Boolean()

//   if (estudante = true){
//     console.log (`Eu sou, ${nome} tenho ${idade} anos, moro em ${cidade} e sou estudante`)
//   }else
//     console.log (`Eu sou, ${nome} tenho ${idade} anos, moro em ${cidade} e não sou estudante`)
//   }

// quemSou();

/// 5 - Exercícios de escrita de código

// a- 
// const somaNumero = (n1, n2) =>{
  
//   resultado = n1 + n2
  
//   return resultado

// }

// console.log(somaNumero(20, 5));

//b-
// const numeros = (n1, n2, resultado) =>{
//   n1 = Number(10)
//   n2 = Number(8)
//   resultado = Boolean();


//   if (n1 >= n2){
//    resultado = true
//    return "segundo número maior que o primeiro número"

//   }else
//    resultado = false
//    return "primeiro número maior que o segundo número"
//   }

// console.log(numeros())


/// 6 - Exercícios de escrita de código

//Para os itens a seguir, considere o seguinte array para os seus testes:
//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a-
// function qtdArray (array){
// console.log(array.length)
// }
// qtdArray(array)

 //b-
// let parImpar = function (numero) {
//   if (numero %2 === 0) {
//       return true
//   } else {
//       return false
//   }
// }
// console.log(parImpar(10))


// c-
// const qtdParIpar = (numero) =>{
//   let contador = 0
//   for (const i of numero) {
//     if (i %2 === 0){
//       contador++
//     }else{
//       contador = contador
//     } 
//   }
//   return contador
// }

// console.log(qtdParIpar(array))

//d-
// let parImpar = function (numero) {
//   if (numero %2 === 0) {
//       return true
//   } else {
//       return false
//   }
// }

// let qtdParIpar = (numeros) => {
//   let contador = 0
//   for (let i of numeros) {
//       if (parImpar(i)) {
//         contador++
//       } else {
//         contador = contador
//       }
//   }
//   return contador
// }
// console.log(qtdParIpar(array))


