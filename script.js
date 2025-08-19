function verificar() {
   let data = new Date()
   let ano = data.getFullYear()
   let fano= document.getElementById('txtano') // para poder chamar o formulário
   let res = document.querySelector('div#res') //para chamar a Id de resposta, 
   // essa forma é mais moderna
   
   if (fano.value.length == 0 ||  Number(fano.value) > ano)  {
        alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
       let fsex = document.getElementsByName('radsex')
       let idade = ano - Number(fano.value)
       let gênero = ''
       let img = document.createElement('img') //para criar uma tag img para mim
       img.setAttribute('id', 'foto') // é a mesma coisa de eu ir lá na div e criar uma tag chamada img com id "foto"

        
       img.setAttribute('width', '240');  // Definindo o tamanho da imagem
       img.setAttribute('height', '240');
       if (fsex[0].checked) {
        gênero = 'Homem'
        if(idade >=0 && idade < 15) {
            //criança
            img.setAttribute('src', 'criança.menino.jpg')
        } else if (idade< 30){
            //Jovem
            img.setAttribute('src', 'homem.jovem.jpg')
        } else if (idade<50) {
            //Adulto
            img.setAttribute('src', 'homem.adulto.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'homem.idoso.jpg')
        }
       } else if (fsex[1].checked) {
         gênero = 'Mulher'
         if(idade >=0 && idade < 15) {
            //criança
            img.setAttribute('src','criança.menina.jpg')
        } else if (idade< 30){
            //Jovem
            img.setAttribute('src', 'mulher.jovem.jpg')
        } else if (idade<50) {
            //Adulto
            img.setAttribute('src', 'mulher.adulta.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'mulher.idosa.jpg')
        }
       }
       res.style.textAlign = 'center' // para centralizar um texto usando JS
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img) //adicionar um elemento, no nosso caso a imagem
   }          
}