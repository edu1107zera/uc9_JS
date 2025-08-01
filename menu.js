let prompt = require("prompt-sync")()
let nome 
let idade 
let ativo = "sim"

//ascii ART
main()
function main(){
console.clear()
   
console.log(`
    ===============================
       SISTEMA AINZ - MENU 🤖
    ===============================
    `)
    
    console.log("1 - Cadastrar Usuário")
    console.log("2 - Listar Usuários")
    console.log("3 - Sair")
    let opcao = prompt("Digite uma opção: ")
         if(opcao ==1 )
            {
            Cadastrar()
            }
        else if (opcao == 2)
            {
            listar()
                
            }
        else if(opcao == 3)
            {
                return
            }
         else
            {
                console.log("OPÇAO INVALIDA")
                setTimeout(() => {
                    main()
                }, 2000);
               
                
            }
            
            
            
            function Cadastrar(){
                console.log("---CADASTRO---")
                nome =prompt("Digite o nome: ")
                idade = parseInt(prompt("Digite sua idade: "))
                ativo =true
                main()
            }
            function listar(){
                console.log("---LISTAGEM---")
                console.log("1 - Nome: ["+nome+"] | Idade: ["+idade+"] Ativo: | ["+ativo+"]")
               
                
                
            }
        }