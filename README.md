# Link Hub — Perwakilan Ombudsman RI Provinsi Nusa Tenggara Timur

Landing page statis bergaya Linktree/Lintr.ee, siap digunakan pada GitHub Pages.

## Struktur

```text
ombudsman-linkhub/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo-ombudsman.png
    └── logo-ombudsman-transparent.png
```

## Mengganti tautan

Edit objek `LINKS` pada `script.js`, kemudian commit/push ke GitHub.

Contoh:

```javascript
penilaian2026: 'https://alamat-aplikasi-anda',
```

## Deploy ke GitHub Pages

1. Buat repository baru, misalnya `ombudsman-linkhub`.
2. Upload seluruh isi folder ini ke root repository.
3. Buka **Settings → Pages**.
4. Pilih **Deploy from a branch**.
5. Branch: `main` dan folder: `/ (root)`.
6. Klik **Save**.
7. Tunggu proses deployment selesai. URL umumnya:
   `https://USERNAME.github.io/ombudsman-linkhub/`

## Catatan

Halaman tidak menggunakan database, PHP, Apps Script, atau server. Seluruhnya HTML/CSS/JavaScript sehingga cocok untuk GitHub Pages.
