let bouton = document.getElementById('bouton');
let top__nav = document.getElementById('top__nav');
let rs__header = document.getElementById('rs__header');
let nav__header = document.getElementById('nav__header');
let main = document.getElementById('main');


bouton.addEventListener('click', function(){

top__nav.style.display = 'block';
rs__header.style.display ='none'
nav__header.style.display = 'block';

})


main.addEventListener('click', function(){

    top__nav.style.display = 'none';
    rs__header.style.display ='flex';
    nav__header.style.display = 'flex';


})

