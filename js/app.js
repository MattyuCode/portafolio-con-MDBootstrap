
var typed = new Typed('.element', {
    strings: ['',
        'Freelance',
        'YouTuber',
        'Desarrollador',
        'Front-end'
    ],
    typeSpeed : 40 ,
    backDelay : 700 ,
    backSpeed: 100,
    loop: true,    
});

var typed = new Typed('.name', {
    strings: ['', 'Mateo Mendoza'],
    typeSpeed : 40 ,
    backDelay : 700 ,
    backSpeed: 100,
    loop: true,    
});











































document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});