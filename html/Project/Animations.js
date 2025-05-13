function setupLanguageProgressBars() {
    const languageGroups = document.querySelectorAll('.language-group');

    languageGroups.forEach(language => {
        const level = parseInt(language.dataset.level, 10);
        const progressBar = language.querySelector('.progress-bar');
        
        if (progressBar.children.length === 0) {
            for (let i = 0; i < level; i++) {
                const rect = document.createElement('div');
                rect.classList.add('progress-rect');
                progressBar.appendChild(rect);
            }

            language.addEventListener('mouseenter', () => {
                const rects = progressBar.querySelectorAll('.progress-rect');
                rects.forEach((rect, index) => {
                    setTimeout(() => {
                        rect.classList.add('visible');
                    }, index * 150);
                });

                language.addEventListener('mouseleave', () => {
                    const rects = progressBar.querySelectorAll('.progress-rect');
                    rects.forEach(rect => {
                        rect.classList.remove('visible');
                    });
                });
            });
        }
    });
}
