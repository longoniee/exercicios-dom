 let clicar = document.getElementById('clicar')
 let contador = document.getElementById('contador')
 let zerrar = document.getElementById('excluir')
 
 let contagem = 0
 
 clicar.addEventListener('click',function(){
     contagem = contagem + 1
     contador.innerText = contagem
 })
 zerrar.addEventListener('click',function(){
    contagem = 0
    contador.innerText = contagem
}) 