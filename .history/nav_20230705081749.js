const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelector('.nav-links'); 
    const nav = document.querySelectorAll('.nav-links li');
     
 burger.addEventListener('click',()=>{
    navlinks.classList.toggle('nav-active');

    //animate links
          navLinks.forEach(link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
        } else {
         link.style.animation = 'navLinkFade 0.5s ease forward ${index / 7 + 0.3}s';
        
        }
    }
    
});

}

navSlide()