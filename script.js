document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      alert(`You clicked on: ${img.alt}`);
      // Optional: add lightbox here
    });
  });

  // Example filter logic (you can hook buttons to this)
  function showUpcomingOnly() {
    document.querySelector(".upcoming-events").style.display = "block";
    document.querySelector(".past-events").style.display = "none";
  }

  function showAllEvents() {
    document.querySelector(".upcoming-events").style.display = "block";
    document.querySelector(".past-events").style.display = "block";
  }

  // Expose globally if you want to call from buttons
  window.showUpcomingOnly = showUpcomingOnly;
  window.showAllEvents = showAllEvents;
});
