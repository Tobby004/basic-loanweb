const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelector('.nav-links'); 
     
    burger.addEventListener('click',()=>{
    navlinks.classList.toggle('nav-active');
});

}
navSlide();