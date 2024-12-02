/* scripts.js */
document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            box.classList.add('fade-in');
        } else {
            box.classList.remove('fade-in');
        }
    });
});
