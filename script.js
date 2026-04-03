// Mengambil elemen kado dari HTML
const giftBox = document.getElementById('gift');

// Menambahkan fungsi ketika kado diklik
giftBox.addEventListener('click', () => {
    // 1. Sembunyikan kado dan teks petunjuk
    giftBox.style.display = 'none';
    document.querySelector('.instruction').style.display = 'none';
    
    // 2. Ubah judul menjadi lebih personal
    document.querySelector('.title').innerText = "Selamat Ulang Tahun Sayang! 🎉";
    
    // 3. Panggil fungsi kembang api (akan kita buat kodenya)
    buatKembangApi();
});

// Fungsi dasar untuk membuat kembang api
function buatKembangApi() {
    // Kita akan isi logika kembang api di sini
    alert('Kado dibuka! Kembang api muncul! 🎆');
}
