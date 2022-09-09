window.onload = function(){
	console.log('Готов!');
  toggleMobileMenu();
  introSlider();
};

function toggleMobileMenu() {
  const toggleBtn = document.querySelector('.js-toggle');
  const mobileMenuWrap = document.querySelector('.js-menu');

  if (toggleBtn && mobileMenuWrap) {
    toggleBtn.addEventListener('click', function() {
      mobileMenuWrap.classList.toggle('header-mobile__menu-wrap--active');
    });
  }
}

function introSlider() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
    pauseOnMouseEnter: true,
  });
}
