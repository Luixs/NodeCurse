/*
    0 Obter um Usuario
    1 Preciso obter o numero de telefone de um usuário apartir de seu ID
    2 Obter o endereço do usuário pelo ID
*/

//importando modulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario(){
    //Quando der algum problema -> reject(ERRO)
    // quando success -> RESOLV
    return new Promise(function resolvePromise(resolve,reject){
        setTimeout(() => {
        return resolve({
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date(),
            endereco: "Castelo no meio do deserto da Arábia"
        })
    }, 1000)
    })
  
}

function obterTelefone(idUsuario){
    return new Promise (function resolvePromise(resolve,reject){
        setTimeout(()=>{
            return resolve ({
                    numero: '99999900',
                    ddd:66
               })
        },2000)

    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            rua: "dos bobos",
            numero:0
        })
    },2000)
}
//1 - Passo Async -> Automaticamente ela retorna uma promise
main()
async function main(){
    try{
        console.time("Promise-time")
        const usuario = await obterUsuario()
        /*
        const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id)*/
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.numero},
            Endereço: ${endereco.rua},${endereco.numero}
        `)
        console.timeEnd("Promise-time")
    }
    catch(error){
        console.error("Deu ruim", error)
    }
}


/*
const usuarioPromise = obterUsuario()
//Para manupular o sucesso usamos a função .then
//para manipular erros, usamos o .catch

usuarioPromise
    .then (function(usuario){
        return obterTelefone(usuario.id)
        .then(function(resultado){
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: resultado
            }
        })
    })
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id);
        return endereco.then(function resolverendereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`
            Nome: ${resultado.usuario.nome},
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.rua},
            Telefone: ${resultado.telefone.ddd}, ${resultado.telefone.telefone}
        
        `)
    }).catch(function(error){
        console.log("Deu RUIm", error)
    })
*/
/*obterUsuario(function resolveUsuario(error, usuario){
        if(error){
            console.error('Deu ruim no Usuario',error)
            return;
        }

        obterTelefone(usuario.id,function resolveTelefone(error1, telefone){
            if(error1){
                console.error('Deu ruim no telefone',error1)
                return;
            }    

        obterEndereco(usuario.id, function resolverEndereco(error2,endereco){
            if(error2){
                console.error('Deu ruim no endereço',error2)
                return;
            }
            console.log(`
                Nome: ${usuario.nome}
                Endereco: ${endereco.rua},${endereco.numero}
                Telefone: ${telefone.ddd}, ${telefone.numero}
                erro: ${error1} ${error2} ${error}
            `)
        })

    })

})*/