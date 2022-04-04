    function carregar(){    
        var horas=new Date().getHours()
        var minutos=new Date().getMinutes()  
        var paragrafo = document.querySelector('p')
        var corpo=document.querySelector('body')
        paragrafo.innerHTML=`Agora são <strong>${horas}:${minutos}</strong> horas`
        if (horas>=6 && horas<9){
            corpo.style.backgroundColor='rgba(76, 76, 235, 0.596)'
            document.querySelector('div').innerHTML=`<img src="imagens/amanhecerq.jpg" alt="amanhecer">`
        }else if(horas>=9 && horas<17){
            document.querySelector('div').innerHTML=`<img src="imagens/diaq.jpg" alt="dia de sol">`
            corpo.style.backgroundColor='rgba(206, 206, 74, 0.623)'
        }else if (horas>=17 && horas<19){
            corpo.style.backgroundColor='rgba(206, 59, 14, 0.911)'
            document.querySelector('div').innerHTML=`<img src="imagens/entardecerq.jpg" alt="anoitecer">`
        }else {
            corpo.style.backgroundColor='rgba(8, 8, 8, 0.855)'
            document.querySelector('div').innerHTML=`<img src="imagens/noiteq.jpg" alt="anoitecer">`
        }
    }

    function janela(){
        var horas=window.prompt('Digite a hora:')
        var paragrafo = document.querySelector('p')
        var corpo=document.querySelector('body')
        paragrafo.innerHTML=`Agora são <strong>${horas}</strong> horas`
        if (horas>=6 && horas<9){
            corpo.style.backgroundColor='rgba(76, 76, 235, 0.596)'
            document.querySelector('div').innerHTML=`<img src="imagens/amanhecerq.jpg" alt="amanhecer">`
        }else if(horas>=9 && horas<17){
            document.querySelector('div').innerHTML=`<img src="imagens/diaq.jpg" alt="dia de sol">`
            corpo.style.backgroundColor='rgba(206, 206, 74, 0.623)'
        }else if (horas>=17 && horas<19){
            corpo.style.backgroundColor='rgba(206, 59, 14, 0.911)'
            document.querySelector('div').innerHTML=`<img src="imagens/entardecerq.jpg" alt="anoitecer">`
        }else {
            corpo.style.backgroundColor='rgba(8, 8, 8, 0.855)'
            document.querySelector('div').innerHTML=`<img src="imagens/noiteq.jpg" alt="anoitecer">`
        }
    }
    