//dark and light theme
function toggleTheme() {
    const themeButton = document.getElementById('theme-button');
    const svgs = document.querySelectorAll('svg');

    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');

        svgs.forEach(svgImg => {
            svgImg.style.fill = '#000000';
        })
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');

        svgs.forEach(svgImg => {
            svgImg.style.fill = '#ffffff';
        })
    }
}

//'SPA' like website handler
window.onload = () => {
    const contentDiv = document.querySelector(".content");

    if (!contentDiv.textContent) loadHTML("Main.html")

    function loadHTML(file) {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Error loading ${file}`);
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html;
            })
    }

    document.querySelectorAll("button[data-file]").forEach(button => {
        button.addEventListener("click", () => {
            const htmlFile = button.getAttribute("data-file");
            loadHTML(htmlFile);
        })
    })
}
