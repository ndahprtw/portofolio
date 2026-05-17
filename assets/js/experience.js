
    // Data asli milikmu
const dataExperience = [
    {
        "nama": "Asisten Mengajar",
        "tempat": "WargaLab UTM",
        "tanggal": "Agustus 2022 - Desember 2024",
        "deskripsi": "Membimbing praktikum pemrograman, struktur data, dan membantu mahasiswa memahami konsep hingga debugging.",
        "gambar": [
            "./assets/img/my-experience/wargalab.jpg",
            "./assets/img/my-experience/sertifikat-wargalab.png"
        ]
    },
    {
        "nama": "Fullstack Web Developer",
        "tempat": "UPTD SDN Pejagan 1",
        "tanggal": "Desember 2023 - Januari 2024",
        "deskripsi": "Mengembangkan website sekolah terintegrasi berbasis Laravel mencakup profil dan PPDB online.",
        "gambar": [
            "./my-project/web-SPMB.png",
            "./assets/img/my-experience/sdn-pejagan1.jpg",
            "./assets/img/my-experience/sdn-pejagan1-2.jpg"
        ]
    },
    {
        "nama": "Fullstack Web Developer",
        "tempat": "PT. Arkatama",
        "tanggal": "Februari 2024 - Juni 2024",
        "deskripsi": "Berkontribusi dalam pengembangan platform e-arsip dan e-commerce menggunakan Laravel & REST API.",
        "gambar": [
            "./assets/img/my-experience/sertifikat-arkatama.png",
            "./assets/img/my-experience/sertifikat-arkatama (2).png",
            "./assets/img/my-experience/sertifikat-arkatama (3).png"
        ]
    },
    {
        "nama": "Web Developer",
        "tempat": "Freelancer",
        "tanggal": "2025 - Saat Ini",
        "deskripsi": "Mengembangkan website responsif dengan integrasi REST API sesuai kebutuhan klien.",
        "gambar": [
            "./assets/img/my-project/web-mostlyWeb.png"
        ]
    }
];

const swiperWrapper = document.getElementById('experience-swiper-container');

function renderExperience() {
    swiperWrapper.innerHTML = '';

    dataExperience.forEach((exp, index) => {
        const idCarouselInternal = `carouselExpInternal-${index}`;
        
        // 1. Loop untuk meng-generate gambar di dalam Carousel Bootstrap internal
        let gambarHTML = '';
        exp.gambar.forEach((imgUrl, imgIndex) => {
            // Gambar urutan pertama (indeks 0) wajib mendapatkan class 'active'
            const activeClass = imgIndex === 0 ? 'active' : '';
            gambarHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${imgUrl}" class="d-block w-100 card-img-carousel" alt="Dokumentasi ${imgIndex + 1}">
                </div>
            `;
        });

        // Trik interval acak agar perpindahan gambar antar card tidak kompak bersamaan
        const randomInterval = 3000 + (index * 200); 

        // 2. Susun element slide Swiper-nya
        const slideHTML = `
            <div class="swiper-slide py-3">
                <div class="card h-100 border-0 shadow-sm custom-card-exp">
                    
                    <!-- Carousel Otomatis Internal -->
                    <div id="${idCarouselInternal}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="${randomInterval}">
                        <div class="carousel-inner">
                            ${gambarHTML}
                        </div>
                    </div>

                    <!-- Detail Teks Pengalaman -->
                    <div class="card-body p-4">
                        <span class="badge bg-secondary mb-2" style="font-size: 0.75rem;">${exp.tanggal}</span>
                        <h5 class="fw-bold mb-1" style="color: var(--primary-color);">${exp.nama}</h5>
                        <h6 class="text-muted mb-3" style="font-size: 0.9rem;"><i class="bi bi-building me-1"></i> ${exp.tempat}</h6>
                        <p class="card-text text-secondary small text-start" style="text-align: justify;">
                            ${exp.deskripsi}
                        </p>
                    </div>
                </div>
            </div>
        `;
        swiperWrapper.innerHTML += slideHTML;
    });

    // 3. Inisialisasi SwiperJS JIKA semua element HTML sudah berhasil di-render
    initSwiper();
}

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
        }
    });
}

// Jalankan fungsi render saat halaman siap
renderExperience();
