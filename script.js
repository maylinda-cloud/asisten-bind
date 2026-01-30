const kamus = {
  "aku": "Saya",
  "gpp": "tidak apa-apa",
  "ga": "tidak",
  "nggak": "tidak",
  "tp": "tetapi",
  "makasih": "terima kasih",
  "yaa": "ya",
  "yg": "yang",
  "kalo": "kalau",
  "aja": "saja",
  "bgt": "banget",
  "trs": "terus",
  "tdk": "tidak",
  "krn": "karena",
  "dr": "dari",
  "utk": "untuk"
};

let highlightAktif = true;
let hasilBersih = "";

function prosesTeks() {
  const input = document.getElementById("inputText").value.trim();
  const hasilDiv = document.getElementById("hasil");
  const copyBtn = document.getElementById("copyBtn");

  if (!input) {
    hasilDiv.innerHTML = "⚠️ Masukkan teks terlebih dahulu.";
    copyBtn.style.display = "none";
    return;
  }

  const kata = input.split(/\s+/);
  let tampilan = [];
  let versiBenar = [];

  kata.forEach(k => {
    const low = k.toLowerCase();

    if (kamus[low]) {
      if (highlightAktif) {
        tampilan.push(`<span class="highlight">${k}</span>`);
      } else {
        tampilan.push(k);
      }
      versiBenar.push(kamus[low]);
    } else {
      tampilan.push(k);
      versiBenar.push(k);
    }
  });

  hasilBersih = versiBenar.join(" ");

  hasilDiv.innerHTML = `
    <div><strong>Hasil sorotan:</strong></div>
    <div>${tampilan.join(" ")}</div>
    <hr>
    <div><strong>Versi yang dapat digunakan:</strong></div>
    <div>${hasilBersih}</div>
  `;

  copyBtn.style.display = "block";
}

function salinHasil() {
  navigator.clipboard.writeText(hasilBersih);
  alert("✅ Teks berhasil disalin!");
}

function toggleHighlight() {
  highlightAktif = !highlightAktif;
  prosesTeks();
}
