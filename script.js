    function pesan() {
        let namaPelanggan = document.getElementById("namaPelanggan").value;
        let namaProduk = document.getElementById("namaProduk").value;
        let hargaProduk = Number(document.getElementById("hargaProduk").value);
        let jumlahPembelian = Number(document.getElementById("jumlahPembelian").value);

        let totalBelanja = hargaProduk * jumlahPembelian;
        let potongan = 0;

        if (totalBelanja >= 400000) {
            potongan = 50000;
        }

        let totalBayar = totalBelanja - potongan;

        document.getElementById("hasil").innerHTML =
            "<div class='invoice'>" +
                "<h3>Invoice</h3>" +

                "<div class='field'>" +
                    "<label>Nama Pelanggan</label>" +
                    "<div>" + namaPelanggan + "</div>" +
                "</div>" +

                "<div class='field'>" +
                    "<label>Nama Produk</label>" +
                    "<div>" + namaProduk + "</div>" +
                "</div>" +

                "<div class='field'>" +
                    "<label>Total Belanja</label>" +
                    "<div>Rp " + totalBelanja.toLocaleString("id-ID") + "</div>" +
                "</div>" +

                "<div class='field'>" +
                    "<label>Potongan</label>" +
                    "<div>Rp " + potongan.toLocaleString("id-ID") + "</div>" +
                "</div>" +

                "<div class='field'>" +
                    "<label>Total Bayar</label>" +
                    "<div>Rp " + totalBayar.toLocaleString("id-ID") + "</div>" +
                "</div>" +
            "</div>";
    }

    function batal() {
        document.getElementById("hasil").innerHTML = "";
    }

    function reset() {
        document.getElementById("namaPelanggan").value = "";
        document.getElementById("namaProduk").value = "";
        document.getElementById("hargaProduk").value = "";
        document.getElementById("jumlahPembelian").value = "";
        document.getElementById("hasil").innerHTML = "";
    }