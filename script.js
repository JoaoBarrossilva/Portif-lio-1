
const whatsappButton = document.getElementById('whatsappButton');
const whatsappNumber = document.getElementById('whatsappNumber');


whatsappButton.addEventListener('click', function() {
    
    if (whatsappNumber.style.display === 'block') {
        
        whatsappNumber.style.display = 'none';
    } else {
        
        whatsappNumber.style.display = 'block';
    }
    
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    
    const scrollPercent = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    
    const color = `hsl(${scrollPercent}, 100%, 50%)`;

   
    document.body.style.backgroundColor = color;
});

  function estaVisivel(elemento) {
    const posicao = elemento.getBoundingClientRect();
    return (
        posicao.top >= 0 &&
        posicao.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function mostrarTextos() {
    const textos = document.querySelectorAll('.texto-escondido');
    textos.forEach((texto) => {
        if (estaVisivel(texto)) {
            texto.classList.add('aparecer');
        }
    });
}

window.addEventListener('scroll', mostrarTextos);
mostrarTextos();

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      let textoElement = document.querySelector(".texto-aparecendo");
      let positionFromTop = textoElement.getBoundingClientRect().top;
  
      if (positionFromTop - window.innerHeight < 0) {
        textoElement.classList.add("aparecido");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      let textoElement = document.querySelector(".texto-aparecendo");
      let positionFromTop = textoElement.getBoundingClientRect().top;
  
      if (positionFromTop - window.innerHeight < 0) {
        textoElement.style.opacity = 1;
      }
    });
  });



 

 
  
    const botao = document.getElementById('botao');
    const hiddenText = document.getElementById('hiddenText');

    botao.addEventListener('click', function() {
      hiddenText.style.display = 'block'; // Mostra o texto ao clicar no botão
    });

  



