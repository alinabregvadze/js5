let images = [
    'images/slider5.jpg',
    'images/slider1.jpg',
    'images/slider2.jpg',
    'images/slider4.jpg',
]
let slider = document.getElementById('slider');
let rail = document.getElementById('rail');
let currentIndex = 0;

createNavigation();
createSlide();

function createSlide() {
    let slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    rail.appendChild(slide);
    return slide;
}

function next() {
	let nextSlideIndex = currentIndex + 1;
	if(nextSlideIndex > images.length - 1) nextSlideIndex = 0;
	setNewSlide(nextSlideIndex);
}

function prev() {
	let prevSlideIndex = currentIndex - 1;
	if(prevSlideIndex < 0) prevSlideIndex = images.length - 1;
	setNewSlide(prevSlideIndex);
}

function setNewSlide(newIndex) {
	let slide = document.querySelector('#rail .slide');
    currentIndex = newIndex;
    slide.style.backgroundImage = 'url(' + images[currentIndex] + ')';
	
}

function createNavigation() {
	let slider = document.getElementById('slider');
    
	let nextButton = document.createElement('button');
	nextButton.className = 'next';
    nextButton.classList.add('btn');
	nextButton.innerText = 'Next';
	nextButton.addEventListener('click', next);
	slider.appendChild(nextButton);

	let prevButton = document.createElement('button');
	prevButton.className = 'prev';
    prevButton.classList.add('btn');
	prevButton.innerText = 'Prev';
	prevButton.addEventListener('click', prev);
	slider.appendChild(prevButton);
}
