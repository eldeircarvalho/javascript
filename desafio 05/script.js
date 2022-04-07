var lista=[]
function adicionar(){
    
    var n=Number(document.querySelector('#txn').value)
    if (n=='' || n<1 || n>100){
        window.alert('Por favor, digite um número entre 1 e 100')
    }else{
        var pos=lista.indexOf(n)
        if (pos==-1){
            lista.push(n)
            var res=document.querySelector('#res')
            res.innerHTML=''
            var posf=lista.indexOf(n)
            var selecao=document.querySelector('#arrayn')
            var item=document.createElement('option')
            item.text =`valor ${lista[posf]} adicionado`
            item.value= `v${posf}`
            selecao.appendChild(item)
        }else{
            window.alert('Este número ja existe, favor digitar outro número.')
        }   
    }
    txn.value=''
    txn.focus() 
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
        var res=document.querySelector('#res')
        res.innerHTML=''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>
        <p>O maior valor informado foi: ${maior(lista)}.</p>
        <p>O menor valor informado foi: ${menor(lista)}.</p>
        <p>Somando todos os valores temos: ${somar(lista)}.</p>
        <p>A média dos valores digitados é ${(somar(lista)/lista.length).toFixed(2).replace('.',',')}.</p>`
   }
   
    
   
  /*  
    res.innerHTML += `<p>O maior valor informado foi ${maior(lista)}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor(lista)}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${somar(lista)}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media(lista)}.</p>`
*/
}


