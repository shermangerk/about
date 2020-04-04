// Progress Bar
// let bar= document.querySelector("#progress");
//
// window.addEventListener("scroll",()=>{
//   let max= document.body.scrollHeight - window.innerHeight;
//   bar.style.width=`${(pageYOffset/max)*100}%`;
// })

// Sticky Navbar
// ============================================================================
window.onscroll = function(){stickyBar()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyBar(){
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// ============================================================================
