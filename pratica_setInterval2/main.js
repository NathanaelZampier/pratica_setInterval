// let segundos = 0
// let minutos = 0

// const timer = setInterval(function(){
//     console.log(minutos + ':' + segundos)

//     if (segundos === 60) {
//         segundos = 0
//         minutos++
//     }
//     segundos++

// }, 1000)

// let contador = 0

// let timer;

// timer = setTimeout(function(){
//     contador++
    
//     if (contador === 5) {
//         console.log(contador)
//         clearTimeout(timer)
//     }
// },1000)


// let tempo = 5
// let timer;

// timer = setInterval(function(){
//     console.log(tempo + ' segundos restantes')

//     if (tempo === 1) {
//         clearInterval(timer)
//         console.log('tempo encerrado')
//     }
//     tempo--
// },1000)


// let contador = 0
// let timer;
// let timer2;

// timer = setInterval(function(){
//     contador++

//     timer2 = setInterval(function(){
//         contador++
//         if (contador === 5) {
//             clearInterval(timer2)
//         }
//         console.log(contador)
//     } , 5000)

//     if (contador === 3) {
//         clearInterval(timer)
//     }
//     console.log(contador)
// }, 1000)


// const botao = document.querySelector('.dowload')
// let rodando = false;
// let timer;


// botao.addEventListener('click',function(){
//     if (rodando === false) {
//         rodando = true
//         console.log('iniciando dowload')
//         timer = setTimeout(function(){
//         console.log('dowload iniciado')
//     },3000)
//     } else if (rodando === true) {
//         rodando = false
//         clearTimeout(timer)
//         console.log('dowload cancelado')
//     }
// })


// function saudacao() {
//     console.log('olá')
// }


// function executar(saudacao) {
//     console.log('iniciando')

//     saudacao()

//     console.log('finalizando')
// }

// executar(saudacao)


// function entrada() {
//     console.log('Seja bem-vindo')
// }

// function saudacao(entrada) {
//     console.log('bom dia')

//     entrada()
// }

// saudacao(entrada)

// function processandoPedido() {
//     console.log('entregando pedido')
// }

// function pedido(processandoPedido) {
//     console.log('processando pedido...')
//     setTimeout(function(){
//         console.log('pedido pronto')
//     },1000)
//     setTimeout(function(){
//         processandoPedido()
//     },2000)

    
// }

// pedido(processandoPedido)


// numero1 = 5
// numero2 = 8

// function resultadoSoma(numero1, numero2) {
//     numero1 + numero2
// }

// function calcular(numero1, numero2, resultadoSoma) {
//     console.log(resultadoSoma)
// }

// calcular(10,20, function(resultadoSoma));

// function boasVindas() {
//     console.log('bem-vindo ao sistema!')
// }

// function verificarLogin(boasVindas) {
//     console.log('verificando credencias')

//     setTimeout(function(){
//         console.log('login aprovado')

//         boasVindas()
//     },2000)
// }

// verificarLogin(boasVindas) // mas se eu fizer assim verificarLogin() não reconhece boasVindas como uma função, pq?


// function servir() {
//     console.log('pode servir')
// }

// function prepararCafe(servir) {
//     console.log('esquentando agua')

//     setTimeout(function(){
//         console.log('café pronto')
//         servir()
//     },2000)
// }

// prepararCafe(servir)


// let a = 0
// let b = 0

// function resultado() {
//     a * b
// }

// function multiplicar(a,b, resultado) {
//     console.log('resultado')
// }


// multiplicar(10,20, resultado())

// let timer;
// let numero = 5

// function startMission() {
//     console.log('missão iniciada')
// }

// function contagem(startMission) {
//     timer = setInterval(function(){
//         console.log(numero)
//         if (numero === 1) {
//             console.log('lançamento!')
//             clearInterval(timer)
//             startMission()
//         }
//         numero--
//     },1000)
// }

// contagem(startMission)

// function contagem() {
//     console.log('corredores largaram')
// }

// function corrida(contagem) {
//     console.log('preparar....')

//     setTimeout(function(){
//         console.log('apontar...')

//         setTimeout(function(){
//             console.log('já...')

//             contagem()
//         },1000)
//     },1000)
// }

// corrida(contagem)


// let resultado = 0
// let a = 0
// let b = 0

// function esperarEsomar(a,b, resultado) {
//     setTimeout(function(){
//         resultado = a + b
//         console.log(resultado)
//     }, 2000)
// }

// esperarEsomar(10, 20, resultado)


// function feedback() {
//     console.log('saiu para entrega')
// }


// function processarPedido(feedback) {
//     console.log('recebendo pedido...')

//     setTimeout(function(){
//         console.log('preparando pedido...')

//         setTimeout(function(){
//             console.log('pedido pronto!')
//             feedback()
//         },2000)
//     },2000)
// }

