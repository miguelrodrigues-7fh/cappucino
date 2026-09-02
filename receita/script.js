const botoes = document.querySelectorAll('.button_card');

botoes.forEach(button => {
    let star_on = true;
    const star = document.createElement('img');
    star.classList.add('button-poke');
    star.setAttribute('src', './../assests/icons/Star2.png');
    button.insertBefore(star, button.firstChild);
    
    star.addEventListener('click', () => {
        if (star_on) {
            star.setAttribute('src', './../assests/icons/estrela.png');
            star_on = false;
        } else {
            star.setAttribute('src', './../assests/icons/Star2.png');
            star_on = true;
        }
    });
});
