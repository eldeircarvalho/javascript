function contar(){
    var txi=document.querySelector('#txinicio')
    var res=document.querySelector('#res')
    if (txi==''){
        res.innerHTML='Impossível Contar!'
    }else{
        var i=Number(txi.value)
        var f=Number(document.querySelector('#txfim').value)
        var p=Number(document.querySelector('#txpasso').value)
        if (p==0){
            window.alert('Passo Inválido, considerando passo = 1')
            p=1
        }
        res.innerHTML='<p>Contando...</P>'
        while (i<=f){
            var num=document.createElement('span')
            num.innerHTML=` ${i} &#x1F449 `
            res.appendChild(num)
            i=i+p
        }
        var band=document.createElement('span')
        band.innerHTML=` &#x1F3C1`
        res.appendChild(band)
    
    }

}