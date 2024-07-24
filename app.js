//let titulo = document.querySelector('h1'); 
//titulo.innerHTML = 'Jogo do numero secreto.';

//let paragarafo = document.querySelector('p');
//paragarafo.innerHTML =  'Escolha um numero entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto.');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');    
}
exibirMensagemInicial();

function verificarChute (){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor.');
        }else{
            exibirTextoNaTela('p','O número secreto é maior.');
        }
        tentativas++;    
        limparCampo();   

    }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true)

}
/*
function exibirOla() {
    console.log('Olá mundo!');
}
exibirOla();

function exibirOlaNome(nome){
    console.log(`Ola ${nome}!`);
}
exibirOlaNome('Welington');

function numeroRetornaDobro(numero){
    return numero * 2;
}
let resultadoDobro = numeroRetornaDobro(5);
console.log(resultadoDobro);

function retornaMedia(a,b,c){
return (a+b+c) /3;
}
let media = retornaMedia(5,10,15);
console.log(media);

function retornaMaior(a,b){
    return a>b? a:b;
}
let maiorNumero = retornaMaior(5,10);
console.log(maiorNumero);

function numeroParametro(a){
    return a*a;
}
let resultadoMutiplicacao = numeroParametro(10);
console.log(resultadoMutiplicacao);

function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
  }
  
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
  
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 5.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);  
  
function mostrarTabuada(numeroT) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numeroT * i;
      console.log(`${numeroT} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numeroT = 7;
  mostrarTabuada(numeroT);  
  */