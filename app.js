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

function getCurrentUser() {
  const currentUser = localStorage.getItem("enredarteCurrentUser");

  if (!currentUser) return null;

  return JSON.parse(currentUser);
}

function setCurrentUser(user) {
  localStorage.setItem("enredarteCurrentUser", JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem("enredarteCurrentUser");
}

function updateHomeSessionCtas() {
  const currentUser = getCurrentUser();

  const artistCtas = document.querySelectorAll("[data-artist-session-cta]");
  const spaceCtas = document.querySelectorAll("[data-space-session-cta]");

  if (currentUser && currentUser.type === "artist") {
    artistCtas.forEach((button) => {
      button.textContent = "Ir a mi panel";
      button.removeAttribute("data-open-artist");
      button.addEventListener("click", () => {
        window.location.href = "panel-artista.html";
      });
    });
  }

  if (currentUser && currentUser.type === "space") {
    spaceCtas.forEach((button) => {
      button.textContent = "Ir a mi panel";
      button.removeAttribute("data-open-space");
      button.addEventListener("click", () => {
        window.location.href = "panel-espacio.html";
      });
    });
  }
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

function getPendingSpaces() {
  return getSavedSpaces().filter((space) => space.status === "pending");
}

function approveSpace(spaceId) {
  const savedSpaces = getSavedSpaces();

  const updatedSpaces = savedSpaces.map((space) => {
    if (space.id !== spaceId) return space;

    return {
      ...space,
      status: "approved",
    };
  });

  localStorage.setItem("enredarteSpaces", JSON.stringify(updatedSpaces));
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

function getArtistPublicProfileHref(artist) {
  if (!artist) return "";

  const artistName = artist.name || "";
  const artistPortfolio = artist.portfolio || artist.instagram || "";

  const publicArtist = featuredArtists.find((profile) => {
    const sameName =
      artistName && createSlug(profile.name) === createSlug(artistName);

    const samePortfolio =
      artistPortfolio &&
      (profile.portfolio === artistPortfolio ||
        profile.instagram === artistPortfolio);

    return sameName || samePortfolio;
  });

  if (!publicArtist) return "";

  return `perfil-artista.html?a=${createSlug(publicArtist.name)}`;
}

function renderArtistPublicName(artist) {
  const href = getArtistPublicProfileHref(artist);

  if (!href) {
    return `<strong>${artist.name}</strong>`;
  }

  return `
    <a class="profile-inline-link" href="${href}">
      <strong>${artist.name}</strong>
      <span aria-hidden="true">↗</span>
    </a>
  `;
}

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

const savedSpaces = getSavedSpaces();
const approvedSavedSpaces = savedSpaces.filter(
  (space) => space.status === "approved"
);

featuredSpaces.unshift(...approvedSavedSpaces);

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

      <h3>${item.fullTitle || item.title}</h3>

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
let pendingApplyAfterArtist = false;

function fillApplyFormWithCurrentArtist() {
  if (!applyForm) return;

  const currentArtist = getPrototypeCurrentArtist();

  if (!currentArtist) return;

  if (applyForm.elements.name) {
    applyForm.elements.name.value = currentArtist.name || "";
  }

  if (applyForm.elements.discipline) {
    applyForm.elements.discipline.value = currentArtist.discipline || "";
  }

  if (applyForm.elements.portfolio) {
    applyForm.elements.portfolio.value =
      currentArtist.portfolio || currentArtist.instagram || "";
  }
}

function openApplyModal() {
  if (!applyModal) return;

  const opportunity = getOpportunityFromUrl();
  const state = getOpportunityRuntimeState(opportunity);

  if (state.isFull) {
    alert("Esta convocatoria ya completó sus cupos.");
    return;
  }

  if (!hasArtistProfileCreated()) {
    pendingApplyAfterArtist = true;

    alert(
      "Para sumarte a una convocatoria primero necesitás crear tu perfil de artista."
    );

    openArtistModal();

    return;
  }

  if (applyForm) {
    applyForm.reset();
    fillApplyFormWithCurrentArtist();
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

    const currentArtist = getPrototypeCurrentArtist();

    if (!currentArtist) {
      pendingApplyAfterArtist = true;
      closeApplyModal();
      openArtistModal();
      return;
    }

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
      artistId: currentArtist.id || createSlug(currentArtist.name),
      name: currentArtist.name,
      discipline: currentArtist.discipline,
      portfolio:
        currentArtist.portfolio ||
        currentArtist.instagram ||
        applicationData.portfolio,
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
      id: createSlug(`${spaceData.spaceName}-${Date.now()}`),
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
      status: "pending",
    };

    console.log("Nuevo espacio:", newSpace);

    saveSpace(newSpace);


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
      id: createSlug(`${artistData.artistName}-${Date.now()}`),
      name: artistData.artistName,
      discipline: artistData.discipline,
      city: artistData.location,
      neighborhood: "perfil nuevo",
      bio:
        artistData.bio ||
        `Artista de ${artistData.discipline.toLowerCase()} buscando nuevos espacios para mostrar su obra.`,
      instagram: artistData.instagram || artistData.portfolio || "portfolio pendiente",
      portfolio: artistData.portfolio || artistData.instagram || "portfolio pendiente",
      initials: getInitials(artistData.artistName),
    };

    console.log("Nuevo artista:", newArtist);

    featuredArtists.unshift(newArtist);
    saveArtist(newArtist);

    setCurrentUser({
      type: "artist",
      id: newArtist.id,
      name: newArtist.name,
    });

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

  const opportunitySpaceName = opportunity.title;

  opportunityPlace.innerHTML = `
    <a
      class="profile-inline-link"
      href="perfil-espacio.html?e=${createSlug(opportunitySpaceName)}"
    >
      ${opportunitySpaceName}
      <span aria-hidden="true">↗</span>
    </a>
  `;
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
        <a class="artist-card" href="perfil-artista.html?a=${createSlug(artist.name)}">
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
        </a>
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
            <a
              class="button button-secondary"
              href="perfil-espacio.html?e=${createSlug(space.name)}"
            >
              Ver perfil
            </a>

            <button
              class="button button-primary"
              type="button"
              data-open-proposal
              data-space-key="${createSlug(space.name)}"
              data-space-name="${space.name}"
              data-space-location="${space.neighborhood}, ${space.city}"
            >
              Proponer una muestra
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

renderFeaturedSpaces();
updateHomeSessionCtas();


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

    const isApproved = approvedArtists.some(
      (artist) => artist.createdAt === application.createdAt
    );

    return !isRejected && !isApproved;
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

          ${application.message
          ? `<p>“${application.message}”</p>`
          : `<p>Sin mensaje adicional.</p>`
        }

          <div class="application-actions">
            ${isApproved
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
          ${renderArtistPublicName(artist)}
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
          ${renderArtistPublicName(artist)}
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
    : state.available === 1
      ? "Falta 1 artista para confirmar la muestra."
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
const adminPendingSpaces = document.querySelector("[data-admin-pending-spaces]");

function renderAdminPendingSpaces() {
  if (!adminPendingSpaces) return;

  const pendingSpaces = getPendingSpaces();

  if (pendingSpaces.length === 0) {
    adminPendingSpaces.innerHTML = `
    <section class="admin-opportunity">
      <div class="admin-opportunity-header">
        <div>
          <p class="section-label">espacios pendientes</p>
          <h2>No hay espacios esperando aprobación.</h2>
        </div>
      </div>

      <p class="empty-state">
        Cuando un espacio solicite el alta, va a aparecer acá para que puedas revisarlo.
      </p>
    </section>
  `;

    return;
  }

  adminPendingSpaces.innerHTML = `
    <section class="admin-opportunity">
      <div class="admin-opportunity-header">
        <div>
          <p class="section-label">espacios pendientes</p>
          <h2>Espacios esperando aprobación.</h2>
        </div>

        <div class="admin-opportunity-meta">
          <span>${pendingSpaces.length} pendientes</span>
        </div>
      </div>

      <div class="admin-applications">
        ${pendingSpaces
      .map(
        (space) => `
              <article class="admin-application">
                <div class="admin-application-top">
                  <div>
                    <h3>${space.name}</h3>

                    <div class="application-meta">
                      <span>${space.type}</span>
                      <span>${space.city}</span>
                      <span>${space.capacity}</span>
                    </div>
                  </div>

                  <button
                    class="button button-secondary"
                    type="button"
                    data-admin-approve-space
                    data-space-id="${space.id}"
                  >
                    Aprobar espacio
                  </button>
                </div>

                <p>${space.description}</p>
              </article>
            `
      )
      .join("")}
      </div>
    </section>
  `;
}

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

  const savedSpaces = getSavedSpaces();
  const pendingSpaces = savedSpaces.filter(
    (space) => space.status === "pending"
  ).length;

  const approvedSpaces = featuredSpaces.length;
  const totalOpportunities = opportunities.length;
  const totalArtists = featuredArtists.length;

  adminSummary.innerHTML = `
    <article class="admin-stat">
      <span>espacios pendientes</span>
      <strong>${pendingSpaces}</strong>
    </article>

    <article class="admin-stat">
      <span>espacios aprobados</span>
      <strong>${approvedSpaces}</strong>
    </article>

    <article class="admin-stat">
      <span>convocatorias publicadas</span>
      <strong>${totalOpportunities}</strong>
    </article>

    <article class="admin-stat">
      <span>artistas registrados</span>
      <strong>${totalArtists}</strong>
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
            ${applications.length === 0
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

                            ${isApproved
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

                          ${application.message
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


if (adminSummary || adminPendingSpaces) {
  renderAdminSummary();
  renderAdminPendingSpaces();
}

if (adminList) {
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
    localStorage.removeItem("enredarteShowProposals");
    localStorage.removeItem("enredarteCurrentUser");

    window.location.reload();
  });
}

if (adminPendingSpaces) {
  adminPendingSpaces.addEventListener("click", (event) => {
    const button = event.target.closest("[data-admin-approve-space]");

    if (!button) return;

    approveSpace(button.dataset.spaceId);

    renderAdminSummary();
    renderAdminPendingSpaces();

    alert("Espacio aprobado. Ya puede aparecer en la Home y crear convocatorias.");
  });
}


const spacePanelSelect = document.querySelector("[data-space-panel-select]");
const spacePanelSummary = document.querySelector("[data-space-panel-summary]");
const spacePanelList = document.querySelector("[data-space-panel-list]");

const spacePanelProposals = document.querySelector(
  "[data-space-panel-proposals]"
);

const convertProposalModal = document.querySelector(
  "[data-convert-proposal-modal]"
);

const convertProposalForm = document.querySelector(
  "[data-convert-proposal-form]"
);

const convertProposalSuccess = document.querySelector(
  "[data-convert-proposal-success]"
);

const convertProposalName = document.querySelector(
  "[data-convert-proposal-name]"
);

const convertProposalIdInput = document.querySelector(
  "[data-convert-proposal-id]"
);

const convertSpaceKeyInput = document.querySelector("[data-convert-space-key]");

const convertSpaceNameInput = document.querySelector(
  "[data-convert-space-name]"
);

function getApprovedSpacesForPanel() {
  return featuredSpaces;
}

function getSelectedSpaceName() {
  if (!spacePanelSelect) return "";

  return spacePanelSelect.value;
}

function getCurrentSpaceFromSession() {
  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.type !== "space") return null;

  const approvedSpaces = getApprovedSpacesForPanel();

  return (
    approvedSpaces.find((space) => createSlug(space.name) === currentUser.id) ||
    approvedSpaces.find((space) => space.name === currentUser.name) ||
    null
  );
}

function setCurrentSpaceSession(space) {
  if (!space) return;

  setCurrentUser({
    type: "space",
    id: createSlug(space.name),
    name: space.name,
  });
}

function getOpportunitiesBySpace(spaceName) {
  return opportunities.filter((opportunity) => {
    return opportunity.title === spaceName;
  });
}

function renderSpacePanelSelect() {
  if (!spacePanelSelect) return;

  const approvedSpaces = getApprovedSpacesForPanel();
  const currentSpace = getCurrentSpaceFromSession();

  if (approvedSpaces.length === 0) {
    spacePanelSelect.innerHTML = `
      <option value="">No hay espacios aprobados</option>
    `;
    return;
  }

  spacePanelSelect.innerHTML = approvedSpaces
    .map(
      (space) => `
        <option value="${space.name}">
          ${space.name}
        </option>
      `
    )
    .join("");

  if (currentSpace) {
    spacePanelSelect.value = currentSpace.name;
  }
}

function renderSpacePanelSummary() {
  if (!spacePanelSummary) return;

  const spaceName = getSelectedSpaceName();
  const spaceOpportunities = getOpportunitiesBySpace(spaceName);

  const applications = spaceOpportunities.flatMap((opportunity) =>
    getApplicationsByOpportunity(opportunity.slug)
  );

  const approved = spaceOpportunities.flatMap((opportunity) =>
    getApprovedArtistsByOpportunity(opportunity.slug)
  );

  const rejected = spaceOpportunities.flatMap((opportunity) =>
    getRejectedApplicationsByOpportunity(opportunity.slug)
  );

  const pending = Math.max(
    applications.length - approved.length - rejected.length,
    0
  );

  spacePanelSummary.innerHTML = `
    <article class="admin-stat">
      <span>convocatorias</span>
      <strong>${spaceOpportunities.length}</strong>
    </article>

    <article class="admin-stat">
      <span>postulantes</span>
      <strong>${applications.length}</strong>
    </article>

    <article class="admin-stat">
      <span>artistas confirmados</span>
      <strong>${approved.length}</strong>
    </article>

    <article class="admin-stat">
      <span>pendientes de revisión</span>
      <strong>${pending}</strong>
    </article>
  `;
}

function renderSpacePanelDashboard() {
  if (!spacePanelList) return;

  const spaceName = getSelectedSpaceName();
  const spaceOpportunities = getOpportunitiesBySpace(spaceName);

  if (!spaceName) {
    spacePanelList.innerHTML = `
      <p class="empty-state">Seleccioná un espacio para ver sus convocatorias.</p>
    `;
    return;
  }

  if (spaceOpportunities.length === 0) {
    spacePanelList.innerHTML = `
      <article class="admin-opportunity">
        <div class="admin-opportunity-header">
          <div>
            <p class="section-label">${spaceName}</p>
            <h2>Este espacio todavía no tiene convocatorias.</h2>
          </div>
        </div>

        <p class="empty-state">
          Cuando cree una convocatoria, va a aparecer acá para gestionar postulantes.
        </p>
      </article>
    `;
    return;
  }

  spacePanelList.innerHTML = spaceOpportunities
    .map((opportunity) => {
      const applications = getApplicationsByOpportunity(opportunity.slug);
      const approvedArtists = getApprovedArtistsByOpportunity(opportunity.slug);
      const rejectedApplications = getRejectedApplicationsByOpportunity(
        opportunity.slug
      );

      const state = getOpportunityRuntimeState(opportunity);

      return `
        <article class="admin-opportunity">
          <div class="admin-opportunity-header">
            <div>
              <p class="section-label">${opportunity.date}</p>
              <h2>${opportunity.fullTitle || opportunity.title}</h2>
            </div>

            <div class="admin-opportunity-meta">
              <span>${state.confirmed} de ${opportunity.totalSpots} confirmados</span>
              <span>${state.available} cupos disponibles</span>
              <span>${applications.length} postulaciones</span>
            </div>
          </div>

          <div class="admin-applications">
            ${applications.length === 0
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

                            ${isApproved
                  ? `<div class="admin-actions">
                                    <span class="application-status">aprobada</span>

                                    <button
                                      class="button button-secondary"
                                      type="button"
                                      data-space-reset
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
                                        data-space-reset
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
                                        data-space-approve
                                        data-opportunity-slug="${opportunity.slug}"
                                        data-application-created-at="${application.createdAt}"
                                      >
                                        Confirmar artista
                                      </button>

                                      <button
                                        class="button button-secondary"
                                        type="button"
                                        data-space-reject
                                        data-opportunity-slug="${opportunity.slug}"
                                        data-application-created-at="${application.createdAt}"
                                      >
                                        Rechazar
                                      </button>
                                    </div>`
                }
                          </div>

                          ${application.message
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

function renderSpacePanelProposals() {
  if (!spacePanelProposals) return;

  const selectedSpace = getSelectedSpaceForPanel();

  if (!selectedSpace) {
    spacePanelProposals.innerHTML = "";
    return;
  }

  const spaceKey = createSlug(selectedSpace.name);
  const proposals = getProposalsBySpace(spaceKey);

  if (proposals.length === 0) {
    spacePanelProposals.innerHTML = `
      <article class="admin-opportunity">
        <div class="admin-opportunity-header">
          <div>
            <p class="section-label">propuestas recibidas</p>
            <h2>Todavía no hay propuestas para este espacio.</h2>
          </div>
        </div>

        <p class="empty-state">
          Cuando un artista proponga una muestra para este lugar, va a aparecer acá.
        </p>
      </article>
    `;

    return;
  }

  spacePanelProposals.innerHTML = `
    <article class="admin-opportunity">
      <div class="admin-opportunity-header">
        <div>
          <p class="section-label">propuestas recibidas</p>
          <h2>Propuestas de muestra recibidas.</h2>
        </div>

        <div class="admin-opportunity-meta">
          <span>${proposals.length} propuestas</span>
        </div>
      </div>

      <div class="admin-applications">
        ${proposals
      .map((proposal) => {
        const isRejected = proposal.status === "rejected";
        const isAccepted = proposal.status === "accepted";
        const isConverted = proposal.status === "converted";

        return `
              <article class="admin-application">
                <div class="admin-application-top">
                  <div>
                    <h3>${proposal.title}</h3>

                    <div class="application-meta">
                      <span>${proposal.discipline}</span>
                      <span>${proposal.artistName}</span>
                      <span>${proposal.date}</span>
                    </div>
                  </div>

                  ${isConverted
            ? `<div class="admin-actions">
                          <span class="proposal-status is-converted">
                            convertida en convocatoria
                          </span>

                          <a
                            class="button button-secondary"
                            href="oportunidad.html?o=${proposal.opportunitySlug}"
                          >
                            Ver convocatoria
                          </a>
                        </div>`
            : isRejected
              ? `<span class="proposal-status">rechazada</span>`
              : isAccepted
                ? `<div class="admin-actions">
                              <span class="proposal-status is-accepted">
                                aceptada · en armado
                              </span>

                              <button
                                class="button button-primary"
                                type="button"
                                data-convert-proposal
                                data-space-key="${spaceKey}"
                                data-proposal-id="${proposal.id}"
                              >
                                Armar convocatoria
                              </button>
                            </div>`
                : `<div class="admin-actions">
                              <button
                                class="button button-secondary"
                                type="button"
                                data-reject-proposal
                                data-space-key="${spaceKey}"
                                data-proposal-id="${proposal.id}"
                              >
                                Rechazar propuesta
                              </button>

                              <button
                                class="button button-primary"
                                type="button"
                                data-accept-proposal
                                data-space-key="${spaceKey}"
                                data-proposal-id="${proposal.id}"
                              >
                                Aceptar propuesta
                              </button>
                            </div>`
          }
                </div>

                <p>${proposal.idea}</p>

                <p class="convert-proposal-note">
                  Cantidad estimada de artistas: ${proposal.artistCount}
                </p>

                <p class="convert-proposal-note">
                  Portfolio: ${proposal.portfolio}
                </p>
              </article>
            `;
      })
      .join("")}
      </div>
    </article>
  `;
}

function renderSpacePanel() {
  if (!spacePanelList) return;

  renderSpacePanelSelect();

  const selectedSpace = getSelectedSpaceForPanel();

  if (selectedSpace && !getCurrentSpaceFromSession()) {
    setCurrentSpaceSession(selectedSpace);
  }

  renderSpacePanelSummary();
  renderSpacePanelProposals();
  renderSpacePanelDashboard();
}

if (spacePanelSelect) {
  spacePanelSelect.addEventListener("change", () => {
    const selectedSpace = getSelectedSpaceForPanel();

    if (selectedSpace) {
      setCurrentSpaceSession(selectedSpace);
    }

    renderSpacePanelSummary();
    renderSpacePanelProposals();
    renderSpacePanelDashboard();
  });
}

if (spacePanelList) {
  spacePanelList.addEventListener("click", (event) => {
    const approveButton = event.target.closest("[data-space-approve]");
    const rejectButton = event.target.closest("[data-space-reject]");
    const resetButton = event.target.closest("[data-space-reset]");

    if (resetButton) {
      const slug = resetButton.dataset.opportunitySlug;
      const createdAt = resetButton.dataset.applicationCreatedAt;

      removeApprovedArtist(slug, createdAt);
      removeRejectedApplication(slug, createdAt);

      renderSpacePanelSummary();
      renderSpacePanelDashboard();

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

      renderSpacePanelSummary();
      renderSpacePanelDashboard();

      return;
    }

    if (approveButton) {
      const slug = approveButton.dataset.opportunitySlug;
      const createdAt = approveButton.dataset.applicationCreatedAt;
      const applications = getApplicationsByOpportunity(slug);
      const opportunity = opportunities.find((item) => item.slug === slug);

      if (!opportunity) return;

      const state = getOpportunityRuntimeState(opportunity);

      if (state.isFull) {
        alert("Esta convocatoria ya completó sus cupos.");
        return;
      }

      const application = applications.find(
        (item) => item.createdAt === createdAt
      );

      if (!application) return;

      saveApprovedArtist(slug, application);

      renderSpacePanelSummary();
      renderSpacePanelDashboard();
    }
  });
}

renderSpacePanel();

const proposalModal = document.querySelector("[data-proposal-modal]");
const proposalForm = document.querySelector("[data-proposal-form]");
const proposalSuccess = document.querySelector("[data-proposal-success]");
const proposalSpaceName = document.querySelector("[data-proposal-space-name]");
const proposalSpaceKeyInput = document.querySelector("[data-proposal-space-key]");
const proposalSpaceNameInput = document.querySelector(
  "[data-proposal-space-name-input]"
);

let pendingProposalSpace = null;

function updateShowProposal(spaceKey, proposalId, updates) {
  const savedProposals = getSavedShowProposals();

  if (!savedProposals[spaceKey]) return;

  savedProposals[spaceKey] = savedProposals[spaceKey].map((proposal) => {
    if (proposal.id !== proposalId) return proposal;

    return {
      ...proposal,
      ...updates,
    };
  });

  localStorage.setItem(
    "enredarteShowProposals",
    JSON.stringify(savedProposals)
  );
}

function getProposalById(spaceKey, proposalId) {
  const proposals = getProposalsBySpace(spaceKey);

  return proposals.find((proposal) => proposal.id === proposalId);
}

function getSelectedSpaceForPanel() {
  if (!spacePanelSelect) return null;

  const selectedSpaceName = spacePanelSelect.value;

  return getApprovedSpacesForPanel().find(
    (space) => space.name === selectedSpaceName
  );
}

function getSelectedSpaceKeyForPanel() {
  const selectedSpace = getSelectedSpaceForPanel();

  if (!selectedSpace) return "";

  return createSlug(selectedSpace.name);
}

function getSavedShowProposals() {
  const savedProposals = localStorage.getItem("enredarteShowProposals");

  if (!savedProposals) return {};

  return JSON.parse(savedProposals);
}

function getProposalsBySpace(spaceKey) {
  const savedProposals = getSavedShowProposals();

  return savedProposals[spaceKey] || [];
}

function saveShowProposal(spaceKey, proposal) {
  const savedProposals = getSavedShowProposals();

  if (!savedProposals[spaceKey]) {
    savedProposals[spaceKey] = [];
  }

  savedProposals[spaceKey].unshift(proposal);

  localStorage.setItem(
    "enredarteShowProposals",
    JSON.stringify(savedProposals)
  );
}

function hasArtistProfileCreated() {
  return getSavedArtists().length > 0;
}

function getPrototypeCurrentArtist() {
  const savedArtists = getSavedArtists();

  return savedArtists[0] || null;
}

function openProposalModal(space) {
  if (!proposalModal) return;

  if (proposalSuccess) {
    proposalSuccess.hidden = true;
  }

  if (proposalForm) {
    proposalForm.reset();
  }

  if (proposalSpaceName) {
    proposalSpaceName.textContent = space.name;
  }

  if (proposalSpaceKeyInput) {
    proposalSpaceKeyInput.value = space.key;
  }

  if (proposalSpaceNameInput) {
    proposalSpaceNameInput.value = space.name;
  }

  proposalModal.classList.add("is-open");
  proposalModal.setAttribute("aria-hidden", "false");
}

function closeProposalModal() {
  if (!proposalModal) return;

  proposalModal.classList.remove("is-open");
  proposalModal.setAttribute("aria-hidden", "true");
}

function openArtistModalForProposal() {
  const artistModalForProposal = document.querySelector("[data-artist-modal]");

  if (!artistModalForProposal) return;

  artistModalForProposal.classList.add("is-open");
  artistModalForProposal.setAttribute("aria-hidden", "false");
}

function closeArtistModalForProposal() {
  const artistModalForProposal = document.querySelector("[data-artist-modal]");

  if (!artistModalForProposal) return;

  artistModalForProposal.classList.remove("is-open");
  artistModalForProposal.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const proposalButton = event.target.closest("[data-open-proposal]");
  const closeProposalButton = event.target.closest("[data-close-proposal]");

  if (proposalButton) {
    const space = {
      key: proposalButton.dataset.spaceKey,
      name: proposalButton.dataset.spaceName,
      location: proposalButton.dataset.spaceLocation,
    };

    if (!hasArtistProfileCreated()) {
      pendingProposalSpace = space;

      alert(
        "Para proponer una muestra primero necesitás crear tu perfil de artista."
      );

      openArtistModalForProposal();

      return;
    }

    openProposalModal(space);
  }

  if (closeProposalButton) {
    closeProposalModal();
  }
});

if (proposalForm) {
  proposalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(proposalForm);
    const proposalData = Object.fromEntries(formData);
    const currentArtist = getPrototypeCurrentArtist();

    const newProposal = {
      id: createSlug(`${proposalData.proposalTitle}-${Date.now()}`),
      spaceKey: proposalData.spaceKey,
      spaceName: proposalData.spaceName,
      title: proposalData.proposalTitle,
      discipline: proposalData.discipline,
      idea: proposalData.idea,
      date: proposalData.date || "A coordinar",
      artistCount: proposalData.artistCount || "A definir",
      portfolio: proposalData.portfolio,
      artistName: currentArtist ? currentArtist.name : "Artista sin nombre",
      artistDiscipline: currentArtist
        ? currentArtist.discipline
        : proposalData.discipline,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    saveShowProposal(proposalData.spaceKey, newProposal);

    proposalForm.reset();

    if (proposalSuccess) {
      proposalSuccess.hidden = false;
    }
  });
}

const artistFormForProposal = document.querySelector("[data-artist-form]");

if (artistFormForProposal) {
  artistFormForProposal.addEventListener("submit", () => {
    if (!pendingProposalSpace) return;

    setTimeout(() => {
      if (!hasArtistProfileCreated()) return;

      const space = pendingProposalSpace;

      pendingProposalSpace = null;

      closeArtistModalForProposal();
      openProposalModal(space);
    }, 0);
  });
}

if (artistFormForProposal) {
  artistFormForProposal.addEventListener("submit", () => {
    if (!pendingApplyAfterArtist) return;

    setTimeout(() => {
      if (!hasArtistProfileCreated()) return;

      pendingApplyAfterArtist = false;

      closeArtistModal();
      openApplyModal();
    }, 0);
  });
}

function openConvertProposalModal(proposal, spaceKey, spaceName) {
  if (!convertProposalModal || !convertProposalForm) return;

  convertProposalForm.reset();

  if (convertProposalSuccess) {
    convertProposalSuccess.hidden = true;
  }

  if (convertProposalName) {
    convertProposalName.textContent = proposal.title;
  }

  if (convertProposalIdInput) {
    convertProposalIdInput.value = proposal.id;
  }

  if (convertSpaceKeyInput) {
    convertSpaceKeyInput.value = spaceKey;
  }

  if (convertSpaceNameInput) {
    convertSpaceNameInput.value = spaceName;
  }

  convertProposalForm.elements.opportunityTitle.value = proposal.title;
  convertProposalForm.elements.discipline.value = proposal.discipline;
  convertProposalForm.elements.description.value = proposal.idea;
  convertProposalForm.elements.date.value = proposal.date;

  convertProposalModal.classList.add("is-open");
  convertProposalModal.setAttribute("aria-hidden", "false");
}

function closeConvertProposalModal() {
  if (!convertProposalModal) return;

  convertProposalModal.classList.remove("is-open");
  convertProposalModal.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-convert-proposal]");

  if (!closeButton) return;

  closeConvertProposalModal();
});

if (spacePanelProposals) {
  spacePanelProposals.addEventListener("click", (event) => {
    const rejectButton = event.target.closest("[data-reject-proposal]");
    const acceptButton = event.target.closest("[data-accept-proposal]");
    const convertButton = event.target.closest("[data-convert-proposal]");

    if (acceptButton) {
      const spaceKey = acceptButton.dataset.spaceKey;
      const proposalId = acceptButton.dataset.proposalId;

      updateShowProposal(spaceKey, proposalId, {
        status: "accepted",
      });

      renderSpacePanelProposals();

      return;
    }

    if (rejectButton) {
      const spaceKey = rejectButton.dataset.spaceKey;
      const proposalId = rejectButton.dataset.proposalId;

      updateShowProposal(spaceKey, proposalId, {
        status: "rejected",
      });

      renderSpacePanelProposals();

      return;
    }

    if (convertButton) {
      const spaceKey = convertButton.dataset.spaceKey;
      const proposalId = convertButton.dataset.proposalId;
      const proposal = getProposalById(spaceKey, proposalId);
      const selectedSpace = getSelectedSpaceForPanel();

      if (!proposal || !selectedSpace) return;

      openConvertProposalModal(proposal, spaceKey, selectedSpace.name);
    }
  });
}

if (convertProposalForm) {
  convertProposalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(convertProposalForm);
    const proposalData = Object.fromEntries(formData);

    const proposal = getProposalById(
      proposalData.spaceKey,
      proposalData.proposalId
    );

    const selectedSpace = getSelectedSpaceForPanel();

    if (!proposal || !selectedSpace) return;

    const totalSpots = Number(proposalData.totalSpots) || 1;

    const newOpportunitySlug = createSlug(
      `${proposalData.opportunityTitle}-${Date.now()}`
    );

    const newOpportunity = {
      slug: newOpportunitySlug,
      title: selectedSpace.name,
      fullTitle: proposalData.opportunityTitle,
      city: selectedSpace.city,
      neighborhood: selectedSpace.neighborhood,
      discipline: [proposalData.discipline.toLowerCase()],
      detailDiscipline: proposalData.discipline,
      description: proposalData.description,
      detailDescription: proposalData.description,
      date: proposalData.date,
      time: proposalData.time,
      cost: proposalData.artistCost,
      totalCost: proposalData.totalCost,
      confirmed: 0,
      totalSpots,
      availableSpots: totalSpots,
      spots:
        totalSpots === 1
          ? "1 cupo disponible"
          : `${totalSpots} cupos disponibles`,
    };

    opportunities.unshift(newOpportunity);
    saveOpportunity(newOpportunity);

    saveApprovedArtist(newOpportunitySlug, {
      name: proposal.artistName,
      discipline: proposal.artistDiscipline,
      portfolio: proposal.portfolio,
      message: "Artista que propuso esta muestra.",
      createdAt: proposal.createdAt,
    });

    updateShowProposal(proposalData.spaceKey, proposalData.proposalId, {
      status: "converted",
      opportunitySlug: newOpportunitySlug,
    });

    if (convertProposalSuccess) {
      convertProposalSuccess.hidden = false;
    }

    setTimeout(() => {
      closeConvertProposalModal();

      renderSpacePanelSummary();
      renderSpacePanelProposals();
      renderSpacePanelDashboard();
    }, 600);
  });
}

