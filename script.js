/* Sticky Header Background on Window Scrolling */

const header = document.querySelector("header");

const handleWindowScroll = (e) => {
  if (window.scrollY > 0) {
    if (!header.classList.contains("header__shadow"))
      header.classList.add("header__shadow");
  } else {
    if (header.classList.contains("header__shadow"))
      header.classList.remove("header__shadow");
  }
};

document.addEventListener("scroll", handleWindowScroll);

/* Mobile Nav Menu */

const primaryNavToggle = document.querySelector(
  '[aria-controls="primary-nav"]'
);

const handleMobileNavToggleClick = (e) => {
  const navOpened = primaryNavToggle.getAttribute("aria-expanded");
  if (navOpened === "false") {
    primaryNavToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNavToggle.setAttribute("aria-expanded", "false");
  }
};

primaryNavToggle.addEventListener("click", handleMobileNavToggleClick);

/* Slider */

const sliderContainer = document.querySelector(".slides");
const sliderSlides = document.querySelectorAll(".slide");
const sliderNumSlides = sliderSlides.length;
const sliderControlButtons = document.querySelectorAll(
  ".slider__controls > button"
);

const sliderGetSlideIndexAtCurrentPosition = () => {
  return Array.from(sliderSlides).findIndex((slide) => {
    return sliderContainer.scrollLeft <= slide.offsetLeft;
  });
};

const sliderGetPositionOfPreviousSlide = () => {
  const currentPosition = sliderGetSlideIndexAtCurrentPosition();
  return currentPosition === 0 ? sliderNumSlides - 1 : currentPosition - 1;
};

const sliderGetPositionOfNextSlide = () => {
  const currentPosition = sliderGetSlideIndexAtCurrentPosition();
  return currentPosition === sliderNumSlides - 1 ? 0 : currentPosition + 1;
};

const sliderMoveTo = (index) => {
  // Move container scroll to the current active slide
  sliderContainer.scrollTo({
    top: 0,
    left: sliderSlides[index].offsetLeft,
    behavior: "smooth" /* or "instant" */,
  });
};

const handleSliderControlButtonsClick = (e) => {
  e.preventDefault();
  if (e.target.id === "slider-control-prev") {
    sliderMoveTo(sliderGetPositionOfPreviousSlide());
  } else if (e.target.id === "slider-control-next") {
    sliderMoveTo(sliderGetPositionOfNextSlide());
  } else {
    console.log("Unknown button");
  }
};

sliderControlButtons.forEach((button) =>
  button.addEventListener("click", handleSliderControlButtonsClick)
);
