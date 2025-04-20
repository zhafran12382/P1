# WhatsApp Clone - React & Tailwind CSS

A simple WhatsApp-like web application built with React and Tailwind CSS without any backend. The app features a login page and a chat page with local state message storage. It is designed to be easily deployed on Netlify.

## Fitur

- Halaman login dengan username bebas dan password wajib "Ratubagus"
- Halaman chat sederhana dengan pesan yang disimpan secara lokal (state)
- Pesan pengguna tampil di kanan, pesan orang lain di kiri
- Animasi pesan masuk
- Styling modern dan bersih menggunakan Tailwind CSS
- Siap deploy ke Netlify dengan file `_redirects` untuk routing SPA

## Cara Deploy ke Netlify

1. Pastikan Anda sudah memiliki akun Netlify dan sudah login.

2. Build aplikasi React:

```bash
npm run build
```

3. Setelah build selesai, deploy folder `dist` ke Netlify.

4. Pastikan file `_redirects` sudah ada di folder `public` dengan isi:

```
/*    /index.html   200
```

File ini memastikan routing SPA bekerja dengan baik di Netlify.

5. Di Netlify, buat site baru dan pilih folder `dist` sebagai folder publish.

6. Deploy dan akses aplikasi Anda melalui URL yang disediakan Netlify.

## Cara Menjalankan Secara Lokal

1. Install dependencies:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

3. Buka browser dan akses `http://localhost:8000`

## Catatan

- Password login harus "Ratubagus" agar bisa masuk ke halaman chat.
- Tidak ada backend, semua data pesan disimpan secara lokal di state React.
- Gunakan browser modern untuk pengalaman terbaik.
