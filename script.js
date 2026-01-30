const kamus = {
  "aku": "saya",
  "gue": "saya",
  "gw": "saya",
  "kamu": "Anda",
  "lu": "Anda",
  "gpp": "tidak apa-apa",
  "ga": "tidak",
  "nggak": "tidak",
  "enggak": "tidak",
  "makasih": "terima kasih",
  "mksh": "terima kasih",
  "yaa": "ya",
  "kok": "",
  "dong": "",
  "deh": "",
  "tp": "tetapi",
  "trs": "terus",
  "yg": "yang",
  "aja": "saja",
  "udh": "sudah",
  "blm": "belum",
  "krn": "karena"
};

document.getElementById("prosesBtn").addEventListener("click", prosesTeks);
document.getElementById("copyBtn").addEventListener("click", salinHasil);

function prosesTeks() {
  const input = document.getElementById("inputText").value.trim();
  const output = document.getElementById("outputText");

  if (!input) {
    output.value = "⚠️ Silakan masukkan teks terlebih dahulu.";
    return;
  }

  let teks = input.toLowerCase();

  for (let kata in kamus) {
    const regex = new RegExp(`\\b${kata}\\b`, "gi");
    teks = teks.replace(regex, kamus[kata]);
  }

  teks = teks.replace(/\s+/g, " ").trim();
  teks = teks.charAt(0).toUpperCase() + teks.slice(1);

  output.value = teks;
}

function salinHasil() {
  const output = document.getElementById("outputText");
  if (!output.value) return;
  output.select();
  document.execCommand("copy");
  alert("✅ Teks berhasil disalin!");
}
