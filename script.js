// ===== Smooth Scroll with Header Offset =====
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// ===== Fade-in Sections on Scroll =====
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.8;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 0.8s ease-out';
        }
    });
});

// ===== Initial Section State =====
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
});

// ===== Optional Hero Background Parallax =====
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    let pos = 0;
    setInterval(() => {
        pos -= 0.05;
        heroBg.style.backgroundPosition = `center ${pos}px`;
    }, 20);
}

// ===== Portfolio Lightbox =====
const portfolioImages = document.querySelectorAll('.portfolio-gallery img');
const lightboxOverlay = document.createElement('div');
lightboxOverlay.id = 'lightbox-overlay';
document.body.appendChild(lightboxOverlay);

const lightboxImg = document.createElement('img');
lightboxOverlay.appendChild(lightboxImg);

portfolioImages.forEach(img => {
    img.addEventListener('click', () => {
        const fullSrc = img.getAttribute('data-full');
        lightboxImg.src = fullSrc;
        lightboxOverlay.style.display = 'flex';
    });
});

lightboxOverlay.addEventListener('click', () => {
    lightboxOverlay.style.display = 'none';
});
