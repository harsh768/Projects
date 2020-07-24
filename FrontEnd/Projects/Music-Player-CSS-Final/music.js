//Carousel

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}

//Footer section display-toggle
var image=document.getElementsByClassName('image_container');
var Footer=document.getElementById('music_play');
for(var i=0;i<image.length;i++){
	image[i].addEventListener('click',function(){
	Footer.classList.toggle('footer_visible');
	});
}
