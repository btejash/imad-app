var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
	controls[i].style.display = 'inline-block';
}
/* to set image height and width in aspect ratio as per window size */
document.getElementsByTagName("BODY")[0].onload = function() {winresize()};
document.getElementsByTagName("BODY")[0].onresize = function() {winresize()};
function winresize(){
var winwidth=window.innerWidth;
document.getElementById('slides').style.height = winwidth * 400/1280 + 'px';
console.log (winwidth + ' '+ winwidth * 400/1280 + 'px');
}
/* Ends here - to set image height and width in aspect ratio as per window size */

var dots = document.getElementsByClassName("dot");
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slide';
    dots[currentSlide].className = dots[currentSlide].className.replace(" activedot", "");
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
    dots[currentSlide].className += " activedot";
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = 'play_circle_outline'; // play character
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'pause_circle_outline'; // pause character
	playing = true;
	slideInterval = setInterval(nextSlide,4000);
}
function gotoNpause(dotno){
    goToSlide(dotno);
    pauseSlideshow();
    playSlideshow();
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
	pauseSlideshow();
	nextSlide();
};
previous.onclick = function(){
	pauseSlideshow();
	previousSlide();
};
