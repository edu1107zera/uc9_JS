

// permitir o input do ususario em JS
console.log("\n")

let  prompt = require("prompt-sync")()
let moment = require("moment")



//atividade_nome()
//atividade_idade()
//ano_nascimneto()
//dois_numeros()
//distancia_km()
//media_notas()
//tabuada()
//hard()
hard_2()

function atividade_nome(){

    let nome = prompt("Digite seu nome: ")
    let sobrenome = prompt("Digite seu sobrenome: ")
    let nome_completo= nome+" "+sobrenome
    
    console.log("\nSeja bem-vindo(a) "+nome_completo)

}
function atividade_idade(){
   
    let idade = parseInt(prompt("\nDigite sua idade: "))
    let idade_futura = idade + 5
    console.log("Sua idade é: "+idade_futura)
}
function ano_nascimneto(){
    let ano_atual=2025
    let ano =parseInt(prompt("Digite o ano em qual voce nasceu: "))
    let calculo_ano= ano_atual - ano 
    console.log("Sua idade é: "+calculo_ano)
}
function dois_numeros(){
   
    let numero_1 = parseInt(prompt("Digite o primero numero: "))
    let numero_2 = parseInt(prompt("Digite o segundo numero: "))
    let soma = numero_1 + numero_2
    console.log("A soma dos 2 numeros é: "+soma)

}
function distancia_km(){
    let metros =parseInt(prompt("Digite um valor d adistancia em metros: "))
    let calculo_km = metros / 1000
    console.log(metros+" convertido para km é: "+calculo_km)
}
function media_notas(){
    console.log("Digite 2 notas para calcular a media:")
    let idade1 = parseInt(prompt("Digite a primeira nota: "))
    let idade2 = parseInt(prompt("Digite a primeira nota: "))
    let media = (idade1 + idade2 ) /2
    console.log("A media é: "+media)

}
function tabuada(){
    let numero = parseInt(prompt("Digite o numero desejado: "))
    let tabuada1= numero * 1 
    let tabuada2= numero * 2
    let tabuada3= numero * 3 
    let tabuada4= numero * 4 
    let tabuada5= numero * 5 
    let tabuada6= numero * 6 
    let tabuada7= numero * 7 
    let tabuada8= numero * 8 
    let tabuada9= numero * 9 
    let tabuada10= numero * 10 
   let tabuada_completa ="\nA tabuada do "+numero+" é "+"\n" +numero+" x 1 = "+tabuada1+
        "\n" +numero+" x 2 = "+tabuada2+
        "\n" +numero+" x 3 = "+tabuada3+
        "\n" +numero+" x 4 = "+tabuada4+
        "\n" +numero+" x 5 = "+tabuada5+
        "\n" +numero+" x 6 = "+tabuada6+
        "\n" +numero+" x 7 = "+tabuada7+
        "\n" +numero+" x 8 = "+tabuada8+
        "\n" +numero+" x 9 = "+tabuada9+
        "\n" +numero+" x 10 = "+tabuada10

        console.log("Tabuada completa: "+ tabuada_completa)

}
function hard_1(){
   moment().format('MMMM Do YYYY, h:mm:ss a');
   console.log(moment())
}
function hard_2(){
    moment().subtract(6, 'days').calendar();
    console.log(moment())
}





















console.log("\n\n\n")