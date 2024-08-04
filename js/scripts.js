document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    }
});
