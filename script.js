/* =========================================
   KXFLIX
   15 FILMS
========================================= */

const filmsData = [

  {
    title: "Obsession",
    image: "https://m.media-amazon.com/images/S/pv-target-images/86c0f135b4699427fc84684b09990c0bbb69a41b2921fc577dcd0fbf59851bc6._UR1920,1080_.jpg",
    embed: "https://vrodaz.com/iframe/ed176505",
    year: "2026",
    age: "16+",
    genre: "Thriller",
    synopsis: "Une histoire de fascination et de tension où les frontières entre désir, obsession et danger deviennent de plus en plus floues."
  },

  {
    title: "Toy Story 5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7j43OjYSL25Vukor9_5_nPm3sfohjI1bt0DNTU2o8UyiWqsZMNyhDR98&s=10",
    embed: "https://fradov.com/iframe/78e64c70",
    year: "2026",
    age: "6+",
    genre: "Animation",
    synopsis: "Woody, Buzz et leurs amis embarquent dans une nouvelle aventure pleine d'humour et d'émotion. Une nouvelle menace vient bouleverser leur monde de jouets."
  },

  {
    title: "Spider-Man : New Generation",
    image: "https://snworksceo.imgix.net/ttd/86058c86-ffe3-45ff-bd60-f6f8d28dbdd1.sized-1000x1000.jpg?w=800&dpr=2&ar=16%3A9&fit=crop&crop=faces",
    embed: "https://sharecloudy.com/iframe/Bm7bBpnpaN",
    year: "2018",
    age: "10+",
    genre: "Animation",
    synopsis: "Miles Morales devient Spider-Man et découvre qu'il n'est pas le seul héros à porter ce masque. Plusieurs dimensions vont alors se retrouver liées."
  },

  {
    title: "Spider-Man : Across the Spider-Verse",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/08f3260f-1512-4c90-a3df-fc2e407ba708/d5f22ff0-d35b-420a-bc64-3d5f9ba3818b?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    embed: "https://sharecloudy.com/iframe/1V4HHtvvKr",
    year: "2023",
    age: "10+",
    genre: "Animation",
    synopsis: "Miles Morales retrouve Gwen Stacy et se retrouve propulsé dans un immense multivers. De nouveaux Spider-Man l'obligent à remettre en question son propre destin."
  },

  {
    title: "Scream 7",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8c932462-5fed-4a21-bfd3-275636f21e0b.__CR0,0,1940,1200_PT0_SX970_V1___.jpg",
    embed: "https://vromov.com/iframe/iqdDB5G1i2",
    year: "2026",
    age: "16+",
    genre: "Horreur",
    synopsis: "Ghostface revient semer la terreur alors qu'une nouvelle série de meurtres frappe une communauté. Les survivants doivent découvrir qui se cache derrière le masque."
  },

  {
    title: "Les Minions",
    image: "https://i.ytimg.com/vi/JDdRK2y2xT0/maxresdefault.jpg",
    embed: "https://vromov.com/iframe/c020336a",
    year: "2015",
    age: "6+",
    genre: "Animation",
    synopsis: "Les Minions cherchent un nouveau méchant à servir et partent dans une aventure complètement déjantée. Leur quête les conduit à rencontrer la redoutable Scarlet Overkill."
  },

  {
    title: "Scary Movie",
    image: "https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2026/05/28/ALVE01KSRB5EXZEWYA3TCTC4W8S4VP/SM6_US_2026_SA_16x9_1920x1080_NB_4502818_1920x1080.jpg",
    embed: "https://vromov.com/iframe/75dd0371",
    year: "2026",
    age: "16+",
    genre: "Comédie",
    synopsis: "Une nouvelle parodie horrifique revisite les codes des grands films d'horreur avec des situations absurdes, des personnages décalés et beaucoup d'humour."
  },

  {
    title: "Jimmy Neutron : Un Garçon Génial",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2Fjimmy-neutron%7CJIMMYNEUTROW0026207_BAN1_2424_NEWTV_HD.jpg?format=512x&saveas=webp&saveasquality=70",
    embed: "https://dotrab.com/iframe/e63ca81b",
    year: "2001",
    age: "6+",
    genre: "Animation",
    synopsis: "Jimmy Neutron est un jeune génie qui invente une multitude de machines extraordinaires. Lorsqu'une invention tourne mal, il doit utiliser son intelligence pour sauver sa ville."
  },

  {
    title: "Les Chat-ventures de Rocky",
    image: "https://images.justwatch.com/backdrop/346602883/s640/les-chat-ventures-de-rocky.jpg",
    embed: "https://vromov.com/iframe/8697ca1f",
    year: "2026",
    age: "7+",
    genre: "Animation",
    synopsis: "Rocky invite un chaton à la tour de contrôle en pensant pouvoir s'en occuper sans aide. Mais son nouvel ami félin provoque rapidement plus de bêtises que prévu."
  },

  {
    title: "Le Voyage de Chihiro",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2FLEVOYAGEDECW0174776_BAN1_2424_NEWTV_HD.jpg",
    embed: "https://sharecloudy.com/iframe/KptnxWYWbq",
    year: "2001",
    age: "8+",
    genre: "Animation",
    synopsis: "Chihiro se retrouve prisonnière d'un monde mystérieux peuplé d'esprits après que ses parents ont été transformés en cochons. Pour les sauver, elle devra travailler auprès de la sorcière Yubaba et retrouver son courage."
  },

  {
    title: "Hulk",
    image: "https://i.redd.it/x72b8to0gpkf1.jpeg",
    embed: "https://vrodaz.com/iframe/y2IP00lvC3",
    year: "2003",
    age: "12+",
    genre: "Action",
    synopsis: "Après une expérience scientifique qui tourne mal, Bruce Banner développe la capacité de se transformer en une créature verte dotée d'une force surhumaine. Traqué par l'armée, il doit apprendre à contrôler cette puissance avant qu'elle ne le détruise."
  },

  {
    title: "Do Not Enter",
    image: "https://lovehorror.co.uk/wp-content/uploads/2026/03/do-not-enter-feat.webp",
    embed: "https://sharecloudy.com/iframe/8ReQN4yP01",
    year: "2026",
    age: "16+",
    genre: "Horreur",
    synopsis: "Un lieu interdit, des secrets inquiétants et une règle simple : ne pas entrer."
  },

  {
    title: "Ted",
    image: "https://m.media-amazon.com/images/S/pv-target-images/6ad81d8b805f469f3ecd7fce9b9041d4569c4f7d3d57cb0b2bbe14bfd15c71ce._UR1920,1080_.png",
    embed: "https://sharecloudy.com/iframe/o1wMlNERx7",
    year: "2012",
    age: "16+",
    genre: "Comédie",
    synopsis: "John a un meilleur ami un peu particulier : Ted, un ours en peluche vivant, drôle et totalement incontrôlable."
  },

  {
    title: "Ted 2",
    image: "https://movieguideme.com/fr/wp-content/uploads/2015/07/ted2.jpg",
    embed: "https://sharecloudy.com/iframe/o7dDLRwh2x",
    year: "2015",
    age: "16+",
    genre: "Comédie",
    synopsis: "Ted veut prouver qu'il est une personne à part entière et se lance dans une bataille juridique complètement déjantée."
  },

  {
    title: "Wonka",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2FWONKAXXXXXXW0206876_BAN1_2424_NEWTV_UHD.jpg",
    embed: "https://sharecloudy.com/iframe/xvWYyQbwpy",
    year: "2023",
    age: "7+",
    genre: "Fantastique",
    synopsis: "Découvrez les débuts de Willy Wonka et l'aventure qui l'a conduit à devenir le célèbre chocolatier que tout le monde connaît."
  }

];


