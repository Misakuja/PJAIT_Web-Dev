const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.lightbox .close');
const previousButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function displayImage(index) {
    const img = galleryImages[index];
    lightboxImage.src = img.src;
    lightbox.style.display = 'flex';
    currentIndex = index;
}

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        displayImage(index);
    });
});

closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    displayImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    displayImage(currentIndex);
});

document.addEventListener('keydown', (event) => {
    if (lightbox.style.display !== 'flex') return;

    switch (event.key) {
        case 'Escape':
            lightbox.style.display = 'none';
            break;
        case 'ArrowLeft':
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            displayImage(currentIndex);
            break;
        case 'ArrowRight':
            currentIndex = (currentIndex + 1) % galleryImages.length;
            displayImage(currentIndex);
            break;
    }
});