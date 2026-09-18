/* =========================================
   KXFLIX
   SUPABASE + 15 FILMS
   ANIMATIONS + CARROUSEL FLUIDE
========================================= */


/* =========================================
   SUPABASE
========================================= */

const SUPABASE_URL =
  "https://pvveqxfgjttjtzzhhqtj.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_Yc6-QzWYSTNUyyPmQAxqOQ_0Jy8HeXp";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );


/* =========================================
   FILMS
========================================= */

const filmsData = [

  {
    id: "obsession",
    title: "Obsession",
    image: "https://m.media-amazon.com/images/S/pv-target-images/86c0f135b4699427fc84684b09990c0bbb69a41b2921fc577dcd0fbf59851bc6._UR1920,1080_.jpg",
    embed: "https://vrodaz.com/iframe/ed176505",
    year: "2026",
    age: "16+",
    genre: "Thriller",
    synopsis: "Une histoire de fascination et de tension où les frontières entre désir, obsession et danger deviennent de plus en plus floues."
  },

  {
    id: "toy-story-5",
    title: "Toy Story 5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7j43OjYSL25Vukor9_5_nPm3sfohjI1bt0DNTU2o8UyiWqsZMNyhDR98&s=10",
    embed: "https://fradov.com/iframe/78e64c70",
    year: "2026",
    age: "6+",
    genre: "Animation",
    synopsis: "Woody, Buzz et leurs amis embarquent dans une nouvelle aventure pleine d'humour et d'émotion. Une nouvelle menace vient bouleverser leur monde de jouets."
  },

  {
    id: "spider-man-new-generation",
    title: "Spider-Man : New Generation",
    image: "https://snworksceo.imgix.net/ttd/86058c86-ffe3-45ff-bd60-f6f8d28dbdd1.sized-1000x1000.jpg?w=800&dpr=2&ar=16%3A9&fit=crop&crop=faces",
    embed: "https://sharecloudy.com/iframe/Bm7bBpnpaN",
    year: "2018",
    age: "10+",
    genre: "Animation",
    synopsis: "Miles Morales devient Spider-Man et découvre qu'il n'est pas le seul héros à porter ce masque. Plusieurs dimensions vont alors se retrouver liées."
  },

  {
    id: "spider-man-across",
    title: "Spider-Man : Across the Spider-Verse",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/08f3260f-1512-4c90-a3df-fc2e407ba708/d5f22ff0-d35b-420a-bc64-3d5f9ba3818b?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    embed: "https://sharecloudy.com/iframe/1V4HHtvvKr",
    year: "2023",
    age: "10+",
    genre: "Animation",
    synopsis: "Miles Morales retrouve Gwen Stacy et se retrouve propulsé dans un immense multivers. De nouveaux Spider-Man l'obligent à remettre en question son propre destin."
  },

  {
    id: "scream-7",
    title: "Scream 7",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8c932462-5fed-4a21-bfd3-275636f21e0b.__CR0,0,1940,1200_PT0_SX970_V1___.jpg",
    embed: "https://vromov.com/iframe/iqdDB5G1i2",
    year: "2026",
    age: "16+",
    genre: "Horreur",
    synopsis: "Ghostface revient semer la terreur alors qu'une nouvelle série de meurtres frappe une communauté. Les survivants doivent découvrir qui se cache derrière le masque."
  },

  {
    id: "minions",
    title: "Les Minions",
    image: "https://i.ytimg.com/vi/JDdRK2y2xT0/maxresdefault.jpg",
    embed: "https://vromov.com/iframe/c020336a",
    year: "2015",
    age: "6+",
    genre: "Animation",
    synopsis: "Les Minions cherchent un nouveau méchant à servir et partent dans une aventure complètement déjantée. Leur quête les conduit à rencontrer la redoutable Scarlet Overkill."
  },

  {
    id: "scary-movie",
    title: "Scary Movie",
    image: "https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2026/05/28/ALVE01KSRB5EXZEWYA3TCTC4W8S4VP/SM6_US_2026_SA_16x9_1920x1080_NB_4502818_1920x1080.jpg",
    embed: "https://vromov.com/iframe/75dd0371",
    year: "2026",
    age: "16+",
    genre: "Comédie",
    synopsis: "Une nouvelle parodie horrifique revisite les codes des grands films d'horreur avec des situations absurdes, des personnages décalés et beaucoup d'humour."
  },

  {
    id: "jimmy-neutron",
    title: "Jimmy Neutron : Un Garçon Génial",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2Fjimmy-neutron%7CJIMMYNEUTROW0026207_BAN1_2424_NEWTV_HD.jpg?format=512x&saveas=webp&saveasquality=70",
    embed: "https://dotrab.com/iframe/e63ca81b",
    year: "2001",
    age: "6+",
    genre: "Animation",
    synopsis: "Jimmy Neutron est un jeune génie qui invente une multitude de machines extraordinaires. Lorsqu'une invention tourne mal, il doit utiliser son intelligence pour sauver sa ville."
  },

  {
    id: "chat-ventures-rocky",
    title: "Les Chat-ventures de Rocky",
    image: "https://images.justwatch.com/backdrop/346602883/s640/les-chat-ventures-de-rocky.jpg",
    embed: "https://vromov.com/iframe/8697ca1f",
    year: "2026",
    age: "7+",
    genre: "Animation",
    synopsis: "Rocky invite un chaton à la tour de contrôle en pensant pouvoir s'en occuper sans aide. Mais son nouvel ami félin provoque rapidement plus de bêtises que prévu."
  },

  {
    id: "voyage-chihiro",
    title: "Le Voyage de Chihiro",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2FLEVOYAGEDECW0174776_BAN1_2424_NEWTV_HD.jpg",
    embed: "https://sharecloudy.com/iframe/KptnxWYWbq",
    year: "2001",
    age: "8+",
    genre: "Animation",
    synopsis: "Chihiro se retrouve prisonnière d'un monde mystérieux peuplé d'esprits après que ses parents ont été transformés en cochons. Pour les sauver, elle devra travailler auprès de la sorcière Yubaba et retrouver son courage."
  },

  {
    id: "hulk",
    title: "Hulk",
    image: "https://i.redd.it/x72b8to0gpkf1.jpeg",
    embed: "https://vrodaz.com/iframe/y2IP00lvC3",
    year: "2003",
    age: "12+",
    genre: "Action",
    synopsis: "Après une expérience scientifique qui tourne mal, Bruce Banner développe la capacité de se transformer en une créature verte dotée d'une force surhumaine. Traqué par l'armée, il doit apprendre à contrôler cette puissance avant qu'elle ne le détruise."
  },

  {
    id: "do-not-enter",
    title: "Do Not Enter",
    image: "https://lovehorror.co.uk/wp-content/uploads/2026/03/do-not-enter-feat.webp",
    embed: "https://sharecloudy.com/iframe/8ReQN4yP01",
    year: "2026",
    age: "16+",
    genre: "Horreur",
    synopsis: "Un lieu interdit, des secrets inquiétants et une règle simple : ne pas entrer."
  },

  {
    id: "ted",
    title: "Ted",
    image: "https://m.media-amazon.com/images/S/pv-target-images/6ad81d8b805f469f3ecd7fce9b9041d4569c4f7d3d57cb0b2bbe14bfd15c71ce._UR1920,1080_.png",
    embed: "https://sharecloudy.com/iframe/o1wMlNERx7",
    year: "2012",
    age: "16+",
    genre: "Comédie",
    synopsis: "John a un meilleur ami un peu particulier : Ted, un ours en peluche vivant, drôle et totalement incontrôlable."
  },

  {
    id: "ted-2",
    title: "Ted 2",
    image: "https://movieguideme.com/fr/wp-content/uploads/2015/07/ted2.jpg",
    embed: "https://sharecloudy.com/iframe/o7dDLRwh2x",
    year: "2015",
    age: "16+",
    genre: "Comédie",
    synopsis: "Ted veut prouver qu'il est une personne à part entière et se lance dans une bataille juridique complètement déjantée."
  },

  {
    id: "wonka",
    title: "Wonka",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2FWONKAXXXXXXW0206876_BAN1_2424_NEWTV_UHD.jpg",
    embed: "https://vromov.com/iframe/xvWYyQbwpy",
    year: "2023",
    age: "7+",
    genre: "Fantastique",
    synopsis: "Découvrez les débuts de Willy Wonka et l'aventure qui l'a conduit à devenir le célèbre chocolatier que tout le monde connaît."
  }

];


