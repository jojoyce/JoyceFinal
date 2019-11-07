const navSlider = () => {
  const burger = document.querySelector('.toggle');
  const nav = document.querySelector('.navbar');
  burger.addEventListener('click',() => {
    nav.classList.toggle('navbar-active');
  })
}

navSlider();
