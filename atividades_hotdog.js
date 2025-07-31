let salsicha = 3.50
let pure_batata = 2.15
let salada = 1.90
let pao = 0.90
let batata_palha = 0.50

let simples = salsicha+pure_batata+pao+batata_palha
let duplo = salsicha*2 +pure_batata+salada+pao+batata_palha
let especial = salsicha*3 +pure_batata*2+salada+pao+batata_palha

console.log("----- Cardapio -----")
console.log(" \n-Hotdog simples:\nsalsicha e pure de batata. "+
    " | Preço:"+ simples.toFixed(2)+ 
    " \n\n-Hotdog Duplo:\nDuas salsichas, pure de batata e salada."+
    " | Preço:"+duplo.toFixed(2)+" \n\n-Hotdog especial:\nTres salsichas, pure de batata em dobro e salada."+
    "| Preço:"+especial.toFixed(2))



