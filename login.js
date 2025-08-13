let prompt = require("prompt-sync")()
let users = [
    {nome: "conrado",senha: "123",admin:true},
    {nome: "marcos",senha: "123",admin:false},
    {nome: "eduardo",senha: "123",admin:false}
]
let logado_user = null

main()
function main()
{
    console.log("----SISTEMA DE LOGIN----");
    let nome = prompt("Digite o nome: ")
    let senha =prompt("Digite sua senha: ")
   autenticar(nome,senha)
    
}

function autenticar(nome,senha)
{
    for (let i = 0; i < users.length; i++) {
      if(users[i].nome == nome && users[i].senha == senha) {
        logado_user = users[i]
        console.log(`Usuario [${users.nome}] autenticado com sucesso!`)
      }
      
      }

      if(logado_user == null){
        console.log("Usuario ou senha incorretos!!")
      }
        
    }   
