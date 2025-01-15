
// Contact form validation script
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const email = document.querySelector('#email').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });
});
