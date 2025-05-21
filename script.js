window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('rolado');
  } else {
    header.classList.remove('rolado');
  }
});

const usuario = document.getElementById("usuario");
const dropdown = document.getElementById("dropdownMenu");

usuario.addEventListener("click", function (e) {
    e.stopPropagation(); // pra não fechar imediatamente
    dropdown.classList.toggle("active");
    usuario.classList.toggle("active");
});

// fecha o menu se clicar fora
document.addEventListener("click", function () {
    dropdown.classList.remove("active");
    usuario.classList.remove("active");
});


let posicoes = {
  carrossel1: 0,
  carrossel2: 0,
  carrossel3: 0,
  carrossel4: 0
};

function moverCarrossel(direcao, idCarrossel) {
  const carrossel = document.getElementById(idCarrossel);
  const cards = carrossel.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 5;
  const cardsPorPagina = 6;
  const totalCards = cards.length;
  const maxPaginas = Math.ceil(totalCards / cardsPorPagina);

  // Atualiza a posição
  posicoes[idCarrossel] += direcao;

  // Se passou do fim, volta pro início
  if (posicoes[idCarrossel] >= maxPaginas) {
    posicoes[idCarrossel] = 0;
  }

  // Se voltou antes do início, vai pro fim
  if (posicoes[idCarrossel] < 0) {
    posicoes[idCarrossel] = maxPaginas - 1;
  }

  const deslocamento = -posicoes[idCarrossel] * cardWidth * cardsPorPagina;
  carrossel.style.transform = `translateX(${deslocamento}px)`;
}



const toggleBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

