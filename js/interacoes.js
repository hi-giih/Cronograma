<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

        const swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        });