/* =========================================
   VARIABLES DOM
========================================= */

const loginScreen =
  document.getElementById("login-screen");

const site =
  document.getElementById("site");

const authScreen =
  document.getElementById("auth-screen");

const nameStep =
  document.getElementById("name-step");

const passwordStep =
  document.getElementById("password-step");

const nameInput =
  document.getElementById("name-input");

const passwordInput =
  document.getElementById("password-input");

const nameButton =
  document.getElementById("name-button");

const passwordButton =
  document.getElementById("password-button");

const passwordError =
  document.getElementById("password-error");

const userName =
  document.getElementById("user-name");

const profileAvatar =
  document.getElementById("profile-avatar");

const profileButton =
  document.getElementById("profile-button");

const profileMenu =
  document.getElementById("profile-menu");

const profileMenuName =
  document.getElementById("profile-menu-name");

const profileMenuEmail =
  document.getElementById("profile-menu-email");

const logoutButton =
  document.getElementById("logout-button");

const carousel =
  document.getElementById("carousel");

const carouselWrapper =
  document.querySelector(".carousel-wrapper");

const prevBtn =
  document.getElementById("prev-btn");

const nextBtn =
  document.getElementById("next-btn");

const searchInput =
  document.getElementById("search-input");

const clearSearch =
  document.getElementById("clear-search");

const searchStatus =
  document.getElementById("search-status");

