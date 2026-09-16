document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CATALOGUE DES FILMS
  ========================= */

  const filmsData = [

    {
      title: "Obsession",
      year: "2026",
      age: "16+",
      image: "https://m.media-amazon.com/images/S/pv-target-images/86c0f135b4699427fc84684b09990c0bbb69a41b2921fc577dcd0fbf59851bc6._UR1920,1080_.jpg",
      url: "https://vrodaz.com/iframe/ed176505",
      synopsis: "Une histoire de fascination et de tension où les frontières entre désir, obsession et danger deviennent de plus en plus floues."
    },

    {
      title: "Toy Story 5",
      year: "2026",
      age: "6+",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7j43OjYSL25Vukor9_5_nPm3sfohjI1bt0DNTU2o8UyiWqsZMNyhDR98&s=10",
      url: "https://fradov.com/iframe/78e64c70",
      synopsis: "Woody, Buzz et leurs amis embarquent dans une nouvelle aventure pleine d'humour et d'émotion. Une nouvelle menace vient bouleverser leur monde de jouets."
    },

    {
      title: "Spider-Man : New Generation",
      year: "2018",
      age: "10+",
      image: "https://snworksceo.imgix.net/ttd/86058c86-ffe3-45ff-bd60-f6f8d28dbdd1.sized-1000x1000.jpg?w=800&dpr=2&ar=16%3A9&fit=crop&crop=faces",
      url: "https://sharecloudy.com/iframe/Bm7bBpnpaN",
      synopsis: "Miles Morales devient Spider-Man et découvre qu'il n'est pas le seul héros à porter ce masque. Plusieurs dimensions vont alors se retrouver liées."
    },

    {
      title: "Spider-Man : Across the Spider-Verse",
      year: "2023",
      age: "10+",
      image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/08f3260f-1512-4c90-a3df-fc2e407ba708/d5f22ff0-d35b-420a-bc64-3d5f9ba3818b?host=wbd-images.prod-vod.h264.io&partner=beamcom",
      url: "https://sharecloudy.com/iframe/1V4HHtvvKr",
      synopsis: "Miles Morales retrouve Gwen Stacy et se retrouve propulsé dans un immense multivers. De nouveaux Spider-Man l'obligent à remettre en question son propre destin."
    },

    {
      title: "Scream 7",
      year: "2026",
      age: "16+",
      image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8c932462-5fed-4a21-bfd3-275636f21e0b.__CR0,0,1940,1200_PT0_SX970_V1___.jpg",
      url: "https://vromov.com/iframe/iqdDB5G1i2",
      synopsis: "Ghostface revient semer la terreur alors qu'une nouvelle série de meurtres frappe une communauté. Les survivants doivent découvrir qui se cache derrière le masque."
    },

    {
      title: "Les Minions",
      year: "2015",
      age: "6+",
      image: "https://i.ytimg.com/vi/JDdRK2y2xT0/maxresdefault.jpg",
      url: "https://vromov.com/iframe/c020336a",
      synopsis: "Les Minions cherchent un nouveau méchant à servir et partent dans une aventure complètement déjantée. Leur quête les conduit à rencontrer la redoutable Scarlet Overkill."
    },

    {
      title: "Scary Movie",
      year: "2026",
      age: "16+",
      image: "https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2026/05/28/ALVE01KSRB5EXZEWYA3TCTC4W8S4VP/SM6_US_2026_SA_16x9_1920x1080_NB_4502818_1920x1080.jpg",
      url: "https://vromov.com/iframe/75dd0371",
      synopsis: "Une nouvelle parodie horrifique revisite les codes des grands films d'horreur avec des situations absurdes, des personnages décalés et beaucoup d'humour."
    },

    {
      title: "Jimmy Neutron : Un Garçon Génial",
      year: "2001",
      age: "6+",
      image: "https://proxymedia.woopic.com/api/v1/images/331%2Fjimmy-neutron%7CJIMMYNEUTROW0026207_BAN1_2424_NEWTV_HD.jpg?format=512x&saveas=webp&saveasquality=70",
      url: "https://dotrab.com/iframe/e63ca81b",
      synopsis: "Jimmy Neutron est un jeune génie qui invente une multitude de machines extraordinaires. Lorsqu'une invention tourne mal, il doit utiliser son intelligence pour sauver sa ville."
    },

    {
      title: "Les Chat-ventures de Rocky",
      year: "2026",
      age: "7+",
      image: "https://images.justwatch.com/backdrop/346602883/s640/les-chat-ventures-de-rocky.jpg",
      url: "https://vromov.com/iframe/8697ca1f",
      synopsis: "Rocky invite un chaton à la tour de contrôle en pensant pouvoir s'en occuper sans aide. Mais son nouvel ami félin provoque rapidement plus de bêtises que prévu."
    },

    {
      title: "Le Voyage de Chihiro",
      year: "2001",
      age: "8+",
      image: "https://proxymedia.woopic.com/api/v1/images/331%2FLEVOYAGEDECW0174776_BAN1_2424_NEWTV_HD.jpg",
      url: "https://sharecloudy.com/iframe/KptnxWYWbq",
      synopsis: "Chihiro se retrouve prisonnière d'un monde mystérieux peuplé d'esprits après que ses parents ont été transformés en cochons. Pour les sauver, elle devra travailler auprès de la sorcière Yubaba et retrouver son courage."
    },

    {
      title: "Hulk",
      year: "2003",
      age: "12+",
      image: "https://i.redd.it/x72b8to0gpkf1.jpeg",
      url: "https://vrodaz.com/iframe/y2IP00lvC3",
      synopsis: "Après une expérience scientifique qui tourne mal, Bruce Banner développe la capacité de se transformer en une créature verte dotée d'une force surhumaine. Traqué par l'armée, il doit apprendre à contrôler cette puissance avant qu'elle ne le détruise."
    }

  ];


  /* =========================
     CONNEXION
  ========================= */

  const BON_MOT_DE_PASSE = "KX";

  const passwordScreen = document.getElementById("password-screen");
  const nameStep = document.getElementById("name-step");
  const passwordStep = document.getElementById("password-step");

  const nameInput = document.getElementById("name-input");
  const nameButton = document.getElementById("name-button");

  const passwordInput = document.getElementById("password-input");
  const passwordButton = document.getElementById("password-button");
  const passwordError = document.getElementById("password-error");

  const namePreview = document.getElementById("name-preview");
  const welcomeName = document.getElementById("welcome-name");

  const site = document.getElementById("site");

  let prenom = "";


  function afficherMotDePasse() {

    const valeur = nameInput.value.trim();

    if (!valeur) {
      nameInput.focus();
      return;
    }

    prenom = valeur;

    namePreview.textContent = prenom;

    nameStep.classList.add("hidden");
    passwordStep.classList.remove("hidden");

    passwordInput.focus();
  }


  function verifierMotDePasse() {

    const motDePasse = passwordInput.value.trim();

    if (motDePasse.toUpperCase() !== BON_MOT_DE_PASSE) {

      passwordError.style.display = "block";

      passwordInput.value = "";
      passwordInput.focus();

      return;
    }

    passwordError.style.display = "none";

    welcomeName.textContent = prenom;

    passwordScreen.classList.add("hidden");
    site.classList.add("visible");

    document.body.style.overflowX = "hidden";
  }


  nameButton.addEventListener("click", afficherMotDePasse);

  passwordButton.addEventListener("click", verifierMotDePasse);


  nameInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
      afficherMotDePasse();
    }

  });


  passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
      verifierMotDePasse();
    }

  });


  /* =========================
     CRÉATION DES FILMS
  ========================= */

  const carousel = document.getElementById("carousel");
  const track = document.getElementById("film-track");

  if (!carousel || !track) {
    return;
  }


  function creerFilm(film) {

    const article = document.createElement("article");

    article.className = "film";

    article.dataset.url = film.url;
    article.dataset.title = film.title;
    article.dataset.year = film.year;
    article.dataset.age = film.age;
    article.dataset.synopsis = film.synopsis;
    article.dataset.image = film.image;

    article.innerHTML = `
      <img
        src="${film.image}"
        alt="${film.title}"
        draggable="false"
      >

      <div class="film-overlay">
        <span>▶</span>
      </div>

      <div class="film-name">
        ${film.title}
      </div>
    `;

    return article;
  }


  function creerGroupe() {

    const groupe = document.createElement("div");

    groupe.className = "film-group";

    filmsData.forEach((film) => {
      groupe.appendChild(creerFilm(film));
    });

    return groupe;
  }


  track.appendChild(creerGroupe());
  track.appendChild(creerGroupe());


  /* =========================
     CAROUSEL
  ========================= */

  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");

  let position = 0;
  const vitesse = 0.35;

  let pause = false;
  let dragging = false;

  let startX = 0;
  let startPosition = 0;
  let didSwipe = false;
  let ignoreNextClick = false;


  function getLoopWidth() {

    const groups = track.querySelectorAll(".film-group");

    if (groups.length < 2) {
      return 0;
    }

    return groups[0].getBoundingClientRect().width;
  }


  function normaliserPosition() {

    const loopWidth = getLoopWidth();

    if (!loopWidth) {
      return;
    }

    if (position <= -loopWidth) {
      position += loopWidth;
    }

    if (position >= 0) {
      position -= loopWidth;
    }

  }


  function appliquerPosition() {

    track.style.transform =
      `translate3d(${position}px, 0, 0)`;

  }


  function animation() {

    if (!pause && !dragging) {

      position -= vitesse;

      normaliserPosition();
      appliquerPosition();

    }

    requestAnimationFrame(animation);

  }


  requestAnimationFrame(animation);


  /* SOURIS */

  carousel.addEventListener("mouseenter", () => {
    pause = true;
  });


  carousel.addEventListener("mouseleave", () => {

    if (!dragging) {
      pause = false;
    }

  });


  /* MOBILE */

  carousel.addEventListener("pointerdown", (event) => {

    if (event.pointerType !== "touch") {
      return;
    }

    dragging = true;
    didSwipe = false;

    startX = event.clientX;
    startPosition = position;

    pause = true;

  });


  carousel.addEventListener("pointermove", (event) => {

    if (!dragging || event.pointerType !== "touch") {
      return;
    }

    const difference = event.clientX - startX;

    if (Math.abs(difference) > 8) {
      didSwipe = true;
    }

    position = startPosition + difference;

    appliquerPosition();

  });


  carousel.addEventListener("pointerup", (event) => {

    if (event.pointerType !== "touch") {
      return;
    }

    dragging = false;

    normaliserPosition();
    appliquerPosition();

    pause = false;

    if (didSwipe) {

      ignoreNextClick = true;

      setTimeout(() => {
        ignoreNextClick = false;
      }, 250);

    }

  });


  carousel.addEventListener("pointercancel", () => {

    dragging = false;
    pause = false;

  });


  /* FLÈCHES */

  function avancerFilm() {

    position -= carousel.clientWidth * 0.7;

    normaliserPosition();
    appliquerPosition();

  }


  function reculerFilm() {

    position += carousel.clientWidth * 0.7;

    normaliserPosition();
    appliquerPosition();

  }


  if (arrowRight) {

    arrowRight.addEventListener("click", () => {

      pause = true;

      avancerFilm();

      setTimeout(() => {
        pause = false;
      }, 1000);

    });

  }


  if (arrowLeft) {

    arrowLeft.addEventListener("click", () => {

      pause = true;

      reculerFilm();

      setTimeout(() => {
        pause = false;
      }, 1000);

    });

  }


  /* =========================
     FICHE DU FILM
  ========================= */

  const filmInfo = document.getElementById("film-info");

  const infoImage = document.getElementById("info-image");
  const infoTitle = document.getElementById("info-title");
  const infoSynopsis = document.getElementById("info-synopsis");
  const infoAge = document.getElementById("info-age");
  const infoYear = document.getElementById("info-year");

  const closeInfo = document.getElementById("close-info");
  const launchFilm = document.getElementById("launch-film");

  let filmSelectionne = null;


  function ouvrirInfos(film) {

    filmSelectionne = film;

    infoImage.src = film.dataset.image;
    infoImage.alt = film.dataset.title;

    infoTitle.textContent = film.dataset.title;
    infoSynopsis.textContent = film.dataset.synopsis;

    infoAge.textContent = `Âge conseillé : ${film.dataset.age}`;
    infoYear.textContent = film.dataset.year;

    filmInfo.classList.add("active");

    document.body.style.overflow = "hidden";

  }


  function fermerInfos() {

    filmInfo.classList.remove("active");

    document.body.style.overflow = "";

    filmSelectionne = null;

  }


  /* =========================
     CLIC SUR UNE AFFICHE
  ========================= */

  document.addEventListener("click", (event) => {

    const film = event.target.closest(".film");

    if (!film) {
      return;
    }

    if (ignoreNextClick) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    ouvrirInfos(film);

  }, true);


  /* =========================
     LANCER LE FILM
  ========================= */

  const lecteur = document.getElementById("lecteur");

  const videoFrame =
    document.getElementById("video-frame") ||
    document.querySelector("#lecteur iframe");

  const closePlayer =
    document.getElementById("close-player") ||
    document.querySelector("#lecteur button");


  function ouvrirFilm(url) {

    if (!url || !lecteur || !videoFrame) {
      return;
    }

    videoFrame.src = url;

    lecteur.classList.add("active");

    document.body.style.overflow = "hidden";

  }


  if (launchFilm) {

    launchFilm.addEventListener("click", () => {

      if (!filmSelectionne) {
        return;
      }

      const url = filmSelectionne.dataset.url;

      fermerInfos();

      ouvrirFilm(url);

    });

  }


  /* =========================
     FERMER FICHE
  ========================= */

  if (closeInfo) {

    closeInfo.addEventListener("click", (event) => {

      event.preventDefault();
      event.stopPropagation();

      fermerInfos();

    });

  }


  filmInfo.addEventListener("click", (event) => {

    if (event.target === filmInfo) {
      fermerInfos();
    }

  });


  /* =========================
     FERMER LECTEUR
  ========================= */

  function fermerFilm() {

    if (!lecteur) {
      return;
    }

    lecteur.classList.remove("active");

    if (videoFrame) {
      videoFrame.src = "";
    }

    document.body.style.overflow = "";

  }


  if (closePlayer) {

    closePlayer.addEventListener("click", (event) => {

      event.preventDefault();
      event.stopPropagation();

      fermerFilm();

    });

  }


  lecteur.addEventListener("click", (event) => {

    if (event.target === lecteur) {
      fermerFilm();
    }

  });


  /* =========================
     ESC
  ========================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (filmInfo.classList.contains("active")) {
        fermerInfos();
        return;
      }

      fermerFilm();

    }

  });


  /* =========================
     IMAGES
  ========================= */

  document.querySelectorAll(".film img").forEach((image) => {

    image.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

  });


  /* =========================
     RESIZE
  ========================= */

  window.addEventListener("resize", () => {

    normaliserPosition();
    appliquerPosition();

  });

});