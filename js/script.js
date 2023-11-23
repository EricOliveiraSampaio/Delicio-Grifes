document.addEventListener("DOMContentLoaded", function() {
  var nav = document.getElementById("nav1");
  var img = document.getElementById("dg"); // Use document.getElementById diretamente

  window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
          nav.classList.add("tran");
          img.src = 'img/dl.png';
          img.style.height = '40px';
          img.style.width = '50px';
          img.style.marginTop = '0px';
          img.style.zIndex = '999';
      } else {
          nav.classList.remove("tran");
          img.src = 'img/dg.png';
          img.style.height = '';
          img.style.width = '';
      }
  });
});


let slideIndex = 0;
showSlides();

function showSlides() {

    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

const ver = document.getElementsByClassName("ver");

function rel(){
  window.location.href = 'cat/rel.html';
}

function blu(){
  window.location.href = 'cat/blu.html';
}

function ten(){
  window.location.href = 'cat/ten.html';
}

const ver1 = document.getElementsByClassName("ver1");

function ace(){
  window.location.href = 'cat/ace.html';
}

function cam(){
  window.location.href = 'cat/cam.html';
}

function cal(){
  window.location.href = 'cat/cal.html';
}
  