/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carousel_container = document.querySelector('.carousel-container');
const imageRef = 
  ['./assets/carousel/mountains.jpeg', 
  './assets/carousel/computer.jpeg', 
  './assets/carousel/trees.jpeg', 
  './assets/carousel/turntable.jpeg'];
let index = 0;

function createCarousel() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftBtn = document.createElement('div');
  leftBtn.textContent = '<';
  carousel.appendChild(leftBtn);

  const img1 = document.createElement('img');
  img1.src = imageRef[0];
  carousel.appendChild(img1);

  const img2 = document.createElement('img');
  img2.src = imageRef[1];
  carousel.appendChild(img2);
  
  const img3 = document.createElement('img');
  img3.src = imageRef[2];
  carousel.appendChild(img3);
  
  const img4 = document.createElement('img');
  img4.src = imageRef[3];
  carousel.appendChild(img4);

  const rightBtn = document.createElement('div');
  rightBtn.textContent = '>';
  carousel.appendChild(rightBtn);

  console.log(carousel);
  img1.style.display = "inline-block";

  return carousel;
}

carousel_container.appendChild(createCarousel());

/* 
Ran out of time to complete this Stretch goal.
*/