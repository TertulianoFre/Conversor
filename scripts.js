
let botao = document.getElementById("botao")
let select = document.getElementById("selectmoedas")

let inputMoedas = document.getElementById("input-moedas")





async function converterMoedas(){
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
    return resposta.json()



    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high


    let inputreal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoreale = document.getElementById("texto-real")
    

    if(select.value === "DOLAR"){
        let inputdolar = inputreal / dolar
        inputMoedas.innerHTML = inputdolar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
    }
    if(select.value === "EURO"){
        let valorEmEuros = inputreal/euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR"})
    }
    textoreale.innerHTML = inputreal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
function trocademoeda(){
let textoMoedas = document.getElementById("texto-moeda")
let bandeiraMoedas = document.getElementById("bDolar")



    if(select.value === "DOLAR"){
        textoMoedas.innerHTML = "DOLARES"
        bandeiraMoedas.src = "./imagem/eua.png"
    }
    if(select.value === "EURO"){
        textoMoedas.innerHTML = "EURO $"
        bandeiraMoedas.src = "./imagem/euro.png"
    }
    converterMoedas()
}



select.addEventListener("change",trocademoeda)

botao.addEventListener("click", converterMoedas)