const sectionTitle =
  document.getElementById("section-title");

const noResults =
  document.getElementById("no-results");

const filmInfo =
  document.getElementById("film-info");

const closeInfo =
  document.getElementById("close-info");

const infoImage =
  document.getElementById("info-image");

const infoTitle =
  document.getElementById("info-title");

const infoAge =
  document.getElementById("info-age");

const infoYear =
  document.getElementById("info-year");

const infoSynopsis =
  document.getElementById("info-synopsis");

const launchFilm =
  document.getElementById("launch-film");

const infoWatchlist =
  document.getElementById("info-watchlist");

const lecteur =
  document.getElementById("lecteur");

const closePlayer =
  document.getElementById("close-player");

const videoFrame =
  document.getElementById("video-frame");

const playerTitle =
  document.getElementById("player-title");

const progressBar =
  document.getElementById("player-progress-bar");

const featuredButton =
  document.getElementById("featured-button");

const watchlistButton =
  document.getElementById("watchlist-button");


/* =========================================
   AUTH DOM
========================================= */

const loginTab =
  document.getElementById("login-tab");

const signupTab =
  document.getElementById("signup-tab");

const authLogin =
  document.getElementById("auth-login");

const authSignup =
  document.getElementById("auth-signup");

const authLoginEmail =
  document.getElementById("auth-login-email");

const authLoginPassword =
  document.getElementById("auth-login-password");

const authLoginButton =
  document.getElementById("auth-login-button");

const authSignupUsername =
  document.getElementById("auth-signup-username");

const authSignupEmail =
  document.getElementById("auth-signup-email");

const authSignupPassword =
  document.getElementById("auth-signup-password");

const authSignupButton =
  document.getElementById("auth-signup-button");

const authMessage =
  document.getElementById("auth-message");

const avatarOptions =
  document.querySelectorAll(".avatar-option");


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

let currentUser = null;
let currentProfile = null;

let watchlistIds = new Set();

let watchlistMode = false;

let selectedAvatar =
  "https://api.dicebear.com/9.x/bottts/svg?seed=KXRed";

const AUTO_SPEED = 0.035;


/* =========================================
   UTILITAIRES
========================================= */

function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function petitFeedback(element) {

  if (!element) {
    return;
  }

  element.animate(
    [
      {
        transform: "scale(1)"
      },
      {
        transform: "scale(0.94)"
      },
      {
        transform: "scale(1.04)"
      },
      {
        transform: "scale(1)"
      }
    ],
    {
      duration: 280,
      easing: "ease-out"
    }
  );

}


/* =========================================
   MESSAGE AUTH
========================================= */

function afficherAuthMessage(message, success = false) {

  authMessage.textContent = message;

  authMessage.style.color =
    success
      ? "#43d17a"
      : "#ff5962";

}


/* =========================================
   ÉTAPE NOM
========================================= */

function continuerNom() {

  const name =
    nameInput.value.trim();

  if (!name) {

    nameInput.focus();

    nameInput.animate(
      [
        {
          transform: "translateX(0)"
        },
        {
          transform: "translateX(-5px)"
        },
        {
          transform: "translateX(5px)"
        },
        {
          transform: "translateX(-3px)"
        },
        {
          transform: "translateX(0)"
        }
      ],
      {
        duration: 260
      }
    );

    return;
  }

  userName.textContent =
    name;

  authSignupUsername.value =
    name;

  nameStep.classList.remove("active");

  passwordStep.classList.add("active");

  setTimeout(() => {

    passwordInput.focus();

  }, 100);

}


/* =========================================
   MOT DE PASSE KX
========================================= */

function verifierMotDePasse() {

  const password =
    passwordInput.value;

  if (password !== "KX") {

    passwordError.style.display =
      "block";

    passwordInput.value = "";

    passwordInput.focus();

    passwordInput.animate(
      [
        {
          transform: "translateX(0)"
        },
        {
          transform: "translateX(-6px)"
        },
        {
          transform: "translateX(6px)"
        },
        {
          transform: "translateX(-4px)"
        },
        {
          transform: "translateX(0)"
        }
      ],
      {
        duration: 280
      }
    );

    return;
  }

  passwordError.style.display =
    "none";

  loginScreen.style.opacity =
    "0";

  loginScreen.style.pointerEvents =
    "none";

  setTimeout(() => {

    loginScreen.style.display =
      "none";

    authScreen.classList.add("active");

    authLoginEmail.focus();

  }, 500);

}


/* =========================================
   TABS AUTH
========================================= */

function afficherConnexion() {

  loginTab.classList.add("active");

  signupTab.classList.remove("active");

  authLogin.classList.add("active");

  authSignup.classList.remove("active");

  afficherAuthMessage("");

}


function afficherInscription() {

  loginTab.classList.remove("active");

  signupTab.classList.add("active");

  authLogin.classList.remove("active");

  authSignup.classList.add("active");

  afficherAuthMessage("");

}


/* =========================================
   CRÉATION DE PROFIL
========================================= */

