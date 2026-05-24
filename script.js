document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let cards = Array.from(track.children);
  const cardWidth = cards[0].offsetWidth + 20; // adjust margin if needed
  const totalCards = cards.length;

  // Duplicate the entire set of cards to allow looping
  track.innerHTML += track.innerHTML;
  cards = Array.from(track.children);

  let index = 0;

  function updateCarousel() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index++;
    updateCarousel();

    // Reset when we've scrolled through one full set
    if (index >= totalCards) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = `translateX(0px)`;
      }, 500); // match transition duration
    }
  });

  prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
      track.style.transition = "none";
      index = totalCards - 1;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    } else {
      updateCarousel();
    }
  });
});
