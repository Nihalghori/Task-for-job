// script.js

let currentSlide = 1;

function initCarousel() {
  showSlide(currentSlide);
  updateDropdown();
}

function changeSlide(n) {
  showSlide(currentSlide += n);
  updateDropdown();
}

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-image');

  if (n > slides.length) {
    currentSlide = 1;
  }

  if (n < 1) {
    currentSlide = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Check if the page is initially loading
  if (document.readyState === 'loading') {
    // Display only the first slide when the page is loading
    slides[0].style.display = 'block';
  } else {
    // Display the current slide when the page has loaded
    slides[currentSlide - 1].style.display = 'block';
  }
}

function updateDropdown() {
  const selector = document.getElementById('imageSelector');
  selector.value = currentSlide.toString();
}

document.getElementById('toggleWelcome').addEventListener('click', function () {
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.style.display = welcomeMessage.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('imageSelector').addEventListener('change', selectImage);

function selectImage() {
  const selector = document.getElementById('imageSelector');
  const selectedValue = parseInt(selector.value);
  showSlide(selectedValue);
}

document.querySelector('header nav ul').addEventListener('click', function () {
  const nav = document.querySelector('header nav');
  nav.classList.toggle('show');
});

window.onload = initCarousel;
