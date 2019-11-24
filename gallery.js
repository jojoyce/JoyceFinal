const monBurger = document.querySelector('.monicabutton');
const rachelBurger = document.querySelector('.rachelbutton');
const phoBurger = document.querySelector('.phobutton');
const joBurger = document.querySelector('.jobutton');
const chaBurger = document.querySelector('.chabutton');
const rossBurger = document.querySelector('.rossbutton');
const backButton = document.querySelector('.backbutton');
var gallHead = document.querySelector('.galleryheader');
var gallText = document.querySelector('.cardexplain');
var gallCard = document.querySelector('.card-container');
var quoMonDrop = document.querySelector('.mondrop');
var monQuo = document.querySelector('.monquote');
var quoRachelDrop = document.querySelector('.racheldrop');
var rachelQuo = document.querySelector('.rachelquote');
var quoPhoDrop = document.querySelector('.phodrop');
var phoQuo = document.querySelector('.phoquote');
var quoJoDrop = document.querySelector('.jodrop');
var joQuo = document.querySelector('.joquote');
var quoChaDrop = document.querySelector('.chadrop');
var chaQuo = document.querySelector('.chaquote');
var quoRossDrop = document.querySelector('.rossdrop');
var rossQuo = document.querySelector('.rossquote');
var quoText = document.querySelector('.quotetext');


monBurger.addEventListener('click',()=> {
  gallHead.classList.add('disappear');
  gallText.classList.add('disappear');
  gallCard.classList.add('disappear');
  setTimeout (function(){quoMonDrop.classList.add('appear');}, 400);
  setTimeout (function(){quoText.classList.add('appear');}, 400);
  setTimeout (function(){monQuo.classList.add('appear');}, 800);
});

rachelBurger.addEventListener('click',()=>{
  gallHead.classList.add('disappear');
  gallText.classList.add('disappear');
  gallCard.classList.add('disappear');
  setTimeout (function(){quoRachelDrop.classList.add('appear');}, 400);
  setTimeout (function(){quoText.classList.add('appear');}, 400);
  setTimeout (function(){rachelQuo.classList.add('appear');}, 800);
});

phoBurger.addEventListener('click',()=>{
  gallHead.classList.add('disappear');
  gallText.classList.add('disappear');
  gallCard.classList.add('disappear');
  setTimeout (function(){quoPhoDrop.classList.add('appear');}, 400);
  setTimeout (function(){quoText.classList.add('appear');}, 400);
  setTimeout (function(){phoQuo.classList.add('appear');}, 800);
});

joBurger.addEventListener('click',()=>{
  gallHead.classList.add('disappear');
  gallText.classList.add('disappear');
  gallCard.classList.add('disappear');
  setTimeout (function(){quoJoDrop.classList.add('appear');}, 400);
  setTimeout (function(){quoText.classList.add('appear');}, 400);
  setTimeout (function(){joQuo.classList.add('appear');}, 800);
});

chaBurger.addEventListener('click',()=>{
  gallHead.classList.add('disappear');
  gallText.classList.add('disappear');
  gallCard.classList.add('disappear');
  setTimeout (function(){quoChaDrop.classList.add('appear');}, 400);
  setTimeout (function(){quoText.classList.add('appear');}, 400);
  setTimeout (function(){chaQuo.classList.add('appear');}, 800);
});

rossBurger.addEventListener('click',()=>{
  gallHead.classList.add('disappear');
  gallText.classList.add('disappear');
  gallCard.classList.add('disappear');
  setTimeout (function(){quoRossDrop.classList.add('appear');}, 400);
  setTimeout (function(){quoText.classList.add('appear');}, 400);
  setTimeout (function(){rossQuo.classList.add('appear');}, 800);
});

backButton.addEventListener('click',()=>{
  quoMonDrop.classList.remove('appear');
  quoRachelDrop.classList.remove('appear');
  quoPhoDrop.classList.remove('appear');
  quoJoDrop.classList.remove('appear');
  quoChaDrop.classList.remove('appear');
  quoRossDrop.classList.remove('appear');
  monQuo.classList.remove('appear');
  rachelQuo.classList.remove('appear');
  phoQuo.classList.remove('appear');
  joQuo.classList.remove('appear');
  chaQuo.classList.remove('appear');
  rossQuo.classList.remove('appear');
  quoText.classList.remove('appear');
  setTimeout (function(){gallHead.classList.remove('disappear');}, 400);
  setTimeout (function(){gallText.classList.remove('disappear');}, 400);
  setTimeout (function(){gallCard.classList.remove('disappear');}, 400);
});
