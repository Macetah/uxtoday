// Horizontal scroll
document.addEventListener("DOMContentLoaded", function() {
    const scrollerContainer = document.querySelector('.scroller-container');
    
    scrollerContainer.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            scrollerContainer.scrollLeft += e.deltaY;
        }
    });

    const items = document.querySelectorAll('.item');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    showItems();
    window.addEventListener('scroll', showItems)

    // Mobile warning
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        alert("For the best experience, please switch to the desktop version of our website.");
    }
});

