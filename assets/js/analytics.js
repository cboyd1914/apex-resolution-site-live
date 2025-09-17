// Google Analytics 4 Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 Measurement ID
// gtag('config', 'GA_MEASUREMENT_ID');

// Custom event tracking functions
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    console.log('Event tracked:', eventName, parameters);
}

// Track page views
function trackPageView(pageName) {
    trackEvent('page_view', {
        page_title: pageName,
        page_location: window.location.href
    });
}

// Track button clicks
function trackButtonClick(buttonName, location) {
    trackEvent('button_click', {
        button_name: buttonName,
        button_location: location
    });
}

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            trackEvent('scroll_depth', {
                scroll_percent: maxScroll
            });
        }
    }
});

// Track time on page
let startTime = Date.now();
window.addEventListener('beforeunload', function() {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', {
        time_seconds: timeOnPage
    });
});

