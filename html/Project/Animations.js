function createParticlesBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-bg';
    document.body.appendChild(canvas);

    const canvasContext = canvas.getContext('2d');
    let particles = [];
    let width, height, resizeTimeout;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 1.5 + 1;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = 0.1 + Math.random() * 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > width) this.speedX *= -1; //reverse if hit edge
            if (this.y < 0 || this.y > height) this.speedY *= -1;
        }
        draw() {
            canvasContext.beginPath();
            canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            canvasContext.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            canvasContext.fill();
        }
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        clearTimeout(resizeTimeout);
         resizeTimeout = setTimeout(() => {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        }, 150);
    }

    window.addEventListener('resize', resize);
    resize();

    function animate() {
        canvasContext.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
createParticlesBackground();

//skills progress bar
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