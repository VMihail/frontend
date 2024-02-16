'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('error-message');
    const swiperContainerName = '.swiper-container';
    const swiperNextButtonName = '.swiper-button-next';
    const swiperPrevButtonName = '.swiper-button-prev';
    const swiperPagination = '.swiper-pagination';
    const count = 5;

    function getData(startId, finishId) {
        preloader.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        const url = `https://jsonplaceholder.typicode.com/photos?_start=${startId}&_end=${finishId}`
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.text().toString());
            }).then(data => {
            dataRender(data);
            preloader.classList.add('hidden');
        }).catch(error => {
            console.error('Error fetching data: ', error);
            errorMessage.textContent = error.toString();
            errorMessage.classList.remove('hidden');
            preloader.classList.add('hidden');
        });
    }

    function dataRender(data) {
        const fragment = document.createDocumentFragment();

        data.forEach(({title, thumbnailUrl, url}) => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            const image = document.createElement('img');
            image.src = thumbnailUrl;
            image.alt = title;
            image.onclick = () => window.open(url, '_blank');
            const text = document.createElement('p');
            text.textContent = title;
            slide.appendChild(image);
            slide.appendChild(text);
            fragment.appendChild(slide);
        });

        gallery.innerHTML = '';
        gallery.appendChild(fragment);
        new Swiper(
            swiperContainerName, {
                navigation: {
                    nextEl: swiperNextButtonName,
                    prevEl: swiperPrevButtonName,
                }, pagination: {
                    el: swiperPagination,
                    clickable: true,
                }
            });
    }

    getData(1, count);
});