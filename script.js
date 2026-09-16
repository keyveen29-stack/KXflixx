/* =========================
   DONNÉES DES FILMS
========================= */

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
  }
];


/* =========================
   VARIABLES
========================= */

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
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const filmInfo = document.getElementById("film-info");
const closeInfo = document.getElementById("close-info");

const infoImage = document.getElementById("info-image");
const infoTitle = document.getElementById("info-title");
const infoAge = document.getElementById("info-age");
const infoYear = document.getElementById("info-year");
const infoSynopsis = document.getElementById("info-synopsis");

const launchFilm = document.getElementById("launch-film");

const lecteur = document.getElementById("lecteur");
const videoFrame = document.getElementById("video-frame");
const closePlayer = document.getElementById("close-player");

const playerTitle = document.getElementById("player-title");
const progressBar = document.getElementById("player-progress-bar");

const featuredButton = document.getElementById("featured-button");

const searchInput = document.getElementById("search-input");
const clearSearch = document.getElementById("clear-search");
const searchStatus = document.getElementById("search-status");

const noResults = document.getElementById("no-results");
const sectionTitle = document.getElementById("section-title");


let selectedFilm = null;

let carouselPosition = 0;
let carouselSpeed = 0.35;

let animationFrame = null;
let isPaused = false;

let touchStartX = 0;
let touchStartPosition = 0;

let progressInterval = null;


/* =========================
   CONNEXION
========================= */

nameButton.addEventListener("click", askPassword);

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    askPassword();
  }
});

function askPassword() {

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


passwordButton.addEventListener("click", login);

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    login();
  }
});


function login() {

  if (passwordInput.value !== "KX") {

    passwordError.style.display = "block";

    passwordInput.value = "";

    passwordInput.focus();

    return;
  }

  passwordError.style.display = "none";

  loginScreen.style.opacity = "0";
  loginScreen.style.transition = "opacity 0.5s ease";

  setTimeout(() => {

    loginScreen.style.display = "none";
    site.style.display = "block";

    document.body.style.overflowX = "hidden";

    startCarousel();

  }, 500);
}


/* =========================
   AFFICHER LES FILMS
========================= */

function afficherFilms(list = filmsData, loop = true) {

  carousel.innerHTML = "";

  let filmsToDisplay = list;

  /*
   * Pour le défilement infini :
   * on répète les films deux fois.
   */
  if (loop && list.length > 0) {
    filmsToDisplay = [...list, ...list];
  }

  filmsToDisplay.forEach((film, index) => {

    const card = document.createElement("article");

    card.className = "film-card film-loading";

    card.dataset.index = index % list.length;

    card.innerHTML = `
      <img
        src="${film.image}"
        alt="${film.title}"
        loading="lazy"
      >

      <div class="film-age">
        ${film.age}
      </div>

      <div class="film-play">
        ▶
      </div>

      <div class="film-title">
        ${film.title}
      </div>
    `;

    card.addEventListener("click", () => {
      ouvrirInfos(film);
    });

    carousel.appendChild(card);

    /*
     * Petit effet d'apparition.
     */
    setTimeout(() => {
      card.classList.remove("film-loading");
      card.classList.add("film-loaded");
    }, Math.min(index * 40, 500));

  });

  carouselPosition = 0;

  carousel.style.transform = "translate3d(0, 0, 0)";

  noResults.style.display =
    list.length === 0 ? "block" : "none";

  if (list.length === 0) {
    carousel.style.display = "none";
  } else {
    carousel.style.display = "flex";
  }
}


/* =========================
   FILM À LA UNE
========================= */

featuredButton.addEventListener("click", () => {

  const spiderMan = filmsData.find(
    film => film.title === "Spider-Man : New Generation"
  );

  if (spiderMan) {
    ouvrirInfos(spiderMan);
  }

});


/* =========================
   MODAL FILM
========================= */

function ouvrirInfos(film) {

  selectedFilm = film;

  infoImage.src = film.image;
  infoImage.alt = film.title;

  infoTitle.textContent = film.title;
  infoAge.textContent = film.age;
  infoYear.textContent = film.year;

  infoSynopsis.textContent = film.synopsis;

  filmInfo.classList.add("active");

  document.body.style.overflow = "hidden";
}


function fermerInfos() {

  filmInfo.classList.remove("active");

  document.body.style.overflow = "";

  selectedFilm = null;
}


closeInfo.addEventListener("click", fermerInfos);


filmInfo.addEventListener("click", (event) => {

  if (event.target === filmInfo) {
    fermerInfos();
  }

});


/* =========================
   LANCER LE FILM
========================= */

launchFilm.addEventListener("click", () => {

  if (!selectedFilm) return;

  const film = selectedFilm;

  fermerInfos();

  setTimeout(() => {
    ouvrirFilm(film);
  }, 150);

});


function ouvrirFilm(film) {

  if (!film || !film.embed) {
    return;
  }

  playerTitle.textContent = film.title;

  videoFrame.src = film.embed;

  lecteur.classList.add("active");

  document.body.style.overflow = "hidden";

  startProgressBar();

}


function fermerLecteur() {

  lecteur.classList.remove("active");

  videoFrame.src = "";

  document.body.style.overflow = "";

  stopProgressBar();

  progressBar.style.width = "0%";
}


closePlayer.addEventListener("click", fermerLecteur);


