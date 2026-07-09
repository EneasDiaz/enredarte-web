const opportunities = [
  {
    slug: "galeria-palermo",
    title: "Galería Palermo",
    fullTitle: "Galería Palermo busca artistas visuales.",
    city: "CABA",
    neighborhood: "Palermo",
    discipline: ["pintura", "fotografía", "ilustración"],
    detailDiscipline: "Pintura / Fotografía / Ilustración",
    description: "Busca 5 pintores y 2 fotógrafos para muestra colectiva de fin de semana.",
    detailDescription:
      "Una muestra colectiva para pintura, fotografía e ilustración. Ya hay artistas confirmados y faltan dos lugares para cerrar el grupo.",
    date: "14 AGO",
    time: "19 a 23 h",
    cost: "$40.000",
    totalCost: "$240.000",
    confirmed: 4,
    totalSpots: 6,
    availableSpots: 2,
    spots: "2 cupos",
  },
  {
    slug: "cafe-san-telmo",
    title: "Café San Telmo",
    fullTitle: "Café San Telmo busca ilustradores.",
    city: "CABA",
    neighborhood: "San Telmo",
    discipline: ["ilustración", "literatura"],
    detailDiscipline: "Ilustración / Literatura",
    description: "Convocatoria para intervenir paredes y activar lecturas en vivo.",
    detailDescription:
      "Un café con paredes disponibles para una muestra íntima de ilustradores, lecturas y obra gráfica.",
    date: "22 AGO",
    time: "18 a 22 h",
    cost: "$30.000",
    totalCost: "$120.000",
    confirmed: 2,
    totalSpots: 4,
    availableSpots: 2,
    spots: "2 cupos",
  },
  {
    slug: "patio-cultural-guemes",
    title: "Patio Cultural Güemes",
    fullTitle: "Patio Cultural Güemes busca artistas escénicos.",
    city: "Córdoba",
    neighborhood: "Güemes",
    discipline: ["música", "performance"],
    detailDiscipline: "Música / Performance",
    description: "Espacio abierto para artistas escénicos, músicos y performers.",
    detailDescription:
      "Un patio cultural abre una noche para música, performance y cruces entre disciplinas en vivo.",
    date: "31 AGO",
    time: "20 a 00 h",
    cost: "$36.000",
    totalCost: "$180.000",
    confirmed: 3,
    totalSpots: 5,
    availableSpots: 2,
    spots: "2 cupos",
  },
  {
    slug: "libreria-del-rio",
    title: "Librería del Río",
    fullTitle: "Librería del Río abre convocatoria editorial.",
    city: "Rosario",
    neighborhood: "Centro",
    discipline: ["fotografía", "ilustración"],
    detailDiscipline: "Fotografía / Ilustración",
    description: "Muestra editorial con obras pequeñas, prints y venta directa.",
    detailDescription:
      "Una librería independiente propone una muestra editorial con obras pequeñas, prints, fotografía e ilustración.",
    date: "06 SEP",
    time: "17 a 21 h",
    cost: "$21.000",
    totalCost: "$105.000",
    confirmed: 1,
    totalSpots: 5,
    availableSpots: 4,
    spots: "4 cupos",
  },
  {
    slug: "estudio-abierto",
    title: "Estudio Abierto",
    fullTitle: "Estudio Abierto busca artistas para una noche de procesos.",
    city: "CABA",
    neighborhood: "Villa Crespo",
    discipline: ["pintura", "ilustración", "performance"],
    detailDiscipline: "Pintura / Ilustración / Performance",
    description: "Noche de estudio abierto para mezclar procesos, obra y encuentro.",
    detailDescription:
      "Una noche de estudio abierto para artistas que quieran mostrar procesos, obra terminada y activar conversación con público.",
    date: "13 SEP",
    time: "19 a 23 h",
    cost: "$29.000",
    totalCost: "$145.000",
    confirmed: 4,
    totalSpots: 5,
    availableSpots: 1,
    spots: "1 cupo",
  },
  {
    slug: "terraza-norte",
    title: "Terraza Norte",
    fullTitle: "Terraza Norte busca músicos y fotógrafos.",
    city: "CABA",
    neighborhood: "Belgrano",
    discipline: ["música", "fotografía"],
    detailDiscipline: "Música / Fotografía",
    description: "Evento de tarde con música en vivo, visuales y mini expo fotográfica.",
    detailDescription:
      "Una terraza abre una convocatoria para una tarde de música en vivo, visuales y fotografía.",
    date: "20 SEP",
    time: "18 a 22 h",
    cost: "$32.000",
    totalCost: "$192.000",
    confirmed: 0,
    totalSpots: 6,
    availableSpots: 6,
    spots: "6 cupos",
  },
];

