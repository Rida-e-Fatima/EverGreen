//AOS Link
AOS.init();

//Navbar 
const navbar = document.getElementById("main-navbar");
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll");
  } else {
    navbar.classList.remove("navbar-after-scroll");
  }
});
// services 
function showSection(){
  document.getElementById(ext-fun).style.display = 'block';
}