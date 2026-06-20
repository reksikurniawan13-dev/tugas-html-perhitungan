# Tugas HTML Perhitungan

Project ini adalah halaman web sederhana untuk menghitung total belanja pelanggan pada toko/toserba. Aplikasi dibuat menggunakan HTML, CSS, dan JavaScript.

## Fitur

* Input nama pelanggan
* Input nama produk
* Input harga produk
* Input jumlah pembelian
* Menghitung total belanja
* Memberikan potongan Rp50.000 jika total belanja minimal Rp400.000
* Menampilkan hasil dalam bentuk invoice
* Tombol batal untuk menghapus hasil
* Tombol kosongkan untuk menghapus semua input dan hasil

## Teknologi yang Digunakan

* HTML
* CSS
* JavaScript

## Struktur File

```text
tugas-html-perhitungan/
├── index.html
├── script.js
└── README.md
```

## Cara Menjalankan

1. Download atau clone repository ini.
2. Buka file `index.html` menggunakan browser.
3. Isi data pelanggan, produk, harga, dan jumlah pembelian.
4. Klik tombol `Pesan` untuk menampilkan hasil perhitungan.

## Ketentuan Diskon

Jika total belanja pelanggan lebih dari atau sama dengan Rp400.000, maka pelanggan akan mendapatkan potongan sebesar Rp50.000.

```javascript
if (totalBelanja >= 400000) {
    potongan = 50000;
}
```

## Author

Rexy Kurniawan
