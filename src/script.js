// Seu código vai aqui;

// 
const display = document.getElementById('result')




//-------------FUNÇÕES---------------

function upper (){
    const input = document.getElementById('stringInput').value
    let output = input.toUpperCase()

    const resultado = document.createElement("h2")
    resultado.innerText = output
    let displayResult = document.getElementsByClassName("textContent")[0]
    displayResult.appendChild(resultado)
}
const botaoUpper = document.getElementById('toUpperCase')
botaoUpper.addEventListener("click",function(event){ 
    event.preventDefault()
    upper()
  })



function lower(){
    const input = document.getElementById('stringInput').value
    let output = input.toLowerCase()
    const resultado = document.createElement("h2")
    resultado.innerText = output
    let displayResult = document.getElementsByClassName("textContent")[0]
    displayResult.innerHTML = '' //Limpa o display
    displayResult.appendChild(resultado)
}
const botaoLower = document.getElementById('toLowerCase')
botaoLower.addEventListener("click",function(event){ 
    event.preventDefault()
    lower()
  })


function replace(){
    const input = document.getElementById('stringInput').value
    let output = input.replace(/a/g, "-")

    const resultado = document.createElement("h2")
    resultado.innerText = output
    let displayResult = document.getElementsByClassName("textContent")[0]
    displayResult.innerHTML = '' //Limpa o display
    displayResult.appendChild(resultado)
}
const botaoReplace = document.getElementById('replace')
botaoReplace.addEventListener("click",function(event){ 
    event.preventDefault()
    replace()
  })


function concat(){
    const input = document.getElementById('stringInput').value
    let output = input.concat(" concatenado")

    const resultado = document.createElement("h2")
    resultado.innerText = output
    let displayResult = document.getElementsByClassName("textContent")[0]
    displayResult.innerHTML = '' //Limpa o display
    displayResult.appendChild(resultado)
}
const botaoConcat = document.getElementById('concat')
botaoConcat.addEventListener("click",function(event){ 
    event.preventDefault()
    concat()
  })


function split(){
    const input = document.getElementById('stringInput').value
    let output = input.split("a")

    const resultado = document.createElement("h2")
    resultado.innerText = output
    let displayResult = document.getElementsByClassName("textContent")[0]
    displayResult.innerHTML = '' //Limpa o display
    displayResult.appendChild(resultado)
}
const botaoSplit= document.getElementById('split')
botaoSplit.addEventListener("click",function(event){ 
    event.preventDefault()
    split()
  })