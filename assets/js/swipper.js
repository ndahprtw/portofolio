const swiper = new Swiper('.experienceSwiper', {
    loop: true,           // Kunci agar ketika habis otomatis balik lagi ke awal tanpa batas
    centeredSlides: true, // Kunci agar card yang dipilih posisinya pas di tengah layar
    slidesPerView: 1,     // Default di HP: Hanya muncul 1 data lurus
    spaceBetween: 20,     // Jarak antar card
    
    // Konfigurasi Navigasi Tombol Panah Luar
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Mengatur behavior saat ganti perangkat
    breakpoints: {
        768: {
            slidesPerView: 2, 
            spaceBetween: 30 
        }
    }
});