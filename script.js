/*função para gerar números aleatórios. O Math.floor vai sempre arredondar os números para baixo, tornando todos inteiros (naturalmente o Math.random retorna um número decimal). O '+1' ao final aumenta o intervalo (amplitude), que seria de '0 à 99' para de '1 à 100'. A sintaxe para criar um número aleatório é:

Math.random()*(máx-mín)
*/
const numero1e100 = Math.floor(Math.random()*(100-1)+1)

/*função anônima para obter o elemento do id informado. Equivale à:

function obterElemento (id){
    return document.getElementById(id)
}

Se for estabelecido que o id em questão é o 'chute', então ela retornará o que estiver no elemento com esse id

*/
const obterElemento = (id) => document.getElementById(id);

/*transforma o que for informado no elemento de id='chute' em número. Equivale à:

function obterValorInformado(){
    return parseFloat(obterElemento('chute').value)
}

*/
const obterValorInformado = () => parseFloat(obterElemento('chute').value); 

/*estabelece o valor de 'chute' como vazio para limpar o campo. Equivale à:

function limparCampos(){
    return obterElemento('chute').value=''
}

*/
const limparCampos = () => obterElemento('chute').value='';

// estabelece a quantidade inicial de tentativas
let tentativas = 10; 

//variável booleana para indicar o fim do jogo. Seja porque acertou, seja porque acabaram as tentativas
let jogoFinalizado = false 

//havia uma função fazerTentativa() para controlar a quantidade de tentativas. A mesma foi desfeita e acrescentada à função chutar()

function chutar(){
    
    //para acompanhar a quantidade de tentativas restantes no console do navegador web
    console.log(tentativas) 
    
    //havia um verificador de se o jogo havia acabado. Não há a necessidade mais, pois, depois de acertar, o campo de input e o botão 'chutar' são desabilitados
       
    const valorInformado = obterValorInformado();

    //função criada com o objetivo de limpar os dados inseridos
    limparCampos()

    //função criada para focar o cursor no elemento com id 'chute', evitando que o usuário precise sempre clicar novamente 
    chute.focus() 
    
    //condicional caso seja digitado um valor inválido (menor ou igual à 0 OU maior que 100)
    if(valorInformado <=0 || valorInformado>100){
            alert("Errou. Foi muleque. O bruxo pensou num número entre 1 e 100.");
            return; // o "return" implica que nenhum passo é dado na função se o número for negativo
        }

    //pra conferir o número aleatório no console web
    console.log(numero1e100)   

    //acrescentar for?  
     
    //se o valor informado for diferente do número aleatório, tentativas decresce 1    
    if (valorInformado !== numero1e100) {        
        tentativas--;        
    }

    //atualiza as tentativas restantes
    if(tentativas>0){
        restent.innerHTML =`Tentativas restantes: ${tentativas}`
    }
    
    //se as tentativas forem menor ou igaula à zero, então o jogo acaba
    if(tentativas<=0){
        const gg = (`Você foi dibrado(a) pelo bruxo!! O número era o ${numero1e100}. Tente novamente clicando em Recomeçar`)
        dica.innerHTML = '' //esvazia o elemento com id='dica'
        restent.innerHTML = gg//mostra a variável 'gg' no elemento com id='restent'
        restent.style.textAlign = 'center'//centraliza o texto contido no elemento com id='restent'
        bruxo.src= "/imagens/r10_atento.png"//altera a fonte(src) da imagem contida no elemento com id='bruxo'
        console.log(gg)//para acompanhar pelo console web

        obterElemento('chute').disabled = true//desabilita o elemento com id='chute'
        obterElemento('btchutar').disabled = true//desabilita o elemento com id='btchutar'

        jogoFinalizado = true
        return;//encerra o programa imediatamente (retorna undefined) em caso de derrota. Utilizado para interropmper a função chutar
    }

    //dica se o valor informado for menor e dica se for maior
    if (valorInformado < numero1e100){
        const menor = ("Dica: valor informado menor que o escolhido pelo bruxo")
        dica.innerHTML = menor
        restent.style.marginBottom = '10px'
        console.log(menor)
        //diminuirTentativas()

    } else if (valorInformado > numero1e100){
        const maior = ("Dica: valor informado maior que o escolhido pelo bruxo")
        dica.innerHTML = maior
        restent.style.marginBottom = '10px'
        console.log(maior)
        //diminuirTentativas()
    } 
    
    if(valorInformado == numero1e100){
        const igual = (`Você descobriu que o segredo do bruxo é ${numero1e100}. Agora você virou o dibrador dos dibradores. Muito bem!!`)
        dica.innerHTML = ''
        restent.innerHTML = igual
        restent.style.textAlign = 'justify'
        bruxo.src= "/imagens/r10_explicando.png"
        console.log(igual)
                
        obterElemento('chute').disabled = true//desabilita o elemento de id 'chute'
        obterElemento('btchutar').disabled = true//desabilita o elemento de id 'btchutar'

        jogoFinalizado=true//consistência lógica do código
        return;//encerra chutar() em caso de vitória
    }
    
    //mensagem exibida alertando para última tentativa
    if(tentativas ==1){
        const ultimaTentativa = ("Pense bem antes de chutar. É A ÚLTIMA TENTATIVA!!!")
        //dica.innerHTML = ''
            if(valorInformado == numero1e100){//criada para não ficar mostrando 'ultimaTentativa' mesmo após o jogo terminar no console web
                return ultimaTentativa=''
            } else{
                restent.innerHTML = ultimaTentativa
                restent.style.textAlign = 'center'
                restent.style.marginTop = '5px'
                bruxo.src= "/imagens/r10_desafiando.png"
                //bruxo.style.transition = 'all 10s ease-in-out';
                //bruxo.style.transform = 'translateX(100px)'; --> desloca o elemento no eixo x

                console.log(ultimaTentativa)
            }
        
    }

    //se acertar na última tentativa, não está desabilitando chute e btchutar. Foi só ajeitar a linha 122 (obterElemento('chute').disabled = true//desabilita o elemento de id 'chute')    
         
}

/*
algo a se analisar seria a possibilidade de dividir o código em mais funções. Por exemplo:

finalizarJogoVitoria(): uma utilização quando ganhar
finalizarJogoDerrota(): duas utilizações quando perder
desabilitarEntradas(): duas utilização quando o joga acabar (vitória ou derrota)


*/
    
function recomecar(){
    location.reload()
}

    
    

