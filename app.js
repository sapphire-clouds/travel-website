    // JavaScript for smooth scrolling and navigation highlighting
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll("nav a");

        navLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();

                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                const yOffset = -50; // Adjust this value to offset the scroll position if needed
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });

                // Remove active class from all links
                navLinks.forEach(navLink => navLink.classList.remove("active"));

                // Add active class to clicked link
                this.classList.add("active");
            });
        });

        // Highlight the active link based on the section being viewed
        window.addEventListener("scroll", function() {
            const sections = document.querySelectorAll("section");
            let currentSection = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 50;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
                    currentSection = section.getAttribute("id");
                }
            });

            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove("active"));

            // Add active class to the link corresponding to the current section
            const activeNavLink = document.querySelector(`nav a[href="#${currentSection}"]`);
            if (activeNavLink) {
                activeNavLink.classList.add("active");
            }
        });
    });

function showSidebar(){
const sidebar=document.querySelector('.sidebar')
sidebar.style.display='flex'
}
function hideSidebar(){
const sidebar=document.querySelector('.sidebar')
sidebar.style.display='none'
}
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})










let actitems = document.querySelectorAll('.actslider .actitem');
    let actnext = document.getElementById('actnext');
    let actprev = document.getElementById('actprev');
    
    let actactive = 3;
    function loadShow(){
        let stt = 0;
        actitems[actactive].style.transform = `none`;
        actitems[actactive].style.zIndex = 1;
        actitems[actactive].style.filter = 'none';
        actitems[actactive].style.opacity = 1;
        for(var i = actactive + 1; i < items.length; i++){
            stt++;
            actitems[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            actitems[i].style.zIndex = -stt;
            actitems[i].style.filter = 'blur(5px)';
            actitems[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = actactive - 1; i >= 0; i--){
            stt++;
            actitems[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            actitems[i].style.zIndex = -stt;
            actitems[i].style.filter = 'blur(5px)';
            actitems[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    actnext.onclick = function(){
        actactive = actactive + 1 < items.length ? actactive + 1 : actactive;
        loadShow();
    }
    actprev.onclick = function(){
        actactive = actactive - 1 >= 0 ? actactive - 1 : actactive;
        loadShow();
    }





    let tiplist = document.querySelectorAll('.tiplist .tipitem');

tiplist.forEach(tipitem => {
    tipitem.addEventListener('click', function (event){
        if(tipitem.classList.contains('active')){
            if(event.target.classList.contains('dropdown')){
                tipitem.classList.remove('active');
            }
        }else{
            tipitem.classList.add('active');
        }
    })
})