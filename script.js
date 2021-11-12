"use strict"

var nav = document.getElementsByClassName('nav-link');

for(let i of nav) {
    i.addEventListener('click', function(event) {
        var identity = document.querySelector(i.getAttribute("href"));
        event.preventDefault();

        var scroll = setInterval(function() {
            let distance = identity.getBoundingClientRect().top;
            console.log(distance)
            if(distance <= 0) {
                clearInterval(scroll);
                return;
            }
            window.scrollBy(0, 20);
        }, 2);
    });
}

