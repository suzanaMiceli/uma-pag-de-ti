//começa na posição 0 e o total de slides é do tamnho da quantidade de classes carousel item
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;

document.getElementById("carousel-button-next").addEventListener("click", function(){
	moverParaProximoSlide();
});

document.getElementById("carousel-button-prev").addEventListener("click", function(){
	moverParaSlideAnterior();
});

function updateSlidePosition(){

	for (let slide of slides) {
		slide.classList.remove("carousel_item-visivel");
		slide.classList.add("carousel-item--hidden");
	};

	slides[slidePosition].classList.add("carousel_item-visivel");
};

function moverParaProximoSlide(){
	updateSlidePosition();
	if (slidePosition == totalSlides - 1) {
		slidePosition = 0;
	}else{ slidePosition ++;};
	
	updateSlidePosition();
};

function moverParaSlideAnterior(){
	if (slidePosition == 0) {
		slidePosition = totalSlides -1;
	}else{
	 slidePosition --;
	};
	updateSlidePosition();
};