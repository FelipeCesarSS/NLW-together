/* Abre e fecha o menu quando clicar no icone */
const nav = document.querySelector('#header nav')
/* procure pelo seletor #header nav e coloque ele na constante nav */
const toggle = document.querySelectorAll('nav .toggle')
/* procure pelo seletor nav e dentro do nav pegue todos(All) os .toggle*/

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    /*traduzindo tem o seguinte, A função q será executada a partir do 'click' no elemento (que são os 2 icones) vai conferir se dentro da lista de classe do 'nav' tem o valor 'show', se tiver, o 'toggle' vai remover, se não tiver o 'toggle' vai adicionar. */
  })
}

/* Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')
/* procure pelo seletor nav e dentro do nav pegue todos(All) os ul li a */
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
  /* Com o evento de 'click' quando clicar no item do menu, vai ser removido a classe 'show', assim saindo do menu */
}

/* mudar o header da pagina quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true /* rolagem com o scroll do mouse */,
  keyboard: true /* Rolagem com as setas do teclado */,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

/* chama a função, e fala a ordem e o intervalo */
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { intervel: 100 }
)

/* botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visivel na pagina */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
