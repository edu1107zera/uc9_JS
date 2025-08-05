let prompt = require('prompt-sync')()
 
// Vetores = Array
 
let nomes = [ "Jailson", "Mendes", "Laranja" ]
 
main()
function main(){
    let opcao = prompt("Digite 1 para cadastrar, 2 para listar e 3 para buscar: ")
 
    if(opcao == "1"){
        let nome = prompt("Digite um nome: ")
        nomes.push(nome)
        main()
    }else if(opcao == "2"){
 
        for (let i = 0; i < nomes.length; i++) {
            console.log(`${i+1} - ${nomes[i]}`);
        }
        main()
    }else if(opcao == "3"){
 
        let posicao = parseInt(prompt("Digite a posição do usuário que quer buscar: "))
 
        if(nomes[posicao-1] == "undefined"){
            console.log("nÃO EXISTE")
        }else{
            console.log(`O usuário é ${nomes[posicao-1]}`)
        }
 
        main()
    }
}
 
function teste(){
 
}