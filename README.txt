SUSUNAN RUKUN SOLAT - PANDUAN PEMASANGAN
========================================

KANDUNGAN PAKEJ
- index.html            Halaman utama (pilih permainan dari sini)
- game-susun.html       Susun Rukun Solat
- game-bacaan.html      Padankan Bacaan Solat
- game-kuiz.html        Kuiz Dadu Solat
- imej-kartun/          Imej permainan (WebP)
- audio-bacaan/         Audio bacaan (MP3)
- LESEN.txt             Syarat penggunaan
- README.txt            Fail ini

HAD DEMO
1) Susun Rukun Solat
   - Cabaran 1 dan 2 (Niat, Qiyam) boleh dimainkan.
   - Imej cabaran 3 hingga 13 digantikan dengan ikon mangga.
   - Kad jawapan semuanya dipaparkan (tiada ikon mangga pada kad).
   - Kad jawapan tidak boleh diseret atau di-tap ke petak 3 hingga 13.

2) Padankan Bacaan Solat
   - Cabaran 1 dan 2 (Takbiratul Ihram, Rukuk) boleh dimainkan.
   - Imej cabaran 3 hingga 6 digantikan dengan ikon mangga.
   - Kad jawapan semuanya dipaparkan (tiada ikon mangga pada kad).
   - Kad jawapan tidak boleh diseret atau di-tap ke petak 3 hingga 6.

3) Kuiz Dadu Solat
   - 2 pusingan dibenarkan. Satu pusingan ialah setiap pemain melambung
     dadu sekali (2 pemain = 4 lambungan).
   - Selepas itu paparan "Tempoh Percubaan Tamat" muncul dengan butang
     Halaman Utama.

KEPERLUAN
- Pelayar moden: Chrome, Edge, Firefox, Safari (versi terkini).
- Peranti: komputer, tablet atau telefon.
- Internet TIDAK diperlukan selepas pakej diekstrak.

CARA MULA (CARA MUDAH)
1. Ekstrak (unzip) fail zip ke dalam satu folder.
2. Klik dua kali index.html.
3. Pilih permainan dan masukkan nama pemain.

CARA MULA (PELAYAN TEMPATAN, PILIHAN)
Jika ada masalah memainkan audio atau sijil, jalankan pelayan tempatan:
1. Buka terminal/command prompt di dalam folder yang diekstrak.
2. Jalankan:  python -m http.server 8080
3. Buka pelayar dan pergi ke:  http://localhost:8080

CARA MUAT NAIK KE HOSTING
Muat naik SEMUA fail dan folder di atas ke direktori yang sama di hosting statik
(contoh: Netlify, GitHub Pages, cPanel). Pastikan struktur folder dikekalkan.

PENYELESAIAN MASALAH
- Imej tidak kelihatan: pastikan folder imej-kartun/ berada di sebelah index.html.
- Audio bacaan tidak kedengaran: pastikan folder audio-bacaan/ wujud dan volum
  pelayar/peranti tidak dimatikan. Tekan butang 🔊 atau kad untuk mendengar.
- Sijil tidak dimuat turun: benarkan muat turun (download) dalam pelayar, dan
  elakkan membuka dalam paparan pratonton yang menyekat muat turun.


DASAR PRIVASI RINGKAS - SUSUNAN RUKUN SOLAT
===========================================
[DRAF. Semak sebelum digunakan.]

1. DATA YANG DISIMPAN
Permainan ini menyimpan data berikut DALAM PELAYAR anda sahaja (localStorage):
- nama pemain yang anda masukkan;
- kemajuan sesi permainan dan data untuk menjana sijil;
- tetapan kuiz (tahap).

2. DATA YANG DIHANTAR KE LUAR
Permainan ini TIDAK menghantar nama, skor atau sebarang data peribadi ke pelayan
luar. Tiada analitik atau pengiklanan pihak ketiga digunakan.

3. PADAM DATA
Anda boleh memadam data ini melalui tetapan pelayar (Clear site data / Kosongkan data
laman). Ini juga akan memadam kemajuan dan sijil yang disimpan.

4. KANAK-KANAK
Produk ini sesuai untuk kanak-kanak di bawah pengawasan ibu bapa atau guru.

5. PERUBAHAN DASAR
Sebarang perubahan akan dimaklumkan melalui nota versi.

NOTA VERSI - SUSUNAN RUKUN SOLAT
================================

Versi 1.0 (Tarikh: [isi tarikh])
- Halaman utama dengan tiga permainan: Susun Rukun, Padankan Bacaan, Kuiz Dadu.
- Sijil muat turun (PDF) selepas tamat permainan.
- Audio bacaan MP3 (6 bacaan) pada kad bacaan dan kad jawapan.
- Imej kartun disimpan secara tempatan; permainan boleh dimainkan tanpa internet.
- Pemasa: Susun Rukun 90 saat; Padankan Bacaan 60 saat.
