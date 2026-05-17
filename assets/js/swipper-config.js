const swiperWrapper = document.getElementById('experience-swiper-container');

// Fungsi mengambil data dari file JSON luar
async function loadExperienceData() {
    try {
        const response = await fetch('./assets/js/data-experience.json');
        const dataExperience = await response.json();
        renderExperience(dataExperience);
    } catch (error) {
        console.error('Gagal memuat data experience:', error);
    }
}

// Fungsi merender data ke HTML
function renderExperience(data) {
    if (!swiperWrapper) return;
    swiperWrapper.innerHTML = '';

    data.forEach((exp, index) => {
        let gambarHTML = '';
        exp.gambar.forEach((imgUrl, imgIndex) => {
            const activeClass = imgIndex === 0 ? 'active' : '';
            gambarHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${imgUrl}" class="d-block w-100 card-img-carousel" alt="Dokumentasi">
                </div>
            `;
        });

        const slideHTML = `
            <div class="swiper-slide py-3">
                <div class="card h-100 border-0 shadow-sm custom-card-exp">
                    <div class="carousel slide">
                        <div class="carousel-inner">
                            ${gambarHTML}
                        </div>
                    </div>
                    <div class="card-body p-4">
                        <span class="badge bg-secondary mb-2" style="font-size: 0.75rem;">${exp.tanggal}</span>
                        <h5 class="fw-bold mb-1" style="color: var(--primary-color);">${exp.nama}</h5>
                        <h6 class="text-muted mb-3" style="font-size: 0.9rem;">${exp.tempat}</h6>
                        <p class="card-text text-secondary small text-start" style="text-align: justify;">
                            ${exp.deskripsi}
                        </p>
                    </div>
                </div>
            </div>
        `;
        swiperWrapper.innerHTML += slideHTML;
    });

    initSwiper();
}

// Inisialisasi Swiper
function initSwiper() {
    new Swiper('.experienceSwiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        },
        on: {
            init: function (swiper) { startInternalCarousel(swiper); },
            slideChange: function (swiper) { startInternalCarousel(swiper); }
        }
    });
}

// Menggerakkan gambar internal carousel
let internalIntervals = [];
function startInternalCarousel(swiper) {
    internalIntervals.forEach(clearInterval);
    internalIntervals = [];

    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    const items = activeSlide.querySelectorAll('.carousel-item');
    if (items.length <= 1) return; 

    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;

    const intervalId = setInterval(() => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 3000);

    internalIntervals.push(intervalId);
}

// Jalankan load data saat DOM siap
document.addEventListener('DOMContentLoaded', loadExperienceData);