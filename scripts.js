function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMessage = document.getElementById("form-status");

    if (!name || !email || !message) {
      statusMessage.textContent = "All fields are required!";
      statusMessage.style.color = "red";
      return;
    }

    statusMessage.textContent = "Message sent successfully!";
    statusMessage.style.color = "green";

    // Simulate sending form (replace this with actual backend handling)
    setTimeout(() => {
      document.getElementById("contact-form").reset();
      statusMessage.textContent = "";
    }, 2000);
  });
