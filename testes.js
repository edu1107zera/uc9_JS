let prompt = require("prompt-sync")()
// Vetores (ou ARRAYs): guardar vários dados em uma só variável

let nomes = 
[
    {
        id: 1,
        nome: "chaves",
        idade:8
    },
    {
        id: 2,
        nome: "Quico",
        idade:10
    },
    {
        id: 3,
        nome: "Seu Madruga",
        idade:44
    },
    {
        id: 4,
        nome: "Chiquinha",
        idade:8
    },
    {
        id: 5,
        nome: "Nhonho",
        idade:9
    },
    {
        id: 6,
        nome: "Bruxa do 71",
        idade:300
    }
]

main()
function main(){

    console.clear()

    let opcao = prompt("Digite 1 para cadastrar, 2 para listar, 3 para buscar: ")
    if(opcao == "1"){
       
            let nome = prompt("Digite um nome: ")
            let idade = prompt("Digite uma idade: ")
            let id = nomes.length+1
            nomes.push({id: id,nome: nome,idade: idade})
            main()
        
        
            

            
        
    }else if( opcao == "2" ){

        for(let i = 0; i < nomes.length; i++){
           
            console.log(`${i+1} - Id:${nomes[i].id} |  Nome:${nomes[i].nome} | Idade:${nomes[i].idade}`)
        }

        prompt("Aperter ENTER para continuar")
        main()

    }else if(opcao == "3"){

        let posicao = prompt("Digite a posição do usuário que quer buscar:")

        if( nomes.length >= posicao ){
            console.log(`O usuário é: ${nomes[posicao-1]}`)
            alterar(posicao-1)
        }else{
            console.log(`Não existe um usuário nesta posição`)
        }


    }

}

function alterar( indice ){
    let novo_nome = prompt("Digite o novo nome: ")
    nomes[indice] = novo_nome
    
    console.log("Nome alterado com xuxesso!")
    setTimeout(() => {
        main()
    }, 1000);
}

function teste(){
    let nomes = [ "Jailson", "Mendes", "Laranja" ]
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]}`)
    
    nomes[0] = "Ricardo"
    nomes[1] = "Milos"
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]}`)
    
    nomes.push("Doce") // Adiciona um item no final do array
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]} ${nomes[3]}`)
}
