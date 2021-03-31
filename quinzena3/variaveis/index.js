///Exercícios de interpretação de código

// Exercício 1
// console.log(a, b) >> resultado = 10
// console.log(a,b) >> resultado = 10, 5

// Exercício 2
//console.log(a, b, c) >> resultado = 10, 10, 10

//---------------------------------------//

/// 1 - Exercícios de escrita de código

let nome 
let idade 

console.log  (typeof nome)  //>> resultado undefined, pois a variável está sem valor definido.
console.log  (typeof idade)  //>> resultado undefined, pois a variável está sem valor definido.

nome= prompt ('Qual é o seu nome?') //>> resultado string
idade= prompt ('Qual é a sua idade?') //>> resultado string

console.log  (typeof nome)  
console.log  (typeof idade)

console.log ('Olá' ,nome, ',', 'você tem' ,idade, 'anos.')



 /// 2 - Exercícios de escrita de código

let time
let cidade
let comida
let esporte
let cor

time = prompt('Para qual time você torce?')
console.log('Para qual time você torce? Resposta:', time)

cidade = prompt('Em qual cidade você mora?')
console.log('Em qual cidade você mora? Resposta:', cidade)

comida = prompt('Qual sua comida preferida?')
console.log('Qual sua comida preferida? Resposta:', comida)

esporte = prompt('Qual seu esporte favorito?')
console.log('Qual seu esporte favorit? Resposta:', esporte)

cor = prompt('Qual a sua cor favorita?')
console.log('Qual a sua cor favorita? Resposta:', cor) 



/// 3 - Exercícios de escrita de código

let comidasPreferidas = ['Frango','Peixe','Lasanha','Feijão','Ovo']
console.log (comidasPreferidas)

console.log ('Essas são as minhas comidas preferidas: \n', comidasPreferidas[0], '\n', comidasPreferidas[1], '\n', comidasPreferidas[2], '\n', comidasPreferidas[3], '\n', comidasPreferidas[4]);

let comidasPreferidasUsuario = [];

comidasPreferidasUsuario = prompt('Qual sua comida preferida?')
console.log ('Comida preferida adicionada: \n', comidasPreferidas[0], '\n', comidasPreferidasUsuario, '\n', comidasPreferidas[2], '\n', comidasPreferidas[3], '\n', comidasPreferidas[4]);



/// 4 - Exercícios de escrita de código

let pergunta = ['Você gosta de estudar?', 'Você está cansado?', 'Você está com fome?']

let resposta = ['True', 'False']

console.log  (pergunta[0],'\n', resposta[0],'\n', pergunta[1],'\n', resposta[1],'\n', pergunta[2],'\n', resposta[0]);