// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("components/navbar.html?v=" + new Date().getTime())
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });
});