const header = document.querySelector("[data-header]");
const nav = document.querySelector(".main-nav");
const menuButton = document.querySelector("[data-menu-button]");
const container = document.querySelector("[data-opportunities]");
const filterForm = document.querySelector("[data-filter-form]");

function renderCards(items) {
  if (!container) return;

  container.innerHTML = "";

  if (!items.length) {
    container.innerHTML = `<article class="opportunity-card"><h3>No encontramos convocatorias.</h3><p>Probá con otra disciplina o ciudad.</p></article>`;
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "opportunity-card";
    card.innerHTML = `
      <div class="card-top">
        <span>${item.city}</span>
        <span>${item.date}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="card-meta">
        <div class="meta-row"><span>disciplinas</span><strong>${item.discipline.join(" / ")}</strong></div>
        <div class="meta-row"><span>costo por artista</span><strong>${item.cost}</strong></div>
        <div class="meta-row"><span>disponibles</span><strong>${item.spots}</strong></div>
      </div>
      <a class="button button-secondary" href="oportunidad.html?o=${item.slug}">
        Ver convocatoria
      </a>
    `;
    container.appendChild(card);
  });
}

function applyFilters(event) {
  event.preventDefault();
  const formData = new FormData(filterForm);
  const discipline = formData.get("discipline");
  const city = formData.get("city");

  const filtered = opportunities.filter((item) => {
    const matchDiscipline = discipline === "todas" || item.discipline.includes(discipline);
    const matchCity = city === "todas" || item.city === city;
    return matchDiscipline && matchCity;
  });

  renderCards(filtered);
  document.querySelector("#oportunidades").scrollIntoView({ behavior: "smooth" });
}

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
  });
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (filterForm && container) {
  filterForm.addEventListener("submit", applyFilters);
  renderCards(opportunities);
}

const applyModal = document.querySelector("[data-apply-modal]");
const openApplyButtons = document.querySelectorAll("[data-open-apply]");
const closeApplyButtons = document.querySelectorAll("[data-close-apply]");
const applyForm = document.querySelector("[data-apply-form]");
const formSuccess = document.querySelector("[data-form-success]");

