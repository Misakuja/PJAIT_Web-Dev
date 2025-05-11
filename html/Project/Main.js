//dark and light theme
function toggleTheme() {
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
            .catch(() => {
                contentDiv.textContent = `Loading content error`;
            });
    }

    document.querySelectorAll("button[data-file]").forEach(button => {
        button.addEventListener("click", () => {
            const htmlFile = button.getAttribute("data-file");
            loadHTML(htmlFile);
        })
    })
}

//hamburger menu
const hamburger = document.getElementById("hamburger");
const buttonList = document.querySelector("main header nav ul");

// open
hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    buttonList.classList.toggle("open");
});

// close when click any button
buttonList.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        buttonList.classList.remove("open");
    });
});

// close when click outside
document.addEventListener("click", (event) => {
    if (!buttonList.contains(event.target) && !hamburger.contains(event.target)) {
        buttonList.classList.remove("open");
    }
});
