//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui

//   let n = array
//   n.reverse()
//   return n

return array.reverse();

}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let paresElevadoAdois= []
   array.forEach((element)=>{
   if(element % 2 === 0 ){
      paresElevadoAdois.push(element**2)
   }
})
   return paresElevadoAdois
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let numerosPares= []
   array.forEach((element)=>{
   if(element % 2 === 0 ){
      numerosPares.push(element)
   }
})
   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNumero= 0
   array.forEach((element)=>{
   if(element > maiorNumero ){
      maiorNumero=(element)
   }
})
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
let booleanos =[]
      const booleano1 = true
      const booleano2 = false
      const booleano3 = !booleano2 
      const booleano4 = !booleano3 
         
      booleanos.push( booleano1 && booleano2 && !booleano4 )
      booleanos.push((booleano1 && booleano2) || !booleano3)
      booleanos.push((booleano2 || booleano3) && (booleano4 || booleano1) )
      booleanos.push(!(booleano2 && booleano3) || !(booleano1 && booleano3) )
      booleanos.push(!(booleano2 && booleano3) || !(booleano1 && booleano3) )
      
   return  booleanos
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui

   let nPares =[]
   for (let i = 0 ; i<=n*n && nPares.length<n; i++){
      if ((i % 2) === 0) {
         nPares.push(i)
      }
      
   }
   return nPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui

   let triangulo =""
   if(a===b&& a===c){
      triangulo = 'Equilátero'
   }else if (a===b || b===c || a===c){
      triangulo = 'Isósceles'
   }else{
      triangulo = 'Escaleno'
   }
   return triangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maior 
   let menor
   let dif
   const comparar = {
      maiorNumero: maior,
      maiorDivisivelporMenor:"",
      diferenca:dif
   }
   if (num1>num2){
      comparar.maiorNumero = num1
      maior = num1
      menor = num2
   }else{
      comparar.maiorNumero = num2
      maior = num2
      menor = num1
   }
   comparar.maiorDivisivelporMenor = (maior%menor >=0)
   comparar.diferenca= (maior-menor)

   return comparar
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let menorNum = Math.min(...array)  
   let maiorNum = Math.max(...array)  
   array.splice(array.indexOf(maiorNum), 1) 
   array.splice(array.indexOf(menorNum), 1) 
   let segundoMenor = Math.min(...array) 
   let segundoMaior = Math.max(...array) 
   let novoArray = array.filter((numero) => { 
      return numero === segundoMenor || numero === segundoMaior
   })
  
   return novoArray.reverse() 
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   arrayOrdenado = []
   tamanho = array.length
   for (let i = 0; i < tamanho; i++) {
      menor = array.reduce((a,b) => {
         return Math.min(a,b)
      })
      arrayOrdenado.push(menor)
      let indice = array.indexOf(menor)
      array.splice(indice, 1)
   }
   return arrayOrdenado
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filmeDoAstrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
   }
      return filmeDoAstrodev
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let filme ={
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const objeto = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
return objeto
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   //   const pessoa = {
   //    nome: "Astrodev",
   //    idade: 25,
   //    email: "astrodev@future4.com.br",
   //    endereco: "Rua do Futuro, 4"
   //}
   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const arrayDezesseisA = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
   return arrayDezesseisA
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const arrayDezesseisB = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
   })
      return arrayDezesseisB
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui

   const arrayDezesseteA = array.map((num) => {
      return num * 2
   })
   return arrayDezesseteA
   
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  const arrayDezesseteB = array.map((num) => {
   return (num * 2).toString()
})
return arrayDezesseteB
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   const arrayDezesseteC = array.map((num) => {
      if (num % 2 !== 0) {
         return `${num} é ímpar`
      } else {
        return `${num} é par`
      }
    })
return arrayDezesseteC
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]

   const permitidos = pessoas.filter((pode) => {
      return (pode.idade > 14) && (pode.idade < 60) && (pode.altura > 1.5)
   })
   return permitidos
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8 },
      { nome: "João", idade: 20, altura: 1.3 },
      { nome: "Pedro", idade: 15, altura: 1.9 },
      { nome: "Luciano", idade: 22, altura: 1.8 },
      { nome: "Artur", idade: 10, altura: 1.2 },
      { nome: "Soter", idade: 70, altura: 1.9 }
   ]

   const naoAutorizados = pessoas.filter((naoPode) => {
      return (naoPode.idade < 14) || (naoPode.idade > 60) || (naoPode.altura < 1.5)
   })
   return naoAutorizados
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
  contas.forEach((conta)=> {
   if (conta.cliente == "João") {
      conta.saldoTotal = 400
   } else if (conta.cliente == "Paula") {
    conta.saldoTotal = 6260
   } else if (conta.cliente == "Pedro") {
      conta.saldoTotal = -3340
   } else if (conta.cliente == "Luciano") {
      conta.saldoTotal = -1900
   } else if (conta.cliente == "Artur") {
    conta.saldoTotal = 1300
   } else {
    conta.saldoTotal = 1200
   }
})
return contas
}