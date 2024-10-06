// Menangani submit form dan memberikan notifikasi alert
document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah refresh halaman
  alert("Survei telah dikirim. Terima kasih atas partisipasi Anda!");
});
