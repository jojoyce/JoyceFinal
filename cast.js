var myImg0 = document.getElementById('myimg0');
var myImgJ = document.getElementById('myimgJ');
var myImgC = document.getElementById('myimgC');
var myImgL = document.getElementById('myimgL');
var myImgJo = document.getElementById('myimgJo');
var myImgCh = document.getElementById('myimgCh');
var myImgR = document.getElementById('myimgR');

function castImgJ(){
  myImg0.style.opacity="0";
  myImgC.style.opacity="0";
  myImgL.style.opacity="0";
  myImgJo.style.opacity="0";
  myImgCh.style.opacity="0";
  myImgR.style.opacity="0";
  myImgJ.style.opacity="0.9";
};

function castImgC(){
  myImg0.style.opacity="0";
  myImgJ.style.opacity="0";
  myImgL.style.opacity="0";
  myImgJo.style.opacity="0";
  myImgCh.style.opacity="0";
  myImgR.style.opacity="0";
  myImgC.style.opacity="0.9";
}

function castImgL(){
  myImg0.style.opacity="0";
  myImgJ.style.opacity="0";
  myImgC.style.opacity="0";
  myImgJo.style.opacity="0";
  myImgCh.style.opacity="0";
  myImgR.style.opacity="0";
  myImgL.style.opacity="0.9";
}

function castImgJo(){
  myImg0.style.opacity="0";
  myImgJ.style.opacity="0";
  myImgC.style.opacity="0";
  myImgL.style.opacity="0";
  myImgCh.style.opacity="0";
  myImgR.style.opacity="0";
  myImgJo.style.opacity="0.9";
}

function castImgCh(){
  myImg0.style.opacity="0";
  myImgJ.style.opacity="0";
  myImgC.style.opacity="0";
  myImgL.style.opacity="0";
  myImgJo.style.opacity="0";
  myImgR.style.opacity="0";
  myImgCh.style.opacity="0.9";
}

function castImgR(){
  myImg0.style.opacity="0";
  myImgJ.style.opacity="0";
  myImgC.style.opacity="0";
  myImgL.style.opacity="0";
  myImgJo.style.opacity="0";
  myimgCh.style.opacity="0";
  myImgR.style.opacity="0.9";
}

function castImg0(){
  myImgR.style.opacity="0";
  myImgJ.style.opacity="0";
  myImgC.style.opacity="0";
  myImgL.style.opacity="0";
  myImgJo.style.opacity="0";
  myimgCh.style.opacity="0";
  myImg0.style.opacity="0.9";
}


const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
  current.nextElementSibling.classList.add('current');
} else {
  slides[0].classList.add('current');
}
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
  current.previousElementSibling.classList.add('current');
} else {
  slides[slides.length - 1].classList.add('current');
}
  setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e =>{
  nextSlide();
});
prev.addEventListener('click', e =>{
  prevSlide();
});
