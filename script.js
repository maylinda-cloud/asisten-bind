const input = document.getElementById("inputText");
const outputView = document.getElementById("outputView");
const hasilBox = document.getElementById("hasilBox");
const counter = document.getElementById("counter");

const kamus = {
  // singkatan umum
  "gpp": "tidak apa-apa",
  "ga": "tidak",
  "gak": "tidak",
  "nggak": "tidak",
  "tdk": "tidak",
  "tp": "tetapi",
  "tapi": "tetapi",
  "yg": "yang",
  "aja": "saja",
  "udh": "sudah",
  "sdh": "sudah",
  "blm": "belum",
  "krn": "karena",
  "dgn": "dengan",
  "dr": "dari",
  "jg": "juga",
  "kmrn": "kemarin",
  "skrg": "sekarang",
  "trs": "terus",
  "bs": "bisa",
  "bgt": "banget",
  "hrs": "harus",
  "pdhl": "padahal",
  "sm": "sama",
  "org": "orang",
  "dlm": "dalam",

  // kata santai → rapi
  "makasih": "terima kasih",
  "makasi": "terima kasih",
  "thx": "terima kasih",
  "thanks": "terima kasih",
  "sorry": "maaf",
  "pls": "tolong",
  "tolongin": "tolong",
  "bantuin": "membantu",

  // kata kerja santai
  "ngomong": "berbicara",
  "bilang": "mengatakan",
  "nanya": "bertanya",
  "jawab": "menjawab",
  "jelasin": "menjelaskan",
  "liat": "melihat",
  "denger": "mendengar",
  "pake": "menggunakan",
  "pikirin": "memikirkan",
  "kerjain": "mengerjakan",

  // ekspresi
  "capek": "lelah",
  "capek banget": "sangat lelah",
  "pusing": "bingung",
  "ribet": "rumit",
  "bingung banget": "sangat bingung",
  "ga ngerti": "tidak mengerti",
  "gatau": "tidak tahu",
  "ga tau": "tidak tahu",

  // kata informal lain
  "kok": "",
  "dong": "",
  "deh": "",
  "nih": "",
  "aja sih": "saja",
  "emang": "memang",
  "doang": "saja",

  // pronomina (opsional, tapi bikin rapi)
  "aku": "saya",
  "gue": "saya",
  "gw": "saya",
  "lu": "kamu",
  "loe": "kamu",
  "elo": "kamu"
};

input.addEventListener("input", () => {
  const teks = input.value.trim();
  if (!teks) {
    hasilBox.style.display = "none";
    return;
  }

  const hasil = perbaikiTeks(teks);
  outputView.innerHTML = hasil.teks;
  counter.innerText = `✨ ${hasil.jumlah} perbaikan diterapkan`;
  hasilBox.style.display = "block";
});

function perbaikiTeks(teks) {
  let jumlah = 0;
  let hasil = teks;

  for (let kata in kamus) {
    const regex = new RegExp("\\b" + kata + "\\b", "gi");
    if (regex.test(hasil)) {
      jumlah++;
      hasil = hasil.replace(
        regex,
        `<span class="mark">${kamus[kata]}</span>`
      );
    }
  }

  // huruf berlebihan (yaaa -> ya)
  hasil = hasil.replace(/([a-z])\1{2,}/gi, "$1$1");

  // kapital awal kalimat
  hasil = hasil.charAt(0).toUpperCase() + hasil.slice(1);

  return { teks: hasil, jumlah };
}

function salinHasil() {
  navigator.clipboard.writeText(outputView.innerText);
  alert("✅ Hasil berhasil disalin");
}
