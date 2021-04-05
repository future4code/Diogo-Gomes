/// 1 - Exercícios de interpretação de código

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool2 && bool1
// console.log("a. ", resultado) >> resultado = false

// resultado = bool1 && bool2 && bool3
//  console.log("b. ", resultado) >> resultado = false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado) >> resultado = true

// console.log("e. ", typeof resultado) >> resultado = boolean

//---------------------------------------//


/// 2 - Exercícios de interpretação de código

// let array
// console.log('a. ', array) >> resultado = undefined

// array = null
// console.log('b. ', array) >> resultado = null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) >> resultado = 11

// let i = 0
// console.log('d. ', array[i]) >> resultado = 3

// array[i+1] = 19
// console.log('e. ', array) >> resultado = [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) >> resultado = 9


/// 1 - Exercícios de escrita de código

// let pergunta1= "Qual sua idade?"
// let pergunta2= "Qual a idade de seu melhor amigo ou amiga?" 
 
// let idadeSua= prompt(pergunta1);
// let idadeAmigo= prompt(pergunta2);

// idadeSua= Number(idadeUser);
// idadeAmigo= Number(idadeFriend);

// let resultado = Boolean(idadeSua>idadeAmigo)
// console.log('Sua idade é maior do que de seu amigo(a)', resultado)

// const diferença = Number(idadeUser) - Number(idadeFriend)

// console.log("A diferença das idades é", diferença)



 /// 2 - Exercícios de escrita de código
//  let pergunta= "Digite um número par";

//  numero= prompt(pergunta)
//  numero= Number(numero)
//  console.log(numero%2);
 
// O resto da divisão do numero par dividido por 2 é 0
// O resta da divisão de número ímpar por 2 é igual a 1

 


/// 3 - Exercícios de escrita de código

// let listaDeTarefas = []

// let pergunta1= "Diga uma tarefa que você precise realizar?"
// let pergunta2= "Diga mais uma tarefa que você precise realizar?"
// let pergunta3= "Diga uma terceira tarefa que você precise realizar?"

// tarefa1=prompt(pergunta1)
// tarefa2=prompt(pergunta2)
// tarefa3=prompt(pergunta3)


// listaDeTarefas.push(tarefa1)
// listaDeTarefas.push(tarefa2)
// listaDeTarefas.push(tarefa3)

// console.log(listaDeTarefas)

// let perguntaRemove = "Digite o índice de uma tarefa que já realizou: 0, 1 ou 2"
// indiceRemove=prompt(perguntaRemove)


// var removeIndice = listaDeTarefas.splice(indiceRemove, 1);
// console.log(listaDeTarefas)



/// 4 - Exercícios de escrita de código

// let perguntaNome = "Qual seu nome?"
// let perguntaEmail = "Qual seu e-mail?"


// nomeDoUsuario=prompt(perguntaNome)
// emailDoUsuario=prompt(perguntaEmail)

// console.log('O email', emailDoUsuario, 'foi cadastrado com sucesso. Seja bem-vindo(a)', nomeDoUsuario+'!')

