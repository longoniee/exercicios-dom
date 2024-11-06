let mensagem = document.getElementById('mensagem')
 let exibir = document.getElementById('exibir')
 let ocultar = document.getElementById('ocultar')
 mensagem.style.display = 'none'
 

 exibir.addEventListener('click', function(){
     mensagem.style.display = 'inline'
 })
 ocultar.addEventListener('click', function(){
     mensagem.style.display = 'none'
 })