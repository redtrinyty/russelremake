const hButton = document.querySelector('#button')
const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const h1Menu = document.querySelector('#Menu')
hButton.addEventListener('click', function () {
    hamburger.classList.toggle("block")
    close.classList.toggle("active")
    h1Menu.classList.toggle("hidden")
})

const dom = document.getElementById('dom');

window.addEventListener('scroll', function () {
    if (window.scrollY > 5200) { // Adjust 100 to the distance from the bottom where you want the icon to appear
        dom.classList.add('hidden-1')
    } else {
        dom.classList.remove('hidden-1')
    }
});
