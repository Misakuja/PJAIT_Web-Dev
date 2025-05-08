function toggleTheme() {
    const themeButton = document.getElementById('theme-button');
    const svg = themeButton.querySelector('svg');

    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        svg.style.fill = '#000000';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        svg.style.fill = '#ffffff';
    }
}