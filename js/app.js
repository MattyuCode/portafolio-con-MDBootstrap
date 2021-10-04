var typed = new Typed('.element', {
    strings: ['', 'Diseñador', 'Front-end', 'YouTuber', 'Freelance'],
    typedSpeed: 40,
    backDelay: 700,
    backSpeed: 100,
    loop: true
});

var typed = new Typed('.animacion2', {
    strings: ['', 'Mattyu Coder'],
    typedSpeed: 40,
    backDelay: 700,
    backSpeed: 100,
    loop: true
});



























document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});