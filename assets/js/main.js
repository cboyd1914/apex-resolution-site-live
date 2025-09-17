// Apex Resolution Website JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
    
    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });
});

// Form submission tracking
function trackFormSubmission(formType) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
            event_category: 'engagement',
            event_label: formType
        });
    }
    console.log('Form submission tracked:', formType);
}

// Phone call tracking
function trackPhoneCall() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call', {
            event_category: 'engagement',
            event_label: 'header_phone'
        });
    }
    console.log('Phone call tracked');
}

// Consultation booking tracking
function trackConsultation() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'consultation_booking', {
            event_category: 'conversion',
            event_label: 'consultation_form'
        });
    }
    console.log('Consultation booking tracked');
}

// Button click tracking
function trackButtonClick(buttonName, location) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
            event_category: 'engagement',
            button_name: buttonName,
            button_location: location
        });
    }
    console.log('Button click tracked:', buttonName, 'at', location);
}

