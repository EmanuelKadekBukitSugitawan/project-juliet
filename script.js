// 1. Penanda apakah kado sudah terbuka
let kadoTerbuka = false;

// 2. Daftar teks doa yang akan muncul bergantian
const daftarDoa = [
    "BABY GIRL 💖",
    "I LOVE YOU SO MUCH 🥰",
    "SEHAT SELALU 🤲",
    "PANJANG UMUR 🎂",
    "WISH YOU ALL THE BEST ✨"
];

// Mengambil elemen dari HTML
const giftBox = document.getElementById('gift');
const titleText = document.querySelector('.title');

// 3. Logika ketika kado diklik pertama kali
giftBox.addEventListener('click', () => {
    if (!kadoTerbuka) {
        kadoTerbuka = true;
        
        // Sembunyikan kado dan petunjuk
        giftBox.style.display = 'none';
        document.querySelector('.instruction').style.display = 'none';
        
        // Jalankan rentetan doa dan kembang api otomatis
        jalankanEfekOtomatis();
    }
});

// 4. Logika klik di mana saja setelah kado terbuka
window.addEventListener('click', (event) => {
    if (kadoTerbuka) {
        // Ambil posisi klik untuk memunculkan kembang api
        let xProposional = event.clientX / window.innerWidth;
        let yProposional = event.clientY / window.innerHeight;
        
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: xProposional, y: yProposional }
        });
    }
});

// 5. Fungsi untuk menjalankan efek otomatis sesuai video
function jalankanEfekOtomatis() {
    let index = 0;

    // Fungsi untuk memunculkan teks dan kembang api secara berkala
    const intervalDoa = setInterval(() => {
        if (index < daftarDoa.length) {
            // Ubah teks judul menjadi doa
            titleText.innerText = daftarDoa[index];
            
            // Letupkan kembang api otomatis di tengah layar
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff69b4', '#00ffea', '#ffee00']
            });

            index++;
        } else {
            // Jika semua doa sudah muncul, hentikan perulangan
            clearInterval(intervalDoa);
            
            // Teks penutup
            titleText.innerText = "Happy Birthday Sayangku! 💜";
        }
    }, 2000); // Teks berganti setiap 2 detik (2000 milidetik)
}
