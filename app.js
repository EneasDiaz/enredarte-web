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

opportunities.unshift(...getSavedOpportunities());

const confirmedArtistsByOpportunity = {
  "galeria-palermo": [
    { name: "Lucía M.", discipline: "Pintura" },
    { name: "Tomás R.", discipline: "Fotografía" },
    { name: "Camila S.", discipline: "Ilustración" },
    { name: "Nico A.", discipline: "Pintura" },
  ],

  "cafe-san-telmo": [
    { name: "Mora L.", discipline: "Ilustración" },
    { name: "Julián P.", discipline: "Literatura" },
  ],

  "patio-cultural-guemes": [
    { name: "Nina V.", discipline: "Música" },
    { name: "Fede R.", discipline: "Performance" },
    { name: "Sol C.", discipline: "Danza" },
  ],

  "libreria-del-rio": [
    { name: "Ana B.", discipline: "Fotografía" },
  ],

  "estudio-abierto": [
    { name: "Rocío T.", discipline: "Pintura" },
    { name: "Luca F.", discipline: "Ilustración" },
    { name: "Martín E.", discipline: "Performance" },
    { name: "Julia N.", discipline: "Pintura" },
  ],

  "terraza-norte": [],
};

function getBaseConfirmedArtists(slug) {
  return confirmedArtistsByOpportunity[slug] || [];
}

function getSavedArtists() {
  const savedArtists = localStorage.getItem("enredarteArtists");

  if (!savedArtists) return [];

  return JSON.parse(savedArtists);
}

function saveArtist(artist) {
  const savedArtists = getSavedArtists();

  savedArtists.unshift(artist);

  localStorage.setItem("enredarteArtists", JSON.stringify(savedArtists));
}

function getSavedSpaces() {
  const savedSpaces = localStorage.getItem("enredarteSpaces");

  if (!savedSpaces) return [];

  return JSON.parse(savedSpaces);
}

function saveSpace(space) {
  const savedSpaces = getSavedSpaces();

  savedSpaces.unshift(space);

  localStorage.setItem("enredarteSpaces", JSON.stringify(savedSpaces));
}

function getSavedOpportunities() {
  const savedOpportunities = localStorage.getItem("enredarteOpportunities");

  if (!savedOpportunities) return [];

  return JSON.parse(savedOpportunities);
}

function saveOpportunity(opportunity) {
  const savedOpportunities = getSavedOpportunities();

  savedOpportunities.unshift(opportunity);

  localStorage.setItem(
    "enredarteOpportunities",
    JSON.stringify(savedOpportunities)
  );
}

function getCurrentOpportunitySlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("o") || "galeria-palermo";
}

function getSavedApplications() {
  const savedApplications = localStorage.getItem("enredarteApplications");

  if (!savedApplications) return {};

  return JSON.parse(savedApplications);
}

function getApplicationsByOpportunity(slug) {
  const savedApplications = getSavedApplications();

  return savedApplications[slug] || [];
}

function saveApplication(slug, application) {
  const savedApplications = getSavedApplications();

  if (!savedApplications[slug]) {
    savedApplications[slug] = [];
  }

  savedApplications[slug].unshift(application);

  localStorage.setItem(
    "enredarteApplications",
    JSON.stringify(savedApplications)
  );
}

function getSavedApprovedArtists() {
  const savedApprovedArtists = localStorage.getItem("enredarteApprovedArtists");

  if (!savedApprovedArtists) return {};

  return JSON.parse(savedApprovedArtists);
}

function getApprovedArtistsByOpportunity(slug) {
  const savedApprovedArtists = getSavedApprovedArtists();

  return savedApprovedArtists[slug] || [];
}

function saveApprovedArtist(slug, artist) {
  const savedApprovedArtists = getSavedApprovedArtists();

  if (!savedApprovedArtists[slug]) {
    savedApprovedArtists[slug] = [];
  }

  const alreadyApproved = savedApprovedArtists[slug].some(
    (item) => item.createdAt === artist.createdAt
  );

  if (alreadyApproved) return;

  savedApprovedArtists[slug].unshift(artist);

  localStorage.setItem(
    "enredarteApprovedArtists",
    JSON.stringify(savedApprovedArtists)
  );
}

function getSavedRejectedApplications() {
  const savedRejectedApplications = localStorage.getItem(
    "enredarteRejectedApplications"
  );

  if (!savedRejectedApplications) return {};

  return JSON.parse(savedRejectedApplications);
}

