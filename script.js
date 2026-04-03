// Mengambil elemen kado dan teks dari HTML
const giftBox = document.getElementById('gift');
const titleText = document.querySelector('.title');
const instructionText = document.querySelector('.instruction');

// Variabel untuk menandai apakah kado sudah dibuka
let kadoTerbuka = false;

// Mendengarkan klik di seluruh area layar
window.addEventListener('click', (event) => {
    
    if (!kadoTerbuka) {
        // --- LOGIKA KLIK PERTAMA (Membuka Kado) ---
        
        // Sembunyikan kado dan petunjuk
        giftBox.style.display = 'none';
        instructionText.style.display = 'none';
        
        // Ubah judul menjadi ucapan
        titleText.innerText = "Selamat Ulang Tahun Sayang! 🎉";
        
        // Beri letupan kembang api pertama di tengah layar
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        // Tandai bahwa kado sudah terbuka
        kadoTerbuka = true;
        
    } else {
        // --- LOGIKA KLIK SELANJUTNYA (Kembang Api di Titik Klik) ---
        
        // Menghitung posisi klik secara proporsional (nilai antara 0 sampai 1)
        let xProposional = event.clientX / window.innerWidth;
        let yProposional = event.clientY / window.innerHeight;
        
        // Memunculkan kembang api di titik yang diklik
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: xProposional, y: yProposional },
            colors: ['#ff69b4', '#00ffea', '#ffee00', '#ff0055'] // Variasi warna warni
        });
    }
});
