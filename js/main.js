// import Typed from 'typed.js'
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.typing', {
      strings: ['', 'Full Stack Developer', 'Front-End Dev'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
    
    const typed2 = new Typed('.typing-name', {
      strings: ['', 'Edson A. Jipa'],
      typeSpeed: 100,
      backSpeed: 05,
      loop: true
    });
  });




// ? validate Active

let nav = document.querySelector('.header-icon');
    navList = nav.querySelectorAll('div')
    totalNavList = navList.length
    allSection = document.querySelectorAll('.section')
    totalSection = allSection.length



for(let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');

  a.addEventListener('click', function() {
    removePrevSection();
    for(let j = 0; j < totalNavList; j++) {
      if(navList[j].querySelector('a').classList.contains('active')){
        addPrevSection(j)
      }
      navList[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active')
    seeSection(this)
    if(window.innerWidth < 1200){
      menuSectionToogle()
    }
  })
}

function removePrevSection(){
  for(let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('prev-section')
  }
}

function addPrevSection(n){
  allSection[n].classList.add('prev-section')
}

function seeSection(element){
  for(let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active')
  }
  const target = element.getAttribute('href').split('#')[1]
  document.querySelector('#' + target).classList.add('active')
}

function activated(element) {
  for(let i = 0; i < totalNavList; i++){
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
      navList[i].querySelector('a').classList.add('active')
    }
  }
}

// document.querySelector(".hire-me").addEventListener("click", function (){
//   const sectionIndex = this.getAttribute("data-section-index");
//   seeSection(this);
//   activated(this);
//   removePrevSection();
//   addPrevSection(sectionIndex);
// })




// ? open and closed menu-bar

const navToogle = document.querySelector('.header-menu');
  aside = document.querySelector('.header-content');
navToogle.addEventListener('click', () => {
  menuSectionToogle();
})


function menuSectionToogle(){
  aside.classList.toggle('open')
  navToogle.classList.toggle('open')
  for(let i = 0; i < totalSection; i++){
    allSection[i].classList.toggle('open')
    navList[i].querySelector('a').classList.toggle('open')
  }
  // menu.classList.remove('open')
}

// const menu = document.querySelector("#menu-bar");

// const  menu_bar = document.querySelector("#btn");

//   menu_bar.addEventListener("click", function() {
//     // for(let i = 0; i < totalSection; i++){
//     //   allSection[i].classList.toggle('open')
//     // }
//     menu.classList.toggle("open");
//   })