/* =========================
   BARRE DE PROGRESSION
========================= */

function startProgressBar() {

  stopProgressBar();

  let progress = 0;

  progressInterval = setInterval(() => {

    progress += 0.025;

    /*
     * La barre reste subtile et ne prétend pas
     * connaître la vraie progression de la vidéo.
     */
    if (progress >= 100) {
      progress = 0;
    }

    progressBar.style.width = `${progress}%`;

  }, 1000);
}


function stopProgressBar() {

  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }

}


/* =========================
   FERMER AVEC ESC
========================= */

document.addEventListener("keydown", (event) => {

  if (event.key !== "Escape") return;

  if (lecteur.classList.contains("active")) {

    fermerLecteur();

  } else if (filmInfo.classList.contains("active")) {

    fermerInfos();

  }

});


/* =========================
   RECHERCHE
========================= */

searchInput.addEventListener("input", () => {

  const query = searchInput.value.trim().toLowerCase();

  if (!query) {

    clearSearch.style.display = "none";

    searchStatus.textContent = "";

    sectionTitle.textContent = "Films populaires";

    afficherFilms(filmsData, true);

    startCarousel();

    return;
  }

  clearSearch.style.display = "block";

  const results = filmsData.filter(film => {

    return (
      film.title.toLowerCase().includes(query) ||
      film.genre.toLowerCase().includes(query) ||
      film.year.includes(query)
    );

  });

  sectionTitle.textContent = `Résultats pour « ${searchInput.value.trim()} »`;

  searchStatus.textContent =
    `${results.length} film${results.length > 1 ? "s" : ""}`;

  /*
   * Pas de duplication pendant une recherche.
   */
  afficherFilms(results, false);

  stopCarousel();

});


clearSearch.addEventListener("click", () => {

  searchInput.value = "";

  clearSearch.style.display = "none";

  searchStatus.textContent = "";

  sectionTitle.textContent = "Films populaires";

  afficherFilms(filmsData, true);

  startCarousel();

  searchInput.focus();

});


/* =========================
   CAROUSEL
========================= */

function getLoopWidth() {

  const cards = carousel.children;

  if (cards.length <= filmsData.length) {
    return 0;
  }

  const firstHalfLastCard =
    cards[filmsData.length - 1];

  if (!firstHalfLastCard) {
    return 0;
  }

  const cardWidth =
    firstHalfLastCard.offsetWidth;

  const gap = 15;

  return (cardWidth + gap) * filmsData.length;
}


function animateCarousel() {

  if (!isPaused) {

    carouselPosition -= carouselSpeed;

    const loopWidth = getLoopWidth();

    if (loopWidth > 0 && Math.abs(carouselPosition) >= loopWidth) {
      carouselPosition = 0;
    }

    carousel.style.transform =
      `translate3d(${carouselPosition}px, 0, 0)`;
  }

  animationFrame = requestAnimationFrame(animateCarousel);
}


function startCarousel() {

  stopCarousel();

  if (filmsData.length === 0) return;

  afficherFilms(
    searchInput.value.trim()
      ? filmsData.filter(film =>
          film.title.toLowerCase().includes(
            searchInput.value.trim().toLowerCase()
          )
        )
      : filmsData,
    !searchInput.value.trim()
  );

  if (!searchInput.value.trim()) {
    animationFrame = requestAnimationFrame(animateCarousel);
  }
}


function stopCarousel() {

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

}


/* =========================
   PAUSE SOURIS
========================= */

carousel.addEventListener("mouseenter", () => {
  isPaused = true;
});

carousel.addEventListener("mouseleave", () => {
  isPaused = false;
});


/* =========================
   BOUTONS GAUCHE / DROITE
========================= */

prevButton.addEventListener("click", () => {

  isPaused = true;

  carouselPosition += 330;

  carousel.style.transform =
    `translate3d(${carouselPosition}px, 0, 0)`;

  setTimeout(() => {
    isPaused = false;
  }, 700);

});


nextButton.addEventListener("click", () => {

  isPaused = true;

  carouselPosition -= 330;

  const loopWidth = getLoopWidth();

  if (loopWidth > 0 && Math.abs(carouselPosition) >= loopWidth) {
    carouselPosition = 0;
  }

  carousel.style.transform =
    `translate3d(${carouselPosition}px, 0, 0)`;

  setTimeout(() => {
    isPaused = false;
  }, 700);

});


/* =========================
   TOUCH MOBILE
========================= */

carousel.addEventListener("touchstart", (event) => {

  isPaused = true;

  touchStartX = event.touches[0].clientX;

  touchStartPosition = carouselPosition;

}, {
  passive: true
});


carousel.addEventListener("touchmove", (event) => {

  const currentX = event.touches[0].clientX;

  const difference = currentX - touchStartX;

  carouselPosition =
    touchStartPosition + difference;

  carousel.style.transform =
    `translate3d(${carouselPosition}px, 0, 0)`;

}, {
  passive: true
});


carousel.addEventListener("touchend", () => {

  setTimeout(() => {
    isPaused = false;
  }, 600);

});


/* =========================
   INITIALISATION
========================= */

afficherFilms(filmsData, true);


/* =========================
   INTERSECTION OBSERVER
========================= */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("film-loaded");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.1
  }
);


document.querySelectorAll(".film-card").forEach(card => {
  observer.observe(card);
});