/* =========================================
   VARIABLES
========================================= */

const loginScreen = document.getElementById("login-screen");
const site = document.getElementById("site");

const nameStep = document.getElementById("name-step");
const passwordStep = document.getElementById("password-step");

const nameInput = document.getElementById("name-input");
const passwordInput = document.getElementById("password-input");

const nameButton = document.getElementById("name-button");
const passwordButton = document.getElementById("password-button");

const passwordError = document.getElementById("password-error");

const userName = document.getElementById("user-name");

const carousel = document.getElementById("carousel");
const carouselWrapper = document.querySelector(".carousel-wrapper");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const searchInput = document.getElementById("search-input");
const clearSearch = document.getElementById("clear-search");
const searchStatus = document.getElementById("search-status");

const sectionTitle = document.getElementById("section-title");
const noResults = document.getElementById("no-results");

const filmInfo = document.getElementById("film-info");
const closeInfo = document.getElementById("close-info");

const infoImage = document.getElementById("info-image");
const infoTitle = document.getElementById("info-title");
const infoAge = document.getElementById("info-age");
const infoYear = document.getElementById("info-year");
const infoSynopsis = document.getElementById("info-synopsis");

const launchFilm = document.getElementById("launch-film");

const lecteur = document.getElementById("lecteur");
const closePlayer = document.getElementById("close-player");

