console.log('Javascrit is funny')
// Les selecteurs
// 1. Attribut
console.log(document.documentElement.getAttribute('lang'))

// 2. Elemnt par ID
// var title = document.getElementById('title')
var title = document.querySelector('#title')
// var subTitle = document.getElementsByClassName('subTitle')
var subTitle = document.querySelector('.subTitle')
var pargraphe = document.getElementsByTagName('p')
subTitle.setAttribute('id', 'subTitle')
subTitle.removeAttribute('id')
// ecrire sur le dom
// document.write('<h1>Hello World from JS</h1>')

// changer la couleur avec JS

title.style.color = 'red'

// var div = document.createElement('div')
// var contenu = document.createTextNode('Bonjour, je suis div depuis Javascript')
// div.appendChild(contenu)

// var container = document.querySelector('.container')
// document.body.appendChild(div, container)

// var cardTitleText = 'Titre de mon card'
// var cardDetailsText = 'Description de mon card'
var todoTitle = document.querySelector('.todo-title')
var todoStatus = document.querySelector('.todo-status')
// cardTitle.textContent = cardTitleText
// cardDetails.textContent = cardDetailsText

// json plaecholder: https://jsonplaceholder.typicode.com/

fetch('./players.json')
  .then((response) => response.json())
  .then((json) => console.log(json))
