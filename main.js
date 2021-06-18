let images = [
    'images/slider5.jpg',
    'images/slider1.jpg',
    'images/slider2.jpg',
    'images/slider4.jpg',
]
let slider = document.getElementById('slider');
let rail = document.getElementById('rail');
let currentPosition = 0;
let pageWidth = 650;
let currentIndex = 0;
let railWidth = document.getElementById('rail').scrollWidth;

createNavigation();
createSlides();


function createSlide(url) {
    let slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = 'url(' + url + ')';
    return slide;
}

function createSlides() {
    for (let i = 0; i < images.length; i++) {
        rail.appendChild(createSlide(images[i]))
    }
}

function next() {
    currentPosition += pageWidth;
    rail.style.transform = 'translateX(-' + currentPosition + 'px)';
}

function prev() {
    currentPosition -= pageWidth;
    rail.style.transform = 'translateX(-' + currentPosition + 'px)';
}

function createNavigation() {
	let nextButton = document.createElement('button');
	nextButton.className = 'next';
    nextButton.classList.add('btn');
	nextButton.innerText = 'Next';
	nextButton.addEventListener('click', next);
	slider.appendChild(nextButton);

	let prevButton = document.createElement('button');
	prevButton.className = 'prev';
    prevButton.classList.add('btn')
	prevButton.innerText = 'Prev';
	prevButton.addEventListener('click', prev);
	slider.appendChild(prevButton);
}

