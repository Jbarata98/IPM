function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    
    document.getElementById('horas').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function show(shown, hidden) {
    document.getElementById(hidden).style.display='none';
    document.getElementById(shown).style.display='block';
   
    return false;
  }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlidesInformacao(slideIndex);

function plusSlidesInformacao(n) {
    showSlidesInformacao(slideIndex += n);
}

function currentSlideInformacao(n) {
    showSlidesInformacao(slideIndex = n);
}

function showSlidesInformacao(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesInformacao");
    var dots = document.getElementsByClassName("dotInformacao");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlidesConcertos(slideIndex);

function plusSlidesConcertos(n) {
    showSlidesConcertos(slideIndex += n);
}

function currentSlideConcertos(n) {
    showSlidesConcertos(slideIndex = n);
}

function showSlidesConcertos(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesConcertos");
    var dots = document.getElementsByClassName("dotConcerto");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


showSlidesPassatempos(slideIndex);

function plusSlidesPassatempos(n) {
    showSlidesPassatempos(slideIndex += n);
}

function currentSlidePassatempos(n) {
    showSlidesPassatempos(slideIndex = n);
}

function showSlidesPassatempos(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesPassatempos");
    var dots = document.getElementsByClassName("dotPassatempo");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlidesDias(slideIndex);

function plusSlidesDias(n) {
    showSlidesDias(slideIndex += n);
}

function currentSlideDias(n) {
    showSlidesDias(slideIndex = n);
}

function showSlidesDias(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesDias");
    var dots = document.getElementsByClassName("dotDia");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlidesConcertos2(slideIndex);

function plusSlidesConcertos2(n) {
    showSlidesConcertos2(slideIndex += n);
}

function currentSlideConcertos2(n) {
    showSlidesConcertos2(slideIndex = n);
}

function showSlidesConcertos2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesConcertos2");
    var dots = document.getElementsByClassName("dotConcerto2");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlidesDias2(n) {
    showSlidesDias2(slideIndex += n);
}

function currentSlideDias2(n) {
    showSlidesDias2(slideIndex = n);
}

function showSlidesDias2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesDias2");
    var dots = document.getElementsByClassName("dotDia2");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlidesNavegacao(n) {
    showSlidesNavegacao(slideIndex += n);
}

function currentSlideNavegacao(n) {
    showSlidesNavegacao(slideIndex = n);
}

function showSlidesNavegacao(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesNavegacao");
    var dots = document.getElementsByClassName("dotNavegacao");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlidesInteresse(n) {
    showSlidesInteresse(slideIndex += n);
}

function currentSlideInteresse(n) {
    showSlidesInteresse(slideIndex = n);
}

function showSlidesInteresse(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesInteresse");
    var dots = document.getElementsByClassName("dotInteresse");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function navigate(distance=100) {
    if (distance == 0)
        return;
    console.log(distance);
    $('#distance').text(distance + ' m');
    let degree = Math.random() > 0.5 ? 1 : -1;
    $('.fa-location-arrow').animate({rotate: degree});
    setTimeout(navigate(--distance, Math.floor(Math.random()*1000)));
}
