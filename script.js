/*menu-icon navbar*/
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*sticky-navbar*/
window.onscroll=()=>{
let header=document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY>100);
/*REMOVE MENUICON WHEN CLICK NAV LINK*/
menuicon.classList.remove('bx-x');
navbar.classList.remove('active');
};
/*scroll reveal */
ScrollReveal({ 
    reset: true,
    distance:'80px',
duration:2000,
delay:200
 });
 ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
 
/*DARK-MODE*/
let darkmodeicon=document.querySelector('#dark-mode');

darkmodeicon.onclick=()=>{
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};