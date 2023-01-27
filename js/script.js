// Menu Mobile

const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('#nav-bar');
    nav.classList.toggle('active')    
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active)  {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
        
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}    

mobileMenu.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('touchstart', toggleMenu);
