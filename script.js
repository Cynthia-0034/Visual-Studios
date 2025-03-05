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
// JavaScript for Booking Form and Pop-Up
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("booking-form");
  const successPopup = document.getElementById("success-popup");
  const closePopup = document.querySelector(".close-popup");

  // Handle form submission
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Display the success pop-up
    successPopup.style.display = "flex";

    // Optional: Reset the form after submission
    bookingForm.reset();
  });

  // Close the pop-up when the close button is clicked
  closePopup.addEventListener("click", function () {
    successPopup.style.display = "none";
  });

  // Close the pop-up when clicking outside the pop-up content
  window.addEventListener("click", function (e) {
    if (e.target === successPopup) {
      successPopup.style.display = "none";
    }
  });
});
