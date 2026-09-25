/* =========================================
   KXFLIX
   SANS SUPABASE
   PRÉNOM + CODE KX
   CATÉGORIES + CARROUSEL
========================================= */


/* =========================================
   FILMS
========================================= */

const filmsData = [

  /* =========================================
     FILMS EXISTANTS
  ========================================== */

  {
    id: "obsession",
    title: "Obsession",
    image: "https://m.media-amazon.com/images/S/pv-target-images/86c0f135b4699427fc84684b09990c0bbb69a41b2921fc577dcd0fbf59851bc6._UR1920,1080_.jpg",
    embed: "https://vrodaz.com/iframe/ed176505",
    year: "2026",
    age: "16+",
    genre: "Thriller",
    category: "Drame",
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
    category: "Animation",
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
    category: "Animation",
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
    category: "Animation",
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
    category: "Horreur",
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
    category: "Animation",
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
    category: "Comédie",
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
    category: "Animation",
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
    category: "Animation",
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
    category: "Animation",
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
    category: "Action",
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
    category: "Horreur",
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
    category: "Comédie",
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
    category: "Comédie",
    synopsis: "Ted veut prouver qu'il est une personne à part entière et se lance dans une bataille juridique complètement déjantée."
  },

  {
    id: "wonka",
    title: "Wonka",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2FWONKAXXXXXXW0206876_BAN1_2424_NEWTV_UHD.jpg",
    embed: "https://sharecloudy.com/iframe/xvWYyQbwpy",
    year: "2023",
    age: "7+",
    genre: "Fantastique",
    category: "Comédie",
    synopsis: "Découvrez les débuts de Willy Wonka et l'aventure qui l'a conduit à devenir le célèbre chocolatier que tout le monde connaît."
  },

  {
    id: "the-dark-knight",
    title: "The Dark Knight : Le Chevalier noir",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52217243-a137-45d6-9c6a-0dfab4633034/74906de0-d644-4b0d-bf22-e2a321583a93?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=500",
    embed: "https://sharecloudy.com/iframe/103D76H7D2",
    year: "2008",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Batman affronte le Joker, un criminel imprévisible qui plonge Gotham dans le chaos et pousse le héros à repousser ses propres limites."
  },

  {
    id: "avengers-endgame",
    title: "Avengers : Endgame",
    image: "https://preview.redd.it/avengers-endgame-wallpaper-16-9-tried-my-best-v0-w4botl43ntm21.png?auto=webp&s=cf96ccb811aca98f5bf53146d26b6fd5d8d45034",
    embed: "https://sharecloudy.com/iframe/2uIRQuRv5W",
    year: "2019",
    age: "10+",
    genre: "Action",
    category: "Action",
    synopsis: "Après une terrible défaite, les Avengers restants doivent trouver un moyen de réparer les conséquences du claquement de doigts de Thanos."
  },

  {
    id: "roi-lion",
    title: "Le Roi lion",
    image: "https://preview.redd.it/your-thoughts-on-the-lion-king-1994-v0-v130n7v6x3ab1.jpg?width=1200&format=pjpg&auto=webp&s=c75fabf7760fbbf52eb8510a1e84f60e59f3184e",
    embed: "https://sharecloudy.com/iframe/KqXmmXLFhS",
    year: "1994",
    age: "6+",
    genre: "Animation",
    category: "Animation",
    synopsis: "Simba, jeune lion destiné à devenir roi, doit affronter la perte de son père et retrouver le courage de reprendre sa place dans le royaume."
  },

  {
    id: "inception",
    title: "Inception",
    image: "https://level-1.fr/Principal/wp-content/uploads/2012/05/Inception.jpg",
    embed: "https://sharecloudy.com/iframe/cSEEOHdSFz",
    year: "2010",
    age: "12+",
    genre: "Science-fiction",
    category: "Action",
    synopsis: "Dom Cobb est capable de pénétrer les rêves pour voler des secrets. Une dernière mission lui offre la possibilité de retrouver sa vie d'avant."
  },

  {
    id: "titanic",
    title: "Titanic",
    image: "https://wallup.net/wp-content/uploads/2019/07/24/202810-titanic-disaster-drama-romance-ship-boat-mood-poster.jpg",
    embed: "https://sharecloudy.com/iframe/MNnGiduvwl",
    year: "1997",
    age: "12+",
    genre: "Drame",
    category: "Drame",
    synopsis: "À bord du Titanic, Jack et Rose viennent de deux mondes différents mais vivent une histoire d'amour alors que le navire traverse l'Atlantique."
  },

  {
    id: "intouchables",
    title: "Intouchables",
    image: "https://m.media-amazon.com/images/S/pv-target-images/7b0f5d85475ffcefe31384c1454434ae735737e723d3c1a89c8b3ae66ca9621a.jpg",
    embed: "https://sharecloudy.com/iframe/JFJj00hF0o",
    year: "2011",
    age: "10+",
    genre: "Comédie",
    category: "Comédie",
    synopsis: "Après un accident, Philippe engage Driss, un jeune homme aux antipodes de son milieu. Une amitié inattendue va bouleverser leurs deux vies."
  },

  {
    id: "avatar",
    title: "Avatar",
    image: "https://m.media-amazon.com/images/S/pv-target-images/7062a2ea3e7a8d83b6e2761101247b9fb9b3af330fe16f1fcfd574a8797711db.jpg",
    embed: "https://sharecloudy.com/iframe/X0YE8gX0YC",
    year: "2009",
    age: "10+",
    genre: "Science-fiction",
    category: "Action",
    synopsis: "Jake Sully rejoint Pandora grâce à un avatar permettant d'explorer le monde des Na'vi. Il découvre alors une planète qu'il devra choisir de protéger."
  },

  {
    id: "chronicle",
    title: "Chronicle",
    image: "https://www.darksidereviews.com/wp-content/uploads/2012/09/Chronicle_BENL_FA.jpg",
    embed: "https://sharecloudy.com/iframe/mOESR6st1g",
    year: "2012",
    age: "12+",
    genre: "Science-fiction",
    category: "Action",
    synopsis: "Trois adolescents découvrent un mystérieux objet qui leur donne des pouvoirs extraordinaires. Mais leur nouvelle puissance finit par les dépasser."
  },

  {
    id: "500-jours-ensemble",
    title: "(500) jours ensemble",
    image: "https://thegreeleyvoice.com/wp-content/uploads/2024/11/8ea6f5bcd4528ec18e298d642140b53c990b6d2dbdcf497a89b69d8a639d9b2e.jpg",
    embed: "https://sharecloudy.com/iframe/eWrw6dBYoV",
    year: "2009",
    age: "10+",
    genre: "Romance",
    category: "Drame",
    synopsis: "Tom repense à sa relation avec Summer et tente de comprendre les moments qui ont marqué leur histoire, entre espoir, amour et désillusion."
  },

  {
    id: "nos-etoiles-contraires",
    title: "Nos étoiles contraires",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2Fnos-etoiles-contraires%7CNOSETOILESCW0091304_BAN1_2424_NEWTV_HD.jpg?format=512x&saveas=webp&saveasquality=70",
    embed: "https://sharecloudy.com/iframe/3NhIbyN2GQ",
    year: "2014",
    age: "12+",
    genre: "Drame",
    category: "Drame",
    synopsis: "Hazel rencontre Augustus dans un groupe de soutien. Leur relation devient une histoire d'amour intense qui transforme leur façon de voir la vie."
  },

  {
    id: "dune-premiere-partie",
    title: "Dune : Première partie",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*gmoNFDJEnzHEFzj5.jpg",
    embed: "https://sharecloudy.com/iframe/GyF6JBIL8V",
    year: "2021",
    age: "12+",
    genre: "Science-fiction",
    category: "Action",
    synopsis: "Paul Atréides rejoint la planète Arrakis avec sa famille, au cœur d'un conflit autour de la ressource la plus précieuse de l'univers."
  },

  {
    id: "dune-deuxieme-partie",
    title: "Dune : Deuxième Partie",
    image: "https://xyz.comic.systems/images/affiche/cinema/Dune2",
    embed: "https://sharecloudy.com/iframe/Snh1tDPaPC",
    year: "2024",
    age: "12+",
    genre: "Science-fiction",
    category: "Action",
    synopsis: "Paul Atréides s'allie aux Fremen et poursuit son chemin sur Arrakis, alors que la guerre et son destin prennent une nouvelle dimension."
  },

  {
    id: "la-vie-scolaire",
    title: "La Vie scolaire",
    image: "https://photos.tf1.fr/1280/720/flux-program-card-landscape-5b0d12-31c957-a699e5-0@1x.jpg",
    embed: "https://sharecloudy.com/iframe/iB004WNvoD",
    year: "2019",
    age: "10+",
    genre: "Comédie",
    category: "Comédie",
    synopsis: "Une nouvelle conseillère principale d'éducation arrive dans un collège de Seine-Saint-Denis et découvre le quotidien mouvementé des élèves et de l'équipe éducative."
  },

  {
    id: "la-haine",
    title: "La Haine",
    image: "https://media.vanityfair.fr/photos/60d379aa203a62447d27c33c/16:9/w_1280,c_limit/vf_la_haine_home_7104.jpeg",
    embed: "https://sharecloudy.com/iframe/jRItoiSKCd",
    year: "1995",
    age: "16+",
    genre: "Drame",
    category: "Drame",
    synopsis: "Après une nuit d'émeutes, trois amis traversent leur quartier et tentent de faire face à la tension, à la colère et aux conséquences de la violence."
  },

  {
    id: "fight-club",
    title: "Fight Club",
    image: "https://themarckoguy.wordpress.com/wp-content/uploads/2014/11/maxresdefault.jpg",
    embed: "https://sharecloudy.com/iframe/i1efUhaXnR",
    year: "1999",
    age: "16+",
    genre: "Thriller",
    category: "Action",
    synopsis: "Un homme désabusé rencontre Tyler Durden, avec qui il fonde un club clandestin qui devient rapidement bien plus qu'un simple lieu de combat."
  },

  {
    id: "babylon",
    title: "Babylon",
    image: "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/canalplus-cdn.canal-plus.io/p1/unit/21362492/canal-ouah/STD169/myCANAL_16x9_MEA_1920x1080",
    embed: "https://sharecloudy.com/iframe/kjVeqwJPLs",
    year: "2023",
    age: "16+",
    genre: "Drame",
    category: "Drame",
    synopsis: "Dans le Hollywood des années 1920, plusieurs personnages tentent de trouver leur place dans une industrie en pleine transformation."
  },

  {
    id: "ce-que-pensent-les-hommes",
    title: "Ce que pensent les hommes",
    image: "https://m.media-amazon.com/images/S/pv-target-images/802626dc6efdf0114231ebf4457aed8cf0bddf8a4e3bc398a9fad756c9e96f65._SX1080_FMjpg_.jpg",
    embed: "https://sharecloudy.com/iframe/KXI7l9LrMM",
    year: "2009",
    age: "12+",
    genre: "Comédie",
    category: "Comédie",
    synopsis: "Plusieurs hommes et femmes tentent de comprendre les relations amoureuses, les signaux qu'ils envoient et les sentiments qu'ils n'osent pas toujours exprimer."
  },

  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    image: "https://ntvb.tmsimg.com/assets/p12565017_v_h8_ab.jpg?w=1280&h=720",
    embed: "https://sharecloudy.com/iframe/6njC9wk7DN",
    year: "2017",
    age: "12+",
    genre: "Science-fiction",
    category: "Action",
    synopsis: "Un jeune blade runner découvre un secret enfoui depuis longtemps qui pourrait bouleverser l'ordre établi entre humains et réplicants."
  },

  {
    id: "her",
    title: "Her",
    image: "https://www.netflix-news.com/app/uploads/2018/11/d9047f718340d469085a1097e017f875ebe1d9c7-jpg.webp",
    embed: "https://sharecloudy.com/iframe/mretZHmWvW",
    year: "2013",
    age: "12+",
    genre: "Romance",
    category: "Drame",
    synopsis: "Theodore, un homme solitaire, développe une relation inattendue avec un système d'exploitation doté d'une intelligence artificielle."
  },

  {
    id: "donnie-darko",
    title: "Donnie Darko",
    image: "https://images.mubicdn.net/images/artworks/283147/cache-283147-1621574080/images-original.png",
    embed: "https://sharecloudy.com/iframe/relSLKs0M1",
    year: "2001",
    age: "16+",
    genre: "Thriller",
    category: "Horreur",
    synopsis: "Donnie, un adolescent tourmenté, commence à avoir d'étranges visions après avoir échappé de peu à un accident qui aurait pu lui coûter la vie."
  },

  {
    id: "end-of-watch",
    title: "End of Watch",
    image: "https://m.media-amazon.com/images/S/pv-target-images/7b907abe54d0e788b66e60f2529236e3fb125c4fa44bfd04736c9d0de7b2eacc._SX1080_FMjpg_.jpg",
    embed: "https://sharecloudy.com/iframe/UEDoeY1kSj",
    year: "2012",
    age: "16+",
    genre: "Action",
    category: "Action",
    synopsis: "Deux policiers de Los Angeles patrouillent ensemble dans un quartier difficile et voient leur quotidien basculer lorsqu'ils deviennent la cible d'un gang."
  },

  {
    id: "backrooms",
    title: "Backrooms",
    image: "https://m.media-amazon.com/images/M/MV5BZDVmYzNiZTMtMmFmMi00NjY1LWJhYjctNTgxMTQzM2RmZTE4XkEyXkFqcGc@._V1_.jpg",
    embed: "https://sharecloudy.com/iframe/e49ad398",
    year: "2026",
    age: "16+",
    genre: "Horreur",
    category: "Horreur",
    synopsis: "Un étrange espace sans fin devient le théâtre d'une fuite terrifiante où chaque couloir semble cacher une nouvelle menace."
  },


  /* =========================================
     NOUVEAUX FILMS
  ========================================== */

  {
    id: "top-gun",
    title: "Top Gun",
    image: "https://img.cnmhstng.com/more/backdrop/lg/Top_Gun_19863452.jpg",
    embed: "https://sharecloudy.com/iframe/z0CDpd7JWK",
    year: "1986",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Pete Maverick Mitchell, jeune pilote de chasse talentueux, rejoint une prestigieuse école de pilotage où il devra affronter ses limites."
  },

  {
    id: "top-gun-maverick",
    title: "Top Gun : Maverick",
    image: "https://photos.tf1.fr/330/186/program-card-landscape-29c3e6-cc820d-0@3x.jpg",
    embed: "https://sharecloudy.com/iframe/bUwwWKOQCX",
    year: "2022",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Après plusieurs décennies de service, Maverick revient former une nouvelle génération de pilotes pour une mission particulièrement dangereuse."
  },

  {
    id: "michael-2026",
    title: "Michael",
    image: "https://wallpaperswide.com/download/michael_movie_2026_michael_jackson_iconic_performance-wallpaper-3840x2160.jpg",
    embed: "https://sharecloudy.com/iframe/e5052711",
    year: "2026",
    age: "12+",
    genre: "Drame",
    category: "Drame",
    synopsis: "Un film consacré au parcours et à la carrière de Michael Jackson."
  },

  {
    id: "bagarre-2026",
    title: "Bagarre",
    image: "https://proxymedia.woopic.com/api/v1/images/331%2FBAGARREXXXXW0239896_BAN1_2424_NEWTV_UHD.jpg",
    embed: "https://sharecloudy.com/iframe/737e88c7",
    year: "2026",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Une histoire mouvementée où les affrontements vont rapidement prendre une place centrale."
  },

  {
    id: "spider-man-homecoming",
    title: "Spider-Man : Homecoming",
    image: "https://wallpaperswide.com/download/spider_man_homecoming_2017-wallpaper-1600x900.jpg",
    embed: "https://sharecloudy.com/iframe/YigxGUCezM",
    year: "2017",
    age: "10+",
    genre: "Action",
    category: "Action",
    synopsis: "Peter Parker tente de trouver son équilibre entre sa vie de lycéen et ses responsabilités de super-héros."
  },

  {
    id: "spider-man-far-from-home",
    title: "Spider-Man : Far From Home",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaQuWMREKSXwTSiOqfUu0CziFXajGu9ItZpeIqSe7nzlDcELLq4PjDvoRmIzdd2i_NDidqbx-V1waWRUcPXiH90wHMWQyQquSFpd.jpg?r=dff",
    embed: "https://sharecloudy.com/iframe/046rzasw4K",
    year: "2019",
    age: "10+",
    genre: "Action",
    category: "Action",
    synopsis: "Peter Parker part en voyage en Europe mais doit rapidement reprendre son rôle de Spider-Man lorsqu'une nouvelle menace apparaît."
  },

  {
    id: "spider-man-no-way-home",
    title: "Spider-Man : No Way Home",
    image: "https://www.ecranlarge.com/content/uploads/2023/10/spider-man-no-way-home-un-autre-grand-mechant-mais-sony-a-refuse-1493072-1200x561.jpg",
    embed: "https://sharecloudy.com/iframe/HsPmskIRaW",
    year: "2021",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Peter Parker voit son identité révélée et cherche une solution qui va ouvrir la porte à des conséquences inattendues."
  },

  {
    id: "vaiana",
    title: "Vaiana",
    image: "https://media.vogue.fr/photos/606718594de7b1d99029ec9b/16:9/w_4191,h_2357,c_limit/076_Vaiana_La_legende_du_bout_du_monde_2016_003.jpg",
    embed: "https://sharecloudy.com/iframe/scNL1bl7gD",
    year: "2016",
    age: "6+",
    genre: "Animation",
    category: "Animation",
    synopsis: "Vaiana traverse l'océan pour sauver son peuple et découvre son courage au cours d'une grande aventure."
  },

  {
    id: "vaiana-2",
    title: "Vaiana 2",
    image: "https://fr.web.img6.acsta.net/r_1240_1240/img/86/bb/86bbe7778d2d56175ead402e1cea515a.jpg",
    embed: "https://sharecloudy.com/iframe/kam3jfRBYW",
    year: "2024",
    age: "6+",
    genre: "Animation",
    category: "Animation",
    synopsis: "Vaiana reprend la mer pour une nouvelle aventure accompagnée de son équipage et de nouveaux alliés."
  },

  {
    id: "vaiana-legende-2026",
    title: "Vaiana, la légende du bout du monde",
    image: "https://media.senscritique.com/media/000023650707/1200/vaiana_la_legende_du_bout_du_monde.jpg",
    embed: "https://sharecloudy.com/iframe/32542978",
    year: "2026",
    age: "6+",
    genre: "Animation",
    category: "Animation",
    synopsis: "Une nouvelle aventure autour de Vaiana et de son incroyable voyage au-delà des océans."
  },

  {
    id: "super-mario-galaxy",
    title: "Super Mario Galaxy, le film",
    image: "https://noopinhogames.com/wp-content/uploads/2025/09/Design-sans-titre-1-scaled.jpg",
    embed: "https://sharecloudy.com/iframe/UlLlw129zE",
    year: "2026",
    age: "6+",
    genre: "Animation",
    category: "Animation",
    synopsis: "Mario et ses compagnons embarquent dans une aventure cosmique inspirée de l'univers Super Mario Galaxy."
  },

  {
    id: "diable-prada",
    title: "Le diable s'habille en Prada",
    image: "https://media.vanityfair.fr/photos/6362554435e03dbc3868ee06/16:9/w_2560%2Cc_limit/MCDDEWE_FE076.jpg",
    embed: "https://sharecloudy.com/iframe/NW4HOpAxOf",
    year: "2006",
    age: "10+",
    genre: "Comédie",
    category: "Comédie",
    synopsis: "Andy décroche un emploi dans un prestigieux magazine de mode et découvre un univers aussi exigeant que fascinant."
  },

  {
    id: "diable-prada-2",
    title: "Le Diable s'habille en Prada 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaU5DtUyY6RqiFfU8lR_WL0cR706BRFk6hLAB5mhlAZaw_oOJF4jZQyE9I&s=10",
    embed: "https://sharecloudy.com/iframe/8d0c6745",
    year: "2026",
    age: "10+",
    genre: "Comédie",
    category: "Comédie",
    synopsis: "Le monde impitoyable de la mode revient avec une nouvelle histoire autour de l'univers du célèbre magazine."
  },

  {
    id: "reveil-momie",
    title: "Le Réveil de la Momie",
    image: "https://media.senscritique.com/media/000023667499/1200/le_reveil_de_la_momie.jpg",
    embed: "https://sharecloudy.com/iframe/eyeDWaW4cf",
    year: "2026",
    age: "16+",
    genre: "Horreur",
    category: "Horreur",
    synopsis: "Une momie se réveille et libère une nouvelle menace terrifiante."
  },

  {
    id: "passenger",
    title: "Passenger",
    image: "https://m.media-amazon.com/images/M/MV5BZTMzNDUyYzEtYWNjOS00NjUwLTg1MmItOTA4MGJkM2Q5NGE3XkEyXkFqcGdeQWFybm8@._V1_QL75_UY281_CR0,0,500,281_.jpg",
    embed: "https://sharecloudy.com/iframe/8f82b615",
    year: "2026",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Un voyage qui semblait ordinaire se transforme en situation dangereuse où chaque décision compte."
  },

  {
    id: "mortal-kombat",
    title: "Mortal Kombat",
    image: "https://m.media-amazon.com/images/S/pv-target-images/e94dd722214eb695a0f318542aa74c66827cda890eb97df600d8cba61f94fc86.jpg",
    embed: "https://sharecloudy.com/iframe/511762f6",
    year: "2021",
    age: "16+",
    genre: "Action",
    category: "Action",
    synopsis: "Des combattants venus des quatre coins du monde sont réunis pour participer à un tournoi aux enjeux considérables."
  },

  {
    id: "mortal-kombat-2",
    title: "Mortal Kombat II",
    image: "https://images8.alphacoders.com/140/thumb-1920-1409207.jpg",
    embed: "https://sharecloudy.com/iframe/661a08a8",
    year: "2026",
    age: "16+",
    genre: "Action",
    category: "Action",
    synopsis: "Les combattants de Mortal Kombat affrontent de nouvelles menaces et poursuivent leur lutte dans un nouveau tournoi."
  },

  {
    id: "terrifier",
    title: "Terrifier",
    image: "https://i.pathehome.com/collection/global/phc-5zbp2f7riz/a72866-terrifier_bc_fr.png?w=3840&auto=format&crop=top%2Cleft&fit=crop&q=45",
    embed: "https://sharecloudy.com/iframe/cQhy4RDiiB",
    year: "2021",
    age: "18+",
    genre: "Horreur",
    category: "Horreur",
    synopsis: "Art le Clown sème la terreur lors d'une nuit cauchemardesque."
  },

  {
    id: "terrifier-2",
    title: "Terrifier 2",
    image: "https://www.ecranlarge.com/content/uploads/2022/11/terrifier-2-photo-david-howard-thornton-1457833.jpg",
    embed: "https://sharecloudy.com/iframe/rGnRfKq5nV",
    year: "2023",
    age: "18+",
    genre: "Horreur",
    category: "Horreur",
    synopsis: "Art le Clown revient et plonge une nouvelle fois ses victimes dans un véritable cauchemar."
  },

  {
    id: "terrifier-3",
    title: "Terrifier 3",
    image: "https://media.gqmagazine.fr/photos/670793e3fce764b4af12e2b5/16:9/w_2560,c_limit/Terrifier%25203.jpg",
    embed: "https://sharecloudy.com/iframe/F78A1aDe3t",
    year: "2024",
    age: "18+",
    genre: "Horreur",
    category: "Horreur",
    synopsis: "Art le Clown poursuit son carnage dans une nouvelle aventure horrifique."
  },

  {
    id: "mayday",
    title: "Mayday",
    image: "https://media.senscritique.com/media/000023942297/375x230/mayday.jpg",
    embed: "https://sharecloudy.com/iframe/38389950",
    year: "2026",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Une situation de crise oblige les protagonistes à agir rapidement pour survivre."
  },

  {
    id: "alita-battle-angel",
    title: "Alita : Battle Angel",
    image: "https://www.geekjunior.fr/wp-content/uploads/2019/02/alita-battle-angel-sortie-cine.jpg",
    embed: "https://sharecloudy.com/iframe/GXv160yrc2",
    year: "2019",
    age: "12+",
    genre: "Action",
    category: "Action",
    synopsis: "Dans un futur lointain, Alita se réveille sans aucun souvenir et découvre peu à peu sa véritable identité."
  }

];