const artistPanelSelect = document.querySelector("[data-artist-panel-select]");
const artistPanelSummary = document.querySelector("[data-artist-panel-summary]");
const artistPanelProfile = document.querySelector("[data-artist-panel-profile]");
const artistPanelApplications = document.querySelector(
  "[data-artist-panel-applications]"
);
const artistPanelProposals = document.querySelector(
  "[data-artist-panel-proposals]"
);

function getSelectedArtistName() {
  if (!artistPanelSelect) return "";

  return artistPanelSelect.value;
}

function getCurrentArtistFromSession() {
  const currentUser = getCurrentUser();

  if (!currentUser || currentUser.type !== "artist") return null;

  const savedArtists = getSavedArtists();

  return (
    savedArtists.find((artist) => artist.id === currentUser.id) ||
    savedArtists.find((artist) => artist.name === currentUser.name) ||
    null
  );
}

function getSelectedArtistForPanel() {
  const currentArtist = getCurrentArtistFromSession();

  if (currentArtist) return currentArtist;

  const selectedArtistName = getSelectedArtistName();

  return getSavedArtists().find((artist) => artist.name === selectedArtistName);
}

function getAllShowProposals() {
  const savedProposals = getSavedShowProposals();

  return Object.values(savedProposals).flat();
}

function getArtistPanelProposals(artist) {
  if (!artist) return [];

  return getAllShowProposals().filter((proposal) => {
    return (
      proposal.artistName === artist.name ||
      proposal.portfolio === artist.portfolio
    );
  });
}

