const navSlider = () => {
  const burger = document.querySelector('.toggle');
  const nav = document.querySelector('.navbar');
  var navText1 = document.querySelector('.navtext1');
  var navText2 = document.querySelector('.navtext2');
  var navText3 = document.querySelector('.navtext3');
  var contactinfo = document.querySelector('.navrightheader');

  burger.addEventListener('click',() => {
    nav.classList.toggle('navbar-active');
   if(nav.classList.contains('navbar-active')){
    setTimeout (function (){
    navText1.classList.add('appear');
    contactinfo.classList.add('appear');
  }, 400);
    setTimeout (function (){
  navText2.classList.add('appear');
}, 800);
    setTimeout (function (){
navText3.classList.add('appear');
}, 1200);
}else {
  navText1.classList.remove('appear');
  contactinfo.classList.remove('appear');
  navText2.classList.remove('appear');
  navText3.classList.remove('appear');
}


});
}
navSlider();

var myAudio = document.querySelector('#myaudio');
var isPlaying = false;

function togglePlay() {
  if(isPlaying){
    myAudio.pause();
  }else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
