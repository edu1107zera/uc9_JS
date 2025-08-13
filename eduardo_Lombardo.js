let prompt = require("prompt-sync")()

let observacao =
    [
        {
            numero_cama: "1",
            nome_pacient: "Eduardo",
            status: "Medicamento",
            Estado:"USO"
           
        },
        {
            numero_cama: "2",
            nome_pacient: "Rafa",
            status: "sobe efeito medicado",
            Estado:"USO"
        },
        {
            numero_cama: 3,
            nome_pacient: "",
            status: " ",
            Estado:" "
        },
        {
            numero_cama: 4,
            nome_pacient: " ",
            status:" ", 
            Estado:" "
        },

    ]

  
let login = //fazr um admin para cadastrar um funcionario
    [
        {
            credencial: "1234",
            senha: "123",
            nome: "Joana"
        }
    ]
console.log(`
====================================================
🏥            SISTEMA  - HOSPITALAR              🏥
====================================================
`)
main()
function main() {

    let Credencial = prompt("Credencial:")
    let Senha = prompt("Senha:")
    for (let i = 0; i < login.length; i++) {
        if (login[i].credencial == Credencial && login[i].senha == Senha) {

            console.log(`---------------------
|-Bem vindo(a) ${login[i].nome}-|`)

            console.log(`
    /====================================================/
    🏥 ⚕️🏥⚕️  SISTEMA DE ENFERMAGEM - HOSPITALAR  ⚕️🏥⚕️ 🏥
    /====================================================/
     `)
      observacao_opcao()
     function observacao_opcao(){
            console.log(" -[1] Para cadastrar paciente sala de observacao")
            console.log(" -[2] Para consultar sala de oservaçao")
            console.log(" -[3] Para buscar paciente")//talvez 1 abre varias opçao
            let opcao_menu1 = prompt(" Digite uma opção:")
                
            
            if (opcao_menu1 == "1") 
                {
                    let numero_cama =prompt("Numero da cama:")
                    let nome_pacien = prompt("Nome: ")
                    let status = prompt("Status: ")
                    let Estado =observacao[i].Estado = "USO"
                    
                    for (let i = 0; i < observacao.length; i++) {
                        if(numero_cama == observacao[i].numero_cama){
                            observacao[i].nome_pacient =nome_pacien
                        }
                        else{
                            observacao.push({numero_cama: numero_cama,nome_pacient: nome_pacien,status:  status,Estado: Estado})
                            
                        }
                        observacao_opcao()
                    }
                   
                }
            
                else if(opcao_menu1 == "2"){
                    for (let i = 0; i < observacao.length; i++) {
                        console.log(`${i+1} - Cama::${observacao[i].numero_cama} |  Nome:${observacao[i].nome_pacient} | status:${observacao[i].status} | Estado: ${observacao[i].Estado}`)
                      

                        
                    }
                    prompt("Digite enter para sair")
                    observacao_opcao()
                }
              
                

            }

        }
        else {
            console.log("\n-Credencial ou senha incorretos!!\n")
            main()
        }
    
    }

    
}
/*
  fazer a substituiçao  dos leitos ja exixtentes 
  (nao fazer adicçao de leitos pois tem maximo apenas substitui)
        
        */