const videoFrame = document.getElementById("video-frame");
const playerTitle = document.getElementById("player-title");
const progressBar = document.getElementById("player-progress-bar");

const featuredButton = document.getElementById("featured-button");


/* =========================================
   ÉTAT
========================================= */

let currentFilm = null;

let filteredFilms = [...filmsData];

let carouselPosition = 0;

let animationFrame = null;

let isPaused = false;
let isDragging = false;

let startX = 0;
let lastX = 0;

let lastTime = 0;

const AUTO_SPEED = 0.035;


/* =========================================
   CONNEXION
========================================= */

function continuerNom() {

  const name = nameInput.value.trim();

  if (!name) {
    nameInput.focus();
    return;
  }

  userName.textContent = name;

  nameStep.classList.remove("active");
  passwordStep.classList.add("active");

  setTimeout(() => {
    passwordInput.focus();
  }, 100);

}


function verifierMotDePasse() {

  const password = passwordInput.value;

  if (password !== "KX") {

    passwordError.style.display = "block";

    passwordInput.value = "";

    passwordInput.focus();

    return;
  }

  passwordError.style.display = "none";

  loginScreen.style.opacity = "0";
  loginScreen.style.pointerEvents = "none";

  site.style.display = "block";

  setTimeout(() => {
    loginScreen.style.display = "none";
  }, 500);

  afficherFilms(filmsData);

  startAutoScroll();
}


/* =========================================
   CARTES FILMS
========================================= */

function creerCarteFilm(film, index) {

  const card = document.createElement("article");

  card.className = "film-card";

  card.dataset.index = index;

  card.innerHTML = `
    <img
      src="${film.image}"
      alt="${film.title}"
      loading="lazy"
      draggable="false"
    >

    <div class="film-play">▶</div>

    <div class="film-card-info">

      <div class="film-title">
        ${film.title}
      </div>

      <div class="film-meta">
        <span class="film-age">${film.age}</span>
        <span class="film-year">${film.year}</span>
      </div>

    </div>
  `;

  card.addEventListener("click", () => {

    if (isDragging) {
      return;
    }

    ouvrirInfos(film);
  });

  return card;
}


/* =========================================
   AFFICHAGE
========================================= */

function afficherFilms(list) {

  carousel.innerHTML = "";

  filteredFilms = [...list];

  if (list.length === 0) {

    carousel.style.transform = "translate3d(0,0,0)";

    noResults.style.display = "block";

    return;
  }

  noResults.style.display = "none";

  /*
    On répète la liste plusieurs fois.
    Cela permet de créer un vrai défilement
    continu avec les 15 films.
  */

  const repetitions = 3;

  for (let r = 0; r < repetitions; r++) {

    list.forEach((film, index) => {

      const card = creerCarteFilm(film, index);

      carousel.appendChild(card);

    });

  }

  carouselPosition = 0;

  carousel.style.transform =
    `translate3d(${carouselPosition}px,0,0)`;

  sectionTitle.textContent =
    list.length === filmsData.length
      ? "Tous les films"
      : `${list.length} film${list.length > 1 ? "s" : ""} trouvé${list.length > 1 ? "s" : ""}`;
}


/* =========================================
   OUVRIR INFOS
========================================= */

