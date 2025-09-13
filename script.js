// Fungsi untuk kirim data ke WhatsApp
function sendToWhatsApp(message) {
  const phoneNumber = "6285709518077"; // nomor tujuan (62 untuk Indonesia)
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// APK Premium form
document.getElementById("apkForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("apkEmail").value;
  const password = document.getElementById("apkPassword").value;
  const message = `Pembelian APK Premium (Alight Motion)\nEmail: ${email}\nPassword: ${password}`;
  sendToWhatsApp(message);
});

// Joki ML form
document.getElementById("mlForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const loginType = document.getElementById("mlLogin").value;
  const email = document.getElementById("mlEmail").value;
  const password = document.getElementById("mlPassword").value;
  const message = `Joki Mobile Legends\nLogin Via: ${loginType}\nEmail/Username: ${email}\nPassword: ${password}`;
  sendToWhatsApp(message);
});