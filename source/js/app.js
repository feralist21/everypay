window.onload = function(){
	console.log('Готов!');
  toggleMobileMenu();
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
