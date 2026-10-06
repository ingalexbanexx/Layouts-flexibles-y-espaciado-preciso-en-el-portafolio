document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-current-year]");
  year.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach((link) => {
    const linkPage = link.getAttribute("href")?.split("/").pop();

    if (linkPage === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    const status = document.createElement("p");
    status.className = "form-status";
    status.setAttribute("role", "status");
    contactForm.appendChild(status);

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent =
        "La consulta fue validada localmente. Para el envío real deberá conectarse este formulario con un servicio o backend institucional.";
      contactForm.reset();
    });
  }
});
