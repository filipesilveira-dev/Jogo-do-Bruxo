const numero1e100 = Math.floor(Math.random()*(100-1)+1)
const obterElemento = (id) => document.getElementById(id);
const obterValorInformado = () => parseFloat(obterElemento('chute').value); 
const limparCampos = () => obterElemento('chute').value='';
//const tentativas = 10;

function chutar(){

    const valorInformado = obterValorInformado();
    limparCampos()//função criada com o objetivo de limpar os dados inseridos
    chute.focus()//função criada para focar o cursor no elemento com id 'chute', evitando que o usuário precise sempre clicar novamente  
    
    if(valorInformado <=0 || valorInformado>100){
            alert("Valor inválido. O número deve ser entre 1 e 100.");
            return; // o "return" implica que nenhum passo é dado na função se o número for negativo
        }

    console.log(numero1e100)//pra conferir o número aleatório no console web   

    //acrescentar for?
    
    for(let tentativas = 10; tentativas>=0; tentativas--){
    //console.log(verificar())
    console.log(tentativas)  
    if(tentativas == 8){
        return console.log("fim de jogo")
    }  
    
    
}
//após verificar que o número é maior: diminuir uma tentativa. Após verificar que o número é menor: diminuir uma tentativa.
//talvez utilizar "||" para concentrar tudo em um if, representando caso seja maior e caso seja menor 
    
    /*for(let tentativas = 10; tentativas>0; tentativas--){
        console.log(tentativas)

        if(tentativas != 0){
            if(valorInformado == numero1e100){
                const igual = ("Muito bem!!")
                dica.innerHTML = ''
                restent.innerHTML = igual
                restent.style.textAlign = 'center'
                return console.log(igual)
            } else if (valorInformado < numero1e100){
                const menor = ("Dica: valor informado menor que número aleatório")
                dica.innerHTML = menor
                return console.log(menor)
            } else if (valorInformado > numero1e100){
                const maior = ("Dica: valor informado maior que número aleatório")
                dica.innerHTML = maior
                return console.log(maior)
            }
        } else{
            console.log("Fim de jogo")
        }
    }*/
    
}

function recomecar(){
    location.reload()
}
/*
function chutar(){

const palpite = document.getElementById("chute").value
const chute =  10//Number(palpite)
   
    if(palpite == numero1e100){
        console.log("Muito bem!")
    } else{
        for(const c = 10; c>=1; c--){
        console.log(`Tente novamente. O número era ${numero1e100}`)
        console.log(`Restam ${c} tentativa(s)`)
        //comparacao()
        }
    }
    
    
}
*/



