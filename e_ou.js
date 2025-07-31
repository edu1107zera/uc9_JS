let prompt = require("prompt-sync")()



 function exemploPagamneto(){

    let pagamento = prompt("Selecione: credito, debito ,pix ou dinheiro")
 }


 //idade()
 function idade(){
    let idade = prompt("Digite sua idade: ")
    if(idade >= 18 && idade <= 65){
    console.log("Voce ja pode tirar CNH!")
    }else if( idade < 18){
        console.log("Voce ainda nao tem idade para tirar CNH!")
    }else if(idade > 65 && idade <= 120){
        console.log("Teste especial para renovar sua CNH!")
    }else{
        console.log("Idade invalida")
    }

   
    

 }

 function login(){
    let usuario =  prompt("Digite seu usuario: ")
    let senha =  prompt("Digite sua senha: ")

 }

 time()
 function time(){
    let time1 = prompt("Digite o nome do time:")
    let numerogol1 = prompt("Digite quantos gols o time "+time1+ " fez:")

    let time2 = prompt("Digite o nome do segundo time: ")
    let numerogol2 = prompt("Digite o numerode gols que o "+time2+ " fez:")
    if(numerogol2 > numerogol1){
        console.log("Vencedor time:"+time2, numerogol2)
    }else if(numerogol1 > numerogol2){
        console.log("Vencedor time:"+time1, numerogol1)
    }else if(numerogol1 == numerogol2){
        console.log("EMPATE")
    }
}