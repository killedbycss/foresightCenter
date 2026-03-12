changeAppearance()

function changeAppearance() {
  let button = document.querySelectorAll('.appearance')
  let element = document.querySelectorAll('.cardSquare')

  button.addEventListener('click', () => {
    element.classList.replace('cardSquare', 'cardSquare1')
  })
}