async function creerProfil(user, username, avatar) {

  const { error } =
    await supabaseClient
      .from("profiles")
      .insert({
        id: user.id,
        username: username,
        avatar: avatar
      });

  if (error) {

    console.error(
      "Erreur profil:",
      error
    );

    return false;
  }

  return true;
}


/* =========================================
   CHARGER PROFIL
========================================= */

async function chargerProfil(user) {

  if (!user) {
    return null;
  }

  const { data, error } =
    await supabaseClient
      .from("profiles")
      .select("id, username, avatar, created_at")
      .eq("id", user.id)
      .maybeSingle();

  if (error) {

    console.error(
      "Erreur chargement profil:",
      error
    );

    return null;
  }

  if (data) {
    return data;
  }

  const username =
    user.user_metadata?.username ||
    nameInput.value.trim() ||
    "Utilisateur";

  const avatar =
    user.user_metadata?.avatar ||
    selectedAvatar;

  const created =
    await creerProfil(
      user,
      username,
      avatar
    );

  if (!created) {
    return null;
  }

  return {
    id: user.id,
    username,
    avatar
  };
}


/* =========================================
   AFFICHER UTILISATEUR
========================================= */

function afficherUtilisateur(
  user,
  profile
) {

  currentUser = user;

  currentProfile = profile;

  const username =
    profile?.username ||
    user.user_metadata?.username ||
    "Utilisateur";

  const avatar =
    profile?.avatar ||
    user.user_metadata?.avatar ||
    selectedAvatar;

  userName.textContent =
    username;

  profileMenuName.textContent =
    username;

  profileMenuEmail.textContent =
    user.email || "";

  profileAvatar.src =
    avatar;

  profileAvatar.alt =
    `Avatar de ${username}`;

}


/* =========================================
   CHARGER MA LISTE
========================================= */

async function chargerWatchlist() {

  watchlistIds =
    new Set();

  if (!currentUser) {
    return;
  }

  const { data, error } =
    await supabaseClient
      .from("watchlist")
      .select("film_id")
      .eq("user_id", currentUser.id);

  if (error) {

    console.error(
      "Erreur watchlist:",
      error
    );

    return;
  }

  (data || []).forEach(item => {

    watchlistIds.add(
      item.film_id
    );

  });

}


/* =========================================
   CONNEXION SUPABASE
========================================= */

async function connecterCompte() {

  const email =
    authLoginEmail.value.trim();

  const password =
    authLoginPassword.value;

  if (!email || !password) {

    afficherAuthMessage(
      "Entre ton e-mail et ton mot de passe."
    );

    return;
  }

  authLoginButton.disabled =
    true;

  authLoginButton.textContent =
    "Connexion...";

  afficherAuthMessage("");

  const { data, error } =
    await supabaseClient.auth
      .signInWithPassword({
        email,
        password
      });

  if (error) {

    afficherAuthMessage(
      "E-mail ou mot de passe incorrect."
    );

    authLoginButton.disabled =
      false;

    authLoginButton.textContent =
      "Se connecter";

    return;
  }

  await ouvrirSiteApresConnexion(
    data.user
  );

  authLoginButton.disabled =
    false;

  authLoginButton.textContent =
    "Se connecter";
}


/* =========================================
   INSCRIPTION
========================================= */

async function creerCompte() {

  const username =
    authSignupUsername.value.trim();

  const email =
    authSignupEmail.value.trim();

  const password =
    authSignupPassword.value;

  if (!username) {

    afficherAuthMessage(
      "Choisis un pseudo."
    );

    authSignupUsername.focus();

    return;
  }

  if (!email) {

    afficherAuthMessage(
      "Entre une adresse e-mail."
    );

    authSignupEmail.focus();

    return;
  }

  if (password.length < 6) {

    afficherAuthMessage(
      "Le mot de passe doit contenir au moins 6 caractères."
    );

    authSignupPassword.focus();

    return;
  }

  authSignupButton.disabled =
    true;

  authSignupButton.textContent =
    "Création...";

  afficherAuthMessage("");

  const { data, error } =
    await supabaseClient.auth
      .signUp({
        email,
        password,
        options: {
          data: {
            username,
            avatar: selectedAvatar
          }
        }
      });

  if (error) {

    console.error(error);

    afficherAuthMessage(
      error.message ||
      "Impossible de créer le compte."
    );

    authSignupButton.disabled =
      false;

    authSignupButton.textContent =
      "Créer mon compte";

    return;
  }

  if (!data.user) {

    afficherAuthMessage(
      "Impossible de récupérer ton compte."
    );

    authSignupButton.disabled =
      false;

    authSignupButton.textContent =
      "Créer mon compte";

    return;
  }

  const profileCreated =
    await creerProfil(
      data.user,
      username,
      selectedAvatar
    );

  if (!profileCreated) {

    afficherAuthMessage(
      "Le compte a été créé mais le profil n'a pas pu être enregistré."
    );

    authSignupButton.disabled =
      false;

    authSignupButton.textContent =
      "Créer mon compte";

    return;
  }

  afficherAuthMessage(
    "Compte créé !",
    true
  );

  setTimeout(async () => {

    await ouvrirSiteApresConnexion(
      data.user
    );

    authSignupButton.disabled =
      false;

    authSignupButton.textContent =
      "Créer mon compte";

  }, 500);

}


