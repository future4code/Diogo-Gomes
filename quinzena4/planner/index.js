
function addTarefasSemana() {
  
  let newTarefas = ""
  let inputTarefa = document.getElementById("tarefa")
  newTarefas = inputTarefa.value

  let newDiaSemana = ""
  let DiaSemana = document.getElementById("dias-semana")
  newDiaSemana = DiaSemana.value
  

  if (newTarefas !=="") {
    let divNewTarefa = document.getElementById(newDiaSemana)
    divNewTarefa.innerHTML+=`<p>${newTarefas}</p>`
    inputTarefa.value = ""

} else {
    alert("Favor informa nome de tarefa e selecionar dia da semana")
}

}






