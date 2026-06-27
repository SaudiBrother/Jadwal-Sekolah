# Jadwal Pelajaran — SMP Negeri 2 Bitung (versi PWA)

Hasil desain ulang dari proyek `Jadwal-Sekolah-main` lama: UI berbasis
kartu yang lebih simpel, simetris, dan akademis, UX yang lebih cepat
dipakai, serta siap diinstal sebagai **PWA** (Progressive Web App) di
Android maupun iOS.

## Cara menjalankan / menguji

Service worker (untuk dukungan offline & install) **butuh server**,
tidak bisa dibuka langsung lewat `file://`. Cara tercepat:

```bash
cd jadwal-sekolah-pwa
python3 -m http.server 8080
# lalu buka http://localhost:8080 di browser
```

Untuk dipasang secara nyata (agar tombol "Install Aplikasi" benar‑benar
aktif), unggah seluruh isi folder ini ke hosting apa pun yang mendukung
**HTTPS** (GitHub Pages, Netlify, Vercel, Firebase Hosting, cPanel,
dll.) — PWA install hanya berfungsi di atas HTTPS (atau localhost untuk
testing).

## Apa yang berubah dari versi lama

**Desain & UX**
- Semua bagian kini berbentuk kartu (`card`) dengan sudut, bayangan,
  dan padding yang konsisten — simetris dan rapi di semua ukuran layar
  (sudah dicek dari 320px hingga tablet).
- Font diganti ke font bawaan sistem (`-apple-system` di iOS, `Roboto`
  di Android) — tanpa request jaringan ke Google Fonts, jadi tampil
  instan dan tetap berfungsi penuh secara offline.
- Animasi "mengambang" yang terus‑menerus berjalan di versi lama
  dihapus; gerak sekarang hanya muncul saat ada perubahan tampilan
  (lebih "effortless", juga menghormati pengaturan *Reduce Motion*).
- **Breadcrumb** (Beranda › Kelas 7 › 7‑3 › Senin) di setiap halaman
  selain Beranda, bisa diklik untuk lompat langsung.
- **Kartu "Lanjutkan"** di Beranda: mengingat kelas/rombel terakhir
  yang dibuka. Jika hari ini hari sekolah (Senin–Jumat), kartu ini
  langsung melompat ke jadwal *hari ini* dalam satu ketukan.
- Pemilih hari kini menampilkan **tanggal asli minggu ini** (bukan
  ikon cuaca yang tidak ada hubungannya dengan hari), plus badge
  emas **"Hari ini"** otomatis pada hari yang sedang berjalan.
- Saat melihat jadwal *hari ini*, jam pelajaran yang sedang berlangsung
  ditandai otomatis dengan label **"Sekarang"**.
- Tombol kembali perangkat / gesture-back iOS kini berfungsi seperti
  aplikasi native (riwayat navigasi diatur lewat History API), bukan
  langsung keluar dari halaman.
- Bug kecil dari versi lama ikut diperbaiki: mata pelajaran "Projek"
  dulu tidak pernah mendapat warna chip karena salah ketik di kode
  (`Proyek` vs `Projek` pada data) — sekarang sudah cocok.

**PWA & Android/iOS**
- `manifest.json` lengkap dengan ikon 192px, 512px, dan dua ikon
  **maskable** (dengan *safe zone* ~40% di tengah agar logo tidak
  terpotong saat di-crop bentuk lingkaran/squircle oleh launcher
  Android) — sudah dicek dengan simulasi pemotongan lingkaran.
- `sw.js` (service worker): meng-cache seluruh app shell sehingga web
  ini tetap bisa dibuka **sepenuhnya offline** setelah kunjungan
  pertama.
- Tombol **"Install Aplikasi"**:
  - Android/Chrome/Edge/desktop → memicu prompt instal asli via
    `beforeinstallprompt`.
  - **iPhone/iPad** → karena iOS tidak mendukung instal otomatis lewat
    kode, tombol ini membuka tutorial bergambar "iPhone? Klik ini!"
    (Share → Add to Home Screen → Add).
  - Browser lain yang tidak mendukung keduanya → menampilkan panduan
    umum sebagai cadangan, bukan diam saja.
  - Otomatis tersembunyi begitu aplikasi sudah ter-install / sedang
    dibuka dalam mode standalone.
- Sentuhan khusus iOS dari catatan PDF sudah diterapkan: `safe-area-inset`
  (konten tidak tertutup notch/home indicator), `overscroll-behavior:
  none` (mematikan efek pantulan scroll Safari), serta meta tag
  `apple-mobile-web-app-*` dan `apple-touch-icon`.

**Tema terang/gelap**
- Saat pertama dibuka: mengikuti preferensi sistem (`prefers-color-scheme`).
  Jika tidak terdeteksi → **default ke tema terang/putih**.
- Begitu pengguna menekan tombol tema secara manual, pilihan itu
  **disimpan** (`localStorage`) dan akan selalu dipakai lagi — baik di
  tab browser maupun setelah diinstal sebagai PWA — sampai diubah lagi.
- Atribut tema diset sebelum render pertama (lewat skrip kecil di
  `<head>`), jadi tidak ada kedipan warna saat halaman dimuat.

**Kode lain dari catatan PDF**
- Reset global yang diminta sudah ditambahkan persis di awal
  `css/style.css`:
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  ```
  Kotak highlight biru semi‑transparan saat elemen disentuh di
  iOS/Android sudah hilang.
- Logo SVG sekolah yang dikirim sudah dirapikan (komentar dihapus,
  presisi angka dipadatkan ke 2 desimal, whitespace diminifikasi) —
  ukurannya turun ±11%. File aslinya didominasi oleh path hasil trace
  otomatis dengan ribuan titik koordinat, jadi pemadatan lebih dalam
  (seperti yang dijelaskan di catatan PDF soal SVGO) butuh alat seperti
  **SVGOMG** (svgomg.net) yang melakukan penyederhanaan jalur (path
  simplification) — alat itu tidak tersedia di lingkungan saya saat
  ini (tanpa akses internet), jadi langkah ini masih bisa dilakukan
  manual oleh Anda nanti jika ingin memperkecil lebih jauh.
- Logo tersebut sekarang tampil di halaman utama, tepat di atas nama
  sekolah, dan juga dijadikan basis seluruh ikon PWA (192/512/maskable/
  apple-touch-icon) — sudah diverifikasi tetap terbaca jelas bahkan
  saat di-crop jadi lingkaran oleh launcher Android.

## Struktur file

```
jadwal-sekolah-pwa/
├─ index.html
├─ manifest.json
├─ sw.js                  ← service worker (cache offline)
├─ assets/logo.svg        ← logo sekolah (sudah dirapikan)
├─ css/
│  ├─ style.css           ← semua desain, token warna, layout
│  └─ animations.css      ← animasi yang disengaja & secukupnya
├─ js/
│  ├─ data.js             ← data jadwal & fun facts (dipisah dari logika)
│  └─ app.js              ← seluruh logika aplikasi
└─ icons/                 ← ikon PWA hasil generate dari logo.svg
```

## Catatan

- Data jadwal & fun facts dipindahkan apa adanya dari versi lama —
  tidak ada perubahan isi/informasi, hanya format tampilan & lokasi
  filenya (kini di `js/data.js` agar terpisah dari logika di `js/app.js`).
- Warna per mata pelajaran sengaja dibuat lebih kalem/profesional
  dibanding versi lama, supaya selaras dengan nuansa "akademis" yang
  diminta, namun tetap mudah dibedakan satu sama lain di kedua tema.
