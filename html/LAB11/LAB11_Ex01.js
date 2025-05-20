const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.lightbox .close');
const previousButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let galleryImages = [];


//get albums
$.getJSON('https://jsonplaceholder.typicode.com/albums', function (albums) {
    albums.forEach(album => {
        $('#albums').append(`<button data-id="${album.id}" data-title="${album.title}">${album.title}</button>`)
    })
})

//get pics from each album
$('#albums').on('click', 'button', function () {
    const albumId = $(this).data('id');
    const albumTitle = $(this).data('title');
    $.getJSON(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, function (photos) {
        $('#albums').hide();
        $('#gallery').empty().show();
        $('#form-container').show();
        $('#back-button').show();
        $('#albums-header').hide();
        $('#albums-name').show().html(albumTitle);

        photos.forEach(photo => {
            $('#gallery').append(`<img src="${photo.thumbnailUrl}" data-full="${photo.url}" alt="${photo.title}" />`);
        })

        getLightboxImages();
    })
})

//back button
$('#back-button').click(function () {
    $('#albums').show();
    $('#gallery').hide();
    $('#back-button').hide();
    $('#form-container').hide();
    $('#albums-header').show();
    $('#albums-name').hide();
});

//POST (adding pics)
$('#add-photo-form').submit(function (e) {
    e.preventDefault();

    const photoData = {
        albumId: $('#album-id').val(),
        title: $('input[name="title"]').val(),
        url: $('input[name="url"]').val(),
        thumbnailUrl: $('input[name="thumbnailUrl"]').val()
    }


    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'POST',
        data: JSON.stringify(photoData), //convert to json string
        contentType: 'application/json; charset=UTF-8',
        success: function () {
            $('#form-response').html(`<p>Photo added!</p>`);
        },
        error: function () {
            $('#form-response').html('<p>Upload Failed.</p>');
        }
    })
})

//lightbox from LAB09_Ex04 below:
    function displayImage(index) {
        const img = galleryImages[index];
        lightboxImage.src = img.src;
        lightbox.style.display = 'flex';
        currentIndex = index;
    }

    function getLightboxImages() {
        galleryImages = document.querySelectorAll('.gallery img');

        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                displayImage(index);
            });
        });
    }

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