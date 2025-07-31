 //condiçoes simples
let prompt = require("prompt-sync")()
/*
let senha = prompt("Digite a senha do sistema: ")

if(senha == "admin" ){
    console.log("SEnha esta correct")

}else{
    console.log("Acesso negado!!!!!!!")
} */

    let kg = 50.00
    
    let quantidade = parseInt(prompt("Digite quantos KG de peixe: "))
    if(quantidade > 100){
        kg = 55.90
        let valor = kg * quantidade
        console.log("O valor é de: R$"+valor.toFixed(2))  
    }else {
        let valor = kg * quantidade
        console.log("O valor é de: R$"+valor.toFixed(2))  
    }