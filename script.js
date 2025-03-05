// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form validation for booking form
document
  .querySelector(".booking-form")
  ?.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const sessionType = document.getElementById("session-type").value;

    if (!name || !email || !phone || !date || !time || !sessionType) {
      e.preventDefault();
      alert("Please fill out all required fields.");
    }
  });