/* =========================================
   OUVRIR SITE
========================================= */

async function ouvrirSiteApresConnexion(user) {

  if (!user) {
    return;
  }

  const profile =
    await chargerProfil(user);

  if (!profile) {

    afficherAuthMessage(
      "Impossible de charger ton profil."
    );

    return;
  }

  await chargerWatchlist();

  afficherUtilisateur(
    user,
    profile
  );

  authScreen.classList.remove(
    "active"
  );

  site.style.display =
    "block";

  afficherFilms(
    watchlistMode
      ? filmsData.filter(
          film => watchlistIds.has(film.id)
        )
      : filmsData
  );

}


/* =========================================
   SESSION EXISTANTE
========================================= */

async function verifierSession() {

  const {
    data
  } =
    await supabaseClient.auth
      .getSession();

  const session =
    data?.session;

  if (!session?.user) {
    return;
  }

  currentUser =
    session.user;

}


/* =========================================
   DÉCONNEXION
========================================= */

async function deconnecter() {

  await supabaseClient.auth.signOut();

  currentUser = null;

  currentProfile = null;

  watchlistIds =
    new Set();

  watchlistMode =
    false;

  profileMenu.classList.remove(
    "active"
  );

  site.style.display =
    "none";

  authScreen.classList.remove(
    "active"
  );

  loginScreen.style.display =
    "flex";

  loginScreen.style.opacity =
    "1";

  loginScreen.style.pointerEvents =
    "auto";

  nameStep.classList.add(
    "active"
  );

  passwordStep.classList.remove(
    "active"
  );

  nameInput.value = "";

  passwordInput.value = "";

}


/* =========================================
   AVATARS
========================================= */

avatarOptions.forEach(option => {

  option.addEventListener(
    "click",
    () => {

      avatarOptions.forEach(
        item =>
          item.classList.remove(
            "selected"
          )
      );

      option.classList.add(
        "selected"
      );

      selectedAvatar =
        option.dataset.avatar;

      petitFeedback(option);

    }
  );

});


/* =========================================
   CARTES FILMS
========================================= */

function creerCarteFilm(
  film,
  index
) {

  const card =
    document.createElement("article");

  card.className =
    "film-card";

  card.dataset.index =
    index;

  card.style.animationDelay =
    `${Math.min(index * 0.035, 0.35)}s`;

  const isInWatchlist =
    watchlistIds.has(
      film.id
    );

  card.innerHTML = `

    <img
      src="${film.image}"
      alt="${escapeHtml(film.title)}"
      loading="lazy"
      draggable="false"
    >

    <button
      class="film-watchlist ${isInWatchlist ? "active" : ""}"
      type="button"
      aria-label="Ma liste"
      title="${isInWatchlist ? "Retirer de ma liste" : "Ajouter à ma liste"}"
    >
      ${isInWatchlist ? "♥" : "♡"}
    </button>

    <div class="film-play">
      ▶
    </div>

    <div class="film-card-info">

      <div class="film-title">
        ${escapeHtml(film.title)}
      </div>

      <div class="film-meta">

        <span class="film-age">
          ${escapeHtml(film.age)}
        </span>

        <span class="film-year">
          ${escapeHtml(film.year)}
        </span>

      </div>

    </div>
  `;

  const watchButton =
    card.querySelector(
      ".film-watchlist"
    );

  watchButton.addEventListener(
    "click",
    async event => {

      event.stopPropagation();

      await basculerWatchlist(
        film,
        watchButton
      );

      petitFeedback(
        watchButton
      );

    }
  );

  card.addEventListener(
    "click",
    () => {

      if (isDragging) {
        return;
      }

      ouvrirInfos(film);

    }
  );

  return card;
}


/* =========================================
   AFFICHAGE
========================================= */

function afficherFilms(list) {

  carousel.innerHTML = "";

  filteredFilms =
    [...list];

  carouselPosition =
    0;

  carousel.style.transition =
    "none";

  carousel.style.transform =
    "translate3d(0,0,0)";

  if (list.length === 0) {

    noResults.style.display =
      "block";

    sectionTitle.textContent =
      watchlistMode
        ? "Ma liste"
        : "Aucun résultat";

    return;
  }

  noResults.style.display =
    "none";

  const repetitions =
    3;

  for (
    let r = 0;
    r < repetitions;
    r++
  ) {

    list.forEach(
      (film, index) => {

        const card =
          creerCarteFilm(
            film,
            index
          );

        carousel.appendChild(
          card
        );

      }
    );

  }

  if (watchlistMode) {

    sectionTitle.textContent =
      `Ma liste · ${list.length} film${list.length > 1 ? "s" : ""}`;

  } else {

    sectionTitle.textContent =
      list.length === filmsData.length
        ? "Tous les films"
        : `${list.length} film${list.length > 1 ? "s" : ""} trouvé${list.length > 1 ? "s" : ""}`;

  }

}


