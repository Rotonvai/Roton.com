// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill circles on scroll
function animateSkillCircles() {
    const skillCircles = document.querySelectorAll('.skill-circle');
    
    skillCircles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const rotation = (percent / 100) * 360;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const beforeElement = entry.target.querySelector('::before');
                    entry.target.style.setProperty('--rotation', `${rotation}deg`);
                    
                    // Add CSS animation
                    entry.target.classList.add('animate');
                }
            });
        });
        
        observer.observe(circle);
    });
}

// Add CSS for skill circle animation
const style = document.createElement('style');
style.textContent = `
    .skill-circle.animate::before {
        transform: rotate(var(--rotation, 0deg));
    }
`;
document.head.appendChild(style);

// Initialize skill circle animation
animateSkillCircles();

// Portfolio navigation
let currentSlide = 0;
const portfolioItems = document.querySelectorAll('.portfolio-item');
const totalSlides = Math.ceil(portfolioItems.length / 3);

document.querySelector('.nav-btn.prev').addEventListener('click', () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    updatePortfolioSlide();
});

document.querySelector('.nav-btn.next').addEventListener('click', () => {
    currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    updatePortfolioSlide();
});

function updatePortfolioSlide() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const translateX = -currentSlide * 100;
    portfolioGrid.style.transform = `translateX(${translateX}%)`;
}

// Play button functionality
document.querySelector('.play-button').addEventListener('click', function() {
    // Add your video play functionality here
    console.log('Play button clicked');
    this.style.transform = 'translate(-50%, -50%) scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 150);
});

// Hero dots navigation
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        // Add slide functionality here if needed
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#1a1a1a';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .service-item {
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.6s ease;
    }
    
    .service-item.animate {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Animate service items on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-item, .experience-item, .portfolio-item').forEach(item => {
    observer.observe(item);
});

function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
    }


    window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


    function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  }

  function openPopup(src) {
    document.getElementById("popupImage").src = src;
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }


  