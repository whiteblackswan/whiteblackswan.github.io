// activate our mobile menu button
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav__container');


// create an even listener
menuButton.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	menuButton.classList.toggle('active');
})

//follow the link
document.querySelectorAll('.nav-list__link').forEach(n => n.addEventListener('click', () => {
	menuButton.classList.remove('active');
	console.log('hello');
	
	navLinks.classList.remove('active');
}))




let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
	slides.forEach((slide) => {
	   slide.style.display = "none"
	   dots.forEach((dot) => {
		 dot.classList.remove("active")
	  })
	})
	slides[n].style.display = "block"
	dots[n].classList.add("active")
 }
 document.addEventListener("DOMContentLoaded", init(currentSlide))

 const next = () => {
	currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
	init(currentSlide)
 }

 const prev = () => {
	currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
	init(currentSlide)
 }

 document.querySelector(".next").addEventListener('click', next)
document.querySelector(".prev").addEventListener('click', prev)

setInterval(() => {
	next()
 }, 5000);

 dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
	  init(index)
	  currentSlide = i
	})
 })