
// console.log('carregando')

// setTimeout(function() {
//     console.log('pronto')
// }, 2000)


// let numero = 10

// const contador = setInterval(function() {
//     console.log(numero)

//     numero--

//     if(numero < 0) {
//         clearInterval(contador)
//     }
// },1000)

// const botao = document.querySelector('.Enviar')

// botao.addEventListener('click', function() {
//     console.log('enviar')
//     setTimeout(function() {
//         console.log('mensagem removida')
//     }, 5000)
// })


// console.log('iniciando..')

// let timer = setTimeout(function() {
//     console.log('finalizado')
// },4000)

// let fila = setTimeout(function() {
//     console.log('você demorou')
// }, 5000)

// clearTimeout(fila)

// let rodagem = setInterval(function(){
//     console.log('estou rodando..')
// })

// clearInterval(rodagem)

// let contagem = 0

// let contador = setInterval(function(){
//     if (contagem < 6) {
//         contagem++
//         clearInterval(contagem)
//     }
//     console.log(contagem)
// }, 1000)


// let segundaContagem = 10

// let segundoContador = setInterval(function() {
//     console.log(segundaContagem)
//     if (segundaContagem > 0) {
//         segundaContagem--
//         console.log(segundaContagem)
//     }
//     clearInterval(segundaContagem)
// }, 1000)

// console.log('verde')

// setTimeout(function(){
//     console.log('amarelo')
// }, 3000)

// setTimeout(function(){
//     console.log('vermelho')
// }, 5000)


// let cronometro = 0

// let timer = setInterval(function(){
//     cronometro++
//     console.log(cronometro)

//     if (cronometro === 5) {
//         console.log('cronometro encerrado')
//         clearInterval(timer)
//     }
// }, 1000)


// let bomba = 5

// let timer = setInterval(function(){
//     console.log(bomba)
//     bomba--
    
//     if (bomba === 0) {
//         console.log('boom')
//         clearInterval(timer)
//     }
// }, 1000)


// const botao = document.querySelector('.desarmar')

// botao.addEventListener('click',function(){
//     clearTimeout(bomba)
//     console.log('bomba desarmada')
// })

// const bomba = setTimeout(function(){
//     console.log('boom')
// },5000)

// let numero = 0

// const timer = setInterval(function(){
//     console.log(numero)
    
//     if (numero === 10) {
//         clearInterval(timer)
//         console.log('fim')
//     }
//     numero += 2
// }, 1000)

// let numero = 1

// const timer = setInterval(function(){
//     console.log(numero)

//     if (numero === 9) {
//         clearInterval(timer)
//         console.log('fim')
//     }

//     numero += 2
// }, 1000)


// let numero = 5

// const timer = setInterval(function(){
//     console.log(numero)

//     if (numero === 30) {
//         clearInterval(timer)
//         console.log('encerrado')
//     }

//     numero += 5
// }, 1000)


// console.log('ligado')

// const timer = setInterval(function(){

//     const timer2 = setInterval(function(){
//         console.log('desligado')
//         clearInterval(timer2)

//         const timer3 = setInterval(function(){
//             console.log('ligado')
//             clearInterval(timer3)

//             const timer4 = setInterval(function(){
//                 console.log('desligado')
//                 clearInterval(timer4)

//                 const timer5 = setInterval(function(){
//                     console.log('ligado')
//                     clearInterval(timer5)

//                     const timer6 = setInterval(function(){
//                         console.log('desligado')
//                         clearInterval(timer6)
//                     },1000)
//                 },1000)
//             }, 1000)
//         }, 1000)

//     }, 1000)


//     clearInterval(timer)
// },1000)


// let contador = 10

// const timer = setInterval(function(){
//     console.log(contador)

//     if (contador === 1) {
//         clearInterval(timer)
//         console.log('tempo esgotado')
//     }

//     contador--
// },1000)


// let timer

// const botao = document.querySelector('.iniciar')

// botao.addEventListener('click',function(){
//     let numero = 1
//     clearInterval(timer)


//     timer = setInterval(function(){
//         console.log(numero)

//         if (numero === 5) {
//             clearInterval(timer)
//             console.log('fim')
//         }

//         numero += 1
//     },1000)
// })


// const botaoIniciar = document.querySelector('.iniciar')
// const botaoParar = document.querySelector('.parar')

// let timer
// let numero = 0

// botaoParar.addEventListener('click',function(){
//     clearInterval(timer)
// })

// botaoIniciar.addEventListener('click',function(){
//     clearInterval(timer)
//     timer = setInterval(function(){
//         console.log(numero)
//         numero++
//     }, 1000)
// })


let rodando = false
let timer
let numero = 0

const botaoIniciar = document.querySelector('.iniciar')

botaoIniciar.addEventListener('click',function(){
    if (rodando === false) {
        rodando = true
        timer = setInterval(function(){
            console.log(numero)
            numero++
        },1000)
    } else if (rodando === true) {
        rodando = false
        clearInterval(timer)
    }
})












