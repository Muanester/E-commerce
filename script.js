// Navbar and Close 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// Small image changing
var Mainimg = document.getElementById("Mainimg");
var Smallimg = document.getElementsByClassName("small-img");

Smallimg[0].onclick = function() {
    Mainimg.src = Smallimg[0].src;
}
Smallimg[1].onclick = function() {
    Mainimg.src = Smallimg[1].src;
}
Smallimg[2].onclick = function() {
    Mainimg.src = Smallimg[2].src;
}
Smallimg[3].onclick = function() {
    Mainimg.src = Smallimg[3].src;
}