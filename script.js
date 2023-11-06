function hitungTukaran() {
    var uangInput = document.getElementById("uangInput").value;
    var hasilElement = document.getElementById("hasil");
    var tukaran = {};

    if (uangInput % 25 !== 0) {
        hasilElement.innerHTML = "Nilai uang harus dalam kelipatan 25.";
        return;
    }

    var pecahan = [1000, 500, 100, 50, 25];

    for (var i = 0; i < pecahan.length; i++) {
        var jumlah = Math.floor(uangInput / pecahan[i]);
        if (jumlah > 0) {
            tukaran[pecahan[i]] = jumlah;
            uangInput = uangInput % pecahan[i];
        }
    }

    var hasilText = "Tukaran uang:<br>";
    for (var key in tukaran) {
        hasilText += tukaran[key] + " buah pecahan Rp" + key + "<br>";
    }

    hasilElement.innerHTML = hasilText;
}
