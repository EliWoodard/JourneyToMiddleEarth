document.addEventListener("DOMContentLoaded", function() {
    var themeToggle = document.getElementById('theme-toggle');
    
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (document.body.classList.contains('night-mode')) {
                document.body.classList.remove('night-mode');
                localStorage.setItem('theme', 'sun-mode');
            } else {
                document.body.classList.add('night-mode');
                localStorage.setItem('theme', 'night-mode');
            }
        });
    }
});