function getArtistPanelApplications(artist) {
  if (!artist) return [];

  const savedApplications = getSavedApplications();

  return Object.entries(savedApplications).flatMap(([slug, applications]) => {
    const opportunity = opportunities.find((item) => item.slug === slug);

    return applications
      .filter((application) => {
        return (
          application.name === artist.name ||
          application.portfolio === artist.portfolio
        );
      })
      .map((application) => ({
        ...application,
        opportunitySlug: slug,
        opportunityTitle: opportunity
          ? opportunity.fullTitle || opportunity.title
          : "Convocatoria",
        opportunityDate: opportunity ? opportunity.date : "Fecha a confirmar",
      }));
  });
}

function getArtistApplicationStatus(application) {
  const approvedArtists = getApprovedArtistsByOpportunity(
    application.opportunitySlug
  );

  const rejectedApplications = getRejectedApplicationsByOpportunity(
    application.opportunitySlug
  );

  const isApproved = approvedArtists.some(
    (artist) => artist.createdAt === application.createdAt
  );

  const isRejected = rejectedApplications.some(
    (item) => item.createdAt === application.createdAt
  );

  if (isApproved) return "aprobada";
  if (isRejected) return "rechazada";

  return "pendiente";
}

function getProposalStatusLabel(status) {
  if (status === "accepted") return "aceptada · en armado";
  if (status === "rejected") return "rechazada";
  if (status === "converted") return "convertida en convocatoria";

  return "pendiente";
}

