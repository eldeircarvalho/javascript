function verificar(){
    var txano=document.querySelector('#ano')
    var ano=Number(txano.value)
    var anoatual=new Date().getFullYear()
    var idade=anoatual-ano    
    var sexom=document.getElementsByName('radio')[0]
    var sexof=document.getElementsByName('radio')[1]
    var foto=document.querySelector('#foto')
    if (ano>anoatual || ano==0 || ano<1900){
        window.alert('Ano inválido, tente novamente')
        document.querySelector('#ano').value=''
        document.getElementById('centro').style.height='150px'
        document.querySelector('#idade').innerHTML=`Preencha os dados acima para ver o resultado`
        document.getElementsByTagName('div')[0].style.textAlign='left'
        foto.style.visibility='hidden'
    } else{
        document.getElementById('centro').style.height='400px'
        document.getElementsByTagName('div')[0].style.textAlign='center'
        foto.style.visibility='visible'
        if(idade<=2) {
            document.querySelector('#idade').innerHTML=`Detectamos Bebê com ${idade} anos`
            foto.src='imagens/bebe.jpg'
        }else if(sexom.checked==true && idade>2 && idade<=15){
            document.querySelector('#idade').innerHTML=`Detectamos Menino com ${idade} anos`
            foto.src='imagens/menino.jpg'
        }else if (sexom.checked==true && idade>15 && idade<=25){
            document.querySelector('#idade').innerHTML=`Detectamos Rapaz com ${idade} anos`
            foto.src='imagens/rapaz.jpg'
        }else if (sexom.checked==true && idade>25 && idade<=60){
            document.querySelector('#idade').innerHTML=`Detectamos Homem com ${idade} anos`
            foto.src='imagens/homem.jpg'
        }else if (sexom.checked==true && idade>60){
            document.querySelector('#idade').innerHTML=`Detectamos Idoso com ${idade} anos`
            foto.src='imagens/idoso.jpg'
        }else if(sexof.checked==true && idade>2 && idade<=15){
            document.querySelector('#idade').innerHTML=`Detectamos Menina com ${idade} anos`
            foto.src='imagens/menina.jpg'
        }else if (sexof.checked==true && idade>15 && idade<=25){
            document.querySelector('#idade').innerHTML=`Detectamos Moça com ${idade} anos`
            foto.src='imagens/moca.jpg'
        }else if (sexof.checked==true && idade>25 && idade<=60){
            document.querySelector('#idade').innerHTML=`Detectamos Mulher com ${idade} anos`
            foto.src='imagens/mulher.jpg'
        }else if (sexof.checked==true && idade>60){
            document.querySelector('#idade').innerHTML=`Detectamos Idosa com ${idade} anos`
            foto.src='imagens/idosa.jpg'
        }
    }
}