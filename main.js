const navSlider = () => {
  const burger = document.querySelector('.toggle');
  const nav = document.querySelector('.navbar');
  var navText1 = document.querySelector('.navtext1');
  var navText2 = document.querySelector('.navtext2');
  var navText3 = document.querySelector('.navtext3');
  var contactInfo = document.querySelector('.navrightheader');
  var navbarFooter = document.querySelector('.navbarfooter');

  burger.addEventListener('click',() => {
    nav.classList.toggle('navbar-active');
   if(nav.classList.contains('navbar-active')){
    setTimeout (function (){
    navText1.classList.add('appear');
    contactInfo.classList.add('appear');
    navbarFooter.classList.add('appear');
  }, 400);
    setTimeout (function (){
  navText2.classList.add('appear');
}, 900);
    setTimeout (function (){
navText3.classList.add('appear');
}, 1400);
}else {
  navText1.classList.remove('appear');
  contactInfo.classList.remove('appear');
  navText2.classList.remove('appear');
  navText3.classList.remove('appear');
  navbarFooter.classList.remove('appear');
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