function renderArtistPanelSelect() {
  if (!artistPanelSelect) return;

  const currentArtist = getCurrentArtistFromSession();

  if (currentArtist) {
    artistPanelSelect.innerHTML = `
    <option value="${currentArtist.name}">
      ${currentArtist.name}
    </option>
  `;

    artistPanelSelect.disabled = true;

    return;
  }

  const artists = getSavedArtists();

  artistPanelSelect.disabled = false;

  if (artists.length === 0) {
    artistPanelSelect.innerHTML = `
    <option value="">No hay artistas creados</option>
  `;
    return;
  }

  artistPanelSelect.innerHTML = artists
    .map(
      (artist) => `
      <option value="${artist.name}">
        ${artist.name}
      </option>
    `
    )
    .join("");
}

function renderArtistPanelSummary() {
  if (!artistPanelSummary) return;

  const artist = getSelectedArtistForPanel();
  const applications = getArtistPanelApplications(artist);
  const proposals = getArtistPanelProposals(artist);

  const confirmedApplications = applications.filter((application) => {
    return getArtistApplicationStatus(application) === "aprobada";
  });

  const inProcessProposals = proposals.filter((proposal) => {
    return proposal.status !== "rejected";
  });

  artistPanelSummary.innerHTML = `
    <article class="admin-stat">
      <span>postulaciones</span>
      <strong>${applications.length}</strong>
    </article>

    <article class="admin-stat">
      <span>confirmadas</span>
      <strong>${confirmedApplications.length}</strong>
    </article>

    <article class="admin-stat">
      <span>propuestas enviadas</span>
      <strong>${proposals.length}</strong>
    </article>

    <article class="admin-stat">
      <span>en proceso</span>
      <strong>${inProcessProposals.length}</strong>
    </article>
  `;
}

