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


// _____________________APPLE MAC IN 4 COLORS________________

// Images
const image1 = document.querySelector('.image-1');
const image2 = document.querySelector('.image-2');
const image3 = document.querySelector('.image-3');

// Image Buttons
const midNight_color_btn = document.querySelector('.midnight-btn');
const starlight_color_btn = document.querySelector('.starlight-btn');
const spacegray_color_btn = document.querySelector('.spacegray-btn');
const silver_color_btn = document.querySelector('.silver-btn');

// active classes
const btnContainer = document.querySelector('.btn');
const colorName = document.querySelector('.color-name');

// List of images
const midnight_images = [
  'design_side_midnight__large',
  'design_magsafe_midnight__large', 
  'design_top_midnight__large'
];

const starlight_images = [
  'design_side_starlight__large',
  'design_magsafe_starlight__large',
  'design_top_starlight__large'
];

const spacegray_images = [
  'design_side_spacegray__large',
  'design_magsafe_spacegray__large',
  'design_top_spacegray__large'
];

const silver_images = [
  'design_side_silver__large',
  'design_magsafe_silver__large',
  'design_top_silver__large'
]

const mac_midnight_color = function (e) {
  e.preventDefault();

  image1.src = `images/${midnight_images[0]}.jpg`
  image2.src = `images/${midnight_images[1]}.jpg`
  image3.src = `images/${midnight_images[2]}.jpg`

  // if (mac_midnight_color) {
  //   btnContainer.classList.add('active1');
  //   colorName.classList.add('active2');
  // } else {
  //   btnContainer.classList.remove('active1');
  //   colorName.classList.remove('active2');
  // }

};

const mac_starlight_color = function (e) {
  e.preventDefault()

  image1.src = `images/${starlight_images[0]}.jpg`
  image2.src = `images/${starlight_images[1]}.jpg`
  image3.src = `images/${starlight_images[2]}.jpg`

  // btnContainer.classList.add('active1');
  // colorName.classList.add('active2');
};

const mac_spacegray_color = function (e) {
  e.preventDefault();

  image1.src = `images/${spacegray_images[0]}.jpg`
  image2.src = `images/${spacegray_images[1]}.jpg`
  image3.src = `images/${spacegray_images[2]}.jpg`

  // colorName.classList.add('active2')

  // btnContainer.classList.add('active1');
  // colorName.classList.add('active2');
};

const mac_silver_color = function (e) {
  e.preventDefault()

  image1.src = `images/${silver_images[0]}.jpg`;
  image2.src = `images/${silver_images[1]}.jpg`;
  image3.src = `images/${silver_images[2]}.jpg`;

  // btnContainer.classList.add('active1');
  // colorName.classList.add('active2');
};

const showColorName = function (displaycolorname) {
  if (displaycolorname) {
    btnContainer.classList.add('active1');
    colorName.classList.add('active2');
  } else {
    btnContainer.classList.remove('active1');
    colorName.classList.remove('active2');
  }

}

// showColorName(mac_midnight_color())
// showColorName(mac_starlight_color())


midNight_color_btn.addEventListener('click', mac_midnight_color);
starlight_color_btn.addEventListener('click', mac_starlight_color);
spacegray_color_btn.addEventListener('click', mac_spacegray_color);
silver_color_btn.addEventListener('click', mac_silver_color);



// Use AR to view MacBook
const arMidnightBtn = document.querySelector('.ar__midnight-btn');
const arstarlightBtn = document.querySelector('.ar__starlight-btn');
const arspacegrayBtn = document.querySelector('.ar__spacegray-btn');
const arsilverBtn = document.querySelector('.ar__silver-btn');

const ar__Image = document.querySelector('.arImage');

const arImages = [
  'ar_phone_midnight__large',
  'ar_phone_starlight__large',
  'ar_phone_spacegray__large',
  'ar_phone_silver__arge',
];

const ar__midnight__image = () => {
  ar__Image.src = `images/${arImages[0]}.jpg`
};

const ar__starlight__image = () => {
  ar__Image.src = `images/${arImages[1]}.jpg`
};

const ar__spacegray__image = () => {
  ar__Image.src = `images/${arImages[2]}.jpg`
};

const ar__silver__image = () => {
  ar__Image.src = `images/${arImages[3]}.jpg`
};


arMidnightBtn.addEventListener('click', ar__midnight__image);
arstarlightBtn.addEventListener('click', ar__starlight__image);
arspacegrayBtn.addEventListener('click', ar__spacegray__image);
arsilverBtn.addEventListener('click', ar__silver__image)