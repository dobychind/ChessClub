var wrapper1 = document.querySelector('#marqueeWrapper1'),
    marquee1 = wrapper1.querySelector('.marquee'),
    wrapperWidth1 = wrapper1.offsetWidth,
    marqueeWidth1 = marquee1.scrollWidth;

marquee1.style.transform = 'translateX(' + wrapperWidth1 + 'px)';

function move1() {
    var currentTX1 = parseInt(marquee1.style.transform.replace('translateX(', '')) || 0;
    currentTX1--;

    if (-currentTX1 >= marqueeWidth1) {
        currentTX1 = wrapperWidth1 / 2;
    }
    marquee1.style.transform = 'translateX(' + currentTX1 + 'px)';
}

setInterval(move1, 20);


var wrapper2 = document.querySelector('#marqueeWrapper2'),
    marquee2 = wrapper2.querySelector('.marquee'),
    wrapperWidth2 = wrapper2.offsetWidth,
    marqueeWidth2 = marquee2.scrollWidth;

marquee2.style.transform = 'translateX(' + wrapperWidth2 + 'px)';

function move2() {
    var currentTX2 = parseInt(marquee2.style.transform.replace('translateX(', '')) || 0;
    currentTX2--;

    if (-currentTX2 >= marqueeWidth2) {
        currentTX2 = wrapperWidth2 / 2;
    }
    marquee2.style.transform = 'translateX(' + currentTX2 + 'px)';
}

setInterval(move2, 20);


// document.addEventListener("DOMContentLoaded", function () {
//     const prevButton = document.querySelector(".button-left");
//     const nextButton = document.querySelector(".button-right");
//     const participantList = document.querySelector(".participant__list");
//     const participantCards = document.querySelectorAll(".participant__card");
//     const cardWidth = participantCards[0].offsetWidth;
//     const totalCards = participantCards.length;
//     let currentIndex = 0;
  
//     nextButton.addEventListener("click", () => {
//       currentIndex = (currentIndex + 1) % totalCards;
//       updateCardPosition();
//       updateCurrentSlide();
//     });
  
//     prevButton.addEventListener("click", () => {
//       currentIndex = (currentIndex - 1 + totalCards) % totalCards;
//       updateCardPosition();
//       updateCurrentSlide();
//     });

//     function updateCardPosition() {
//       console.log(cardWidth)
//       participantList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//     }
  
//     function updateCurrentSlide() {
//       document.querySelector(".current-slide").textContent = currentIndex + 1;
//     }

//   });

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".button-left");
  const nextButton = document.querySelector(".button-right");
  const participantList = document.querySelector(".participant__list");
  const participantCards = document.querySelectorAll(".participant__card");
  const cardWidth = participantCards[0].offsetWidth;
  const totalCards = participantCards.length;
  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCardPosition();
    updateCurrentSlide();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCardPosition();
    updateCurrentSlide();
  });

  function updateCardPosition() {
    console.log(cardWidth)
    participantList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function updateCurrentSlide() {
    document.querySelector(".current-slide").textContent = currentIndex + 1;
  }

  // Обновляем позицию карточек при изменении размера экрана
  window.addEventListener("resize", () => {
    updateCardPosition();
  });

  // Инициализируем позицию карточек при загрузке страницы
  updateCardPosition();
});