function renderArtistPanelProfile() {
  if (!artistPanelProfile) return;

  const artist = getSelectedArtistForPanel();

  if (!artist) {
    artistPanelProfile.innerHTML = `
      <article class="artist-profile-card">
        <p class="section-label">perfil</p>
        <h2>Todavía no hay perfil de artista.</h2>
        <p class="empty-state">
          Creá un perfil desde la Home para empezar a postularte o proponer muestras.
        </p>
      </article>
    `;

    return;
  }

  artistPanelProfile.innerHTML = `
    <article class="artist-profile-card">
      <p class="section-label">mi perfil</p>

      <h2>${artist.name}</h2>

      <div class="artist-profile-meta">
        <span>${artist.discipline || "disciplina"}</span>
        <span>${artist.city || "ciudad a definir"}</span>
        <span>${artist.portfolio || "portfolio pendiente"}</span>
      </div>

      <p>
        ${artist.bio ||
    "Este perfil todavía no tiene una bio cargada, pero ya puede moverse dentro de enredARTE."
    }
      </p>
    </article>
  `;
}

function renderArtistPanelApplications() {
  if (!artistPanelApplications) return;

  const artist = getSelectedArtistForPanel();
  const applications = getArtistPanelApplications(artist);

  if (!artist) {
    artistPanelApplications.innerHTML = "";
    return;
  }

  if (applications.length === 0) {
    artistPanelApplications.innerHTML = `
      <article class="admin-opportunity">
        <div class="admin-opportunity-header">
          <div>
            <p class="section-label">mis postulaciones</p>
            <h2>Todavía no te postulaste a ninguna convocatoria.</h2>
          </div>
        </div>

        <p class="empty-state">
          Cuando te postules a una oportunidad abierta, vas a poder seguir su estado acá.
        </p>
      </article>
    `;

    return;
  }

  artistPanelApplications.innerHTML = `
    <article class="admin-opportunity">
      <div class="admin-opportunity-header">
        <div>
          <p class="section-label">mis postulaciones</p>
          <h2>Convocatorias a las que te postulaste.</h2>
        </div>

        <div class="admin-opportunity-meta">
          <span>${applications.length} postulaciones</span>
        </div>
      </div>

      <div class="admin-applications">
        ${applications
      .map((application) => {
        const status = getArtistApplicationStatus(application);
        const statusClass =
          status === "aprobada"
            ? "is-approved"
            : status === "rechazada"
              ? "is-rejected"
              : "";

        return `
              <article class="admin-application">
                <div class="admin-application-top">
                  <div>
                    <h3>${application.opportunityTitle}</h3>

                    <div class="application-meta">
                      <span>${application.discipline}</span>
                      <span>${application.opportunityDate}</span>
                    </div>
                  </div>

                  <span class="artist-panel-status ${statusClass}">
                    ${status}
                  </span>
                </div>

                ${application.message
            ? `<p>“${application.message}”</p>`
            : `<p>Sin mensaje adicional.</p>`
          }

                <a
                  class="button button-secondary"
                  href="oportunidad.html?o=${application.opportunitySlug}"
                >
                  Ver convocatoria
                </a>
              </article>
            `;
      })
      .join("")}
      </div>
    </article>
  `;
}

