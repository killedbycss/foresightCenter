changeAppearance()
checkbox1()

function checkbox1() {
  let check1 = document.querySelector('.checkbox1')
  let image = document.querySelector('.checkbox1 img')

  check1.addEventListener('click', () => {
    image.src = 'contents/checkbox1YesIcon.svg'
  })
}

function changeAppearance() {
  let button = document.querySelectorAll('.checkbox1')
  let element = document.querySelectorAll('.cardSquare')

  button.addEventListener('click', () => {
    element.classList.replace('cardSquare', 'cardSquare1')
  })
}
