const aturan = {
  "aku": "saya",
  "kamu": "Anda",
  "gpp": "tidak apa-apa",
  "ga": "tidak",
  "nggak": "tidak",
  "makasih": "terima kasih",
  "yaa": "ya",
  "kok": "",
  "tp": "tetapi"
};

document.getElementById("prosesBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value.trim();
  const output = document.getElementById("outputText");

  if (!input) {
    output.value = "⚠️ Silakan masukkan teks terlebih dahulu.";
    return;
  }

  let hasil = input.toLowerCase();

  for (let kata in aturan) {
    const regex = new RegExp(`\\b${kata}\\b`, "gi");
    hasil = hasil.replace(regex, aturan[kata]);
  }

  output.value = hasil.charAt(0).toUpperCase() + hasil.slice(1);
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const output = document.getElementById("outputText");
  if (!output.value) return;
  output.select();
  document.execCommand("copy");
  alert("✅ Hasil berhasil disalin!");
});