function renderArtistPanelProposals() {
  if (!artistPanelProposals) return;

  const artist = getSelectedArtistForPanel();
  const proposals = getArtistPanelProposals(artist);

  if (!artist) {
    artistPanelProposals.innerHTML = "";
    return;
  }

  if (proposals.length === 0) {
    artistPanelProposals.innerHTML = `
      <article class="admin-opportunity">
        <div class="admin-opportunity-header">
          <div>
            <p class="section-label">mis propuestas</p>
            <h2>Todavía no propusiste ninguna muestra.</h2>
          </div>
        </div>

        <p class="empty-state">
          Cuando propongas una muestra para un espacio, vas a poder seguir su estado acá.
        </p>
      </article>
    `;

    return;
  }

  artistPanelProposals.innerHTML = `
    <article class="admin-opportunity">
      <div class="admin-opportunity-header">
        <div>
          <p class="section-label">mis propuestas</p>
          <h2>Ideas de muestra que enviaste.</h2>
        </div>

        <div class="admin-opportunity-meta">
          <span>${proposals.length} propuestas</span>
        </div>
      </div>

      <div class="admin-applications">
        ${proposals
      .map((proposal) => {
        const statusLabel = getProposalStatusLabel(proposal.status);

        const statusClass =
          proposal.status === "accepted"
            ? "is-accepted"
            : proposal.status === "converted"
              ? "is-converted"
              : proposal.status === "rejected"
                ? "is-rejected"
                : "";

        return `
              <article class="admin-application">
                <div class="admin-application-top">
                  <div>
                    <h3>${proposal.title}</h3>

                    <div class="application-meta">
                      <span>${proposal.spaceName}</span>
                      <span>${proposal.discipline}</span>
                      <span>${proposal.date}</span>
                    </div>
                  </div>

                  <span class="artist-panel-status ${statusClass}">
                    ${statusLabel}
                  </span>
                </div>

                <p>${proposal.idea}</p>

                ${proposal.status === "converted"
            ? `<a
                        class="button button-secondary"
                        href="oportunidad.html?o=${proposal.opportunitySlug}"
                      >
                        Ver convocatoria
                      </a>`
            : ""
          }
              </article>
            `;
      })
      .join("")}
      </div>
    </article>
  `;
}

function renderArtistPanel() {
  if (!artistPanelSelect) return;

  renderArtistPanelSelect();
  renderArtistPanelSummary();
  renderArtistPanelProfile();
  renderArtistPanelApplications();
  renderArtistPanelProposals();
}

if (artistPanelSelect) {
  artistPanelSelect.addEventListener("change", () => {
    renderArtistPanelSummary();
    renderArtistPanelProfile();
    renderArtistPanelApplications();
    renderArtistPanelProposals();
  });
}