function ouvrirInfos(film) {

  currentFilm = film;

  infoImage.src = film.image;
  infoImage.alt = film.title;

  infoTitle.textContent = film.title;
  infoAge.textContent = film.age;
  infoYear.textContent = film.year;

  infoSynopsis.textContent = film.synopsis;

  filmInfo.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* =========================================
   FERMER INFOS
========================================= */

function fermerInfos() {

  filmInfo.classList.remove("active");

  document.body.style.overflow = "";

}


/* =========================================
   LANCER FILM
========================================= */

function lancerFilm() {

  if (!currentFilm) {
    return;
  }

  lecteur.classList.add("active");

  playerTitle.textContent = currentFilm.title;

  videoFrame.src = currentFilm.embed;

  progressBar.style.width = "0%";

  fermerInfos();

  document.body.style.overflow = "hidden";
}


/* =========================================
   FERMER LECTEUR
========================================= */

function fermerLecteur() {

  lecteur.classList.remove("active");

  videoFrame.src = "";

  progressBar.style.width = "0%";

  document.body.style.overflow = "";
}


/* =========================================
   BARRE PROGRESSION VISUELLE
========================================= */

function animationProgress() {

  if (!lecteur.classList.contains("active")) {
    return;
  }

  let current = parseFloat(
    progressBar.dataset.value || "0"
  );

  current += 0.025;

  if (current > 100) {
    current = 0;
  }

  progressBar.dataset.value = current;

  progressBar.style.width = `${current}%`;

  requestAnimationFrame(animationProgress);
}


/* =========================================
   RECHERCHE
========================================= */

function rechercherFilms() {

  const query = searchInput.value
    .trim()
    .toLowerCase();

  clearSearch.style.display =
    query ? "block" : "none";

  if (!query) {

    searchStatus.textContent = "";

    afficherFilms(filmsData);

    return;
  }

  const resultats = filmsData.filter(film => {

    return (
      film.title.toLowerCase().includes(query) ||
      film.genre.toLowerCase().includes(query) ||
      film.year.includes(query)
    );

  });

  searchStatus.textContent =
    `${resultats.length} résultat${resultats.length > 1 ? "s" : ""}`;

  afficherFilms(resultats);
}


function effacerRecherche() {

  searchInput.value = "";

  clearSearch.style.display = "none";

  searchStatus.textContent = "";

  afficherFilms(filmsData);

  searchInput.focus();
}


/* =========================================
   AUTO SCROLL
========================================= */

function obtenirLargeurBloc() {

  const cards = carousel.children;

  if (!cards.length) {
    return 0;
  }

  const totalFilms = filteredFilms.length;

  if (!totalFilms) {
    return 0;
  }

  const firstCard = cards[0];

  const secondCard = cards[1];

  if (!firstCard || !secondCard) {
    return firstCard.offsetWidth + 18;
  }

  const distance =
    secondCard.getBoundingClientRect().left -
    firstCard.getBoundingClientRect().left;

  return distance * totalFilms;
}


function normaliserPosition() {

  const bloc = obtenirLargeurBloc();

  if (!bloc) {
    return;
  }

  if (carouselPosition <= -bloc) {
    carouselPosition += bloc;
  }

  if (carouselPosition > 0) {
    carouselPosition -= bloc;
  }
}


function startAutoScroll(time = 0) {

  if (lastTime === 0) {
    lastTime = time;
  }

  const delta = time - lastTime;

  lastTime = time;

  if (
    !isPaused &&
    !isDragging &&
    filteredFilms.length > 0
  ) {

    carouselPosition -=
      AUTO_SPEED * Math.min(delta, 40);

    normaliserPosition();

    carousel.style.transform =
      `translate3d(${carouselPosition}px,0,0)`;
  }

  animationFrame =
    requestAnimationFrame(startAutoScroll);
}


/* =========================================
   BOUTONS CARROUSEL
========================================= */

function avancerCarousel() {

  const distance = obtenirDistanceCarte();

  carouselPosition -= distance * 2;

  normaliserPosition();

  carousel.style.transition =
    "transform 0.45s ease";

  carousel.style.transform =
    `translate3d(${carouselPosition}px,0,0)`;

  setTimeout(() => {
    carousel.style.transition = "";
  }, 500);
}


function reculerCarousel() {

  const distance = obtenirDistanceCarte();

  carouselPosition += distance * 2;

  normaliserPosition();

  carousel.style.transition =
    "transform 0.45s ease";

  carousel.style.transform =
    `translate3d(${carouselPosition}px,0,0)`;

  setTimeout(() => {
    carousel.style.transition = "";
  }, 500);
}


function obtenirDistanceCarte() {

  const first = carousel.children[0];
  const second = carousel.children[1];

  if (!first || !second) {
    return 328;
  }

  return (
    second.getBoundingClientRect().left -
    first.getBoundingClientRect().left
  );
}


/* =========================================
   SOURIS
========================================= */

carouselWrapper.addEventListener("mouseenter", () => {
  isPaused = true;
});

carouselWrapper.addEventListener("mouseleave", () => {

  if (!isDragging) {
    isPaused = false;
  }

});


/* =========================================
   TOUCH MOBILE
========================================= */

carouselWrapper.addEventListener(
  "touchstart",
  event => {

    isDragging = true;
    isPaused = true;

    startX = event.touches[0].clientX;
    lastX = startX;

    carouselWrapper.classList.add("dragging");

  },
  { passive: true }
);


carouselWrapper.addEventListener(
  "touchmove",
  event => {

    if (!isDragging) {
      return;
    }

    const currentX = event.touches[0].clientX;

    const movement = currentX - lastX;

    lastX = currentX;

    carouselPosition += movement;

    normaliserPosition();

    carousel.style.transform =
      `translate3d(${carouselPosition}px,0,0)`;

  },
  { passive: true }
);


carouselWrapper.addEventListener(
  "touchend",
  () => {

    isDragging = false;

    carouselWrapper.classList.remove("dragging");

    setTimeout(() => {
      isPaused = false;
    }, 350);

  }
);


/* =========================================
   SOURIS DESKTOP : DRAG
========================================= */

carouselWrapper.addEventListener(
  "mousedown",
  event => {

    isDragging = true;
    isPaused = true;

    startX = event.clientX;
    lastX = startX;

    carouselWrapper.classList.add("dragging");

  }
);


window.addEventListener(
  "mousemove",
  event => {

    if (!isDragging) {
      return;
    }

    const movement =
      event.clientX - lastX;

    lastX = event.clientX;

    carouselPosition += movement;

    normaliserPosition();

    carousel.style.transform =
      `translate3d(${carouselPosition}px,0,0)`;

  }
);


window.addEventListener(
  "mouseup",
  () => {

    if (!isDragging) {
      return;
    }

    isDragging = false;

    carouselWrapper.classList.remove("dragging");

    setTimeout(() => {
      isPaused = false;
    }, 300);

  }
);


/* =========================================
   BOUTON À LA UNE
========================================= */

featuredButton.addEventListener(
  "click",
  () => {

    const spiderMan =
      filmsData.find(
        film =>
          film.title ===
          "Spider-Man : New Generation"
      );

    if (spiderMan) {
      ouvrirInfos(spiderMan);
    }

  }
);


/* =========================================
   EVENTS
========================================= */

nameButton.addEventListener(
  "click",
  continuerNom
);

passwordButton.addEventListener(
  "click",
  verifierMotDePasse
);

nameInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {
      continuerNom();
    }

  }
);

passwordInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {
      verifierMotDePasse();
    }

  }
);

searchInput.addEventListener(
  "input",
  rechercherFilms
);

clearSearch.addEventListener(
  "click",
  effacerRecherche
);

prevBtn.addEventListener(
  "click",
  reculerCarousel
);

nextBtn.addEventListener(
  "click",
  avancerCarousel
);

closeInfo.addEventListener(
  "click",
  fermerInfos
);

launchFilm.addEventListener(
  "click",
  lancerFilm
);

closePlayer.addEventListener(
  "click",
  fermerLecteur
);


/* =========================================
   CLIQUER EN DEHORS DE LA FENÊTRE INFOS
========================================= */

filmInfo.addEventListener(
  "click",
  event => {

    if (event.target === filmInfo) {
      fermerInfos();
    }

  }
);


/* =========================================
   ESC
========================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }

    if (filmInfo.classList.contains("active")) {
      fermerInfos();
    }

    if (lecteur.classList.contains("active")) {
      fermerLecteur();
    }

  }
);


/* =========================================
   INITIALISATION
========================================= */

site.style.display = "none";

filmInfo.classList.remove("active");

lecteur.classList.remove("active");

afficherFilms(filmsData);

requestAnimationFrame(startAutoScroll);
animationProgress();