//==============================
// MOBILE MENU
//==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});









//===================================
// HERO PARALLAX
//===================================

const plane=document.querySelector(".plane");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/45;

let y=(window.innerHeight/2-e.pageY)/45;

plane.style.transform=
`translate(${x}px,${y}px)`;

});








/*======================================
    DESTINATION SLIDER
======================================*/

const slider = document.querySelector(".destination-slider");

const nextBtn = document.querySelector(".destination-btn.next");

const prevBtn = document.querySelector(".destination-btn.prev");

if(slider && nextBtn && prevBtn){

    nextBtn.addEventListener("click",()=>{

        slider.scrollBy({

            left:390,

            behavior:"smooth"

        });

    });

    prevBtn.addEventListener("click",()=>{

        slider.scrollBy({

            left:-390,

            behavior:"smooth"

        });

    });

}









/*======================================
    SIGNUP PASSWORD TOGGLE
======================================*/

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(button => {

    button.addEventListener("click", function () {

        const input = this.parentElement.querySelector("input");

        const icon = this.querySelector("i");

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });

});


/*======================================
    PASSWORD STRENGTH
======================================*/

const password = document.getElementById("password");

const strengthBar = document.querySelector(".strength-bar");

const strengthText = document.querySelector(".password-strength span");

if (password && strengthBar && strengthText) {

    password.addEventListener("input", function () {

        const value = this.value;

        let strength = 0;

        if (value.length >= 8) strength++;

        if (/[A-Z]/.test(value)) strength++;

        if (/[0-9]/.test(value)) strength++;

        if (/[^A-Za-z0-9]/.test(value)) strength++;

        const bar = strengthBar;

        switch (strength) {

            case 0:
            case 1:

                bar.style.background = "#e5e5e5";

                bar.style.position = "relative";

                bar.style.overflow = "hidden";

                bar.innerHTML = "<div style='width:25%;height:100%;background:#e74c3c;border-radius:20px;transition:.35s;'></div>";

                strengthText.textContent = "Weak Password";

                strengthText.style.color = "#e74c3c";

                break;

            case 2:

                bar.innerHTML = "<div style='width:55%;height:100%;background:#f39c12;border-radius:20px;transition:.35s;'></div>";

                strengthText.textContent = "Medium Password";

                strengthText.style.color = "#f39c12";

                break;

            case 3:

                bar.innerHTML = "<div style='width:80%;height:100%;background:#2ecc71;border-radius:20px;transition:.35s;'></div>";

                strengthText.textContent = "Strong Password";

                strengthText.style.color = "#2ecc71";

                break;

            case 4:

                bar.innerHTML = "<div style='width:100%;height:100%;background:#19B67A;border-radius:20px;transition:.35s;'></div>";

                strengthText.textContent = "Very Strong Password";

                strengthText.style.color = "#19B67A";

                break;

        }

    });

}







/*======================================
            FAQ
======================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

                faq.querySelector("i").className = "fas fa-plus";

            }

        });

        item.classList.toggle("active");

        const icon = item.querySelector("i");

        if(item.classList.contains("active")){

            icon.className = "fas fa-minus";

        }else{

            icon.className = "fas fa-plus";

        }

    });

});