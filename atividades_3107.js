let prompt = require("prompt-sync")()


//positivo_negativo()
//debito_credito()
//cpf()
//maior50()
crescente()

function positivo_negativo(){
    let numero = prompt("Digite um numero positivo ou negativo: ")
    if(numero < 0){
        console.log("O numero "+numero+" é negativo")
    }else{
        console.log("O numero "+numero+" é positivo")
    }

}
function debito_credito(){
    let valor = parseInt(prompt("Digite um valor: "))
    let opcao = prompt("Digite uma opçao (1-Debito) ou (2-Credito): ")
    if(opcao == 1){
        let debito = valor * 0.10
        let subtrai =  valor - debito
        console.log(subtrai)
    }else if(opcao == 2){
        let credito = valor * 0.05
        let acrecimo =  valor + credito 
        console.log(acrecimo)
        

    }
    
}
function cpf(){
    let cpf = prompt("Digite seu CPF: ")
    let tamanho = cpf.length
    if(tamanho == 11){
        console.log("CPF valido")
    }else{
    console.log("CPF invalido (digite todos os numeros!!")
    }
}
function maior50(){
    let numero1 = parseInt(prompt("Digite o primerio numero: "))
    let numero2 = parseInt(prompt("Digite o segundo numero: "))
    let soma = numero1 + numero2

    if(soma > 50){
        let soma10 = soma + 10
        console.log("Numeros somados:"+soma)
        console.log("Soma: "+soma10)

    }
    else if (soma < 50){
        let subtrai20 = soma - 20
        console.log("Numeros somados:"+soma)
        console.log("Subtrai: "+subtrai20)
    }

}
function crescente(){
    let numero1 = prompt("Digite o primero numero: ")
    let numero2 = prompt("Digite o segundo numero: ")
    if(numero1 > numero2){
        console.log("Crescente: "+numero2 , numero1)
    }else if(numero2 > numero1){
        console.log("Crescente: "+numero1, numero2)
    }
}