/* =========================================
   WATCHLIST
========================================= */

async function ajouterWatchlist(film) {

  if (!currentUser) {
    return false;
  }

  const { error } =
    await supabaseClient
      .from("watchlist")
      .insert({
        user_id: currentUser.id,
        film_id: film.id
      });

  if (error) {

    if (
      error.code === "23505"
    ) {

      watchlistIds.add(
        film.id
      );

      return true;
    }

    console.error(
      "Erreur ajout watchlist:",
      error
    );

    return false;
  }

  watchlistIds.add(
    film.id
  );

  return true;
}


async function supprimerWatchlist(
  film
) {

  if (!currentUser) {
    return false;
  }

  const { error } =
    await supabaseClient
      .from("watchlist")
      .delete()
      .eq(
        "user_id",
        currentUser.id
      )
      .eq(
        "film_id",
        film.id
      );

  if (error) {

    console.error(
      "Erreur suppression watchlist:",
      error
    );

    return false;
  }

  watchlistIds.delete(
    film.id
  );

  return true;
}


async function basculerWatchlist(
  film,
  button = null
) {

  if (!currentUser) {

    authScreen.classList.add(
      "active"
    );

    afficherConnexion();

    return;
  }

  const alreadyIn =
    watchlistIds.has(
      film.id
    );

  if (alreadyIn) {

    await supprimerWatchlist(
      film
    );

  } else {

    await ajouterWatchlist(
      film
    );

  }

  if (button) {

    const active =
      watchlistIds.has(
        film.id
      );

    button.classList.toggle(
      "active",
      active
    );

    button.textContent =
      active ? "♥" : "♡";

    button.title =
      active
        ? "Retirer de ma liste"
        : "Ajouter à ma liste";

  }

  mettreAJourBoutonInfo();

  if (watchlistMode) {

    afficherFilms(
      filmsData.filter(
        item =>
          watchlistIds.has(
            item.id
          )
      )
    );

  }

}


/* =========================================
   OUVRIR INFOS
========================================= */

