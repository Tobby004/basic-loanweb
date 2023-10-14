const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelector('.nav-links'); 
    const nav = document.querySelectorAll('.nav-links li');
     
 burger.addEventListener('click',()=> {
    navlinks.classList.toggle('nav-active');
    
});

}

navSlide()