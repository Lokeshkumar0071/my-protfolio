Let menuIcon = document.quarySelector('#menu-icon');
Let navbar = document.quarySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

Let section = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
navLinks.forEach(links => {
    links.classList.remove('active');
    document.quarySelector('header nav a[href*=' +id + ']').classList.add('active');
    
});
        };
    });


    // sticky navbar
    Let header = document.quarySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     dealy: 200
    
    
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box , .contact form', { origin:
         'bottom' });
         ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
         ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });


         const typed = new Typed('.multiple-text' , {
            strings: ['Web Developer', ' Programer',' Problem Solver',]
            typeSpeed: 100,  
            backSpeed: 100,
            backDelay: 1000,
            loop: true


         });