function ouvrirInfos(film) {

  currentFilm =
    film;

  infoImage.src =
    film.image;

  infoImage.alt =
    film.title;

  infoTitle.textContent =
    film.title;

  infoAge.textContent =
    film.age;

  infoYear.textContent =
    film.year;

  infoSynopsis.textContent =
    film.synopsis;

  mettreAJourBoutonInfo();

  filmInfo.classList.add(
    "active"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================
   BOUTON WATCHLIST INFOS
========================================= */

function mettreAJourBoutonInfo() {

  if (!currentFilm) {
    return;
  }

  const active =
    watchlistIds.has(
      currentFilm.id
    );

  infoWatchlist.classList.toggle(
    "active",
    active
  );

  infoWatchlist.textContent =
    active
      ? "♥ Retirer de ma liste"
      : "♡ Ma liste";

}


/* =========================================
   FERMER INFOS
========================================= */

function fermerInfos() {

  filmInfo.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "";

}


/* =========================================
   LANCER FILM
========================================= */

function lancerFilm() {

  if (!currentFilm) {
    return;
  }

  lecteur.classList.add(
    "active"
  );

  playerTitle.textContent =
    currentFilm.title;

  videoFrame.src =
    currentFilm.embed;

  progressBar.style.width =
    "0%";

  progressBar.dataset.value =
    "0";

  fermerInfos();

  document.body.style.overflow =
    "hidden";

}


/* =========================================
   FERMER LECTEUR
========================================= */

function fermerLecteur() {

  lecteur.classList.remove(
    "active"
  );

  videoFrame.src =
    "";

  progressBar.style.width =
    "0%";

  progressBar.dataset.value =
    "0";

  document.body.style.overflow =
    "";

}


/* =========================================
   BARRE PROGRESSION VISUELLE
========================================= */

function animationProgress() {

  if (
    !lecteur.classList.contains(
      "active"
    )
  ) {

    requestAnimationFrame(
      animationProgress
    );

    return;

  }

  let current =
    parseFloat(
      progressBar.dataset.value ||
      "0"
    );

  current +=
    0.025;

  if (current > 100) {
    current = 0;
  }

  progressBar.dataset.value =
    current;

  progressBar.style.width =
    `${current}%`;

  requestAnimationFrame(
    animationProgress
  );

}


/* =========================================
   RECHERCHE
========================================= */

function rechercherFilms() {

  watchlistMode =
    false;

  watchlistButton.classList.remove(
    "active"
  );

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  clearSearch.style.display =
    query ? "block" : "none";

  if (!query) {

    searchStatus.textContent =
      "";

    afficherFilms(
      filmsData
    );

    return;
  }

  const resultats =
    filmsData.filter(
      film => {

        return (
          film.title
            .toLowerCase()
            .includes(query) ||

          film.genre
            .toLowerCase()
            .includes(query) ||

          film.year
            .includes(query)
        );

      }
    );

  searchStatus.textContent =
    `${resultats.length} résultat${resultats.length > 1 ? "s" : ""}`;

  afficherFilms(
    resultats
  );

}


function effacerRecherche() {

  searchInput.value =
    "";

  clearSearch.style.display =
    "none";

  searchStatus.textContent =
    "";

  if (watchlistMode) {

    afficherFilms(
      filmsData.filter(
        film =>
          watchlistIds.has(
            film.id
          )
      )
    );

  } else {

    afficherFilms(
      filmsData
    );

  }

  searchInput.focus();

}


/* =========================================
   MA LISTE
========================================= */

function afficherMaListe() {

  watchlistMode =
    !watchlistMode;

  watchlistButton.classList.toggle(
    "active",
    watchlistMode
  );

  petitFeedback(
    watchlistButton
  );

  searchInput.value =
    "";

  clearSearch.style.display =
    "none";

  searchStatus.textContent =
    "";

  if (watchlistMode) {

    const liste =
      filmsData.filter(
        film =>
          watchlistIds.has(
            film.id
          )
      );

    afficherFilms(
      liste
    );

  } else {

    afficherFilms(
      filmsData
    );

  }

}


/* =========================================
   AUTO SCROLL
========================================= */

function obtenirLargeurBloc() {

  const cards =
    carousel.children;

  if (!cards.length) {
    return 0;
  }

  const totalFilms =
    filteredFilms.length;

  if (!totalFilms) {
    return 0;
  }

  const firstCard =
    cards[0];

  const secondCard =
    cards[1];

  if (
    !firstCard ||
    !secondCard
  ) {

    return (
      firstCard.offsetWidth +
      18
    );

  }

  const distance =
    secondCard
      .getBoundingClientRect()
      .left -
    firstCard
      .getBoundingClientRect()
      .left;

  return (
    distance *
    totalFilms
  );

}


function normaliserPosition() {

  const bloc =
    obtenirLargeurBloc();

  if (!bloc) {
    return;
  }

  if (
    carouselPosition <= -bloc
  ) {

    carouselPosition +=
      bloc;

  }

  if (
    carouselPosition > 0
  ) {

    carouselPosition -=
      bloc;

  }

}


function startAutoScroll(time = 0) {

  if (lastTime === 0) {
    lastTime = time;
  }

  const delta =
    time -
    lastTime;

  lastTime =
    time;

  if (
    !isPaused &&
    !isDragging &&
    filteredFilms.length > 0
  ) {

    carouselPosition -=
      AUTO_SPEED *
      Math.min(
        delta,
        40
      );

    normaliserPosition();

    carousel.style.transform =
      `translate3d(${carouselPosition}px,0,0)`;

  }

  animationFrame =
    requestAnimationFrame(
      startAutoScroll
    );

}


/* =========================================
   BOUTONS CARROUSEL
========================================= */

function obtenirDistanceCarte() {

  const first =
    carousel.children[0];

  const second =
    carousel.children[1];

  if (
    !first ||
    !second
  ) {

    return 328;

  }

  return (
    second.getBoundingClientRect().left -
    first.getBoundingClientRect().left
  );

}


function avancerCarousel() {

  const distance =
    obtenirDistanceCarte();

  isPaused =
    true;

  carouselPosition -=
    distance * 2;

  normaliserPosition();

  carousel.style.transition =
    "transform 0.55s cubic-bezier(.2,.8,.2,1)";

  carousel.style.transform =
    `translate3d(${carouselPosition}px,0,0)`;

  setTimeout(() => {

    carousel.style.transition =
      "";

    isPaused =
      false;

  }, 600);

}


function reculerCarousel() {

  const distance =
    obtenirDistanceCarte();

  isPaused =
    true;

  carouselPosition +=
    distance * 2;

  normaliserPosition();

  carousel.style.transition =
    "transform 0.55s cubic-bezier(.2,.8,.2,1)";

  carousel.style.transform =
    `translate3d(${carouselPosition}px,0,0)`;

  setTimeout(() => {

    carousel.style.transition =
      "";

    isPaused =
      false;

  }, 600);

}


/* =========================================
   SOURIS
========================================= */

carouselWrapper.addEventListener(
  "mouseenter",
  () => {

    if (!isDragging) {

      isPaused =
        true;

    }

  }
);


carouselWrapper.addEventListener(
  "mouseleave",
  () => {

    if (!isDragging) {

      isPaused =
        false;

    }

  }
);


/* =========================================
   TOUCH MOBILE
========================================= */

carouselWrapper.addEventListener(
  "touchstart",
  event => {

    isDragging =
      true;

    isPaused =
      true;

    startX =
      event.touches[0].clientX;

    lastX =
      startX;

    carouselWrapper.classList.add(
      "dragging"
    );

  },
  {
    passive: true
  }
);


carouselWrapper.addEventListener(
  "touchmove",
  event => {

    if (!isDragging) {
      return;
    }

    const currentX =
      event.touches[0].clientX;

    const movement =
      currentX -
      lastX;

    lastX =
      currentX;

    carouselPosition +=
      movement;

    normaliserPosition();

    carousel.style.transform =
      `translate3d(${carouselPosition}px,0,0)`;

  },
  {
    passive: true
  }
);


carouselWrapper.addEventListener(
  "touchend",
  () => {

    isDragging =
      false;

    carouselWrapper.classList.remove(
      "dragging"
    );

    setTimeout(() => {

      isPaused =
        false;

    }, 350);

  }
);


/* =========================================
   SOURIS DESKTOP : DRAG
========================================= */

carouselWrapper.addEventListener(
  "mousedown",
  event => {

    if (event.button !== 0) {
      return;
    }

    isDragging =
      true;

    isPaused =
      true;

    startX =
      event.clientX;

    lastX =
      startX;

    carouselWrapper.classList.add(
      "dragging"
    );

  }
);


window.addEventListener(
  "mousemove",
  event => {

    if (!isDragging) {
      return;
    }

    const movement =
      event.clientX -
      lastX;

    lastX =
      event.clientX;

    carouselPosition +=
      movement;

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

    isDragging =
      false;

    carouselWrapper.classList.remove(
      "dragging"
    );

    setTimeout(() => {

      isPaused =
        false;

    }, 300);

  }
);


/* =========================================
   PROFIL
========================================= */

profileButton.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    profileMenu.classList.toggle(
      "active"
    );

  }
);


