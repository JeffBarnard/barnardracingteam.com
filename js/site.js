// Mobile navigation toggle
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
}

// Bike gallery carousel: arrows scroll by one image width
document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel__track");
  const step = () => {
    const first = track.querySelector("img");
    return first ? first.getBoundingClientRect().width + 12 : track.clientWidth;
  };

  carousel.querySelector(".carousel__btn--prev")?.addEventListener("click", () => {
    track.scrollBy({ left: -step() });
  });

  carousel.querySelector(".carousel__btn--next")?.addEventListener("click", () => {
    track.scrollBy({ left: step() });
  });
});
