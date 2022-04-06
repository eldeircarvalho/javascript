function gerar(){
    var n=Number(document.querySelector('#txn').value)
    var res=document.querySelector('#tabuada')
   for (cont=0;cont<=10;cont++){
        var m=n*cont
        //res.options[res.options.length] = new Option(`${n} x ${cont} = ${m}`,'cont') inseri novas linhas
        res.options[res.options.length] = new Option(`${n} x ${cont} = ${m}`)
       
      
        
        
                 
    }


}