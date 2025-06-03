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
        }, 200);
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

function progressBars() {
    document.querySelectorAll('.language-card').forEach(card => {
        const percent = card.getAttribute('data-progress');
        const fill = card.querySelector('.progress-fill');

        const isMobile = window.matchMedia('(max-width: 850px)').matches;
        if (isMobile) {
            fill.style.width = percent + '%';
        } else {
            card.addEventListener('mouseenter', () => {
                fill.style.width = percent + '%';
            });

            card.addEventListener('mouseleave', () => {
                fill.style.width = '0%';
            });
        }
    });
}