/* =========================================
   VARIABLES
========================================= */

const loginScreen =
  document.getElementById("login-screen");

const site =
  document.getElementById("site");

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

const infoGenre =
  document.getElementById("info-genre");

const infoSynopsis =
  document.getElementById("info-synopsis");

const launchFilm =
  document.getElementById("launch-film");

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

const categoryButtons =
  document.querySelectorAll(".category-button");


/* =========================================
   ÉTAT
========================================= */

let currentFilm = null;

let filteredFilms =
  [...filmsData];

let currentCategory =
  "Tous";

let currentQuery =
  "";

let carouselPosition =
  0;

let animationFrame =
  null;

let isPaused =
  false;

let isDragging =
  false;

let startX =
  0;

let lastX =
  0;

let lastTime =
  0;

const AUTO_SPEED =
  0.035;


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
      { transform: "scale(1)" },
      { transform: "scale(0.94)" },
      { transform: "scale(1.04)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 280,
      easing: "ease-out"
    }
  );

}


/* =========================================
   PRÉNOM
========================================= */

function continuerNom() {

  const name =
    nameInput.value.trim();

  if (!name) {

    nameInput.focus();

    nameInput.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(-3px)" },
        { transform: "translateX(0)" }
      ],
      {
        duration: 260
      }
    );

    return;
  }

  userName.textContent =
    name;

  nameStep.classList.remove(
    "active"
  );

  passwordStep.classList.add(
    "active"
  );

  setTimeout(() => {
    passwordInput.focus();
  }, 100);

}


