window.onload = function () {
  console.log('Готов!');
  toggleMobileMenu();
  introSlider();
  casesSlider();
};

function toggleMobileMenu() {
  const toggleBtn = document.querySelector('.js-toggle');
  const mobileMenuWrap = document.querySelector('.js-menu');

  if (toggleBtn && mobileMenuWrap) {
    toggleBtn.addEventListener('click', function () {
      mobileMenuWrap.classList.toggle('header-mobile__menu-wrap--active');
    });
  }
}

function introSlider() {
  const swiper = new Swiper('.intro__slider', {
    loop: true,
    autoHeight: true,
    // autoplay: {
    //   delay: 5000,
    // },
    // pauseOnMouseEnter: true,
  });
}

function casesSlider() {
  if (window.innerWidth <= 768) {
    const swiper = new Swiper('.cases-slider', {
      loop: false,
      spaceBetween: 20,
      slidesPerView: 'auto',
      pagination: {
        el: '.cases-pagination',
      },
    });
  };

}
