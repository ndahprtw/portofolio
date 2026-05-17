// 1. Tambahkan properti 'kategori' sesuai pengelompokan filter
 const daftarProjek = [
  {
 "nama": "Website Pengenalan Sekolah",
 "deskripsi": "Dilengkapi fitur SPMB berbasis web, pengenalan sekolah, pinjam buku bagi siswa.",
 "gambar": "./assets/img/my-project/web-SPMB.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "school"
  },
  {
 "nama": "Website Penginapan Hotel",
 "deskripsi": "Dilengkapi sewa kamar, reservasi online, dan informasi hotel.",
 "gambar": "./assets/img/my-project/web-penginapan.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "management"
  },
  {
 "nama": "Website E-Arsip Tanah",
 "deskripsi": "Terdapat sistem pengelolaan arsip tanah digital.",
 "gambar": "./assets/img/my-project/web-arsipTanah.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "management"
  },
  {
 "nama": "E-Commerce Skincare",
 "deskripsi": "Terdapat fitur belanja online, pembayaran hingga review produk (testimoni).",
 "gambar": "./assets/img/my-project/web-skincare.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "ecommerce"
  },
  {
 "nama": "Website E-Majalah",
 "deskripsi": "Terdapat CRUD artikel dengan berbagai pilihan layout artikel.",
 "gambar": "./assets/img/my-project/web-eMajalah.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "management"
  },
  {
 "nama": "Website E-Raport",
 "deskripsi": "Terdapat rekap nilai harian, penilaian akhir hingga cetak raport.",
 "gambar": "./assets/img/my-project/web-eRaport.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "school"
  },
  {
 "nama": "Website Budidaya Ikan",
 "deskripsi": "Terdapat sistem kelola budidaya ikan hingga laporan bulanan.",
 "gambar": "./assets/img/my-project/web-budidayaIkan.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "management"
  },
  {
 "nama": "Website Informasi Geografis",
 "deskripsi": "Terdapat sistem informasi geografis berbasis peta digital.",
 "gambar": "./assets/img/my-project/web-informasiGeografis.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "management"
  },
  {
 "nama": "Website Peminjaman Alat Berat",
 "deskripsi": "Terdapat sistem peminjaman alat berat, pembayaran hingga riwayat pemesanan.",
 "gambar": "./assets/img/my-project/web-sewaAlatBerat.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "management"
  },
  {
 "nama": "Website Inventoris",
 "deskripsi": "Terdapat fitur pencatatan keluar dan masuk barang hingga rekap laporan.",
 "gambar": "./assets/img/my-project/web-inventoris.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "ecommerce"
  },
  {
 "nama": "Website Penyediaan Barang",
 "deskripsi": "Terdapat sistem manajemen penyediaan barang secara efisien.",
 "gambar": "./assets/img/my-project/web-penyediaanBarang.png",
 "teknologi": ["Laravel", "MySQL", "Bootstrap"],
 "kategori": "ecommerce"
  }
 ];

 const containerProjek = document.getElementById('project-container');

 // 2. Fungsi Utama untuk merender Card ke HTML (Bisa menerima filter)
 function tampilkanProjek(kategoriFilter = 'all') {
  // Kosongkan container terlebih dahulu setiap kali filter berubah
  containerProjek.innerHTML = '';

  daftarProjek.forEach(projek => {
 // Logika Filter: Jika filter 'all' ATAU kategori projek cocok dengan filter, maka munculkan
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
    <h5 class="card-title fw-bold" style="color: var(--primary-color);">${projek.nama}</h5>
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

 // 3. Jalankan fungsi pertama kali (Default: Muncul semua)
 tampilkanProjek('all');

 // 4. Logika Event Listener untuk tombol-tombol filter
 const tombolFilter = document.querySelectorAll('.btn-filter');
 
 tombolFilter.forEach(tombol => {
  tombol.addEventListener('click', function() {
 // Hapus class 'active' dari semua tombol filter
 tombolFilter.forEach(btn => btn.classList.remove('active'));
 
 // Tambahkan class 'active' ke tombol yang sedang diklik
 this.classList.add('active');
 
 // Ambil value target filter (all / school / ecommerce / management)
 const targetKategori = this.getAttribute('data-target');
 
 // Panggil kembali fungsi render berdasarkan kategori terpilih
 tampilkanProjek(targetKategori);
  });
 });