//mobile toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Get the modal
const modal = document.getElementById("serviceModal");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close-btn");

// Get all explore buttons
const exploreButtons = document.querySelectorAll(".explore-btn");

// Get modal title and description elements
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// Function to open the modal with service details
function openModal(title, description) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add click event listeners to all explore buttons
exploreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const serviceCard = button.closest(".service-card");
    const title = serviceCard.querySelector("h3").textContent;
    const description = serviceCard.querySelector("h6").textContent;
    openModal(title, description);
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