function getRejectedApplicationsByOpportunity(slug) {
  const savedRejectedApplications = getSavedRejectedApplications();

  return savedRejectedApplications[slug] || [];
}

function saveRejectedApplication(slug, application) {
  const savedRejectedApplications = getSavedRejectedApplications();

  if (!savedRejectedApplications[slug]) {
    savedRejectedApplications[slug] = [];
  }

  const alreadyRejected = savedRejectedApplications[slug].some(
    (item) => item.createdAt === application.createdAt
  );

  if (alreadyRejected) return;

  savedRejectedApplications[slug].unshift(application);

  localStorage.setItem(
    "enredarteRejectedApplications",
    JSON.stringify(savedRejectedApplications)
  );
}

function removeApprovedArtist(slug, createdAt) {
  const savedApprovedArtists = getSavedApprovedArtists();

  if (!savedApprovedArtists[slug]) return;

  savedApprovedArtists[slug] = savedApprovedArtists[slug].filter(
    (artist) => artist.createdAt !== createdAt
  );

  localStorage.setItem(
    "enredarteApprovedArtists",
    JSON.stringify(savedApprovedArtists)
  );
}

function removeRejectedApplication(slug, createdAt) {
  const savedRejectedApplications = getSavedRejectedApplications();

  if (!savedRejectedApplications[slug]) return;

  savedRejectedApplications[slug] = savedRejectedApplications[slug].filter(
    (application) => application.createdAt !== createdAt
  );

  localStorage.setItem(
    "enredarteRejectedApplications",
    JSON.stringify(savedRejectedApplications)
  );
}

function getOpportunityRuntimeState(opportunity) {
  const approvedArtists = getApprovedArtistsByOpportunity(opportunity.slug);

  const confirmed = Math.min(
    opportunity.confirmed + approvedArtists.length,
    opportunity.totalSpots
  );

  const available = Math.max(opportunity.totalSpots - confirmed, 0);

  return {
    confirmed,
    available,
    isFull: available === 0,
  };
}

function createSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const featuredArtists = [
  {
    name: "Lucía Molina",
    discipline: "Pintura",
    city: "CABA",
    neighborhood: "Palermo",
    bio: "Trabaja con pintura abstracta, texturas y formatos medianos.",
    instagram: "@luciamolina.art",
    initials: "LM",
  },
  {
    name: "Tomás Ruiz",
    discipline: "Fotografía",
    city: "CABA",
    neighborhood: "San Telmo",
    bio: "Fotografía urbana, retrato documental y escenas nocturnas.",
    instagram: "@tomasruizfoto",
    initials: "TR",
  },
  {
    name: "Camila Sosa",
    discipline: "Ilustración",
    city: "Rosario",
    neighborhood: "Centro",
    bio: "Ilustración editorial, prints y obra gráfica en pequeño formato.",
    instagram: "@camilasosa.draws",
    initials: "CS",
  },
  {
    name: "Nico Arce",
    discipline: "Performance",
    city: "Córdoba",
    neighborhood: "Güemes",
    bio: "Cruza movimiento, música y arte vivo en espacios no convencionales.",
    instagram: "@nicoarce.perform",
    initials: "NA",
  },
];

featuredArtists.unshift(...getSavedArtists());

const featuredSpaces = [
  {
    name: "Galería Palermo",
    type: "Galería",
    city: "CABA",
    neighborhood: "Palermo",
    capacity: "80 personas",
    disciplines: "Pintura / Fotografía / Ilustración",
    availability: "Viernes y sábados",
    price: "$240.000 por jornada",
    description: "Sala blanca, recorrido simple y buena circulación para muestras visuales.",
  },
  {
    name: "Café San Telmo",
    type: "Café",
    city: "CABA",
    neighborhood: "San Telmo",
    capacity: "45 personas",
    disciplines: "Ilustración / Literatura / Música acústica",
    availability: "Jueves por la tarde",
    price: "$120.000 por jornada",
    description: "Espacio cálido para muestras pequeñas, lecturas y obra gráfica.",
  },
  {
    name: "Patio Cultural Güemes",
    type: "Patio",
    city: "Córdoba",
    neighborhood: "Güemes",
    capacity: "120 personas",
    disciplines: "Música / Performance / Danza",
    availability: "Sábados a la noche",
    price: "$180.000 por jornada",
    description: "Patio abierto para cruces escénicos, música en vivo y encuentros culturales.",
  },
];

