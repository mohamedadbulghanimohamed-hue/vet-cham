let active = document.querySelectorAll(".header li a");
active.forEach (function (a) {
    a.onclick = function () {
        for (let i = 0; i < active.length; i++) {
            active[i].classList.remove("active");            
        };
        this.classList.add("active");
    };
});
window.addEventListener("scroll", function () {
    if (window.scrollY >= 7) {
    document.querySelector(".landing .logo").classList.add("move");
    }else {
        document.querySelector(".landing .logo").classList.remove("move");
    }
});


const cards = document.querySelectorAll(".vm img");

const observer = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add("both");
        }else {
            entries[i].target.classList.remove("both");
        }
    };
});
cards.forEach(card => {
    observer.observe(card);
});

const founders = document.querySelectorAll(".founders .card");

const observer2 = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add("both");
        }else {
            entries[i].target.classList.remove("both");
        }
    };
});
founders.forEach(founder => {
    observer.observe(founder);
});



/*
function spredLeft() {
    document.querySelector(".vaccines .left").classList.toggle("spred");
};
function spredRight() {
    document.querySelector(".vaccines .right").classList.toggle("spred");
}; */
