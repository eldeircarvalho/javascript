function gerar(){
    var num=document.querySelector('#txn')
    const res=document.querySelector('#tabuada') //como o elemento não muda é uma constante
    if (num.value.length=='') {
        window.alert('ERRO, digite um número')
    }
    else {
        var n=Number(num.value) //pode-se usar let no lugar de var
        res.innerHTML=''
        for (cont=1;cont<=10;cont++){
            res.options[res.options.length] = new Option(`${n} x ${cont} = ${n*cont}`,`tab${cont}`) //inseri novas linhas
          //  var item = document.createElement('option')
           // item.text = `${n} x ${cont} = ${n*cont}`
          //  item.value = `tab${cont}`
          //  res.appendChild(item)
                        
         }
    }
}