/* =========================================
   CODE KX
========================================= */

function verifierMotDePasse() {

  const password =
    passwordInput.value.trim();

  if (password !== "KX") {

    passwordError.style.display =
      "block";

    passwordInput.value =
      "";

    passwordInput.focus();

    passwordInput.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-6px)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(-4px)" },
        { transform: "translateX(0)" }
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

    site.style.display =
      "block";

    document.body.style.overflow =
      "";

    afficherFilms(
      getFilmsFiltres()
    );

  }, 500);

}


/* =========================================
   FILMS FILTRÉS
========================================= */

function getFilmsFiltres() {

  let resultats =
    [...filmsData];

  if (currentCategory !== "Tous") {

    resultats =
      resultats.filter(
        film =>
          film.category ===
          currentCategory
      );

  }

  const query =
    currentQuery
      .trim()
      .toLowerCase();

  if (query) {

    resultats =
      resultats.filter(
        film => {

          return (
            film.title
              .toLowerCase()
              .includes(query) ||

            film.genre
              .toLowerCase()
              .includes(query) ||

            film.category
              .toLowerCase()
              .includes(query) ||

            film.year
              .includes(query) ||

            film.synopsis
              .toLowerCase()
              .includes(query)
          );

        }
      );

  }

  return resultats;

}


