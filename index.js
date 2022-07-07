let imgSlide = document.querySelectorAll(".thumb");
imgSlide[0].style.visibility = "visible";
const btn = document.querySelectorAll(".btn");
console.log(btn);
let preCarousel = 0;
let imgCarousel = 0;
const next = (val) => {
  preCarousel = imgCarousel;
  imgCarousel += val;
  imgCarousel %= imgSlide.length;
  if (imgCarousel < 0) {
    imgCarousel = imgSlide.length - 1;
  }
  imgSlide[preCarousel].style.visibility = "hidden";
  imgSlide[imgCarousel].style.visibility = "visible";
};
