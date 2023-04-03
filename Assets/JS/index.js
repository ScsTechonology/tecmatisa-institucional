function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../Assets/IMG/menu-hamburguer-btn/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../Assets/IMG/menu-hamburguer-btn/close_white_36dp.svg";
    }
}

// scroll navbar 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



// show/hide information answer

const information = document.querySelectorAll('.information');

information.forEach(information => {
    information.addEventListener('click', () => {
        information.classList.toggle('open');

       // change icon

       const icon = information.querySelector('.information__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else{
            icon.className = 'uil uil-plus';
        }

    })
})