/* =========================================
   CATÉGORIES
========================================= */

function changerCategorie(category) {

  currentCategory =
    category;

  categoryButtons.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.category ===
        category
      );

    }
  );

  searchInput.value =
    "";

  currentQuery =
    "";

  clearSearch.style.display =
    "none";

  searchStatus.textContent =
    "";

  afficherFilms(
    getFilmsFiltres()
  );

  document.querySelector(
    ".films-section"
  ).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


categoryButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        changerCategorie(
          button.dataset.category
        );

        petitFeedback(
          button
        );

      }
    );

  }
);


/* =========================================
   CARTES
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

  card.innerHTML = `

    <img
      src="${film.image}"
      alt="${escapeHtml(film.title)}"
      loading="lazy"
      draggable="false"
    >

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

  carousel.innerHTML =
    "";

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
      "Aucun résultat";

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

  if (currentQuery) {

    sectionTitle.textContent =
      `${list.length} résultat${list.length > 1 ? "s" : ""}`;

    return;
  }

  if (currentCategory === "Tous") {

    sectionTitle.textContent =
      "Tous les films";

  } else {

    sectionTitle.textContent =
      currentCategory;

  }

}


/* =========================================
   INFOS FILM
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

  infoGenre.textContent =
    film.genre;

  infoSynopsis.textContent =
    film.synopsis;

  filmInfo.classList.add(
    "active"
  );

  filmInfo.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================
   FERMER INFOS
========================================= */

