// Menghitung Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tentukanStatus(nilai) {
    return nilai >= 60 ? "Lulus" : "Belum lulus";
}

function validasiNilai(nilai) {
    return !isNaN(nilai) && nilai >= 0 && nilai <= 100;
}

function tampilkanHasil(akhir, predikat, status) {
    const el = document.getElementById("hasil");
    el.style.display = "block";
    el.innerHTML = `
    Nilai Akhir: <b>${akhir.toFixed(2)}</b><br>
    Predikat: <b>${predikat}</b><br>
    Status: <b>${status}</b>
  `;
    console.log("Nilai akhir:", akhir.toFixed(2));
    console.log("Predikat:", tentukanPredikat(akhir));
    console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");
}

function prosesNilai() {
    const tugas = parseFloat(document.getElementById("tugas").value);
    const uts = parseFloat(document.getElementById("uts").value);
    const uas = parseFloat(document.getElementById("uas").value);

    if (!validasiNilai(tugas) || !validasiNilai(uts) || !validasiNilai(uas)) {
        alert("Error: Semua nilai harus diisi angka 0-100!");
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = tentukanStatus(akhir);

    tampilkanHasil(akhir, predikat, status);
}
