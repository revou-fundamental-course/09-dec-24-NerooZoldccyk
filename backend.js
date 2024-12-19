document.addEventListener('DOMContentLoaded', () => {
    // Auto Slide Banner
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 3000);

    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const destination = document.getElementById('destination').value.trim();

        if (!name || !email || !destination) {
            alert('All fields are required!');
            return;
        }
        alert('Form Submitted Successfully!');
    });

    // Initialize the first slide
    showSlide();
});
