const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links'); 
    const navLinks = document.querySelectorAll('.nav-links li');
     
 burger.addEventListener('click', ()=> {
    navlinks.classList.toggle('nav-active');
    
});
burger.classList.toggle('toggle');
}

navSlide()