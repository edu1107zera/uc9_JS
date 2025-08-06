
function teste(){

    let ususario = 
    {
        nome :"ainz",
        idade : 320,
        telefone :[ "123546","122141"],
        endereco : {
            rua: "episcopal",
            numero: "12",
            bairro: "acapulco",
        }
    }
    
    console.log(`O usuário ${ususario.nome} tem ${ususario.idade} anos e o telefone é: ${ususario.telefone}`)
    console.log(`telefone de contato (1): ${ususario.telefone[0]} 
        telefone de contato(2): ${ususario.telefone[1]}`)
        console.log(`ele mora na ${ususario.endereco.rua} numero ${ususario.endereco.numero} no bairro ${ususario.endereco.bairro}`)
    }

    function arryobjet(){





arryobjet()


let produtos = [
    {
        nome: "Taça",
        preco: 34.6,
        descricao: "Feito pra por liquido"
    },
    {
        nome: "Copo",
        preco: 80.6,
        descricao: "Feito pra por lquido"
    },
    {
        nome: "caneca",
        preco: 10.6,
        descricao: "Feito pra por i"
    }
   


]
console.log(produtos[2].nome+" R$ "+produtos[2].preco)

    }