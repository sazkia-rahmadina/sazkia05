
class UIAnimation {
    constructor() {
        this.revealElements = document.querySelectorAll('.edu-item, .item-keahlian, .box');
        this.initFadeIn();
        this.initScrollReveal();
    }

    initFadeIn() {
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.8s ease-in-out";
        window.onload = () => document.body.style.opacity = "1";
    }

    initScrollReveal() {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, observerOptions);

        this.revealElements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "all 0.6s ease-out";
            observer.observe(el);
        });
    }
}

class typewriter {
    constructor(elementSelector, speed = 50) {
        this.element = document.querySelector(elementSelector);
        this.speed = speed;
        if (this.element) {
            this.fullText = this.element.innerHTML;
            this.element.innerHTML = '';
            this.type();
        }
    }

    type() {
        let i = 0;
        const typing = setInterval(() => {
            if (i < this.fullText.length) {
                // Menangani tag <br> agar tidak rusak
                if (this.fullText.substring(i, i + 4) === "<br>") {
                    this.element.innerHTML += "<br>";
                    i += 4;
                } else {
                    this.element.innerHTML += this.fullText.charAt(i);
                    i++;
                }
            } else {
                clearInterval(typing);
            }
        }, this.speed);
    }
}

class ComponentInteraction {
    constructor() {
        this.buttons = document.querySelectorAll('.nav-btn, .btn-home, .tombol-beranda');
        this.initHoverEffects();
    }

    initHoverEffects() {
        this.buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = "scale(1.08)";
                btn.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = "scale(1)";
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new UIAnimation();
    new ComponentInteraction();
    if (document.querySelector('.intro-text h1')) {
        new Typewriter('.intro-text h1', 80);
    }
});