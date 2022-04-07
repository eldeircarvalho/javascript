let txnum=document.querySelector('#txn')
let valores=document.querySelector('#slista')
let res=document.querySelector('#res')
let lista=[]

function adicionar(){
    function isNumero(n){
        if (Number(n)>=1 && Number(n)<=100){
            return true
        }else{
            return false
        }
    }
    function inLista(n,l){
        if (l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }
    
    if (isNumero(txnum.value) && !inLista(txnum.value, lista)) {
        let n=Number(txnum.value)
        lista.push(n)
        res.innerHTML=''
        let posn=lista.indexOf(n)
        var item=document.createElement('option')
        item.text =`valor ${lista[posn]} adicionado`
        item.value= `v${posn}`
        valores.appendChild(item)
        
    }else{
       window.alert('Valor inválido ou já está na lista!')
    }
    txnum.value='' 
    txnum.focus()
}



function finalizar(){

    function maior(lista){
        var maior=lista[0]
            for (var cont=0; cont<lista.length; cont++ ){ 
                if (lista[cont]>maior){
                    maior=lista[cont]
                }
            }
        return maior
    }
    function menor(lista){
        var menor=lista[0]
            for(var cont=0; cont<lista.length; cont++){
                if (lista[cont]<menor){
                    menor=lista[cont]
                }
            }
        return menor    
    }
    function somar(lista){
        var soma=0
        for(var cont=0; cont<lista.length; cont++){
            soma += lista[cont]
        }
        return soma
    }

   if (lista.length==0){
       window.alert('Lista vazia, adicione os números antes de finalizar!')
    }else{
        res.innerHTML=''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior(lista)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor(lista)}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somar(lista)}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${(somar(lista)/lista.length).toFixed(2).replace('.',',')}.</p>`
    }
   
}


