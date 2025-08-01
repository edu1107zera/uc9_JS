let prompt = require("prompt-sync")()

console.log("Responda as perguntas com 1-sim ou 2-nao:")
let pergunta1 = prompt("Telefonou para a vitima? ")
let pergunta2 = prompt("Esteve no local do crime? ")
let pergunta3 = prompt("Mora perto da vitima? ")
let pergunta4 = prompt("Devia para a vitima? ")
let pergunta5 = prompt("Ja trabalhou com a vitima?  ")

    let sim = 0
if(pergunta1 == "1")
    {sim++}
 if(pergunta2 == "1")
    {sim++}
 if(pergunta3 == "1")
    {sim++}
 if(pergunta4 == "1")
    {sim++}
 if(pergunta5 == "1")
    {sim++}
// console.log(sim)

if(sim == 2){
    console.log("Suspeito")
}
else if(sim == 3 || sim == 4){
    console.log("Cumplice")
}
else if(sim == 5){
    console.log("Assassino")
}
else{
    console.log("Inocente")
}