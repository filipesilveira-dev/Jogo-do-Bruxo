const numero1e100 = Math.floor(Math.random()*(100-1)+1)/*função para gerar números aleatórios. O Math.floor vai sempre arredondar os números para baixo, tornando todos inteiros (naturalmente o Math.random retorna um número decimal). O '+1' ao final aumenta o intervalo (amplitude), que seria de '0 à 99' para de '1 à 100'. A sintaxe para criar um número aleatório é:

Math.random()*(máx-mín)
*/
const obterElemento = (id) => document.getElementById(id);//função anônima para obter o elemento do id informado. Equivale à:
/*
function obterElemento (id){
    return document.getElementById(id)
}

Se for estabelecido que o id em questão é o 'chute', então ela retornará o que estiver no elemento com esse id

*/
const obterValorInformado = () => parseFloat(obterElemento('chute').value); // transforma o que for informado no elemento de id='chute' em número
const limparCampos = () => obterElemento('chute').value='';//estabelece o valor de 'chute' como vazio para limpar o campo
let tentativas = 10; // estabelece a quantidade inicial de tentativas
let jogoFinalizado = false //variável booleana para indicar o fim do jogo. Seja porque acertou, seja porque acabaram as tentativas

/*function fazerTentativa(){
    if(tentativas<=0 || jogoFinalizado){
        const gg = (`Você foi dibrado(a) pelo bruxo!! O número era o ${numero1e100}. Tente novamente clicando em Recomeçar`)
        dica.innerHTML = ''
        restent.innerHTML = gg
        restent.style.textAlign = 'center'
        console.log(gg)

        obterElemento('chute').disabled = true
        obterElemento('btchutar').disabled = true

        jogoFinalizado = true
        return false;
    }

    tentativas--;
    restent.innerHTML =`Tentativas restantes: ${tentativas}`

    //limparCampos()

    if(tentativas===1){
        const ultimaTentativa = ("Pense bem antes de chutar. É A ÚLTIMA TENTATIVA!!!")
        dica.innerHTML = ''
        restent.innerHTML = ultimaTentativa
        restent.style.textAlign = 'center'
        restent.style.marginTop = '5px'
        console.log(ultimaTentativa)
    }

    return true;//retornar com verdadeiro indica que pode continuar
}*/



function chutar(){
    
    console.log(tentativas) 
    
    //verifica se o jogo acabou antes de iniciar qualquer linha de código
    if(jogoFinalizado){
        alert("O jogo acabou! Clique em Recomeçar para jogar novamente.")
        return
    }
    
    /*if(!fazerTentativa()){
        return
    }*/

    /*if(tentativas===2){
        const ultimaTentativa = ("Pense bem antes de chutar. É A ÚLTIMA TENTATIVA!!!")
        dica.innerHTML = ''
        restent.innerHTML = ultimaTentativa
        restent.style.textAlign = 'center'
        restent.style.marginTop = '5px'
        console.log(ultimaTentativa)
    }*/
    
    const valorInformado = obterValorInformado();
    limparCampos()//função criada com o objetivo de limpar os dados inseridos
    chute.focus()//função criada para focar o cursor no elemento com id 'chute', evitando que o usuário precise sempre clicar novamente  
    
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
    
    //se as tetativas forem menor ou igaula à zero, então o jogo acaba
    if(tentativas<=0){
        const gg = (`Você foi dibrado(a) pelo bruxo!! O número era o ${numero1e100}. Tente novamente clicando em Recomeçar`)
        dica.innerHTML = ''
        restent.innerHTML = gg
        restent.style.textAlign = 'center'
        bruxo.src= "/imagens/r10_atento.png"
        console.log(gg)

        obterElemento('chute').disabled = true
        obterElemento('btchutar').disabled = true

        jogoFinalizado = true
        return;
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

        jogoFinalizado=true
        
        obterElemento('chute').disabled = true//desabilita o elemento de id 'chute'
        obterElemento('btchutar').disabled = true//desabilita o elemento de id 'btchutar'
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

     
    /*else if(tentativas===0 && valorInformado !=numero1e100){
        const gg = (`Você foi dibrado(a) pelo bruxo!! O número era o ${numero1e100}. Tente novamente clicando em Recomeçar`)
        dica.innerHTML = ''
        restent.innerHTML = gg
        restent.style.textAlign = 'center'
        console.log(gg)

        obterElemento('chute').disabled = true
        obterElemento('btchutar').disabled = true

        jogoFinalizado = true
        return false;
        console.log("Fim de jogo")
        }   */
    
    
}


//após verificar que o número é maior: diminuir uma tentativa. Após verificar que o número é menor: diminuir uma tentativa.
//talvez utilizar "||" para concentrar tudo em um if, representando caso seja maior e caso seja menor 
    
    /**/
    


function recomecar(){
    location.reload()
}

    
    

