// script.js
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

function tampilkanHasil(akhir, predikat, status) {
    const el = document.getElementById("hasil");
    el.innerHTML = `Nilai Akhir: <b>${akhir.toFixed(2)}</b><br>Predikat: <b>${predikat}</b><br>Status: <b>${status}</b>`;
}

function hitungNilai() {
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    if (isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
        alert("Isi semua nilai dulu!");
        return;
    }

    const akhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Tidak Lulus";

    tampilkanHasil(akhir, predikat, status);
}