document.addEventListener(
  "click",
  event => {

    if (
      !profileMenu.contains(
        event.target
      ) &&
      !profileButton.contains(
        event.target
      )
    ) {

      profileMenu.classList.remove(
        "active"
      );

    }

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

      ouvrirInfos(
        spiderMan
      );

    }

  }
);


/* =========================================
   EVENTS AUTH
========================================= */

nameButton.addEventListener(
  "click",
  continuerNom
);

passwordButton.addEventListener(
  "click",
  verifierMotDePasse
);

loginTab.addEventListener(
  "click",
  afficherConnexion
);

signupTab.addEventListener(
  "click",
  afficherInscription
);

authLoginButton.addEventListener(
  "click",
  connecterCompte
);

authSignupButton.addEventListener(
  "click",
  creerCompte
);

logoutButton.addEventListener(
  "click",
  deconnecter
);


/* =========================================
   ENTER
========================================= */

nameInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Enter"
    ) {

      continuerNom();

    }

  }
);


passwordInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Enter"
    ) {

      verifierMotDePasse();

    }

  }
);


authLoginEmail.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Enter"
    ) {

      connecterCompte();

    }

  }
);


authLoginPassword.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Enter"
    ) {

      connecterCompte();

    }

  }
);


authSignupPassword.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Enter"
    ) {

      creerCompte();

    }

  }
);


/* =========================================
   RECHERCHE
========================================= */

searchInput.addEventListener(
  "input",
  rechercherFilms
);

clearSearch.addEventListener(
  "click",
  effacerRecherche
);


/* =========================================
   CARROUSEL
========================================= */

prevBtn.addEventListener(
  "click",
  reculerCarousel
);

nextBtn.addEventListener(
  "click",
  avancerCarousel
);


/* =========================================
   INFOS
========================================= */

closeInfo.addEventListener(
  "click",
  fermerInfos
);


launchFilm.addEventListener(
  "click",
  lancerFilm
);


infoWatchlist.addEventListener(
  "click",
  async () => {

    if (!currentFilm) {
      return;
    }

    await basculerWatchlist(
      currentFilm
    );

    petitFeedback(
      infoWatchlist
    );

  }
);


/* =========================================
   LECTEUR
========================================= */

closePlayer.addEventListener(
  "click",
  fermerLecteur
);


/* =========================================
   MA LISTE
========================================= */

watchlistButton.addEventListener(
  "click",
  afficherMaListe
);


/* =========================================
   CLIQUER DEHORS INFOS
========================================= */

filmInfo.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      filmInfo
    ) {

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

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }

    if (
      filmInfo.classList.contains(
        "active"
      )
    ) {

      fermerInfos();

    }

    if (
      lecteur.classList.contains(
        "active"
      )
    ) {

      fermerLecteur();

    }

    profileMenu.classList.remove(
      "active"
    );

  }
);


/* =========================================
   INITIALISATION
========================================= */

async function initialiser() {

  site.style.display =
    "none";

  authScreen.classList.remove(
    "active"
  );

  filmInfo.classList.remove(
    "active"
  );

  lecteur.classList.remove(
    "active"
  );

  afficherFilms(
    filmsData
  );

  requestAnimationFrame(
    startAutoScroll
  );

  animationProgress();

  await verifierSession();

}


initialiser();
