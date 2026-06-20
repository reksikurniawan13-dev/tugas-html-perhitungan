function pesan() {
    let namaPelanggan = document.getElementById("namaPelanggan").value;
    let namaProduk = document.getElementById("namaProduk").value;
    let hargaProduk = Number(document.getElementById("hargaProduk").value);
    let jumlahPembelian = Number(document.getElementById("jumlahPembelian").value);

    let totalBelanja = hargaProduk * jumlahPembelian;
    let potongan = 0;

    if (totalBelanja >=400000) {
        potongan = 50000;
    }
    let totalBayar = totalBelanja - potongan;

    document.getElementById("hasil").innerHTML =
    "Invoice" + "<br>" +
    "Nama Pelanggan: " + namaPelanggan + "<br>" +
    "Nama Produk: " + namaProduk + "<br>" +
    "Total Belanja: " + totalBelanja.toLocaleString("id-ID") + "<br>" +
    "Potongan: Rp" + potongan.toLocaleString("id-ID") + "<br>" +
    "Total Bayar: Rp" + totalBayar.toLocaleString("id-ID");
}

function batal(){
    document.getElementById("hasil").innerHTML = "";
}

function reset(){
        document.getElementById("namaPelanggan").value = "";
    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("jumlahPembelian").value = "";
    document.getElementById("hasil").value = "";
}