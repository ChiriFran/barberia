function plusSlides(n) {
  showSlides(slideIndex += n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  
  slides.forEach(img => {
    img.style.display = "none";  
  });

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Cambiar de imagen cada 3 segundos
}
