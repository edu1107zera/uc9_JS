let prompt = require("prompt-sync")()
// Vetores (ou ARRAYs): guardar vários dados em uma só variável

let nomes =
    [
        {
            id: 1,
            nome: "Chaves",
            idade: 8
        },
        {
            id: 2,
            nome: "Quico",
            idade: 10
        },
        {
            id: 3,
            nome: "Seu Madruga",
            idade: 44
        },
        {
            id: 4,
            nome: "Chiquinha",
            idade: 8
        },
        {
            id: 5,
            nome: "Nhonho",
            idade: 9
        },
        {
            id: 6,
            nome: "Bruxa do 71",
            idade: 300
        },
        {
            id: 7,
            nome: "Pópis",
            idade: 16
        }
    ]

main()
function main() {

    console.clear()

    console.log("Opçoes disponiveis:")
    console.log("1 - listar todos")
    console.log("2 - Buscar por nome")
    console.log("3 - Buscar por letra")
    let opcao = prompt("Digite uma opçao:")

    if (opcao == "1") {
        console.log(`
|Digite 1 para listar na ordem CRESCENTE.
|Digite 2 para listar na ordem DECRESCENTE.`)
        let opcao = prompt("|Digite uma opçao: ")
        if (opcao == "1") {
            for (let i = 0; i < nomes.length; i++) {
                console.log(`id:${nomes[i].id} | Nomes:${nomes[i].nome} | Idade: ${nomes[i].idade}`)
            }
        }
        else if (opcao == "2") {
            for (let i = nomes.length - 1; i >= 0; i--) {
                console.log(`id:${nomes[i].id} | Nomes:${nomes[i].nome} | Idade: ${nomes[i].idade}`)
            }
        }

    }

    else if (opcao == "2") {
        let busca = prompt("Digite o nome que deseja buscar: ")

        for (let i = 0; i < nomes.length; i++) {

            if (busca == nomes[i].nome) {
                console.log(`id:${nomes[i].id} | Nomes:${nomes[i].nome} | Idade: ${nomes[i].idade}`)
            }
        }
    }
    else if (opcao == "3") {

        for (let i = 0; i < nomes.length; i++) {
            let letras = prompt("Digite as letras do nome que quer filtrar:")
            let aux = nomes[i].nome
            aux =aux.toUpperCase()
            aux =aux.replaceAll("ó","o")

            if (aux.includes(letras.toUpperCase())) {
                console.log(`id:${nomes[i].id} | Nomes:${nomes[i].nome} | Idade: ${nomes[i].idade}`)
            }



        }

    }

}