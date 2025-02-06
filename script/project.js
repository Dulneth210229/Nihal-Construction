const projectsData = [
  {
    id: 1,
    name: "Luxury Residential Complex",
    type: "ongoing",
    location: "Downtown, Metropolis",
    description:
      "A state-of-the-art residential complex featuring 200 luxury apartments.",
    startDate: "January 2024",
    estimatedCompletion: "December 2025",
    value: "$50 Million",
    image: "/api/placeholder/600/400",
    details: {
      architect: "Urban Design Studio",
      clientType: "Private Developer",
      constructionType: "High-Rise Residential",
    },
  },
  {
    id: 2,
    name: "Corporate Headquarters",
    type: "completed",
    location: "Tech Park, Innovation City",
    description:
      "Modern 10-story corporate headquarters for a leading tech company.",
    startDate: "March 2022",
    completionDate: "November 2023",
    value: "$75 Million",
    image: "/api/placeholder/600/400",
    details: {
      architect: "Future Designs Inc.",
      clientType: "Technology Corporation",
      constructionType: "Commercial Office",
    },
  },
  {
    id: 3,
    name: "Sustainable Community Center",
    type: "ongoing",
    location: "Green Valley, Eco-City",
    description:
      "Community center designed with advanced sustainable technologies.",
    startDate: "September 2023",
    estimatedCompletion: "August 2024",
    value: "$15 Million",
    image: "/api/placeholder/600/400",
    details: {
      architect: "Green Solutions Architects",
      clientType: "Municipal Government",
      constructionType: "Public Infrastructure",
    },
  },
  {
    id: 4,
    name: "Healthcare Research Facility",
    type: "completed",
    location: "Medical District, Science City",
    description:
      "Advanced medical research facility with cutting-edge laboratories.",
    startDate: "January 2022",
    completionDate: "June 2023",
    value: "$65 Million",
    image: "/api/placeholder/600/400",
    details: {
      architect: "Medical Innovations Design",
      clientType: "Research University",
      constructionType: "Medical Research Facility",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.getElementById("projects-grid");
  const projectModal = document.getElementById("project-modal");
  const modalDetails = document.getElementById("modal-details");
  const modalClose = document.querySelector(".modal-close");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderProjects(filter = "all") {
    projectsGrid.innerHTML = "";
    const filteredProjects =
      filter === "all"
        ? projectsData
        : projectsData.filter((project) => project.type === filter);

    filteredProjects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p>${project.location}</p>
                    <div class="project-details">
                        <span>${project.type.toUpperCase()}</span>
                        <button onclick="openProjectModal(${
                          project.id
                        })">View Details</button>
                    </div>
                </div>
            `;
      projectsGrid.appendChild(projectCard);
    });
  }

  function openProjectModal(projectId) {
    const project = projectsData.find((p) => p.id === projectId);
    modalDetails.innerHTML = `
            <h2>${project.name}</h2>
            <img src="${project.image}" alt="${
      project.name
    }" style="width: 100%; margin-bottom: 1rem;">
            <p>${project.description}</p>
            <div class="project-details">
                <p><strong>Location:</strong> ${project.location}</p>
                <p><strong>Project Type:</strong> ${project.type.toUpperCase()}</p>
                <p><strong>Value:</strong> ${project.value}</p>
                <p><strong>${
                  project.type === "ongoing"
                    ? "Estimated Completion"
                    : "Completion Date"
                }:</strong> 
                   ${
                     project.type === "ongoing"
                       ? project.estimatedCompletion
                       : project.completionDate
                   }</p>
            </div>
            <h3>Additional Details</h3>
            <div class="project-details">
                <p><strong>Architect:</strong> ${project.details.architect}</p>
                <p><strong>Client Type:</strong> ${
                  project.details.clientType
                }</p>
                <p><strong>Construction Type:</strong> ${
                  project.details.constructionType
                }</p>
            </div>
        `;
    projectModal.style.display = "flex";
  }

  window.openProjectModal = openProjectModal;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });

  modalClose.addEventListener("click", () => {
    projectModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      projectModal.style.display = "none";
    }
  });

  // Initial render
  renderProjects();
});
