// function cadastrarUsuario(nome, callback) {
//     console.log('Cadastrando ' + nome + '...')

//     setTimeout(function(){
//         callback(nome)
//     }, 2000)
// }


// function retornoCadastro(nome) {
//     console.log('Usuário ' + nome + ' cadastrado')
// }

// cadastrarUsuario('Pedro', retornoCadastro)


// function comprar(produto, callback) {
//     console.log(`comprando ${produto}...`)

//     setTimeout(function(){
//         callback(produto)
//     },3000)
// }

// function retornoCompra(produto) {
//     console.log(`compra finalizada: ${produto}`)
// }

// comprar('Notebook', retornoCompra)


// function login(usuario, senha, callback) {
//     console.log('verificando usuario...')
    
//     setTimeout(function(){
//         callback(true)
//     },2000)
// }


// function retornoLogin(usuario, senha) {
//     if (usuario === usuario && senha === senha) {
//         console.log('login realizado com sucesso')
//     } else {
//         console.log('usuario ou senha inválidos')
//     }
// }

// login('carlos', '1234', retornoLogin)


// function buscarFilme(callback) {
//     setTimeout(function(){
//         callback({
//             titulo: 'Interestelar',
//             ano : 2014,
//             nota: 8.7
//         })
//     },2000)
// }

// function retornoFilme(nome) {
//     console.log(nome.titulo)
//     console.log(nome.ano)
//     console.log(nome.nota)
// }

// buscarFilme(retornoFilme)


// function fazerPedido(produto, quantidade, callback) {
//     setTimeout(function(){
//         callback({
//             produto: 'pizza',
//             quantiadade: 2
//         })
//     },2000)
// }

// function retornoPedido(nome) {
//     console.log(nome.produto)
//     console.log(nome.quantiadade)
// }

// fazerPedido(retornoPedido)


// function multiplicar(a,b, callback) {
//     let op = a * b
//     callback(op)
// }

// function retornoMultiplicar(op) {
//     console.log(op)
// }


// function triplo(op) {
//     console.log('o triplo é ' + op * 3)
// }

// multiplicar(20,30, triplo)

// let numero = 5
// let timer

// function contagem(callback) {
//     timer = setInterval(function(){
//         console.log(numero)
//         if (numero === 1) {
//             console.log('lançamento autorizado')
//         }
//         numero--
//     }, 1000)
// }

// function enviarMensagem(texto, callback) {
//     console.log('enviando mensagem...')

//     setTimeout(function(){
//         callback(texto)
//     },2000)
// }

// function retornoMensagem(texto) {
//     console.log(`mensagem enviada: ${texto}`)
// }

// enviarMensagem('olá mundo', retornoMensagem)


// function enviarSMS(numero, mensagem, callback) {
//     console.log(`enviando SMS para ${numero}`)

//     setTimeout(function(){
//         callback({
//             numero: numero,
//             mensagem: mensagem
//         })
//     },2000)
// }

// function retornoSMS(dados) {
//     console.log(`mensagem  '${mensagem}' enviada para ${numero}`)
// }

// enviarSMS(4299946-4590, 'boa noite', retornoSMS)

// function buscarFuncionario(callback) {
//     setTimeout(function(){
//         callback({
//             nome: nome,
//             cargo: cargo,
//             salário, salario
//         })
//     },2000)
// }

// function retornoBuscar(dados) {
//     console.log(dados.nome)
//     console.log(dados.cargo)
//     console.log(dados.salario)
// }

// buscarFuncionario(retornoBuscar)


// function calcularDesconto(valor, callback) {
//     console.log('calculando desconto...')
//     setTimeout(function(){
//         callback(valor)
//     },2000)
// }

// function retornoCalcular(dadosDesconto) {
//     console.log(`valor original: ${valor}`)
//     console.log(`valor com desconto ${valor * 0.9}`)
// }

// calcularDesconto(200, retornoCalcular)

// let timer
// let numero = 3

// function contagemRegressiva(callback) {
//     timer = setInterval(function(){
//         console.log(numero) 
//         if (numero === 1) {
//             clearInterval(timer)
//             console.log('fogo!')
//         }
//         numero--
//     },1000)
// }

// function dobrar(numero, callback) {
//     callback(numero)
// }

// function retornoDobrar(retorno) {
//     let dobro = retorno * 2
//     console.log(`dobro : ${dobro}`)
// }

// dobrar(40, retornoDobrar)

// function calcularArea(base, altura, callback) {
//     let calculado = base * altura   
//     callback(calculado)
// }

// function retornoArea(calculado) {
//     console.log(`area: ${calculado}`)
// }

// calcularArea(10, 20, retornoArea)

// function buscarCidade(callback) {
//     setTimeout(function(){
//         callback({
//             cidade: 'curitiba',
//             estado: 'paraná'
//         })
//     },2000)
// }

// function retornoCidade(dados) {
//     console.log(dados.cidade)
//     console.log(dados.estado)
// }

// buscarCidade(retornoCidade)


function verificarNumero(numero, callback) {
    if (numero % 2 === 0) {
        callback(true)
    } else {
        callback(false)
    }
}

function retornoNumero(par) {
    if (par) {
        console.log('numero par')
    } else {
        console.log('numero impar')
    }   
}

verificarNumero(4, retornoNumero)

// function buscarProduto(callback) {
//     setTimeout(function(){
//         callback({
//             nome: 'teclado',
//             preco: 180,
//             estoque: 12
//         })
//     },2000)
// }

// function retornoProduto(dados) {
//     console.log(dados.nome)
//     console.log(dados.preco)
//     console.log(dados.estoque)
// }

// buscarProduto(retornoProduto)

