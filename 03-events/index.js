const EventEmitter = require('events')
class MyEvents extends EventEmitter{

}

const MeuEmissor = new MyEvents()
const nomeEvento = "usuário:click"
MeuEmissor.on(nomeEvento, function(click){
    console.log("Usuário Clicou",click)
})

/*
// EVENTOS 
MeuEmissor.emit(nomeEvento, "na barra de rolagem")
MeuEmissor.emit(nomeEvento, "no ok")

//EVENTO COM COUNT
let count  = 0
setInterval(function() {
    MeuEmissor.emit(nomeEvento, "Na barra de rolagem "+(count++) )
}, 1000);
*/

const stdin = process.openStdin()
function main(){
    return new Promise(function(resolve, reject){
        stdin.addListener('data',function(value){
            //console.log(`Você digitou: ${value.toString().trim()}`)
            return resolve(value);
        })
    })
}

main().then(function(result){
    console.log("Resultado", result.toString())
})