function fermerInfos() {

  filmInfo.classList.remove(
    "active"
  );

  filmInfo.setAttribute(
    "aria-hidden",
    "true"
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

  lecteur.setAttribute(
    "aria-hidden",
    "false"
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

  lecteur.setAttribute(
    "aria-hidden",
    "true"
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
   PROGRESSION VISUELLE
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

  currentQuery =
    searchInput.value
      .trim()
      .toLowerCase();

  clearSearch.style.display =
    currentQuery
      ? "block"
      : "none";

  if (!currentQuery) {

    searchStatus.textContent =
      "";

    afficherFilms(
      getFilmsFiltres()
    );

    return;
  }

  const resultats =
    getFilmsFiltres();

  searchStatus.textContent =
    `${resultats.length} résultat${resultats.length > 1 ? "s" : ""}`;

  afficherFilms(
    resultats
  );

}


function effacerRecherche() {

  searchInput.value =
    "";

  currentQuery =
    "";

  clearSearch.style.display =
    "none";

  searchStatus.textContent =
    "";

  afficherFilms(
    getFilmsFiltres()
  );

  searchInput.focus();

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
    secondCard.getBoundingClientRect().left -
    firstCard.getBoundingClientRect().left;

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

  if (!filteredFilms.length) {
    return;
  }

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

  if (!filteredFilms.length) {
    return;
  }

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
      isPaused = true;
    }

  }
);


carouselWrapper.addEventListener(
  "mouseleave",
  () => {

    if (!isDragging) {
      isPaused = false;
    }

  }
);


/* =========================================
   TOUCH
========================================= */

carouselWrapper.addEventListener(
  "touchstart",
  event => {

    isDragging = true;
    isPaused = true;

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
   À LA UNE
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
   EVENTS CONNEXION
========================================= */

nameButton.addEventListener(
  "click",
  continuerNom
);

passwordButton.addEventListener(
  "click",
  verifierMotDePasse
);


/* =========================================
   ENTER
========================================= */

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


/* =========================================
   LECTEUR
========================================= */

closePlayer.addEventListener(
  "click",
  fermerLecteur
);


/* =========================================
   CLIQUER DEHORS
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

  }
);


/* =========================================
   INITIALISATION
========================================= */

function initialiser() {

  site.style.display =
    "none";

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

  setTimeout(() => {
    nameInput.focus();
  }, 150);

}


initialiser();