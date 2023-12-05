var slideIndex = 1;
var myInterval;

function startSlideShow() {
 myInterval = setInterval(function() {
   plusDivs(1);
 }, 5000);
}

function plusDivs(n) {
 clearInterval(myInterval); // Clear the interval
 slideIndex += n;
 showDivs(slideIndex);
 startSlideShow(); // Restart the interval
}

function showDivs(n) {
 var i;
 var x = document.getElementsByClassName("mySlides");
 if (n > x.length) {slideIndex = 1}
 if (n < 1) {slideIndex = x.length}
 for (i = 0; i < x.length; i++) {
   x[i].style.display = "none"; 
 }
 x[slideIndex-1].style.display = "block"; 
}

startSlideShow(); 

 