function openApplyModal() {
  if (!applyModal) return;

  applyModal.classList.add("is-open");
  applyModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeApplyModal() {
  if (!applyModal) return;

  applyModal.classList.remove("is-open");
  applyModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openApplyButtons.forEach((button) => {
  button.addEventListener("click", openApplyModal);
});

closeApplyButtons.forEach((button) => {
  button.addEventListener("click", closeApplyModal);
});

if (applyForm) {
  applyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(applyForm);
    const application = Object.fromEntries(formData.entries());

    console.log("Nueva postulación:", application);

    applyForm.reset();

    if (formSuccess) {
      formSuccess.classList.add("is-visible");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeApplyModal();
  }
});

const spaceModal = document.querySelector("[data-space-modal]");
const openSpaceButtons = document.querySelectorAll("[data-open-space]");
const closeSpaceButtons = document.querySelectorAll("[data-close-space]");
const spaceForm = document.querySelector("[data-space-form]");
const spaceSuccess = document.querySelector("[data-space-success]");

function openSpaceModal() {
  if (!spaceModal) return;

  spaceModal.classList.add("is-open");
  spaceModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (spaceSuccess) {
    spaceSuccess.classList.remove("is-visible");
  }
}

function closeSpaceModal() {
  if (!spaceModal) return;

  spaceModal.classList.remove("is-open");
  spaceModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openSpaceButtons.forEach((button) => {
  button.addEventListener("click", openSpaceModal);
});

closeSpaceButtons.forEach((button) => {
  button.addEventListener("click", closeSpaceModal);
});

if (spaceForm) {
  spaceForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(spaceForm);
    const spaceData = Object.fromEntries(formData.entries());

    const selectedDisciplines = formData.getAll("disciplines");
    spaceData.disciplines = selectedDisciplines;

    console.log("Nuevo espacio:", spaceData);

    spaceForm.reset();

    if (spaceSuccess) {
      spaceSuccess.classList.add("is-visible");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSpaceModal();
  }
});

const artistModal = document.querySelector("[data-artist-modal]");
const openArtistButtons = document.querySelectorAll("[data-open-artist]");
const closeArtistButtons = document.querySelectorAll("[data-close-artist]");
const artistForm = document.querySelector("[data-artist-form]");
const artistSuccess = document.querySelector("[data-artist-success]");

function openArtistModal() {
  if (!artistModal) return;

  artistModal.classList.add("is-open");
  artistModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (artistSuccess) {
    artistSuccess.classList.remove("is-visible");
  }
}

function closeArtistModal() {
  if (!artistModal) return;

  artistModal.classList.remove("is-open");
  artistModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openArtistButtons.forEach((button) => {
  button.addEventListener("click", openArtistModal);
});

closeArtistButtons.forEach((button) => {
  button.addEventListener("click", closeArtistModal);
});

if (artistForm) {
  artistForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(artistForm);
    const artistData = Object.fromEntries(formData.entries());

    console.log("Nuevo artista:", artistData);

    artistForm.reset();

    if (artistSuccess) {
      artistSuccess.classList.add("is-visible");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeArtistModal();
  }
});

const opportunityTitle = document.querySelector("[data-opportunity-title]");
const opportunityDescription = document.querySelector("[data-opportunity-description]");
const opportunityStatus = document.querySelector("[data-opportunity-status]");
const opportunitySpots = document.querySelector("[data-opportunity-spots]");
const opportunityPlace = document.querySelector("[data-opportunity-place]");
const opportunityCity = document.querySelector("[data-opportunity-city]");
const opportunityDate = document.querySelector("[data-opportunity-date]");
const opportunityTime = document.querySelector("[data-opportunity-time]");
const opportunityDiscipline = document.querySelector("[data-opportunity-discipline]");
const opportunityTotalCost = document.querySelector("[data-opportunity-total-cost]");
const opportunityArtistCost = document.querySelector("[data-opportunity-artist-cost]");
const opportunityAvailable = document.querySelector("[data-opportunity-available]");

function getOpportunityFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("o");

  if (!slug) return opportunities[0];

  return opportunities.find((item) => item.slug === slug) || opportunities[0];
}

function renderOpportunityDetail() {
  if (!opportunityTitle) return;

  const opportunity = getOpportunityFromUrl();

  document.title = `${opportunity.title} | enredARTE`;

  opportunityTitle.textContent = opportunity.fullTitle || opportunity.title;
  opportunityDescription.textContent =
  opportunity.detailDescription || opportunity.description;
  opportunityStatus.textContent = `${opportunity.confirmed} de ${opportunity.totalSpots} confirmados`;
  opportunitySpots.textContent = `Faltan ${opportunity.availableSpots} artistas para confirmar la muestra.`;

  opportunityPlace.textContent = opportunity.title.split(" busca ")[0];
  opportunityCity.textContent = opportunity.city;
  opportunityDate.textContent = opportunity.date;
  opportunityTime.textContent = opportunity.time;
  opportunityDiscipline.textContent =
  opportunity.detailDiscipline || opportunity.discipline.join(" / ");
  opportunityTotalCost.textContent = opportunity.totalCost;
  opportunityArtistCost.textContent = opportunity.cost;
  opportunityAvailable.textContent = `${opportunity.availableSpots} disponibles`;
}

renderOpportunityDetail();