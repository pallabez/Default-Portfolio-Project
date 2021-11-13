"use strict"


//Smooth Scroolling
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


//Skill animation
var skills = document.getElementById('skills');
var skillDisplayed = false;

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight;
}

function checkScroll() {
    var skillBars = document.querySelectorAll(".skill-display div");
    var skillVisibility = isVisible(skills);

    if(skillVisibility && !skillDisplayed) {
        skillDisplayed = true;
        for(let i of skillBars) {
            var width = i.getAttribute("data-value");
            changeWidth(0, width, i);
        }
    } else if(!skillVisibility && skillDisplayed) {
        skillDisplayed = false;
        for(let i of skillBars) {
            i.style.width = "0%";
        }
    }
}

function changeWidth(initial, final, element) {
    let currWidth = Number(initial);

    var interval = setInterval(function() {
        element.style.width = (++currWidth) + "%";
        if(currWidth >= final) clearInterval(interval);
    }, 4);
}
window.addEventListener('scroll', checkScroll);