renderArtistPanel();

const publicArtistName = document.querySelector("[data-artist-public-name]");
const publicArtistDiscipline = document.querySelector(
  "[data-artist-public-discipline]"
);
const publicArtistBio = document.querySelector("[data-artist-public-bio]");
const publicArtistCity = document.querySelector("[data-artist-public-city]");
const publicArtistPortfolio = document.querySelector(
  "[data-artist-public-portfolio]"
);
const publicArtistAboutTitle = document.querySelector(
  "[data-artist-public-about-title]"
);
const publicArtistAbout = document.querySelector("[data-artist-public-about]");
const publicArtistApplicationsCount = document.querySelector(
  "[data-artist-public-applications-count]"
);
const publicArtistProposalsCount = document.querySelector(
  "[data-artist-public-proposals-count]"
);
const publicArtistConfirmedCount = document.querySelector(
  "[data-artist-public-confirmed-count]"
);
const publicArtistActivity = document.querySelector(
  "[data-artist-public-applications]"
);

function getPublicArtistSlug() {
  const params = new URLSearchParams(window.location.search);

  return params.get("a");
}

function getPublicArtistFromUrl() {
  const slug = getPublicArtistSlug();

  if (!slug) return featuredArtists[0] || null;

  return (
    featuredArtists.find((artist) => createSlug(artist.name) === slug) ||
    featuredArtists[0] ||
    null
  );
}

function getPublicArtistApplications(artist) {
  if (!artist) return [];

  return getArtistPanelApplications(artist).filter((application) => {
    return getArtistApplicationStatus(application) === "aprobada";
  });
}

function getPublicArtistProposals(artist) {
  if (!artist) return [];

  return getArtistPanelProposals(artist).filter((proposal) => {
    return proposal.status === "converted";
  });
}

function renderPublicArtistProfile() {
  if (!publicArtistName) return;

  const artist = getPublicArtistFromUrl();

  if (!artist) return;

  const publicApplications = getPublicArtistApplications(artist);
  const publicProposals = getPublicArtistProposals(artist);

  const publicActivityCount =
    publicApplications.length + publicProposals.length;

  document.title = `${artist.name} | enredARTE`;

  publicArtistName.textContent = artist.name;
  publicArtistDiscipline.textContent = artist.discipline || "artista";
  publicArtistBio.textContent =
    artist.bio ||
    "Artista independiente buscando nuevos espacios para mostrar su obra.";

  publicArtistCity.textContent = artist.city || "ciudad a definir";
  publicArtistPortfolio.textContent =
    artist.portfolio || artist.instagram || "portfolio pendiente";

  publicArtistAboutTitle.textContent = `La obra de ${artist.name}.`;
  publicArtistAbout.textContent =
    artist.bio ||
    "Este perfil reúne información del artista y sus movimientos dentro de enredARTE.";

  publicArtistApplicationsCount.textContent = publicApplications.length;
  publicArtistProposalsCount.textContent = publicProposals.length;
  publicArtistConfirmedCount.textContent = publicActivityCount;

  if (!publicArtistActivity) return;

  if (publicApplications.length === 0 && publicProposals.length === 0) {
    publicArtistActivity.innerHTML = `
      <article class="admin-opportunity">
        <div class="admin-opportunity-header">
          <div>
            <p class="section-label">actividad</p>
            <h2>Todavía no hay participaciones públicas.</h2>
          </div>
        </div>

        <p class="empty-state">
          Cuando este artista participe de una convocatoria o una propuesta se convierta en muestra, va a aparecer acá.
        </p>
      </article>
    `;

    return;
  }

  publicArtistActivity.innerHTML = `
    <article class="admin-opportunity">
      <div class="admin-opportunity-header">
        <div>
          <p class="section-label">actividad</p>
          <h2>Movimientos dentro de enredARTE.</h2>
        </div>

        <div class="admin-opportunity-meta">
          <span>${publicApplications.length} convocatorias</span>
          <span>${publicProposals.length} muestras creadas</span>
        </div>
      </div>

      <div class="admin-applications">
        ${publicApplications
      .map((application) => {
        const status = getArtistApplicationStatus(application);

        return `
                <article class="admin-application">
                  <div class="admin-application-top">
                    <div>
                      <p class="section-label">convocatoria confirmada</p>
                      <h3>${application.opportunityTitle}</h3>

                      <div class="application-meta">
                        <span>${application.discipline}</span>
                        <span>${application.opportunityDate}</span>
                      </div>
                    </div>

                    <span class="artist-panel-status">
                      participación confirmada
                    </span>
                  </div>

                  <a
                    class="button button-secondary"
                    href="oportunidad.html?o=${application.opportunitySlug}"
                  >
                    Ver convocatoria
                  </a>
                </article>
              `;
      })
      .join("")}

        ${publicProposals
      .map((proposal) => {
        const statusLabel = getProposalStatusLabel(proposal.status);

        return `
                  <article class="admin-application">
                    <div class="admin-application-top">
                      <div>
                        <p class="section-label">muestra creada</p>
                        <h3>${proposal.title}</h3>

                        <div class="application-meta">
                          <span>${proposal.spaceName}</span>
                          <span>${proposal.discipline}</span>
                          <span>${proposal.date}</span>
                        </div>
                      </div>

                      <span class="artist-panel-status">
                        ${statusLabel}
                      </span>
                    </div>

                    <p>${proposal.idea}</p>

                    ${proposal.status === "converted"
            ? `<a
                            class="button button-secondary"
                            href="oportunidad.html?o=${proposal.opportunitySlug}"
                          >
                            Ver convocatoria
                          </a>`
            : ""
          }
                  </article>
                `;
      })
      .join("")}
      </div>
    </article>
  `;
}

renderPublicArtistProfile();

const publicSpaceName = document.querySelector("[data-space-public-name]");
const publicSpaceType = document.querySelector("[data-space-public-type]");
const publicSpaceDescription = document.querySelector(
  "[data-space-public-description]"
);
const publicSpaceLocation = document.querySelector("[data-space-public-location]");
const publicSpaceCapacity = document.querySelector("[data-space-public-capacity]");
const publicSpaceDisciplines = document.querySelector(
  "[data-space-public-disciplines]"
);
const publicSpaceAboutTitle = document.querySelector(
  "[data-space-public-about-title]"
);
const publicSpaceAbout = document.querySelector("[data-space-public-about]");
const publicSpaceOpportunitiesCount = document.querySelector(
  "[data-space-public-opportunities-count]"
);
const publicSpaceCapacityStat = document.querySelector(
  "[data-space-public-capacity-stat]"
);
const publicSpacePrice = document.querySelector("[data-space-public-price]");
const publicSpaceOpportunities = document.querySelector(
  "[data-space-public-opportunities]"
);
const publicSpaceProposalButton = document.querySelector(
  "[data-space-public-proposal-button]"
);

function getPublicSpaceSlug() {
  const params = new URLSearchParams(window.location.search);

  return params.get("e");
}

function getPublicSpaceFromUrl() {
  const slug = getPublicSpaceSlug();

  if (!slug) return featuredSpaces[0] || null;

  return (
    featuredSpaces.find((space) => createSlug(space.name) === slug) ||
    featuredSpaces[0] ||
    null
  );
}

