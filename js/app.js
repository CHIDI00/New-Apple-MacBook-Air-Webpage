const shop__link = document.querySelector('.shop__link');
const nav = document.querySelector('.nav--2');
const header = document.querySelector('.header');
const section1 = document.querySelector('.section--1')
const inner__cover__underline = document.querySelector('.inner__cover__underline');

// Sticky navbar
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries
  console.log(entry);

  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav2()
  } else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: `-${navHeight}px`,
})
headerObserver.observe(shop__link);

const nav2 = function () {
  nav.style.display = 'flex';
  nav.style.width = '100%';
  nav.style.justifyContent = 'center';
  nav.style.alignItems = 'center';

  inner__cover__underline.style.width = '100%';
  // nav.style.width = '100%';
}