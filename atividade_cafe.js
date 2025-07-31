let usuario_1 ="Conradito"
let usuario_2 ="Pedrita"
let idade_user_1 = 15
let idade_user_2 = 19
let yes_cliente = true 
let no_cliente = false
let numero_cafe_user1 = 187
let numero_cafe_user2 = 5
let soma_de_cafes=  numero_cafe_user1+numero_cafe_user2
let faltam_user_1= 200- numero_cafe_user1
let faltam_user_2= 200 -numero_cafe_user2 
let novos_cafes_tomados_user_1= 15
let novos_cafes_tomados_user_2= 3
let numero_cafe_atualizado_1= numero_cafe_user1 + novos_cafes_tomados_user_1
let numero_cafe_atualizado_2= numero_cafe_user2 + novos_cafes_tomados_user_2
let desenbolsou_user1 = numero_cafe_atualizado_1 * 3.50
let desenbolsou_user2 = numero_cafe_atualizado_2 * 3.50
let desconto_user1 = desenbolsou_user1 *0.5
let desconto_user2 = desenbolsou_user2 *0.5

console.log("Ola! \nBem-vindo ao sistema de usuarios do Conradito \nAbaixo estaoas informaçoes dos ussuarios cadastrados no sistema:")

console.log("\n---- Lista de usuarios:")
console.log("1 - Nome: "+usuario_1+","+"idade: "+idade_user_1+"."+" É cliente: "+no_cliente)
console.log("1 - Nome: "+usuario_2+","+"idade: "+idade_user_2+"."+" É cliente: "+yes_cliente)

console.log("\n---- Quantidade de cafés:")
console.log("O cliente "+usuario_1+ " ja tomou "+numero_cafe_user1+ " cafés!")
console.log("O cliente "+usuario_2+ " ja tomou "+numero_cafe_user2+ " cafés!")

console.log("\n----Soma de cafés tomados:")
console.log("Juntos,os clientes "+usuario_1+" e "+ usuario_2+" tomaram "+soma_de_cafes+" cafés!")

console.log("\n----Quantos cafés falta para chegar em 200?")
console.log("Faltam "+ faltam_user_1 +" para "+ usuario_1)
console.log("Faltam "+ faltam_user_2 +" para "+ usuario_2)

//atv extra
console.log("\nNovas vendas: Conrado comprou 15 novos cafés e pedrita 3.\nNumero de cafés tomados atualizado: "+numero_cafe_atualizado_1 + 
    " e " + numero_cafe_atualizado_2)

console.log("\nMostre quantos R$ cada ususario desenbolsou na cafeteria cada cafe custa: R$3,50 "+"\nValor Conradito:"+desenbolsou_user1.toFixed(2) +
"; Valor pedrita:"+ desenbolsou_user2.toFixed())

console.log("\nMoste quanto cada usuario teria gasto se houvesse um desconto de 50% em cada café: "+"\nValor conradito:"+desconto_user1.toFixed(2) + "; Valor pedrita:"+desconto_user2)



