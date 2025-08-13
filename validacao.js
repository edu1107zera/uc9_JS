let prompt = require("prompt-sync")()
//main()
//idade_absurda()
//digitos()
//email()
senha()
function main(){
    
    let nome = prompt("Digite seu nome: ")
    if(nome.length < 3)
        {
            console.log("Nome invalido...")
            main()
            return
        }
    
    }
    function idade_absurda(){
        let idade = prompt("Digite sua idade: ")
        if(idade >= 18 || idade >= 120)
        {
             console.log("Voce é maior que 18 anos ou idade absurda!!")
        }


    }
       
    function digitos(){
        let cpf = prompt("Digite seu CPF: ")
        cpf = cpf.replaceAll("."," ")
        cpf = cpf.replaceAll("-"," ")
        if(cpf.length =! 11)
            {
                console.log("CPF invalido")
            }
    }
    function email()
    {
        let email = prompt("Digite seu email: ")
        if(email.length < 10 || !email.includes("@")||!email.includes("."))
            {
                console.log("Esse email esta incorreto!")
             }
    }
    function senha(){
        let senha = prompt("-Digite sua senha: ")
       
        if(senha.length < 6){
            console.log("A SENHA DEVE CONTER MINIMO DE 6 CARACTERES")  
        
        }
        else{
            let confirma_senha = prompt("-Confirme sua senha: ")
            if(senha == confirma_senha){
                console.log("!!!!!!Parabens!!!!!!!!!")
            }
            else{
                console.log("!!!!!AS SENHAS NAO SAO IGUAIS!!!")
            }
        }
    }