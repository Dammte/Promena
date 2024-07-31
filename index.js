document.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) { 
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
