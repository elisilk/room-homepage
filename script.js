/* Sticky Header Background on Window Scrolling */

const header = document.querySelector('header');

function handleWindowScroll() {
  if (window.scrollY > 0) {
    if (!header.classList.contains('header__shadow'))
      header.classList.add('header__shadow');
  } else {
    if (header.classList.contains('header__shadow'))
      header.classList.remove('header__shadow');
  }
}

document.addEventListener('scroll', handleWindowScroll);

/* Mobile Nav Menu */

const primaryNavToggle = document.querySelector(
  '[aria-controls="primary-nav"]',
);

const handleMobileNavToggleClick = (e) => {
  const navOpened = primaryNavToggle.getAttribute('aria-expanded');
  if (navOpened === 'false') {
    primaryNavToggle.setAttribute('aria-expanded', 'true');
  } else {
    primaryNavToggle.setAttribute('aria-expanded', 'false');
  }
};

primaryNavToggle.addEventListener('click', handleMobileNavToggleClick);

/* Slider */

const sliderContainer = document.querySelector('.slider');
const sliderList = sliderContainer.querySelector('.slides');
const sliderSlides = Array.from(sliderContainer.querySelectorAll('.slide'));
const sliderPrevBtn = sliderContainer.querySelector('.slider-control-prev');
const sliderNextBtn = sliderContainer.querySelector('.slider-control-next');
const sliderStatus = sliderContainer.querySelector('.slider-status');

const observerOptions = {
  root: sliderList,
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.removeAttribute('inert');

      const currentActiveIndex = sliderSlides.indexOf(entry.target);
      const totalSlidesCount = sliderSlides.length;

      sliderStatus.textContent = `Showing slide ${currentActiveIndex + 1} of ${totalSlidesCount}`;

      if (entry.target.classList.contains('first-slide')) {
        sliderPrevBtn.disabled = true;
      }
      if (entry.target.classList.contains('last-slide')) {
        sliderNextBtn.disabled = true;
      }
    } else {
      entry.target.setAttribute('inert', '');

      if (entry.target.classList.contains('first-slide')) {
        sliderPrevBtn.disabled = false;
      }
      if (entry.target.classList.contains('last-slide')) {
        sliderNextBtn.disabled = false;
      }
    }
  });
}, observerOptions);

sliderSlides.forEach((slide) => observer.observe(slide));

/* Slider Button Controls */

function getActiveSlideIndex() {
  const activeSlide = sliderSlides.find(
    (slide) => !slide.hasAttribute('inert'),
  );
  return activeSlide ? sliderSlides.indexOf(activeSlide) : 0;
}

sliderNextBtn.addEventListener('click', () => {
  const currentIndex = getActiveSlideIndex();
  if (currentIndex < sliderSlides.length - 1) {
    sliderSlides[currentIndex + 1].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }
});

sliderPrevBtn.addEventListener('click', () => {
  const currentIndex = getActiveSlideIndex();
  if (currentIndex > 0) {
    sliderSlides[currentIndex - 1].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }
});