// processarPedido(feedback)

// function apresentar(nome) {
//     console.log('olá  joão') 
// }

// apresentar('joão')

// apresentar('Maria');

// function dobro(numero) {
//     console.log(numero * 2)
// }

// dobro(8)

// function executar(funcao) {

// }

// function ola() {
//     console.log('Olá!')
// }

// executar(ola)

// function executar1(funcao, nome) {

// }

// function cumprimentar(nome) {
//     console.log('Olá ' + nome)
// }

// executar1(cumprimentar, 'pedro')

// let nome

// function mostrarNome(nome) {
//     console.log('olá ' + nome)
// }


// mostrarNome('joao')

// let a = 0
// let b = 0

// function somar(a,b) {
//     console.log(a + b)
// }

// somar(30,50)


// function dizOi() {
//     console.log('olá')
// }

// function executar(dizOi) {
//     dizOi()
// }

// function mensagem() {
//     console.log('executando...')
// }

// executar(mensagem)

// funcao = function cumprimentar() {
//     console.log('ola ' + nome)
// }


// function executar(funcao, nome) {
//     cumprimentar()
// }

// executar(cumprimentar(), 'joao')


// function calcular(a,b, callback) {
//     callback = a + b
//     console.log('resultado: ' + callback)
// }

// calcular(10,20)

// let nome = 0

// function encontrarUsuario(nome) {
//     console.log('usuario encontrado:' + nome)
// }

// function buscarUsuario(encontrarUsuario, nome) {
//     console.log(nome)

//     setTimeout(function(){
//         encontrarUsuario()
//     },2000)
// }

// buscarUsuario(encontrarUsuario(), 'joao')


// function dados() {
//     let nome = 'pedro';
//     let idade = 25;

//     console.log(nome + ' tem ' + idade + ' anos')
// }

// function processar(dados) {
//     dados()
// }

// processar(dados)

// function executar(funcao) {

// }

// function falar(nome) {
//     console.log(nome)
// }

// nome = 'pedro'

// executar(falar)

// function calcular(a,b, callback) [
//     let resultado = a + b
//     callback(resultado)
// ]


// function fazerPizza(sabor, callback) {
//     console.log(`fazendo pizza sabor ${sabor}...`);
//     setTimeout(function(){
//         callback()
//     },1500)
// }

// function pizzaPronta() {
//     console.log('a pizza está pronta, bom apeitite')
// }

// fazerPizza('calabresa', pizzaPronta)


// function enviarEmail(destinatario, callback) {
//     console.log('enviando seu email para ' + destinatario) 
//     setTimeout(function(){
//         callback()
//     },2000)
// }

// function feedbackEmail() {
//     console.log('Email enviado com sucesso')
// }

// enviarEmail('joão', feedbackEmail)

// function baixarArquivo(nome, callback) {
//     console.log('Baixando relatório.pdf...')
//     setTimeout(function(){
//         callback()
//     },3000)
// }

// function feedbackDowload() {
//     console.log('Download concluído')
// }

// baixarArquivo('roberto', feedbackDowload)


// function prepararPedido(produto, callback) {
//     console.log('preparando ' + produto + ' ...')
//     setTimeout(function(){
//         callback(produto)
//     },2000)
// }

// function retornoPedido(produto) {
//     console.log('pedido pronto: ' + produto)
// }

// prepararPedido('hotdog', retornoPedido)




// function somar(a,b, callback) {
//     let op = a + b
//     callback(op)
// }


// function retornoSomar(resultado) {
//     console.log('resultado: ' + resultado)
// }

// somar(10,20, retornoSomar)


// let pratoServido = 'macarrão'

// function cozinhar(callback){
//     setTimeout(function(){
//         callback()
//     }, 2000)
// }


// function retornoCozinha() {
//     console.log('prato servido: ' + pratoServido )
// }


// cozinhar(retornoCozinha)

// function imprimir(nome) {
//     console.log(nome)
// }

// function executar(callback) {
//     console.log(nome)
// }

// executar(imprimir('joao'))


// function somar(a,b, callback) {
//     op = a + b
//     callback(op)
// }

// function mostrar(resultado) {
//     console.log('resultado é : ' + resultado)
// }

// somar(20, 20, mostrar)

// function cozinhar(callback) {
//     console.log('preparando')
//     setTimeout(function(){
//         callback('pizza')
//     },2000)
// }

// function retornoCozinhar(produto) {
//     console.log('servindo ' + produto)
// }

// cozinhar(retornoCozinhar)

function buscar(callback) {
    setTimeout(function(){
        callback({
            nome: 'joao',
            idade: 18
        })
    },2000)
}

function retornoBuscar(usuario) {
    console.log(usuario.nome)
    console.log(usuario.idade)
}

buscar(retornoBuscar)