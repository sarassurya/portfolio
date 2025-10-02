function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
  .then(() => alert("Message sent successfully!"))
  .catch(err => alert("Failed to send message."));
