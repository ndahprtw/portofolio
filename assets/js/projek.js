const daftarProjek = [
    {
    "nama": "Website Pengenalan Sekolah",
    "deskripsi": "Dilengkapi fitur SPMB berbasis web, pengenalan sekolah, pinjam buku bagi siswa.",
    "gambar": "./assets/img/my-project/web-SPMB.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : "https://canva.link/knufe0i9h38n9c3",
    "kategori": "school"
    },
    {
    "nama": "Website Penginapan Hotel",
    "deskripsi": "Dilengkapi sewa kamar, reservasi online, dan informasi hotel.",
    "gambar": "./assets/img/my-project/web-penginapan.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : "https://canva.link/azlsdv7z892k8wr",
    "kategori": "management"
    },
    {
    "nama": "Website E-Arsip Tanah",
    "deskripsi": "Terdapat sistem pengelolaan arsip tanah digital.",
    "gambar": "./assets/img/my-project/web-arsipTanah.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : "https://canva.link/9f3lmtfarokh84s",
    "kategori": "management"
    },
    {
    "nama": "E-Commerce Skincare",
    "deskripsi": "Terdapat fitur belanja online (QRIS), pembayaran hingga review produk (testimoni).",
    "gambar": "./assets/img/my-project/web-skincare.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : " https://canva.link/xmzzeqrt3dufd31",
    "kategori": "ecommerce"
    },
    {
    "nama": "Website E-Majalah",
    "deskripsi": "Terdapat CRUD artikel dengan berbagai pilihan layout artikel.",
    "gambar": "./assets/img/my-project/web-eMajalah.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : null,
    "kategori": "management"
    },
    {
    "nama": "Website Penilaian Akademik",
    "deskripsi": "Terdapat rekap nilai harian, penilaian akhir hingga cetak raport.",
    "gambar": "./assets/img/my-project/web-eRaport.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : 'https://canva.link/38l9amedclge3np',
    "kategori": "school"
    },
    {
    "nama": "Website Budidaya Ikan",
    "deskripsi": "Terdapat sistem kelola budidaya ikan hingga laporan harian.",
    "gambar": "./assets/img/my-project/web-budidayaIkan.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : 'https://canva.link/iwpdy9exumn8hg0',
    "kategori": "management"
    },
    {
    "nama": "Website Informasi Geografis",
    "deskripsi": "Terdapat sistem informasi geografis berbasis peta digital.",
    "gambar": "./assets/img/my-project/web-informasiGeografis.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : null,
    "kategori": "management"
    },
    {
    "nama": "Website Rental & Penjualan Alat Berat",
    "deskripsi": "Platform sewa dan beli alat berat secara online.",
    "gambar": "./assets/img/my-project/web-sewaAlatBerat.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link": "https://canva.link/0v41xsc5z4gf0dz",
    "kategori": "ecommerce"
    },
    // {
    // "nama": "Website Inventoris",
    // "deskripsi": "Terdapat fitur pencatatan keluar dan masuk barang hingga rekap laporan.",
    // "gambar": "./assets/img/my-project/web-inventoris.png",
    // "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    // "link" : null,
    // "kategori": "ecommerce"
    // },
    // {
    // "nama": "Website Penyediaan Barang",
    // "deskripsi": "Terdapat sistem manajemen penyediaan barang secara efisien.",
    // "gambar": "./assets/img/my-project/web-penyediaanBarang.png",
    // "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    // "link" : null,
    // "kategori": "ecommerce"
    // },
    {
    "nama": "Website MATERIAL",
    "deskripsi": "Aplikasi manajemen material dengan fitur stok, permintaan, dan pelaporan.",
    "gambar": "./assets/img/my-project/web-materialis.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : 'https://canva.link/abf0nxi95f00uei',
    "kategori": "ecommerce"
    },
    {
    "nama": "Website Monitoring Kinerja Karyawan",
    "deskripsi": "Terdapat sistem monitoring untuk menilai kinerja karyawan kontrak.",
    "gambar": "./assets/img/my-project/web-monitoringKinerja.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : "https://canva.link/0ic6fymwdw3j68b",
    "kategori": "management"
    },
    {
    "nama": "Website Absensi Digital",
    "deskripsi": "Sistem manajemen absensi digital dg penerapan Face Descriptor.",
    "gambar": "./assets/img/my-project/web-absensiDigital.png",
    "teknologi": ["Laravel", "MySQL", "Bootstrap"],
    "link" : "https://canva.link/2nv5zji91potnkm",
    "kategori": "school"
    }
];

const containerProjek = document.getElementById('project-container');

function tampilkanProjek(kategoriFilter = 'all') {
    containerProjek.innerHTML = '';

    daftarProjek.forEach(projek => {
    // Logika Filter
        if (kategoriFilter === 'all' || projek.kategori === kategoriFilter) {
        
            let badgeHTML = '';
            projek.teknologi.forEach(tech => {
            badgeHTML += `<span class="badge bg-secondary me-1">${tech}</span>`; // Ubah badge-tech ke standard bootstrap jika belum ada css-nya
            });

            const cardHTML = `
            <div class="col-md-4 project-item">
            <div class="card h-100 border-0 shadow-sm custom-card">
            <img src="${projek.gambar}" class="card-img-top" alt="${projek.nama}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h5 class="card-title fw-bold mb-0" style="color: var(--primary-color);">
                        ${projek.nama}
                    </h5>

                    ${projek.link ? `
                        <a href="${projek.link}" target="_blank" class="btn btn-outline-primary btn-sm text-decoration-none ms-2">
                            <i class="bi bi-globe"></i>
                        </a>
                    ` : ''}
                </div>
                <p class="card-text text-secondary small">${projek.deskripsi}</p>
                <div class="mt-3">
                    ${badgeHTML}
                </div>
            </div>
            </div>
            </div>
            `;
            containerProjek.innerHTML += cardHTML;
        }
    });
 }

    tampilkanProjek('all');


    // Tombol-tombol filter
    const tombolFilter = document.querySelectorAll('.btn-filter');
    
    tombolFilter.forEach(tombol => {
        tombol.addEventListener('click', function() {
        tombolFilter.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');
        
        // Value target filter
        const targetKategori = this.getAttribute('data-target');
        
        tampilkanProjek(targetKategori);
    });
});