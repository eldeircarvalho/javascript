function verificar(){
    var txano=document.querySelector('#ano')
    var ano=Number(txano.value)
    var anoatual=new Date().getFullYear()
    var res=document.querySelector('#res')
    if (ano>anoatual || ano==0 || ano<1900){
        window.alert('Ano inválido, tente novamente')
        document.querySelector('#ano').value=''
        res.innerHTML=`Preencha os dados acima para ver o resultado`
        res.style.textAlign='left'
       
    } else{
        var idade=anoatual-ano    
        var sexom=document.getElementsByName('radio')[0]
        var sexof=document.getElementsByName('radio')[1]
        var foto=document.createElement('img')//cria um img 
        foto.setAttribute('id', 'foto')
       
        var genero=''
        if(idade<=2) {
            genero='Bebê'
            foto.setAttribute('src', 'imagens/bebe.jpg')
            
        }else if(idade<=15){
            if (sexom.checked==true){
                genero='Menino'
                foto.setAttribute('src', 'imagens/menino.jpg')

            }else{
                genero='Menina'
                foto.setAttribute('src', 'imagens/menina.jpg')
            }
        }else if(idade<=25){
            if (sexom.checked==true){
                genero='Rapaz'
                foto.setAttribute('src', 'imagens/rapaz.jpg')
            }else{
                genero='Moça'
                foto.setAttribute('src', 'imagens/moca.jpg')
            }
        }else if (idade<=60){
            if (sexom.checked){
                genero='Homem'
                foto.setAttribute('src', 'imagens/homem.jpg')
            }else{
                genero='Mulher'
                foto.setAttribute('src', 'imagens/mulher.jpg')
            }
        }else if (idade>60){
            if (sexom.checked==true){
                genero='Senhor'
                foto.setAttribute('src', 'imagens/idoso.jpg')
            }else{
                genero='Senhora'
                foto.setAttribute('src', 'imagens/idosa.jpg')
            }   
        } 
        res.style.textAlign='center'
        res.innerHTML=`<p>Detectamos ${genero} com ${idade} anos.</p>`
        foto.style.borderRadius='50%'
        res.appendChild(foto)//inseri o img foto 
           
    }
}