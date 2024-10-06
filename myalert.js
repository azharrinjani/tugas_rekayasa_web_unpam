document.getElementById("registrationForm").addEventListener("submit", function (e) {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    e.preventDefault();
    alert("Password dan konfirmasi password tidak cocok!");
  }
});
