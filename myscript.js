// Menangani pengiriman formulir
document.getElementById("ticketForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // alert notifikasi
  alert("Pesanan Anda Telah Terkirim, Terima kasih telah memesan di web kami");

  // Anda dapat mengatur ulang formulir setelah pengiriman secara opsional
  this.reset();

  //// Nonaktifkan tombol kirim lagi karena persyaratan harus diperiksa ulang
  document.getElementById("submit-btn").disabled = true;
});
