const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector
('hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target)&& !navbarNav.DOCUMENT_POSITION_CONTAINS(e.target)) {
    navbarNav.classList.remove('active')
  }
})