featuredSpaces.unshift(...getSavedSpaces());

const header = document.querySelector("[data-header]");
const nav = document.querySelector(".main-nav");
const menuButton = document.querySelector("[data-menu-button]");
const container = document.querySelector("[data-opportunities]");
const filterForm = document.querySelector("[data-filter-form]");

function renderCards(items) {
  if (!container) return;

  container.innerHTML = "";

  if (!items.length) {
    container.innerHTML = `
      <article class="opportunity-card">
        <h3>No encontramos convocatorias.</h3>
        <p>Probá con otra disciplina o ciudad.</p>
      </article>
    `;
    return;
  }

  items.forEach((item) => {
    const state = getOpportunityRuntimeState(item);

    const statusLabel = state.isFull
      ? "convocatoria completa"
      : state.available === 1
        ? "1 cupo disponible"
        : `${state.available} cupos disponibles`;

    const buttonLabel = state.isFull
      ? "Ver convocatoria completa"
      : "Ver convocatoria";

    const disciplineText = Array.isArray(item.discipline)
      ? item.discipline.join(" / ")
      : item.discipline;

    const card = document.createElement("article");

    card.className = `opportunity-card ${state.isFull ? "is-full" : ""}`;

    card.innerHTML = `
      <div class="card-top">
        <span>${item.city}</span>
        <span>${item.date}</span>
      </div>

      <h3>${item.title}</h3>

      <p>${item.description}</p>

      <div class="card-meta">
        <div class="meta-row">
          <span>disciplinas</span>
          <strong>${disciplineText}</strong>
        </div>

        <div class="meta-row">
          <span>costo por artista</span>
          <strong>${item.cost}</strong>
        </div>

        <div class="meta-row">
          <span>estado</span>
          <strong>${statusLabel}</strong>
        </div>
      </div>

      <a class="button button-secondary" href="oportunidad.html?o=${item.slug}">
        ${buttonLabel}
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

  const opportunity = getOpportunityFromUrl();
  const state = getOpportunityRuntimeState(opportunity);

  if (state.isFull) {
    alert("Esta convocatoria ya completó sus cupos.");
    return;
  }

  applyModal.classList.add("is-open");
  applyModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (formSuccess) {
    formSuccess.classList.remove("is-visible");
  }
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

    const opportunity = getOpportunityFromUrl();
    const state = getOpportunityRuntimeState(opportunity);

    if (state.isFull) {
      alert("Esta convocatoria ya completó sus cupos.");
      closeApplyModal();
      return;
    }

    const formData = new FormData(applyForm);
    const applicationData = Object.fromEntries(formData.entries());

    const slug = getCurrentOpportunitySlug();

    const newApplication = {
      name: applicationData.name,
      discipline: applicationData.discipline,
      portfolio: applicationData.portfolio,
      message: applicationData.message,
      createdAt: new Date().toISOString(),
    };

    console.log("Nueva postulación:", newApplication);

    saveApplication(slug, newApplication);
    renderApplications();

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

    const newSpace = {
      name: spaceData.spaceName,
      type: spaceData.spaceType,
      city: spaceData.location,
      neighborhood: "nuevo espacio",
      capacity: spaceData.capacity,
      disciplines:
        selectedDisciplines.length > 0
          ? selectedDisciplines.join(" / ")
          : "Disciplinas abiertas",
      availability: spaceData.availability || "A coordinar",
      price: spaceData.price || "A consultar",
      description:
        spaceData.description ||
        "Espacio abierto a recibir propuestas artísticas y culturales.",
      contact: spaceData.contact,
    };

    console.log("Nuevo espacio:", newSpace);

    featuredSpaces.unshift(newSpace);
    saveSpace(newSpace);
    renderFeaturedSpaces();

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

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}



if (artistForm) {
  artistForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(artistForm);
    const artistData = Object.fromEntries(formData.entries());

    const newArtist = {
      name: artistData.artistName,
      discipline: artistData.discipline,
      city: artistData.location,
      neighborhood: "perfil nuevo",
      bio:
        artistData.bio ||
        `Artista de ${artistData.discipline.toLowerCase()} buscando nuevos espacios para mostrar su obra.`,
      instagram: artistData.instagram || artistData.portfolio || "portfolio pendiente",
      initials: getInitials(artistData.artistName),
    };

    console.log("Nuevo artista:", newArtist);

    featuredArtists.unshift(newArtist);
    saveArtist(newArtist);
    renderFeaturedArtists();

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

const artistGrid = document.querySelector("[data-artist-grid]");

function renderFeaturedArtists() {
  if (!artistGrid) return;

  artistGrid.innerHTML = featuredArtists
    .map(
      (artist) => `
        <article class="artist-card">
          <div class="artist-avatar" aria-hidden="true">
            ${artist.initials}
          </div>

          <div class="artist-card-content">
            <p class="section-label">${artist.discipline}</p>

            <h3>${artist.name}</h3>

            <p>${artist.bio}</p>

            <div class="artist-meta">
              <span>${artist.neighborhood}, ${artist.city}</span>
              <span>${artist.instagram}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

renderFeaturedArtists();

const spaceGrid = document.querySelector("[data-space-grid]");

function renderFeaturedSpaces() {
  if (!spaceGrid) return;

  spaceGrid.innerHTML = featuredSpaces
    .map(
      (space) => `
        <article class="space-card">
          <div class="space-card-top">
            <p class="section-label">${space.type}</p>
            <h3>${space.name}</h3>
            <p>${space.description}</p>
          </div>

          <div class="space-card-info">
            <div>
              <span>ubicación</span>
              <strong>${space.neighborhood}, ${space.city}</strong>
            </div>

            <div>
              <span>capacidad</span>
              <strong>${space.capacity}</strong>
            </div>

            <div>
              <span>disciplinas</span>
              <strong>${space.disciplines}</strong>
            </div>

            <div>
              <span>disponibilidad</span>
              <strong>${space.availability || "A coordinar"}</strong>
            </div>

            <div>
              <span>costo</span>
              <strong>${space.price || "A consultar"}</strong>
            </div>
          </div>
          <div class="space-card-actions">
            <button
              class="button button-secondary"
              type="button"
              data-open-create-opportunity
              data-space-name="${space.name}"
              data-space-location="${space.neighborhood}, ${space.city}"
              data-space-price="${space.price}"
            >
              Crear convocatoria
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

renderFeaturedSpaces();

const createOpportunityModal = document.querySelector(
  "[data-create-opportunity-modal]"
);
const createOpportunityForm = document.querySelector(
  "[data-create-opportunity-form]"
);
const closeCreateOpportunityButtons = document.querySelectorAll(
  "[data-close-create-opportunity]"
);
const createOpportunitySpaceInput = document.querySelector(
  "[data-create-opportunity-space]"
);
const createOpportunityLocationInput = document.querySelector(
  "[data-create-opportunity-location]"
);
const createOpportunitySuccess = document.querySelector(
  "[data-create-opportunity-success]"
);

function openCreateOpportunityModal(space = {}) {
  if (!createOpportunityModal) return;

  createOpportunityModal.classList.add("is-open");
  createOpportunityModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (createOpportunitySpaceInput && space.name) {
    createOpportunitySpaceInput.value = space.name;
  }

  if (createOpportunityLocationInput && space.location) {
    createOpportunityLocationInput.value = space.location;
  }

  if (createOpportunitySuccess) {
    createOpportunitySuccess.classList.remove("is-visible");
  }
}

function closeCreateOpportunityModal() {
  if (!createOpportunityModal) return;

  createOpportunityModal.classList.remove("is-open");
  createOpportunityModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (spaceGrid) {
  spaceGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-create-opportunity]");

    if (!button) return;

    openCreateOpportunityModal({
      name: button.dataset.spaceName,
      location: button.dataset.spaceLocation,
      price: button.dataset.spacePrice,
    });
  });
}

closeCreateOpportunityButtons.forEach((button) => {
  button.addEventListener("click", closeCreateOpportunityModal);
});

if (createOpportunityForm) {
  createOpportunityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(createOpportunityForm);
    const data = Object.fromEntries(formData.entries());

    const totalSpots = Number(data.totalSpots);
    const confirmed = Number(data.confirmed);
    const availableSpots = Math.max(totalSpots - confirmed, 0);

    const disciplineList = data.disciplines
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean);

    const newOpportunity = {
      slug: createSlug(`${data.spaceName}-${data.title}-${Date.now()}`),
      title: data.spaceName,
      fullTitle: `${data.spaceName} ${data.title}.`,
      city: data.location,
      neighborhood: "nuevo espacio",
      discipline: disciplineList,
      detailDiscipline: disciplineList
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" / "),
      description: data.description,
      detailDescription: data.description,
      date: data.date,
      time: data.time,
      cost: data.artistCost,
      totalCost: data.totalCost,
      confirmed,
      totalSpots,
      availableSpots,
      spots: `${availableSpots} cupos`,
    };

    console.log("Nueva convocatoria:", newOpportunity);

    opportunities.unshift(newOpportunity);
    saveOpportunity(newOpportunity);
    renderCards(opportunities);

    createOpportunityForm.reset();

    if (createOpportunitySuccess) {
      createOpportunitySuccess.classList.add("is-visible");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCreateOpportunityModal();
  }
});

const applicationsList = document.querySelector("[data-applications-list]");
const applicationsCount = document.querySelector("[data-applications-count]");

function renderApplications() {
  if (!applicationsList) return;

  const slug = getCurrentOpportunitySlug();
  const applications = getApplicationsByOpportunity(slug);
  const approvedArtists = getApprovedArtistsByOpportunity(slug);
  const rejectedApplications = getRejectedApplicationsByOpportunity(slug);

  const visibleApplications = applications.filter((application) => {
    const isRejected = rejectedApplications.some(
      (item) => item.createdAt === application.createdAt
    );

    return !isRejected;
  });

  if (applicationsCount) {
    const label =
      visibleApplications.length === 1
        ? "1 postulación"
        : `${visibleApplications.length} postulaciones`;

    applicationsCount.textContent = label;
  }

  if (visibleApplications.length === 0) {
    applicationsList.innerHTML = `
      <p class="empty-state">
        Todavía no hay postulaciones para esta convocatoria.
      </p>
    `;

    return;
  }

  applicationsList.innerHTML = visibleApplications
    .map((application) => {
      const isApproved = approvedArtists.some(
        (artist) => artist.createdAt === application.createdAt
      );

      return `
        <article class="application-card ${isApproved ? "is-approved" : ""}">
          <div>
            <h3>${application.name}</h3>

            <div class="application-meta">
              <span>${application.discipline}</span>
              <span>${application.portfolio}</span>
            </div>
          </div>

          ${
            application.message
              ? `<p>“${application.message}”</p>`
              : `<p>Sin mensaje adicional.</p>`
          }

          <div class="application-actions">
            ${
              isApproved
                ? `<span class="application-status">aprobada</span>`
                : `<span class="application-status">pendiente de revisión</span>`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

renderApplications();

const confirmedArtistsList = document.querySelector("[data-confirmed-artists-list]");

function renderBaseConfirmedArtists() {
  if (!confirmedArtistsList) return;

  const opportunity = getOpportunityFromUrl();
  const baseArtists = getBaseConfirmedArtists(opportunity.slug);

  if (baseArtists.length === 0 && opportunity.confirmed === 0) {
    confirmedArtistsList.innerHTML = `
      <p class="empty-state">
        Todavía no hay artistas confirmados.
      </p>
    `;
    return;
  }

  const missingConfirmedCount = Math.max(
    opportunity.confirmed - baseArtists.length,
    0
  );

  const placeholderArtists = Array.from(
    { length: missingConfirmedCount },
    (_, index) => ({
      name: `Artista confirmado ${index + 1}`,
      discipline: "Disciplina a confirmar",
    })
  );

  const artistsToRender = [...baseArtists, ...placeholderArtists];

  confirmedArtistsList.innerHTML = artistsToRender
    .map(
      (artist) => `
        <div>
          <strong>${artist.name}</strong>
          <span>${artist.discipline}</span>
        </div>
      `
    )
    .join("");
}

renderBaseConfirmedArtists();

const approvedArtistsList = document.querySelector("[data-approved-artists-list]");

function renderApprovedArtists() {
  if (!approvedArtistsList) return;

  const slug = getCurrentOpportunitySlug();
  const approvedArtists = getApprovedArtistsByOpportunity(slug);

  if (approvedArtists.length === 0) {
    approvedArtistsList.innerHTML = "";
    return;
  }

  approvedArtistsList.innerHTML = approvedArtists
    .map(
      (artist) => `
        <article class="approved-artist-card">
          <strong>${artist.name}</strong>
          <span>${artist.discipline} · ${artist.portfolio}</span>
        </article>
      `
    )
    .join("");
}

renderApprovedArtists();

function updateOpportunityStatusWithApprovals() {
  if (!opportunityStatus || !opportunitySpots || !opportunityAvailable) return;

  const opportunity = getOpportunityFromUrl();
  const state = getOpportunityRuntimeState(opportunity);

  opportunityStatus.textContent = `${state.confirmed} de ${opportunity.totalSpots} confirmados`;

  opportunitySpots.textContent = state.isFull
    ? "La muestra ya completó sus cupos."
    : `Faltan ${state.available} artistas para confirmar la muestra.`;

  opportunityAvailable.textContent =
    state.available === 1
      ? "1 disponible"
      : `${state.available} disponibles`;

  const applyButtons = document.querySelectorAll("[data-open-apply]");

  applyButtons.forEach((button) => {
    if (state.isFull) {
      button.textContent = "Cupos completos";
      button.disabled = true;
      button.classList.add("is-disabled");
    } else {
      button.textContent = "Quiero sumarme";
      button.disabled = false;
      button.classList.remove("is-disabled");
    }
  });
}

updateOpportunityStatusWithApprovals();



const adminList = document.querySelector("[data-admin-list]");
const adminSummary = document.querySelector("[data-admin-summary]");

function getAllApplications() {
  const savedApplications = getSavedApplications();

  return Object.values(savedApplications).flat();
}

function getAllApprovedArtists() {
  const savedApprovedArtists = getSavedApprovedArtists();

  return Object.values(savedApprovedArtists).flat();
}

function getAllRejectedApplications() {
  const savedRejectedApplications = getSavedRejectedApplications();

  return Object.values(savedRejectedApplications).flat();
}

function renderAdminSummary() {
  if (!adminSummary) return;

  const totalApplications = getAllApplications().length;
const totalApproved = getAllApprovedArtists().length;
const totalRejected = getAllRejectedApplications().length;

const pendingApplications = Math.max(
  totalApplications - totalApproved - totalRejected,
  0
);

  adminSummary.innerHTML = `
  <article class="admin-stat">
    <span>postulaciones</span>
    <strong>${totalApplications}</strong>
  </article>

  <article class="admin-stat">
    <span>aprobadas</span>
    <strong>${totalApproved}</strong>
  </article>

  <article class="admin-stat">
    <span>rechazadas</span>
    <strong>${totalRejected}</strong>
  </article>

  <article class="admin-stat">
    <span>pendientes</span>
    <strong>${pendingApplications}</strong>
  </article>
`;
}

function renderAdminDashboard() {
  if (!adminList) return;

  adminList.innerHTML = opportunities
    .map((opportunity) => {
      const applications = getApplicationsByOpportunity(opportunity.slug);
      const approvedArtists = getApprovedArtistsByOpportunity(opportunity.slug);
      const rejectedApplications = getRejectedApplicationsByOpportunity(
        opportunity.slug
      );

      const confirmedWithApprovals = Math.min(
        opportunity.confirmed + approvedArtists.length,
        opportunity.totalSpots
      );

      const availableWithApprovals = Math.max(
        opportunity.totalSpots - confirmedWithApprovals,
        0
      );

      return `
        <article class="admin-opportunity">
          <div class="admin-opportunity-header">
            <div>
              <p class="section-label">${opportunity.city}</p>
              <h2>${opportunity.fullTitle || opportunity.title}</h2>
            </div>

            <div class="admin-opportunity-meta">
              <span>${confirmedWithApprovals} de ${opportunity.totalSpots} confirmados</span>
              <span>${availableWithApprovals} cupos disponibles</span>
              <span>${applications.length} postulaciones</span>
            </div>
          </div>

          <div class="admin-applications">
            ${
              applications.length === 0
                ? `<p class="empty-state">No hay postulaciones todavía.</p>`
                : applications
                    .map((application) => {
                      const isApproved = approvedArtists.some(
                        (artist) => artist.createdAt === application.createdAt
                      );
                      const isRejected = rejectedApplications.some(
                        (item) => item.createdAt === application.createdAt
                      );

                      return `
                        <article class="admin-application">
                          <div class="admin-application-top">
                            <div>
                              <h3>${application.name}</h3>

                              <div class="application-meta">
                                <span>${application.discipline}</span>
                                <span>${application.portfolio}</span>
                              </div>
                            </div>

                            ${
                              isApproved
                                ? `<div class="admin-actions">
                                    <span class="application-status">aprobada</span>

                                    <button
                                      class="button button-secondary"
                                      type="button"
                                      data-admin-reset
                                      data-opportunity-slug="${opportunity.slug}"
                                      data-application-created-at="${application.createdAt}"
                                    >
                                      Volver a pendiente
                                    </button>
                                  </div>`
                                : isRejected
                                  ? `<div class="admin-actions">
                                      <span class="application-status">rechazada</span>

                                      <button
                                        class="button button-secondary"
                                        type="button"
                                        data-admin-reset
                                        data-opportunity-slug="${opportunity.slug}"
                                        data-application-created-at="${application.createdAt}"
                                      >
                                        Volver a pendiente
                                      </button>
                                    </div>`
                                  : `<div class="admin-actions">
                                      <button
                                        class="button button-secondary"
                                        type="button"
                                        data-admin-approve
                                        data-opportunity-slug="${opportunity.slug}"
                                        data-application-created-at="${application.createdAt}"
                                      >
                                        Aprobar
                                      </button>

                                      <button
                                        class="button button-secondary"
                                        type="button"
                                        data-admin-reject
                                        data-opportunity-slug="${opportunity.slug}"
                                        data-application-created-at="${application.createdAt}"
                                      >
                                        Rechazar
                                      </button>
                                    </div>`
                            }
                          </div>

                          ${
                            application.message
                              ? `<p>“${application.message}”</p>`
                              : `<p>Sin mensaje adicional.</p>`
                          }
                        </article>
                      `;
                    })
                    .join("")
            }
          </div>
        </article>
      `;
    })
    .join("");
}

if (adminList) {
  renderAdminSummary();
  renderAdminDashboard();

  adminList.addEventListener("click", (event) => {
  const approveButton = event.target.closest("[data-admin-approve]");
  const rejectButton = event.target.closest("[data-admin-reject]");
  const resetButton = event.target.closest("[data-admin-reset]");

  if (resetButton) {
    const slug = resetButton.dataset.opportunitySlug;
    const createdAt = resetButton.dataset.applicationCreatedAt;

    removeApprovedArtist(slug, createdAt);
    removeRejectedApplication(slug, createdAt);

    renderAdminSummary();
    renderAdminDashboard();

    return;
  }

  if (rejectButton) {
    const slug = rejectButton.dataset.opportunitySlug;
    const createdAt = rejectButton.dataset.applicationCreatedAt;
    const applications = getApplicationsByOpportunity(slug);

    const application = applications.find(
      (item) => item.createdAt === createdAt
    );

    if (!application) return;

    saveRejectedApplication(slug, application);

    renderAdminSummary();
    renderAdminDashboard();

    return;
  }

  if (!approveButton) return;

  const slug = approveButton.dataset.opportunitySlug;
  const createdAt = approveButton.dataset.applicationCreatedAt;
  const applications = getApplicationsByOpportunity(slug);
  const opportunity = opportunities.find((item) => item.slug === slug);
  const approvedArtists = getApprovedArtistsByOpportunity(slug);

  if (!opportunity) return;

  const availableSpots = Math.max(
    opportunity.availableSpots - approvedArtists.length,
    0
  );

  if (availableSpots === 0) {
    alert("Esta convocatoria ya completó sus cupos.");
    return;
  }

  const application = applications.find(
    (item) => item.createdAt === createdAt
  );

  if (!application) return;

  saveApprovedArtist(slug, application);

  renderAdminSummary();
  renderAdminDashboard();
});
}

const resetDemoButton = document.querySelector("[data-reset-demo]");

if (resetDemoButton) {
  resetDemoButton.addEventListener("click", () => {
    const confirmReset = confirm(
      "¿Seguro que querés borrar artistas, espacios, convocatorias y postulaciones de prueba?"
    );

    if (!confirmReset) return;

    localStorage.removeItem("enredarteArtists");
    localStorage.removeItem("enredarteSpaces");
    localStorage.removeItem("enredarteOpportunities");
    localStorage.removeItem("enredarteApplications");
    localStorage.removeItem("enredarteApprovedArtists");
    localStorage.removeItem("enredarteRejectedApplications");

    window.location.reload();
  });
}