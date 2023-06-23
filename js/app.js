const shop__link = document.querySelector('.shop__link');
const nav = document.querySelector('.nav--2');
const header = document.querySelector('.header');
const section1 = document.querySelector('.section--1')
const inner__cover__underline = document.querySelector('.inner__cover__underline');

// Sticky navbar
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries
  // console.log(entry);

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



// Reveal text on scroll
const allSection = document.querySelectorAll('.section')

const revealText = function (entries, observer) {
  const [ entry ] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealText, {
  root: null,
  threshold: 0.15,
})

allSection.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})





const displayBtn = document.querySelector('.display-btn')
const displayImage = document.querySelector('.display-img')
const displayContent1 = document.querySelector('.display-content-1')

const macScreenDisplay = function(e) {
  e.preventDefault()
  console.log('CLICKED');

  if (displayImage.style.display === 'flex') {
    displayImage.style.display = 'none';
    displayContent1.style.display = 'flex';
    displayBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
  } else {
    displayImage.style.display = 'flex';
    displayContent1.style.display = 'none';
    displayBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'
  }

}

displayBtn.addEventListener('click', macScreenDisplay)




const keyboard_image = document.querySelector('.keyboard_image');
const about__keyboard_container = document.querySelector('.about__keyboard-container');

const keyboardBtn = document.querySelector('.keyboardBtn');

const keybordAndId = function (e) {
  e.preventDefault();

  if (keyboard_image.style.display === 'flex') {
    keyboard_image.style.display = 'none';
    about__keyboard_container.style.display = 'flex';
    keyboardBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
  } else {
    keyboard_image.style.display = 'flex';
    about__keyboard_container.style.display = 'none';
    keyboardBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'
  }
}

keyboardBtn.addEventListener('click', keybordAndId)