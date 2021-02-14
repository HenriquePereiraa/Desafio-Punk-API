document.addEventListener('DOMContentLoaded', () =>{
    
    var beerSingle = document.querySelectorAll('.beer-single')
    var beerImage = document.querySelectorAll('.beer-image')
    var beerInfo = document.querySelectorAll('.beer-info')


    for(let i = 0; i < beerSingle.length; i++)
    {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => response.json())
            .then(data => {

                var nome = data[0].name
                var descricao = data[0].description
                var img = data[0].image_url
                
            
                beerImage[i].style.cssText = 'background-image:url('+img+')';
                beerInfo[i].innerHTML += 'Nome: ' + nome + '<br><br>';
                beerInfo[i].innerHTML += 'Descrição: ' + descricao + '<br>';

                
        })
    }
    

    // TODO: terminar alerta e fazer pop-up 
    var button = document.querySelectorAll('.conhecer')
    console.log(button.length)
    for(let i = 0; i < button.length; i++){
        button[i].onclick = function(){
            Swal.fire({
                icon: 'error',
                title: 'Usuário não cadastrado',
                text: 'Faça seu cadastro e conheça mais!'
            })
        }
    }
    
    

})