function renderPublicSpaceProfile() {
  if (!publicSpaceName) return;

  const space = getPublicSpaceFromUrl();

  if (!space) return;

  const spaceKey = createSlug(space.name);
  const spaceOpportunities = getOpportunitiesBySpace(space.name);

  document.title = `${space.name} | enredARTE`;

  publicSpaceName.textContent = space.name;
  publicSpaceType.textContent = space.type || "espacio";
  publicSpaceDescription.textContent =
    space.description ||
    "Un lugar disponible para activar muestras, convocatorias y encuentros culturales.";

  publicSpaceLocation.textContent = `${space.neighborhood}, ${space.city}`;
  publicSpaceCapacity.textContent = space.capacity || "capacidad a definir";
  publicSpaceDisciplines.textContent =
    space.disciplines || "disciplinas abiertas";

  publicSpaceAboutTitle.textContent = `${space.name} como punto de encuentro.`;
  publicSpaceAbout.textContent =
    space.description ||
    "Este perfil reúne información del espacio, sus características y las oportunidades activas dentro de enredARTE.";

  publicSpaceOpportunitiesCount.textContent = spaceOpportunities.length;
  publicSpaceCapacityStat.textContent = space.capacity || "—";
  publicSpacePrice.textContent = space.price || "—";

  if (publicSpaceProposalButton) {
    publicSpaceProposalButton.setAttribute("data-open-proposal", "");
    publicSpaceProposalButton.dataset.spaceKey = spaceKey;
    publicSpaceProposalButton.dataset.spaceName = space.name;
    publicSpaceProposalButton.dataset.spaceLocation = `${space.neighborhood}, ${space.city}`;
  }

  if (!publicSpaceOpportunities) return;

  if (spaceOpportunities.length === 0) {
    publicSpaceOpportunities.innerHTML = `
      <article class="admin-opportunity">
        <div class="admin-opportunity-header">
          <div>
            <p class="section-label">convocatorias</p>
            <h2>Este espacio todavía no tiene convocatorias activas.</h2>
          </div>
        </div>

        <p class="empty-state">
          Mientras tanto, podés proponer una muestra para que el espacio la revise.
        </p>
      </article>
    `;

    return;
  }

  publicSpaceOpportunities.innerHTML = `
    <article class="admin-opportunity">
      <div class="admin-opportunity-header">
        <div>
          <p class="section-label">convocatorias</p>
          <h2>Oportunidades activas en este espacio.</h2>
        </div>

        <div class="admin-opportunity-meta">
          <span>${spaceOpportunities.length} convocatorias</span>
        </div>
      </div>

      <div class="cards-grid">
        ${spaceOpportunities
      .map((opportunity) => {
        const state = getOpportunityRuntimeState(opportunity);

        const statusLabel = state.isFull
          ? "completa"
          : state.available === 1
            ? "1 cupo"
            : `${state.available} cupos`;

        return `
              <article class="opportunity-card ${state.isFull ? "is-full" : ""
          }">
                <div class="card-top">
                  <span>${opportunity.city}</span>
                  <span>${opportunity.date}</span>
                </div>

                <h3>${opportunity.fullTitle || opportunity.title}</h3>

                <p>${opportunity.description}</p>

                <div class="card-meta">
                  <div class="meta-row">
                    <span>disciplinas</span>
                    <strong>${opportunity.detailDiscipline ||
          opportunity.discipline.join(" / ")
          }</strong>
                  </div>

                  <div class="meta-row">
                    <span>costo</span>
                    <strong>${opportunity.cost}</strong>
                  </div>

                  <div class="meta-row">
                    <span>estado</span>
                    <strong>${statusLabel}</strong>
                  </div>
                </div>

                <a
                  class="button button-secondary"
                  href="oportunidad.html?o=${opportunity.slug}"
                >
                  Ver convocatoria
                </a>
              </article>
            `;
      })
      .join("")}
      </div>
    </article>
  `;
}

renderPublicSpaceProfile();

const openSpaceOpportunityButton = document.querySelector(
  "[data-open-space-opportunity]"
);

const spaceOpportunityModal = document.querySelector(
  "[data-space-opportunity-modal]"
);

const spaceOpportunityForm = document.querySelector(
  "[data-space-opportunity-form]"
);

const spaceOpportunitySuccess = document.querySelector(
  "[data-space-opportunity-success]"
);

const spaceOpportunityName = document.querySelector(
  "[data-space-opportunity-name]"
);

function openSpaceOpportunityModal() {
  if (!spaceOpportunityModal || !spaceOpportunityForm) return;

  const selectedSpace = getSelectedSpaceForPanel();

  if (!selectedSpace) {
    alert("Primero seleccioná un espacio aprobado.");
    return;
  }

  spaceOpportunityForm.reset();

  if (spaceOpportunitySuccess) {
    spaceOpportunitySuccess.hidden = true;
  }

  if (spaceOpportunityName) {
    spaceOpportunityName.textContent = selectedSpace.name;
  }

  spaceOpportunityModal.classList.add("is-open");
  spaceOpportunityModal.setAttribute("aria-hidden", "false");
}

function closeSpaceOpportunityModal() {
  if (!spaceOpportunityModal) return;

  spaceOpportunityModal.classList.remove("is-open");
  spaceOpportunityModal.setAttribute("aria-hidden", "true");
}

if (openSpaceOpportunityButton) {
  openSpaceOpportunityButton.addEventListener("click", () => {
    openSpaceOpportunityModal();
  });
}

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-space-opportunity]");

  if (!closeButton) return;

  closeSpaceOpportunityModal();
});

if (spaceOpportunityForm) {
  spaceOpportunityForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedSpace = getSelectedSpaceForPanel();

    if (!selectedSpace) return;

    const formData = new FormData(spaceOpportunityForm);
    const opportunityData = Object.fromEntries(formData);

    const totalSpots = Number(opportunityData.totalSpots) || 1;

    const newOpportunitySlug = createSlug(
      `${opportunityData.opportunityTitle}-${Date.now()}`
    );

    const newOpportunity = {
      slug: newOpportunitySlug,
      title: selectedSpace.name,
      fullTitle: opportunityData.opportunityTitle,
      city: selectedSpace.city,
      neighborhood: selectedSpace.neighborhood,
      discipline: [opportunityData.discipline.toLowerCase()],
      detailDiscipline: opportunityData.discipline,
      description: opportunityData.description,
      detailDescription: opportunityData.description,
      date: opportunityData.date,
      time: opportunityData.time,
      cost: opportunityData.artistCost,
      totalCost: opportunityData.totalCost,
      confirmed: 0,
      totalSpots,
      availableSpots: totalSpots,
      spots:
        totalSpots === 1
          ? "1 cupo disponible"
          : `${totalSpots} cupos disponibles`,
    };

    opportunities.unshift(newOpportunity);
    saveOpportunity(newOpportunity);

    if (spaceOpportunitySuccess) {
      spaceOpportunitySuccess.hidden = false;
    }

    setTimeout(() => {
      closeSpaceOpportunityModal();

      renderSpacePanelSummary();
      renderSpacePanelDashboard();
    }, 600);
  });
}