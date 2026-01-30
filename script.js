function togglemenu(){
    const menu = document.querySelector(".menu-links")
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuLinks = document.querySelectorAll('.menu-links a');

    function activateLink(id){
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
        menuLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateLink(entry.target.id);
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));
});