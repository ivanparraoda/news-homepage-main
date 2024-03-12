const btn = document.querySelector('.menu')
const menu = document.querySelector('.links-nav')
const overlay = document.querySelector('.overlay')

btn.addEventListener('click', () => {
  menu.classList.toggle('show')
  menu.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('menu-open')
})
