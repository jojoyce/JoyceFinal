const monBurger = document.querySelector('.monicabutton');
const backButton = document.querySelector('.backbutton');
var gallHead = document.querySelector('.galleryheader');
var gallText = document.querySelector('.cardexplain');
var gallCard = document.querySelector('.card-container');
var quoDrop = document.querySelector('.drop');
var monQuoImg =document.querySelector('.monquoteimg');
var monQuo = document.querySelector('.monquote');
var quoText = document.querySelector('.quotetext');


monBurger.addEventListener('click',()=> {
  gallHead.classList.add('disappear');
  gallText.classList.add('disappear');
  gallCard.classList.add('disappear');
  setTimeout (function(){quoDrop.classList.add('appear');}, 400);
  setTimeout (function(){monQuoImg.classList.add('appear');}, 400);
  setTimeout (function(){quoText.classList.add('appear');}, 400);
  setTimeout (function(){monQuo.classList.add('appear');}, 800);
});

backButton.addEventListener('click',()=>{
  quoDrop.classList.remove('appear');
  monQuoImg.classList.remove('appear');
  monQuo.classList.remove('appear');
  quoText.classList.remove('appear');
  setTimeout (function(){gallHead.classList.remove('disappear');}, 400);
  setTimeout (function(){gallText.classList.remove('disappear');}, 400);
  setTimeout (function(){gallCard.classList.remove('disappear');}, 400);
});


const monQuote1 = document.querySelector('.monquote1');
const monQuote2 = document.querySelector('.monquote2');
const monQuote3 = document.querySelector('.monquote3');
const monQuote4 = document.querySelector('.monquote4');
const monQuote5 = document.querySelector('.monquote5');
const monQuote6 = document.querySelector('.monquote6');
