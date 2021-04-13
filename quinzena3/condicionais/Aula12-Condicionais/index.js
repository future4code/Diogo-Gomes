// *?Exercícios de interpretação de código

// EXERCÍCIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// O programa solicita do usuário um número aleatorio. 
// o sistema faz a verificação de divisibilidade do número inteiro se é divisor de um outro inteiro  
// nesse caso a divisibilidade do número 2 que deve ser 0, ou seja, se o número é par.
// apenas números pares passarão no teste.

// EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. mostra a fruta escolhida e o valor da frutra.
// Se nenhuma das frutas listadas foram escolhidas, o preço será R$5.00.
// b. "O preço da maçã é de R$2.25"
// c. O valor para a pera seria de R$5.00


// EXERCÍCIO 3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a. transforma o string em um number. 
//b. "Esse número passou no teste".
//não iria aparecer nada. 
//c. ocorre o erro porque o escopo pai declara uma variável numero. Fora do escopo condicional. não é possivel o ao escopo filho. 



// *?Exercícios de escrita de código

// EXERCÍCIO 4

// const idade = Number(prompt("Qual a sua idade?"));

// if (idade >= 18){
//     console.log("Você pode dirigir")
// }   
// else (idade < 18){
//     console.log("Você não pode dirigir")
// }
// 

// EXERCÍCIO 5

// const turno = prompt("Qual seu turno de estudos? Digite apenas a letra: M - Matutino, V - Vespertino ou N - Noturno");

// if (turno === 'M'){
//     console.log("Bom dia!")
// }   
// else if (turno === 'V'){
//     console.log("Boa tarde!")
// }   
// else if (turno === 'N'){
//     console.log("Boa noite!")
// }
// else {
//     console.log("letra erra favor digitar M, V ou N")
// }


// EXERCÍCIO 6

// const turno = prompt("Qual seu turno de estudos? Digite apenas a letra: M - Matutino, V - Vespertino ou N - Noturno");

// switch (turno){
//     case "M":
//         console.log("Bom dia!")
//     break
//     case 'V':
//         console.log("Boa tarde!")
//     break
//     case 'N':
//         console.log("Boa noite!")
//     break
//     default:
//     console.log("letra erra favor digitar M, V ou N")
//     break
// }

// EXERCÍCIO 7

// let filmes = prompt("Escolha um gênero de filme")
// let preco = Number(prompt("Qual o valor do ingresso?"))


// if (filme === "Fantasia" && preco < 15){
//     console.log("Bom filme!")
// }
// else {
//     console.log("Escolha outro filme :(")
// }

