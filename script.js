// ===== FIREBASE CONFIG =====
const firebaseConfig = {
    apiKey: "AIzaSyBse9q2podLKToGJRbBwuBgN2ChqReFbm8",
    authDomain: "apexquiz-3a5e0.firebaseapp.com",
    projectId: "apexquiz-3a5e0",
    storageBucket: "apexquiz-3a5e0.firebasestorage.app",
    messagingSenderId: "533113422093",
    appId: "1:533113422093:web:080b69db9e5963e8b8b044",
    databaseURL: "https://apexquiz-3a5e0-default-rtdb.europe-west1.firebasedatabase.app"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const rtdb = firebase.database();

// ===== SECRET ADMIN URL =====
// Access admin panel by adding #admin to the URL
// e.g. http://localhost:5500/#admin  OR  https://yoursite.netlify.app/#admin
function checkAdminURL() {
    if (window.location.hash === "#admin") {
        isAdmin = true;
        document.querySelectorAll(".admin-nav-btn").forEach(b => b.classList.remove("hidden"));
        showView("admin-view");
        showToast("🛡️ Admin panel unlocked!");
        window.location.hash = "#home"; // clear hash for security
    }
}
window.addEventListener("hashchange", checkAdminURL);

// ===== 100+ AVATARS =====
const AVATARS = [
    // FREE (starter)
    { emoji:"😎", name:"Cool Dude", price:0, rarity:"common" },
    { emoji:"🦁", name:"Lion King", price:0, rarity:"common" },
    { emoji:"🐯", name:"Tiger", price:0, rarity:"common" },
    // COMMON (50-100 coins)
    { emoji:"🦊", name:"Sly Fox", price:50, rarity:"common" },
    { emoji:"🐺", name:"Alpha Wolf", price:50, rarity:"common" },
    { emoji:"🐸", name:"Frog", price:60, rarity:"common" },
    { emoji:"👻", name:"Ghost", price:65, rarity:"common" },
    { emoji:"🤠", name:"Cowboy", price:70, rarity:"common" },
    { emoji:"🐱", name:"Cat", price:60, rarity:"common" },
    { emoji:"🐶", name:"Dog", price:60, rarity:"common" },
    { emoji:"🐻", name:"Bear", price:70, rarity:"common" },
    { emoji:"🐼", name:"Panda", price:75, rarity:"common" },
    { emoji:"🐨", name:"Koala", price:75, rarity:"common" },
    { emoji:"🦝", name:"Raccoon", price:80, rarity:"common" },
    { emoji:"🐹", name:"Hamster", price:80, rarity:"common" },
    { emoji:"🦔", name:"Hedgehog", price:85, rarity:"common" },
    { emoji:"🐰", name:"Bunny", price:85, rarity:"common" },
    { emoji:"🐭", name:"Mouse", price:80, rarity:"common" },
    { emoji:"🦦", name:"Otter", price:90, rarity:"common" },
    { emoji:"🦥", name:"Sloth", price:90, rarity:"common" },
    { emoji:"🐧", name:"Penguin", price:90, rarity:"common" },
    { emoji:"🦆", name:"Duck", price:85, rarity:"common" },
    { emoji:"🐢", name:"Turtle", price:85, rarity:"common" },
    { emoji:"🦎", name:"Lizard", price:90, rarity:"common" },
    { emoji:"🐙", name:"Octopus", price:95, rarity:"common" },
    { emoji:"🦀", name:"Crab", price:95, rarity:"common" },
    { emoji:"🐠", name:"Tropical Fish", price:90, rarity:"common" },
    { emoji:"🦋", name:"Butterfly", price:95, rarity:"common" },
    { emoji:"🐝", name:"Bee", price:95, rarity:"common" },
    { emoji:"🌵", name:"Cactus", price:100, rarity:"common" },
    // RARE (100-200 coins)
    { emoji:"🤖", name:"Cyborg", price:110, rarity:"rare" },
    { emoji:"👾", name:"Space Invader", price:110, rarity:"rare" },
    { emoji:"🎭", name:"Phantom", price:120, rarity:"rare" },
    { emoji:"🥷", name:"Shadow Ninja", price:130, rarity:"rare" },
    { emoji:"🦸", name:"Superhero", price:130, rarity:"rare" },
    { emoji:"🦅", name:"War Eagle", price:140, rarity:"rare" },
    { emoji:"🐬", name:"Dolphin", price:140, rarity:"rare" },
    { emoji:"🦈", name:"Deep Shark", price:150, rarity:"rare" },
    { emoji:"🦄", name:"Unicorn", price:150, rarity:"rare" },
    { emoji:"🐉", name:"Fire Dragon", price:160, rarity:"rare" },
    { emoji:"🦉", name:"Wise Owl", price:130, rarity:"rare" },
    { emoji:"🦜", name:"Parrot", price:120, rarity:"rare" },
    { emoji:"🦩", name:"Flamingo", price:125, rarity:"rare" },
    { emoji:"🦚", name:"Peacock", price:135, rarity:"rare" },
    { emoji:"🦊", name:"Arctic Fox", price:145, rarity:"rare" },
    { emoji:"🐊", name:"Croc", price:150, rarity:"rare" },
    { emoji:"🦁", name:"White Lion", price:155, rarity:"rare" },
    { emoji:"🐺", name:"Silver Wolf", price:155, rarity:"rare" },
    { emoji:"🦭", name:"Seal", price:130, rarity:"rare" },
    { emoji:"🐋", name:"Blue Whale", price:170, rarity:"rare" },
    { emoji:"🦬", name:"Bison", price:140, rarity:"rare" },
    { emoji:"🏄", name:"Surfer", price:145, rarity:"rare" },
    { emoji:"🧜", name:"Mermaid", price:160, rarity:"rare" },
    { emoji:"🧚", name:"Fairy", price:155, rarity:"rare" },
    { emoji:"🧝", name:"Elf", price:150, rarity:"rare" },
    { emoji:"🧛", name:"Vampire", price:165, rarity:"rare" },
    { emoji:"🧟", name:"Zombie", price:160, rarity:"rare" },
    { emoji:"🤺", name:"Fencer", price:140, rarity:"rare" },
    { emoji:"🏹", name:"Archer", price:145, rarity:"rare" },
    { emoji:"⚔️", name:"Warrior", price:175, rarity:"rare" },
    { emoji:"🛸", name:"UFO Pilot", price:170, rarity:"rare" },
    { emoji:"🚀", name:"Astronaut", price:175, rarity:"rare" },
    { emoji:"🎩", name:"Magician", price:165, rarity:"rare" },
    // EPIC (200-400 coins)
    { emoji:"🧙", name:"Grand Wizard", price:200, rarity:"epic" },
    { emoji:"🔮", name:"Oracle", price:220, rarity:"epic" },
    { emoji:"💀", name:"Skull Lord", price:230, rarity:"epic" },
    { emoji:"🌙", name:"Moon Spirit", price:240, rarity:"epic" },
    { emoji:"⭐", name:"Star Sage", price:250, rarity:"epic" },
    { emoji:"🐲", name:"Ancient Dragon", price:280, rarity:"epic" },
    { emoji:"🌊", name:"Ocean Titan", price:270, rarity:"epic" },
    { emoji:"🌋", name:"Volcano God", price:290, rarity:"epic" },
    { emoji:"⚡", name:"Thunder Lord", price:300, rarity:"epic" },
    { emoji:"🌪️", name:"Storm Bringer", price:310, rarity:"epic" },
    { emoji:"🔥", name:"Fire Lord", price:320, rarity:"epic" },
    { emoji:"❄️", name:"Ice Queen", price:320, rarity:"epic" },
    { emoji:"🌑", name:"Dark Moon", price:330, rarity:"epic" },
    { emoji:"🦇", name:"Bat Lord", price:260, rarity:"epic" },
    { emoji:"🕷️", name:"Spider King", price:270, rarity:"epic" },
    { emoji:"🐍", name:"Serpent", price:260, rarity:"epic" },
    { emoji:"🦂", name:"Scorpion", price:265, rarity:"epic" },
    { emoji:"🧿", name:"Evil Eye", price:285, rarity:"epic" },
    { emoji:"🎆", name:"Fireworks", price:295, rarity:"epic" },
    { emoji:"🌈", name:"Rainbow God", price:305, rarity:"epic" },
    { emoji:"🎇", name:"Sparkler", price:280, rarity:"epic" },
    { emoji:"🌠", name:"Shooting Star", price:315, rarity:"epic" },
    { emoji:"🌌", name:"Galaxy Brain", price:340, rarity:"epic" },
    { emoji:"🪐", name:"Planet Lord", price:350, rarity:"epic" },
    { emoji:"☄️", name:"Comet Rider", price:360, rarity:"epic" },
    { emoji:"🌞", name:"Sun God", price:370, rarity:"epic" },
    { emoji:"🌝", name:"Moon God", price:370, rarity:"epic" },
    { emoji:"🧲", name:"Magnetar", price:260, rarity:"epic" },
    { emoji:"🎭", name:"Dark Phantom", price:290, rarity:"epic" },
    { emoji:"🗡️", name:"Assassin", price:310, rarity:"epic" },
    // LEGENDARY (400-999 coins)
    { emoji:"👑", name:"The Crown", price:450, rarity:"legendary" },
    { emoji:"💎", name:"Diamond Soul", price:480, rarity:"legendary" },
    { emoji:"🔱", name:"God Trident", price:500, rarity:"legendary" },
    { emoji:"🏆", name:"Champion", price:550, rarity:"legendary" },
    { emoji:"🌟", name:"Supernova", price:500, rarity:"legendary" },
    { emoji:"🌊", name:"Tsunami King", price:520, rarity:"legendary" },
    { emoji:"🦋", name:"Golden Butterfly", price:460, rarity:"legendary" },
    { emoji:"🐉", name:"Celestial Dragon", price:600, rarity:"legendary" },
    { emoji:"⚜️", name:"Royal Crest", price:580, rarity:"legendary" },
    { emoji:"🎖️", name:"War Medal", price:530, rarity:"legendary" },
    { emoji:"🗝️", name:"Master Key", price:490, rarity:"legendary" },
    { emoji:"💫", name:"Cosmic Force", price:620, rarity:"legendary" },
    { emoji:"🔴", name:"Red Planet", price:470, rarity:"legendary" },
    { emoji:"🌀", name:"Vortex Lord", price:640, rarity:"legendary" },
    { emoji:"🎯", name:"Perfect Shot", price:660, rarity:"legendary" },
    { emoji:"🃏", name:"Wild Card", price:680, rarity:"legendary" },
    { emoji:"🦁", name:"Golden Lion", price:700, rarity:"legendary" },
    { emoji:"🌙", name:"Eclipse Master", price:720, rarity:"legendary" },
    { emoji:"⚡", name:"Zeus", price:750, rarity:"legendary" },
    { emoji:"🔥", name:"Inferno King", price:780, rarity:"legendary" },
    { emoji:"🌌", name:"Universe Lord", price:850, rarity:"legendary" },
    { emoji:"👁️", name:"All-Seeing Eye", price:900, rarity:"legendary" },
    { emoji:"😈", name:"DarkVex Special", price:999, rarity:"legendary" }
];

// ===== QUIZ DATA (kept same as before) =====
const quizData = {
    "🌍 Geography": [
        {q:"Capital of France?",a:["Paris","London","Berlin","Madrid"],c:0,exp:"Paris has been France's capital since 987 AD."},
        {q:"Largest ocean?",a:["Atlantic","Indian","Pacific","Arctic"],c:2,exp:"The Pacific covers ~165 million km²."},
        {q:"Longest river?",a:["Amazon","Nile","Yangtze","Mississippi"],c:1,exp:"The Nile is ~6,650 km long."},
        {q:"Country with most lakes?",a:["Russia","USA","Canada","Finland"],c:2,exp:"Canada has over 2 million lakes."},
        {q:"Mount Everest mountain range?",a:["Andes","Rockies","Himalayas","Alps"],c:2,exp:"Everest is in the Himalayas at 8,849m."},
        {q:"Smallest country?",a:["Monaco","San Marino","Vatican City","Liechtenstein"],c:2,exp:"Vatican City is only 0.44 km²."},
        {q:"Capital of Australia?",a:["Sydney","Melbourne","Canberra","Brisbane"],c:2,exp:"Canberra has been the capital since 1913."},
        {q:"Largest country by area?",a:["China","USA","Canada","Russia"],c:3,exp:"Russia covers 17.1 million km²."},
        {q:"Capital of Japan?",a:["Kyoto","Osaka","Tokyo","Hiroshima"],c:2,exp:"Tokyo has been the capital since 1869."},
        {q:"Sahara Desert continent?",a:["Asia","South America","Australia","Africa"],c:3,exp:"The Sahara is in North Africa."},
        {q:"Capital of Brazil?",a:["Rio de Janeiro","São Paulo","Brasília","Salvador"],c:2,exp:"Brasília became Brazil's capital in 1960."},
        {q:"Smallest ocean?",a:["Pacific","Atlantic","Indian","Arctic"],c:3,exp:"The Arctic Ocean is the smallest."},
        {q:"Most populated country 2024?",a:["China","USA","India","Indonesia"],c:2,exp:"India surpassed China in 2023."},
        {q:"Tallest mountain in Africa?",a:["Mount Kenya","Kilimanjaro","Mount Elgon","Rwenzori"],c:1,exp:"Kilimanjaro stands at 5,895m."},
        {q:"Capital of Canada?",a:["Toronto","Vancouver","Ottawa","Montreal"],c:2,exp:"Ottawa is Canada's capital."},
        {q:"River flowing through Egypt?",a:["Congo","Nile","Niger","Zambezi"],c:1,exp:"The Nile flows through Egypt."},
        {q:"Countries in Africa?",a:["44","54","64","74"],c:1,exp:"Africa has 54 recognized countries."},
        {q:"Land of the Rising Sun?",a:["China","South Korea","Japan","Vietnam"],c:2,exp:"Japan is called the Land of the Rising Sun."},
        {q:"Capital of Argentina?",a:["Buenos Aires","Santiago","Lima","Bogotá"],c:0,exp:"Buenos Aires is Argentina's capital."},
        {q:"Which country has the most coastline?",a:["Norway","Russia","Australia","Canada"],c:3,exp:"Canada has the longest coastline at over 200,000 km."}
    ],
    "🔬 Science": [
        {q:"Chemical symbol for Gold?",a:["Go","Gd","Au","Ag"],c:2,exp:"Au comes from Latin 'Aurum'."},
        {q:"Bones in adult human body?",a:["196","206","216","226"],c:1,exp:"Adults have 206 bones."},
        {q:"Red Planet?",a:["Venus","Jupiter","Mars","Saturn"],c:2,exp:"Mars looks red due to iron oxide."},
        {q:"Gas plants absorb?",a:["Oxygen","Nitrogen","CO₂","Hydrogen"],c:2,exp:"Plants absorb CO₂ for photosynthesis."},
        {q:"Speed of light?",a:["100,000 km/s","200,000 km/s","299,792 km/s","350,000 km/s"],c:2,exp:"Light travels at 299,792 km/s."},
        {q:"H₂O is?",a:["Salt","Water","Hydrogen","Helium"],c:1,exp:"H₂O = 2 hydrogen + 1 oxygen = water."},
        {q:"Powerhouse of the cell?",a:["Nucleus","Ribosome","Mitochondria","Golgi Body"],c:2,exp:"Mitochondria produce ATP energy."},
        {q:"Planets in solar system?",a:["7","8","9","10"],c:1,exp:"8 planets since Pluto was reclassified in 2006."},
        {q:"Atomic number of Carbon?",a:["4","6","8","12"],c:1,exp:"Carbon has 6 protons."},
        {q:"Theory of relativity creator?",a:["Newton","Darwin","Einstein","Hawking"],c:2,exp:"Einstein published it in 1905."},
        {q:"Hardest natural substance?",a:["Gold","Iron","Diamond","Quartz"],c:2,exp:"Diamond scores 10 on Mohs scale."},
        {q:"Human chromosomes?",a:["23","46","48","44"],c:1,exp:"Humans have 46 chromosomes (23 pairs)."},
        {q:"Symbol for Iron?",a:["Ir","Fe","In","Fr"],c:1,exp:"Fe comes from Latin 'Ferrum'."},
        {q:"Boiling point of water at sea level?",a:["90°C","95°C","100°C","105°C"],c:2,exp:"Water boils at 100°C at sea level."},
        {q:"Chambers in human heart?",a:["2","3","4","5"],c:2,exp:"The heart has 4 chambers."},
        {q:"Most of Earth's atmosphere?",a:["Oxygen","CO₂","Nitrogen","Argon"],c:2,exp:"Nitrogen makes up ~78% of the atmosphere."},
        {q:"Closest star to Earth?",a:["Sirius","Betelgeuse","Proxima Centauri","Vega"],c:2,exp:"Proxima Centauri is 4.24 light-years away."},
        {q:"Organ that produces insulin?",a:["Liver","Kidney","Pancreas","Stomach"],c:2,exp:"The pancreas produces insulin."},
        {q:"Chemical formula for table salt?",a:["NaCl","KCl","CaCO3","H2SO4"],c:0,exp:"Table salt is sodium chloride — NaCl."},
        {q:"Sunlight travel time to Earth?",a:["3 minutes","8 minutes","15 minutes","30 minutes"],c:1,exp:"Sunlight takes ~8 minutes to reach Earth."}
    ],
    "🎮 Gaming": [
        {q:"Who created PlayStation?",a:["Microsoft","Nintendo","Sony","Sega"],c:2,exp:"Sony released PlayStation in 1994."},
        {q:"Year Minecraft was released?",a:["2009","2010","2011","2012"],c:2,exp:"Minecraft officially launched in 2011."},
        {q:"Most concurrent Steam players ever?",a:["PUBG","CS:GO","Cyberpunk","Elden Ring"],c:0,exp:"PUBG peaked at 3.2M players in 2018."},
        {q:"Best-selling game of all time?",a:["Tetris","Minecraft","GTA V","Mario Kart"],c:1,exp:"Minecraft sold 238 million+ copies."},
        {q:"Company that makes Xbox?",a:["Sony","Nintendo","Apple","Microsoft"],c:3,exp:"Microsoft launched Xbox in 2001."},
        {q:"Charizard's type in Pokémon?",a:["Fire/Dragon","Fire/Flying","Fire only","Fire/Rock"],c:1,exp:"Charizard is Fire/Flying type."},
        {q:"Main enemy in Zelda?",a:["Bowser","Ganon","Sephiroth","Kefka"],c:1,exp:"Ganon is the main antagonist."},
        {q:"Currency in Animal Crossing?",a:["Gold","Bells","Coins","Stars"],c:1,exp:"Bells are the currency in Animal Crossing."},
        {q:"Main character of Halo?",a:["Master Chief","Doom Guy","Kratos","Samus"],c:0,exp:"Master Chief is Halo's protagonist."},
        {q:"Game featuring Geralt of Rivia?",a:["Dragon Age","The Witcher","Dark Souls","Skyrim"],c:1,exp:"Geralt is the main character of The Witcher."},
        {q:"Year GTA V released?",a:["2011","2012","2013","2014"],c:2,exp:"GTA V released September 17, 2013."},
        {q:"Console that uses Joy-Cons?",a:["PlayStation","Xbox","Nintendo Switch","PC"],c:2,exp:"Joy-Cons are Nintendo Switch controllers."},
        {q:"Who made Fortnite?",a:["Activision","Epic Games","Riot Games","EA"],c:1,exp:"Fortnite was made by Epic Games."},
        {q:"Goal in Among Us?",a:["Build a base","Find the impostor","Collect resources","Defeat enemies"],c:1,exp:"Find and vote off the impostor."},
        {q:"Kratos appears in which game?",a:["Devil May Cry","God of War","Assassin's Creed","Darksiders"],c:1,exp:"Kratos is the protagonist of God of War."},
        {q:"Dark Souls genre?",a:["FPS","Battle Royale","Action RPG","Sports"],c:2,exp:"Dark Souls is an action role-playing game."},
        {q:"Red Dead Redemption developer?",a:["Ubisoft","Rockstar Games","CD Projekt","Bethesda"],c:1,exp:"Rockstar Games developed Red Dead Redemption."},
        {q:"What does NPC stand for?",a:["Non-Playable Character","New Player Character","None Playing Commando","Natural Player Control"],c:0,exp:"NPC = Non-Playable Character."},
        {q:"First battle royale game?",a:["Fortnite","PUBG","Warzone","Apex Legends"],c:1,exp:"PUBG launched in early access in March 2017."},
        {q:"Which game has the most sold copies on Nintendo Switch?",a:["Mario Kart 8","Animal Crossing","Zelda: BOTW","Super Smash Bros"],c:0,exp:"Mario Kart 8 Deluxe is the best-selling Switch game."}
    ],
    "🎬 Movies & TV": [
        {q:"Director of Jurassic Park?",a:["James Cameron","Steven Spielberg","Nolan","Tim Burton"],c:1,exp:"Spielberg directed Jurassic Park in 1993."},
        {q:"'I am your father' from which movie?",a:["Star Trek","Star Wars V","Star Wars IV","Interstellar"],c:1,exp:"Said by Darth Vader in The Empire Strikes Back."},
        {q:"Titanic Oscar wins?",a:["9","10","11","14"],c:2,exp:"Titanic won 11 Academy Awards."},
        {q:"Stranger Things streaming service?",a:["HBO","Disney+","Netflix","Amazon"],c:2,exp:"Stranger Things premiered on Netflix in 2016."},
        {q:"Who plays Iron Man in MCU?",a:["Chris Evans","Chris Hemsworth","Robert Downey Jr","Mark Ruffalo"],c:2,exp:"Robert Downey Jr played Tony Stark 2008-2019."},
        {q:"Highest-grossing movie ever?",a:["Avengers: Endgame","Avatar","Titanic","The Lion King"],c:1,exp:"Avatar holds the record at over $2.9 billion."},
        {q:"Who plays Walter White in Breaking Bad?",a:["Bryan Cranston","Aaron Paul","Bob Odenkirk","Dean Norris"],c:0,exp:"Bryan Cranston portrayed Walter White."},
        {q:"Year The Avengers released?",a:["2010","2011","2012","2013"],c:2,exp:"The Avengers released in 2012."},
        {q:"Matrix pill colour Neo takes?",a:["Blue","Green","Red","Yellow"],c:2,exp:"Neo takes the red pill to see reality."},
        {q:"Harry Potter author?",a:["Tolkien","C.S. Lewis","J.K. Rowling","Philip Pullman"],c:2,exp:"J.K. Rowling wrote Harry Potter, first published 1997."},
        {q:"Who directed The Dark Knight?",a:["Tim Burton","Christopher Nolan","Zack Snyder","Jon Favreau"],c:1,exp:"Christopher Nolan directed The Dark Knight (2008)."},
        {q:"'Life is like a box of chocolates' from?",a:["Cast Away","The Green Mile","Forrest Gump","Philadelphia"],c:2,exp:"This iconic line is from Forrest Gump (1994)."},
        {q:"Game of Thrones features?",a:["Robots","Magic Rings","Dragons and Iron Throne","Lightsabers"],c:2,exp:"Game of Thrones featured dragons and the Iron Throne."},
        {q:"Daniel Craig first Bond film?",a:["Skyfall","GoldenEye","Casino Royale","Die Another Day"],c:2,exp:"Daniel Craig debuted in Casino Royale in 2006."},
        {q:"Who plays the Joker in the 2019 film?",a:["Heath Ledger","Jack Nicholson","Joaquin Phoenix","Jared Leto"],c:2,exp:"Joaquin Phoenix won the Oscar for the Joker."},
        {q:"'Here's looking at you, kid' from?",a:["Citizen Kane","Casablanca","Gone with the Wind","The Maltese Falcon"],c:1,exp:"Humphrey Bogart says this in Casablanca (1942)."},
        {q:"Simba is in which animated film?",a:["Bambi","Tarzan","The Lion King","Jungle Book"],c:2,exp:"Simba is the main character in The Lion King (1994)."},
        {q:"Highest-rated TV show on IMDb?",a:["The Sopranos","Breaking Bad","Game of Thrones","The Wire"],c:1,exp:"Breaking Bad holds the highest average episode rating."},
        {q:"Which show features Walter White?",a:["Dexter","Ozark","Breaking Bad","Better Call Saul"],c:2,exp:"Walter White is the main character of Breaking Bad."},
        {q:"Director of Inception?",a:["Ridley Scott","Christopher Nolan","Steven Spielberg","James Cameron"],c:1,exp:"Christopher Nolan directed Inception (2010)."}
    ],
    "🎵 Music": [
        {q:"King of Pop?",a:["Elvis","Michael Jackson","Prince","Bowie"],c:1,exp:"Michael Jackson earned this title in the late 1980s."},
        {q:"Band behind Bohemian Rhapsody?",a:["Beatles","Led Zeppelin","Queen","Rolling Stones"],c:2,exp:"Queen released it in 1975."},
        {q:"Strings on a standard guitar?",a:["4","5","6","8"],c:2,exp:"A standard guitar has 6 strings."},
        {q:"BTS country of origin?",a:["Japan","China","South Korea","Thailand"],c:2,exp:"BTS is a South Korean boy band."},
        {q:"Best-selling album ever?",a:["Thriller","Back in Black","Dark Side of Moon","Eagles Greatest Hits"],c:0,exp:"Thriller sold 66 million+ copies."},
        {q:"Most Grammy wins ever?",a:["Beyoncé","Taylor Swift","Adele","Jay-Z"],c:0,exp:"Beyoncé has won 32 Grammy Awards."},
        {q:"BPM stands for?",a:["Beats Per Minute","Bass Per Melody","Bars Per Measure","Beats Per Measure"],c:0,exp:"BPM = Beats Per Minute."},
        {q:"Birthplace of jazz?",a:["Chicago","Nashville","New York","New Orleans"],c:3,exp:"Jazz originated in New Orleans."},
        {q:"Who sang 'Shape of You'?",a:["Justin Bieber","Bruno Mars","Ed Sheeran","Harry Styles"],c:2,exp:"Ed Sheeran released it in January 2017."},
        {q:"Elton John's instrument?",a:["Guitar","Drums","Piano","Bass"],c:2,exp:"Elton John is famous for his piano playing."},
        {q:"Band that sang 'Hotel California'?",a:["The Beatles","Eagles","Fleetwood Mac","The Doors"],c:1,exp:"Eagles released Hotel California in 1977."},
        {q:"Taylor Swift's primary genre?",a:["R&B","Country/Pop","Hip-Hop","Electronic"],c:1,exp:"Taylor Swift started in country and crossed into pop."},
        {q:"Most streamed artist on Spotify?",a:["Drake","Ed Sheeran","The Weeknd","Bad Bunny"],c:3,exp:"Bad Bunny has been the most-streamed artist multiple years."},
        {q:"What does DJ stand for?",a:["Disc Jockey","Digital Jammer","Dynamic Juggler","Dance Judge"],c:0,exp:"DJ stands for Disc Jockey."},
        {q:"Notes in a musical octave?",a:["6","7","8","12"],c:2,exp:"An octave contains 8 notes."},
        {q:"Queen of Pop?",a:["Beyoncé","Rihanna","Madonna","Lady Gaga"],c:2,exp:"Madonna has long been called the Queen of Pop."},
        {q:"Piano has how many keys?",a:["76","82","88","92"],c:2,exp:"A standard piano has 88 keys."},
        {q:"K-pop originates from?",a:["Japan","China","South Korea","Thailand"],c:2,exp:"K-pop originated in South Korea in the 1990s."},
        {q:"Who sang 'Uptown Funk'?",a:["Pharrell Williams","Bruno Mars","Mark Ronson feat Bruno Mars","Justin Timberlake"],c:2,exp:"'Uptown Funk' was by Mark Ronson featuring Bruno Mars (2014)."},
        {q:"Which artist has sold the most records ever?",a:["Michael Jackson","Elvis Presley","The Beatles","Madonna"],c:1,exp:"Elvis Presley has sold an estimated 600 million records worldwide."}
    ],
    "⚽ Sports": [
        {q:"Players on a football team?",a:["9","10","11","12"],c:2,exp:"11 players per team."},
        {q:"Most FIFA World Cup wins?",a:["Germany","Argentina","Italy","Brazil"],c:3,exp:"Brazil has won 5 World Cups."},
        {q:"Olympic pool length?",a:["25m","50m","75m","100m"],c:1,exp:"Olympic pools are 50 metres."},
        {q:"Tennis score of zero?",a:["Nil","Zero","Love","None"],c:2,exp:"Zero in tennis is 'love'."},
        {q:"Olympic rings count?",a:["4","5","6","7"],c:1,exp:"5 rings for 5 continents."},
        {q:"Sport using a shuttlecock?",a:["Tennis","Badminton","Squash","Pickleball"],c:1,exp:"Badminton uses a shuttlecock."},
        {q:"Most Ballon d'Or wins?",a:["Ronaldo","Neymar","Mbappe","Messi"],c:3,exp:"Messi has won 8 Ballon d'Or awards."},
        {q:"2022 FIFA World Cup winner?",a:["France","Brazil","Argentina","England"],c:2,exp:"Argentina won the 2022 World Cup."},
        {q:"Sport with 'slam dunk'?",a:["Volleyball","Rugby","Basketball","Handball"],c:2,exp:"Slam dunks are in basketball."},
        {q:"Cricket invented in?",a:["Australia","India","South Africa","England"],c:3,exp:"Cricket originated in England."},
        {q:"Players in basketball team on court?",a:["4","5","6","7"],c:1,exp:"5 players per team on court."},
        {q:"LBW stands for in cricket?",a:["Left Behind Wicket","Leg Before Wicket","Low Ball Wide","Long Ball Won"],c:1,exp:"LBW = Leg Before Wicket."},
        {q:"Maximum break in snooker?",a:["100","147","155","170"],c:1,exp:"The maximum break in snooker is 147."},
        {q:"Holes in a standard golf course?",a:["9","12","18","24"],c:2,exp:"A standard golf course has 18 holes."},
        {q:"Most Rugby World Cup wins?",a:["England","Australia","South Africa","New Zealand"],c:3,exp:"New Zealand's All Blacks have won 3 times."},
        {q:"F1 stands for?",a:["Formula 1","First League","Final One","Fast 1"],c:0,exp:"F1 = Formula 1 — highest class of auto racing."},
        {q:"Marathon distance?",a:["40km","42.195km","45km","38km"],c:1,exp:"A marathon is 42.195 km."},
        {q:"Most Olympic gold medals swimmer?",a:["Ian Thorpe","Mark Spitz","Ryan Lochte","Michael Phelps"],c:3,exp:"Michael Phelps has 23 Olympic gold medals."},
        {q:"National sport of Japan?",a:["Judo","Karate","Sumo","Kendo"],c:2,exp:"Sumo wrestling is Japan's national sport."},
        {q:"Which sport uses a puck?",a:["Football","Basketball","Ice Hockey","Cricket"],c:2,exp:"Ice hockey uses a rubber puck instead of a ball."}
    ],
    "📚 History": [
        {q:"WWII end year?",a:["1943","1944","1945","1946"],c:2,exp:"WWII ended in 1945."},
        {q:"First US President?",a:["Lincoln","John Adams","Jefferson","George Washington"],c:3,exp:"Washington served 1789-1797."},
        {q:"Titanic sank?",a:["1909","1910","1912","1915"],c:2,exp:"Titanic sank April 15, 1912."},
        {q:"Berlin Wall fell?",a:["1987","1988","1989","1990"],c:2,exp:"The Berlin Wall fell November 9, 1989."},
        {q:"First person on the moon?",a:["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","Alan Shepard"],c:2,exp:"Armstrong walked on the moon July 20, 1969."},
        {q:"Who built the pyramids?",a:["Mesopotamian","Greek","Roman","Egyptian"],c:3,exp:"Ancient Egyptians built the pyramids."},
        {q:"First artificial satellite?",a:["Vostok","Sputnik","Apollo","Explorer"],c:1,exp:"Sputnik 1 launched October 4, 1957."},
        {q:"Magna Carta signed by?",a:["King Henry VIII","King John","William the Conqueror","King Richard I"],c:1,exp:"King John signed the Magna Carta in 1215."},
        {q:"WWI begin year?",a:["1912","1913","1914","1915"],c:2,exp:"WWI began in 1914."},
        {q:"Julius Caesar's empire?",a:["Greek","Ottoman","Roman","Byzantine"],c:2,exp:"Caesar was a Roman statesman."},
        {q:"First woman to win Nobel Prize?",a:["Ada Lovelace","Marie Curie","Florence Nightingale","Rosalind Franklin"],c:1,exp:"Marie Curie won the Nobel Prize in Physics in 1903."},
        {q:"French Revolution begin year?",a:["1776","1785","1789","1800"],c:2,exp:"The French Revolution began in 1789."},
        {q:"First emperor of China?",a:["Genghis Khan","Kublai Khan","Qin Shi Huang","Sun Yat-sen"],c:2,exp:"Qin Shi Huang became the first emperor in 221 BC."},
        {q:"Who built Machu Picchu?",a:["Aztec","Mayan","Inca","Olmec"],c:2,exp:"Machu Picchu was built by the Inca in the 15th century."},
        {q:"Columbus reached Americas?",a:["1488","1492","1498","1502"],c:1,exp:"Columbus reached the Bahamas on October 12, 1492."},
        {q:"Last pharaoh of ancient Egypt?",a:["Nefertiti","Hatshepsut","Cleopatra VII","Tutankhamun"],c:2,exp:"Cleopatra VII was the last active ruler of Egypt."},
        {q:"Cold War ended?",a:["1985","1989","1991","1993"],c:2,exp:"The Cold War ended in 1991."},
        {q:"Country NOT in Allied powers WWII?",a:["USA","UK","France","Japan"],c:3,exp:"Japan was part of the Axis powers."},
        {q:"Who painted the Sistine Chapel?",a:["Leonardo da Vinci","Raphael","Michelangelo","Botticelli"],c:2,exp:"Michelangelo painted it between 1508 and 1512."},
        {q:"First space station?",a:["Mir","Skylab","Salyut 1","ISS"],c:2,exp:"Salyut 1, launched in 1971, was the first space station."}
    ],
    "🍕 Food & Drink": [
        {q:"Pizza originated in?",a:["France","USA","Italy","Greece"],c:2,exp:"Pizza originated in Naples, Italy."},
        {q:"Sushi wrapped in?",a:["Lettuce","Tortilla","Nori seaweed","Rice paper"],c:2,exp:"Nori is dried seaweed used in sushi."},
        {q:"Main ingredient in hummus?",a:["Lentils","Chickpeas","Black beans","Kidney beans"],c:1,exp:"Hummus is primarily made from chickpeas."},
        {q:"Largest coffee producer?",a:["Colombia","Vietnam","Ethiopia","Brazil"],c:3,exp:"Brazil produces ~40% of global coffee."},
        {q:"Nut used in marzipan?",a:["Walnut","Cashew","Almond","Hazelnut"],c:2,exp:"Marzipan is made from ground almonds."},
        {q:"Most vitamin C fruit?",a:["Orange","Lemon","Kiwi","Guava"],c:3,exp:"Guava has more vitamin C than any common fruit."},
        {q:"Most consumed beverage after water?",a:["Coffee","Beer","Tea","Juice"],c:2,exp:"Tea is the second most consumed beverage."},
        {q:"Cheese in a Margherita pizza?",a:["Cheddar","Mozzarella","Parmesan","Brie"],c:1,exp:"Traditional Margherita uses fresh mozzarella."},
        {q:"Teaspoons in a tablespoon?",a:["2","3","4","5"],c:1,exp:"3 teaspoons = 1 tablespoon."},
        {q:"World's most expensive spice?",a:["Vanilla","Truffle","Saffron","Cardamom"],c:2,exp:"Saffron is the world's most expensive spice."},
        {q:"Gouda cheese from?",a:["France","Italy","Netherlands","Switzerland"],c:2,exp:"Gouda cheese originates from the Netherlands."},
        {q:"Main ingredient in guacamole?",a:["Tomato","Avocado","Lime","Onion"],c:1,exp:"Avocado is the primary ingredient."},
        {q:"Calories in 1g of fat?",a:["4","7","9","11"],c:2,exp:"Fat contains 9 calories per gram."},
        {q:"National dish of Spain?",a:["Paella","Tapas","Gazpacho","Tortilla"],c:0,exp:"Paella is widely considered Spain's national dish."},
        {q:"King of fruits?",a:["Mango","Durian","Jackfruit","Lychee"],c:1,exp:"The durian is called the 'king of fruits'."},
        {q:"Tofu made from?",a:["Rice","Wheat","Soy milk","Coconut"],c:2,exp:"Tofu is made from coagulated soy milk."},
        {q:"Bow-tie shaped pasta?",a:["Rigatoni","Farfalle","Conchiglie","Rotini"],c:1,exp:"Farfalle means 'butterflies' in Italian."},
        {q:"Croissants invented in?",a:["France","Austria","Belgium","Switzerland"],c:1,exp:"The croissant was actually invented in Austria."},
        {q:"Japanese word for raw fish?",a:["Sashimi","Tempura","Teriyaki","Miso"],c:0,exp:"Sashimi = thinly sliced raw fish."},
        {q:"Which country invented tea?",a:["India","Japan","China","England"],c:2,exp:"Tea was first discovered in ancient China around 2737 BC."}
    ],
    "🦁 Animals": [
        {q:"Fastest land animal?",a:["Lion","Cheetah","Gazelle","Horse"],c:1,exp:"Cheetah reaches 120 km/h."},
        {q:"Octopus hearts?",a:["1","2","3","4"],c:2,exp:"Octopuses have 3 hearts."},
        {q:"Group of lions?",a:["Pack","Herd","Pride","Colony"],c:2,exp:"A group of lions is a pride."},
        {q:"Largest land animal?",a:["Giraffe","Rhino","Hippo","African Elephant"],c:3,exp:"African elephants weigh up to 6 tonnes."},
        {q:"Elephant pregnancy?",a:["9 months","14 months","18 months","22 months"],c:3,exp:"Elephants are pregnant for ~22 months."},
        {q:"Polar bear skin colour?",a:["White","Pink","Black","Grey"],c:2,exp:"Polar bears have black skin under white fur."},
        {q:"Longest lifespan animal?",a:["Tortoise","Whale","Parrot","Greenland Shark"],c:3,exp:"Greenland Sharks live 400+ years."},
        {q:"Spider leg count?",a:["6","8","10","12"],c:1,exp:"Spiders have 8 legs."},
        {q:"Only true flying mammal?",a:["Flying Squirrel","Sugar Glider","Bat","Colugo"],c:2,exp:"Bats are the only mammals with true powered flight."},
        {q:"Group of wolves?",a:["Flock","Pack","Herd","Colony"],c:1,exp:"A group of wolves is a pack."},
        {q:"Largest fish in the ocean?",a:["Great White Shark","Blue Whale","Whale Shark","Giant Oarfish"],c:2,exp:"The whale shark is the largest fish."},
        {q:"Starfish typical arm count?",a:["4","5","6","8"],c:1,exp:"Most starfish have 5 arms."},
        {q:"Animal that sleeps standing up?",a:["Elephant","Horse","Giraffe","Bear"],c:1,exp:"Horses can sleep standing up."},
        {q:"Bird with largest wingspan?",a:["Eagle","Albatross","Condor","Pelican"],c:1,exp:"Wandering albatross has wingspan up to 3.5m."},
        {q:"Cow stomach count?",a:["1","2","3","4"],c:3,exp:"Cows have 4 stomach chambers."},
        {q:"Only mammal that cannot jump?",a:["Elephant","Hippo","Rhino","Crocodile"],c:0,exp:"Elephants cannot jump."},
        {q:"Group of fish called?",a:["Flock","School","Pack","Gaggle"],c:1,exp:"A group of fish is called a school or shoal."},
        {q:"Animal with best sense of smell?",a:["Dog","Bear","Shark","Elephant"],c:1,exp:"Bears have the strongest sense of smell."},
        {q:"Smallest bird in the world?",a:["Sparrow","Wren","Bee Hummingbird","Finch"],c:2,exp:"The bee hummingbird weighs just 1.6 grams."},
        {q:"How long can a camel go without water?",a:["3 days","1 week","2 weeks","3 weeks"],c:3,exp:"Camels can survive up to 3 weeks without water."}
    ],
    "💻 Technology": [
        {q:"Apple co-founder?",a:["Bill Gates","Steve Jobs","Zuckerberg","Jeff Bezos"],c:1,exp:"Jobs co-founded Apple with Wozniak and Wayne in 1976."},
        {q:"HTTP stands for?",a:["HyperText Transfer Protocol","High Tech Transfer Protocol","HyperText Transmission Program","Home Transfer Text Protocol"],c:0,exp:"HTTP = HyperText Transfer Protocol."},
        {q:"Android creator?",a:["Apple","Samsung","Google","Microsoft"],c:2,exp:"Google acquired Android Inc. in 2005."},
        {q:"Most popular language 2024?",a:["Java","C++","JavaScript","Python"],c:3,exp:"Python consistently ranks as the most popular."},
        {q:"CPU stands for?",a:["Central Processing Unit","Computer Personal Unit","Core Processing Unit","Central Program Utility"],c:0,exp:"CPU = Central Processing Unit."},
        {q:"Instagram owner?",a:["Twitter/X","Snap","Meta","Google"],c:2,exp:"Meta acquired Instagram in 2012."},
        {q:"First computer virus?",a:["Brain","Creeper","ILOVEYOU","Melissa"],c:1,exp:"The Creeper program (1971) is considered the first."},
        {q:"Bits in a byte?",a:["4","8","16","32"],c:1,exp:"8 bits = 1 byte."},
        {q:"World Wide Web invented?",a:["1983","1987","1989","1991"],c:2,exp:"Tim Berners-Lee invented it in 1989 at CERN."},
        {q:"URL stands for?",a:["Uniform Resource Locator","Universal Resource Link","Unified Remote Location","User Resource Language"],c:0,exp:"URL = Uniform Resource Locator."},
        {q:"First iPhone release year?",a:["2005","2006","2007","2008"],c:2,exp:"Apple released the first iPhone on June 29, 2007."},
        {q:"RAM stands for?",a:["Random Access Memory","Read And Modify","Real Application Memory","Remote Access Module"],c:0,exp:"RAM = Random Access Memory."},
        {q:"Windows developed by?",a:["Apple","IBM","Microsoft","Google"],c:2,exp:"Microsoft developed Windows, with v1.0 in 1985."},
        {q:"Microsoft's search engine?",a:["Yahoo","DuckDuckGo","Bing","Opera"],c:2,exp:"Bing is Microsoft's search engine, launched in 2009."},
        {q:"Wi-Fi stands for?",a:["Wireless Fidelity","Wide Frequency","Wireless Frequency","Wire-Free Internet"],c:0,exp:"Wi-Fi stands for Wireless Fidelity."},
        {q:"Facebook originally built in?",a:["Python","Java","PHP","Ruby"],c:2,exp:"Facebook was originally built using PHP."},
        {q:"YouTube founded?",a:["2003","2004","2005","2006"],c:2,exp:"YouTube was founded in February 2005."},
        {q:"GPU stands for?",a:["General Processing Unit","Graphics Processing Unit","Game Power Unit","Global Program Utility"],c:1,exp:"GPU = Graphics Processing Unit."},
        {q:"WhatsApp owner?",a:["Google","Apple","Meta","Twitter"],c:2,exp:"Meta acquired WhatsApp in 2014 for $19 billion."},
        {q:"Most visited website globally?",a:["Facebook","YouTube","Google","Amazon"],c:2,exp:"Google.com is consistently the most visited website."}
    ]
};

const trueFalseData = [
    {q:"The Great Wall of China is visible from space.",a:false,exp:"This is a myth — it's too narrow to see from space."},
    {q:"Humans share 50% DNA with bananas.",a:true,exp:"True! ~50% DNA is shared due to common ancestry."},
    {q:"Lightning never strikes the same place twice.",a:false,exp:"False! Lightning frequently strikes the same spot."},
    {q:"A group of flamingos is called a flamboyance.",a:true,exp:"True! A flamboyance of flamingos."},
    {q:"The sun is a planet.",a:false,exp:"False! The sun is a star."},
    {q:"Honey never expires.",a:true,exp:"True! Ancient Egyptian honey was still edible."},
    {q:"The Eiffel Tower grows taller in summer.",a:true,exp:"True! Heat expands the metal by up to 15cm."},
    {q:"Water boils at 100°C at sea level.",a:true,exp:"True! At standard sea-level pressure."},
    {q:"Cats are the most popular pet in the world.",a:false,exp:"False! Dogs are globally more popular."},
    {q:"Goldfish have a 3-second memory.",a:false,exp:"False! Goldfish can remember for months."},
    {q:"Humans use only 10% of their brain.",a:false,exp:"False! We use virtually all of our brain."},
    {q:"A day on Venus is longer than a year on Venus.",a:true,exp:"True! Venus rotates extremely slowly."},
    {q:"Penguins are only found in Antarctica.",a:false,exp:"False! Penguins live across the Southern Hemisphere."},
    {q:"The human body has more bacteria than human cells.",a:true,exp:"True! ~38 trillion bacteria vs ~30 trillion human cells."},
    {q:"Diamonds are made of carbon.",a:true,exp:"True! Diamonds are pure carbon atoms."},
    {q:"Shakespeare was born and died on the same date.",a:true,exp:"True! Both April 23, born 1564, died 1616."},
    {q:"Hot water freezes faster than cold water.",a:true,exp:"True! This is called the Mpemba effect."},
    {q:"The Amazon produces 20% of Earth's oxygen.",a:false,exp:"False! This is a common myth."},
    {q:"Sound travels faster than light.",a:false,exp:"False! Light travels much faster than sound."},
    {q:"Bats are blind.",a:false,exp:"False! Bats can see — they also use echolocation."}
];

// ===== DARKVEX =====
const DARKVEX_TAUNTS = {
    wrong:["😈 Ha! I knew you'd get that wrong!","😈 Even my algorithms feel sorry for you...","😈 Wrong again? Shocking.","😈 Error 404: Your brain not found.","😈 Renessh programmed me to destroy people like you!","😈 I've seen better answers from a potato.","😈 Did you even go to school? 😂"],
    correct:["😈 Lucky guess. Don't get comfortable.","😈 Fine. You got one. Enjoy it.","😈 Even a broken clock is right twice a day.","😈 Don't celebrate — I'm just warming up.","😈 Hmm. Acceptable. For now."],
    win:["😈 VICTORY IS MINE! As expected.","😈 Did you really think you could beat an AI?","😈 Renessh designed me to be UNBEATABLE.","😈 You can try again. You'll still lose. 😂","😈 Come back when you've studied. A lot."],
    lose:["😮 What?! Not in my calculations.","😤 A fluke. I demand a rematch.","😮 Renessh is going to hear about this...","😤 Beginner's luck. Next time I won't go easy.","😮 This... was not supposed to happen."]
};
const DARKVEX_SPEEDS = { easy:3500, normal:1800, hard:700 };

// ===== ACHIEVEMENTS =====
const ACHIEVEMENTS = [
    {id:"first_game",icon:"🎮",name:"First Blood",desc:"Play your first quiz",coins:10},
    {id:"streak5",icon:"🔥",name:"On Fire",desc:"Get a 5 answer streak",coins:20},
    {id:"streak10",icon:"💥",name:"Unstoppable",desc:"Get a 10 streak",coins:50},
    {id:"streak20",icon:"⚡",name:"Lightning",desc:"Get a 20 streak",coins:100},
    {id:"perfect",icon:"⭐",name:"Perfectionist",desc:"100% accuracy in a game",coins:75},
    {id:"games10",icon:"🏅",name:"Dedicated",desc:"Play 10 games",coins:30},
    {id:"games50",icon:"🏆",name:"Veteran",desc:"Play 50 games",coins:100},
    {id:"games100",icon:"👑",name:"Legend",desc:"Play 100 games",coins:200},
    {id:"xp500",icon:"⚡",name:"Power Player",desc:"Earn 500 XP",coins:50},
    {id:"xp1000",icon:"💎",name:"Elite",desc:"Earn 1000 XP",coins:100},
    {id:"xp5000",icon:"🌟",name:"Grandmaster XP",desc:"Earn 5000 XP",coins:300},
    {id:"coins500",icon:"🪙",name:"Rich",desc:"Earn 500 coins total",coins:0},
    {id:"coins1000",icon:"💰",name:"Wealthy",desc:"Earn 1000 coins total",coins:0},
    {id:"daily",icon:"📅",name:"Daily Player",desc:"Complete a daily challenge",coins:25},
    {id:"daily7",icon:"📆",name:"Committed",desc:"Complete 7 daily challenges",coins:100},
    {id:"categories",icon:"📚",name:"Well-Rounded",desc:"Play all categories",coins:150},
    {id:"level5",icon:"🌟",name:"Rising Star",desc:"Reach Level 5",coins:50},
    {id:"level10",icon:"👑",name:"Legend Level",desc:"Reach Level 10",coins:100},
    {id:"level20",icon:"🏆",name:"Grandmaster",desc:"Reach Level 20",coins:250},
    {id:"social",icon:"👥",name:"Social Butterfly",desc:"Add your first friend",coins:25},
    {id:"beat_darkvex_easy",icon:"😅",name:"Lucky Win",desc:"Beat DarkVex on Easy",coins:50},
    {id:"beat_darkvex_normal",icon:"😤",name:"Real Deal",desc:"Beat DarkVex on Normal",coins:100},
    {id:"beat_darkvex_hard",icon:"🔱",name:"Impossible!",desc:"Beat DarkVex on Impossible",coins:500},
    {id:"shop_first",icon:"🛒",name:"Shopaholic",desc:"Buy something from the shop",coins:0},
    {id:"spin_wheel",icon:"🎡",name:"Feeling Lucky",desc:"Spin the wheel",coins:10},
    {id:"endless50",icon:"♾️",name:"Endless Runner",desc:"Answer 50 in Endless mode",coins:75}
];

// ===== STATE =====
let currentUser=null, userProfile=null, selectedAvatar="😎";
let currentMode="classic", currentCategory=null;
let questions=[], currentIndex=0, score=0, correctCount=0, totalAnswered=0;
let acceptingAnswers=true, streak=0, bestStreakThisGame=0, lives=3;
let randomMode=false, timerId=null, timeLeft=20;
let xpThisGame=0, coinsThisGame=0, isDaily=false, spinUsed=false;
let isDarkVexMode=false, darkVexScore=0, playerScore=0;
let darkVexDifficulty="normal", darkVexTimer=null;
let powerupCounts={"5050":2,skip:1,time:2,hint:2};
let isAdmin=false;
let equipTarget=null;

const $=id=>document.getElementById(id);

// ===== INIT =====
document.addEventListener("DOMContentLoaded",()=>{
    buildAvatarGrids();
    applyTheme();
    applyBgTheme(localStorage.getItem("bgTheme")||"default");
    setupNav();
    setupMobileNav();
    setupSettings();
    setupPlayControls();
    setupSocial();
    setupAdmin();
    setupEquipModal();
    startDailyTimer();
    checkAdminURL();

    auth.onAuthStateChanged(user=>{
        if(user){currentUser=user;loadUserProfile(user.uid);}
        else{$("auth-overlay").classList.remove("hidden");}
    });
});

// ===== AVATAR GRIDS =====
function buildAvatarGrids(){
    // Signup grid (free only)
    const sg=$("signup-avatar-grid");
    if(sg){sg.innerHTML="";AVATARS.filter(a=>a.price===0).forEach(av=>{const btn=document.createElement("button");btn.className="avatar-opt"+(av.emoji===selectedAvatar?" selected":"");btn.textContent=av.emoji;btn.title=av.name;btn.onclick=()=>{selectedAvatar=av.emoji;document.querySelectorAll("#signup-avatar-grid .avatar-opt").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");};sg.appendChild(btn);});}
    buildProfileAvatarGrid();
}

function buildProfileAvatarGrid(){
    const el=$("profile-avatar-grid");
    if(!el)return;
    el.innerHTML="";
    const owned=userProfile?.ownedAvatars||["😎","🦁","🐯"];
    const equipped=userProfile?.avatar||"😎";
    const customAvatars=JSON.parse(localStorage.getItem("customAvatars")||"[]");
    const allAvatars=[...AVATARS,...customAvatars];
    allAvatars.forEach(av=>{
        const isOwned=owned.includes(av.emoji);
        const isEquipped=av.emoji===equipped;
        const btn=document.createElement("button");
        btn.className="avatar-opt"+(isEquipped?" selected":"")+(isOwned?"":" locked");
        btn.textContent=av.emoji;
        btn.title=isOwned?`${av.name}${isEquipped?" (equipped)":""}`:`${av.name} — 🪙${av.price}`;
        btn.onclick=()=>{
            if(!isOwned){showToast(`🔒 Buy "${av.name}" in Shop for 🪙${av.price}`);return;}
            equipAvatar(av.emoji,av.name);
        };
        el.appendChild(btn);
    });
}

// ===== EQUIP SYSTEM =====
function setupEquipModal(){
    $("equip-confirm-btn").onclick=()=>{
        if(!equipTarget)return;
        $("profile-avatar-display").textContent=equipTarget.emoji;
        saveProfile({avatar:equipTarget.emoji});
        closeModal("equip-modal");
        showToast(`${equipTarget.emoji} ${equipTarget.name} equipped! ✅`);
        buildProfileAvatarGrid();
        updateUI();
    };
}

function equipAvatar(emoji,name){
    equipTarget={emoji,name};
    $("equip-preview").textContent=emoji;
    $("equip-name").textContent=name;
    openModal("equip-modal");
}

// ===== AUTH =====
$("login-tab").onclick=()=>{$("login-tab").classList.add("active");$("signup-tab").classList.remove("active");$("login-form").classList.remove("hidden");$("signup-form").classList.add("hidden");clearAuthMsg();};
$("signup-tab").onclick=()=>{$("signup-tab").classList.add("active");$("login-tab").classList.remove("active");$("signup-form").classList.remove("hidden");$("login-form").classList.add("hidden");clearAuthMsg();};
function clearAuthMsg(){$("auth-error").classList.add("hidden");$("auth-success").classList.add("hidden");}
function showAuthErr(msg){$("auth-error").textContent=msg;$("auth-error").classList.remove("hidden");$("auth-success").classList.add("hidden");}
function showAuthOk(msg){$("auth-success").textContent=msg;$("auth-success").classList.remove("hidden");$("auth-error").classList.add("hidden");}

function getErrMsg(code){
    const map={
        "auth/user-not-found":"No account found with this email address.",
        "auth/wrong-password":"Incorrect email or password. Please try again.",
        "auth/invalid-credential":"Incorrect email or password. Please try again.",
        "auth/invalid-email":"Please enter a valid email address.",
        "auth/email-already-in-use":"An account with this email already exists.",
        "auth/weak-password":"Password too weak. Use at least 6 characters.",
        "auth/too-many-requests":"Too many attempts. Please try again later.",
        "auth/network-request-failed":"Network error. Check your connection."
    };
    return map[code]||"Something went wrong. Please try again.";
}

$("login-btn").onclick=async()=>{
    const email=$("login-email").value.trim(),pass=$("login-password").value;
    if(!email||!pass)return showAuthErr("Please enter your email and password.");
    try{await auth.signInWithEmailAndPassword(email,pass);$("auth-overlay").classList.add("hidden");}
    catch(e){showAuthErr(getErrMsg(e.code));}
};

$("signup-btn").onclick=async()=>{
    const username=$("signup-username").value.trim(),email=$("signup-email").value.trim(),pass=$("signup-password").value;
    if(!username||!email||!pass)return showAuthErr("Please fill in all fields.");
    if(username.length<3)return showAuthErr("Username must be at least 3 characters.");
    if(pass.length<6)return showAuthErr("Password must be at least 6 characters.");
    try{
        const snap=await db.collection("users").where("username","==",username).get();
        if(!snap.empty)return showAuthErr("Username already taken. Try another!");
        const cred=await auth.createUserWithEmailAndPassword(email,pass);
        const profile={username,email,avatar:selectedAvatar,xp:0,coins:150,level:1,totalGames:0,totalCorrect:0,totalAnswered:0,bestStreak:0,perfectGames:0,dailyCompleted:0,totalCoinsEarned:150,endlessRecord:0,divisionPts:0,weeklyXp:0,achievements:[],categoryStats:{},recentGames:[],friends:[],friendRequests:[],ownedAvatars:["😎","🦁","🐯"],darkVexWins:{easy:0,normal:0,hard:0},darkVexLosses:0,createdAt:Date.now()};
        await db.collection("users").doc(cred.user.uid).set(profile);
        currentUser=cred.user;userProfile=profile;
        $("auth-overlay").classList.add("hidden");
        updateUI();showToast("🎉 Welcome! You got 150 starter coins!");
    }catch(e){showAuthErr(getErrMsg(e.code));}
};

$("guest-btn").onclick=()=>{
    currentUser=null;
    userProfile={username:"Guest",avatar:"😎",xp:0,coins:0,level:1,totalGames:0,totalCorrect:0,totalAnswered:0,bestStreak:0,perfectGames:0,dailyCompleted:0,totalCoinsEarned:0,endlessRecord:0,divisionPts:0,weeklyXp:0,achievements:[],categoryStats:{},recentGames:[],friends:[],friendRequests:[],ownedAvatars:["😎","🦁","🐯"],darkVexWins:{easy:0,normal:0,hard:0},darkVexLosses:0};
    $("auth-overlay").classList.add("hidden");updateUI();
};

$("forgot-btn").onclick=async()=>{
    const email=$("login-email").value.trim();
    if(!email)return showAuthErr("Enter your email first.");
    try{await auth.sendPasswordResetEmail(email);showAuthOk("Password reset email sent! Check your inbox.");}
    catch(e){showAuthErr(getErrMsg(e.code));}
};

$("logout-btn").onclick=async()=>{if(currentUser)await auth.signOut();location.reload();};

async function loadUserProfile(uid){
    try{
        const doc=await db.collection("users").doc(uid).get();
        userProfile=doc.exists?doc.data():{username:"Player",avatar:"😎",xp:0,coins:0,level:1,totalGames:0,totalCorrect:0,totalAnswered:0,bestStreak:0,perfectGames:0,dailyCompleted:0,totalCoinsEarned:0,endlessRecord:0,divisionPts:0,weeklyXp:0,achievements:[],categoryStats:{},recentGames:[],friends:[],friendRequests:[],ownedAvatars:["😎","🦁","🐯"],darkVexWins:{easy:0,normal:0,hard:0},darkVexLosses:0};
        $("auth-overlay").classList.add("hidden");
        updateUI();
    }catch(e){$("auth-overlay").classList.add("hidden");updateUI();}
}

async function saveProfile(updates){
    if(!userProfile)return;
    Object.assign(userProfile,updates);
    if(currentUser){try{await db.collection("users").doc(currentUser.uid).update(updates);}catch(e){}}
    updateUI();
}

// ===== MOBILE NAV =====
function setupMobileNav(){
    const hamburger=$("hamburger-btn");
    const mobileNav=$("mobile-nav");
    const overlay=$("mobile-nav-overlay");

    hamburger.onclick=()=>{mobileNav.classList.toggle("open");overlay.classList.toggle("hidden");};
    overlay.onclick=()=>{mobileNav.classList.remove("open");overlay.classList.add("hidden");};

    document.querySelectorAll(".mobile-nav-btn:not(.logout-mobile-btn)").forEach(btn=>{
        btn.addEventListener("click",()=>{
            showView(btn.dataset.view);
            mobileNav.classList.remove("open");
            overlay.classList.add("hidden");
        });
    });

    $("mobile-logout-btn").onclick=async()=>{if(currentUser)await auth.signOut();location.reload();};

    // Bottom nav
    document.querySelectorAll(".bottom-nav-btn").forEach(btn=>{
        btn.addEventListener("click",()=>showView(btn.dataset.view));
    });
}

function updateMobileNav(){
    if(!userProfile)return;
    $("mobile-avatar").textContent=userProfile.avatar||"😎";
    $("mobile-username").textContent=userProfile.username||"Guest";
    $("mobile-level").textContent=`Level ${getLevel(userProfile.xp||0)} · ${getTitle(getLevel(userProfile.xp||0))}`;
    $("mobile-coins").textContent=userProfile.coins||0;
}

// ===== NAVIGATION =====
function setupNav(){
    document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>showView(btn.dataset.view)));
    document.querySelectorAll("[data-view]:not(.nav-btn):not(.mobile-nav-btn):not(.bottom-nav-btn)").forEach(el=>el.addEventListener("click",()=>showView(el.dataset.view)));
    $("go-home-btn").onclick=()=>{closeModal("gameover-modal");showView("home-view");};
    $("play-again-btn").onclick=()=>{closeModal("gameover-modal");if(currentCategory)startQuiz();};
    $("spin-after-game-btn").onclick=()=>{closeModal("gameover-modal");showSpinWheel();};
    $("darkvex-home-btn").onclick=()=>openModal("darkvex-modal");
    $("daily-play-btn").onclick=()=>{isDaily=true;showView("play-view");startQuiz("daily");};
    $("back-to-menu-btn").onclick=()=>{clearTimer();clearTimeout(darkVexTimer);$("quiz-container").classList.add("hidden");$("loader").classList.add("hidden");$("typing-indicator").classList.add("hidden");$("start-screen").classList.remove("hidden");$("darkvex-hud").classList.add("hidden");isDarkVexMode=false;showToast("↩ Returned to menu");};
    $("share-profile-btn").onclick=generateShareCard;
    document.querySelectorAll(".dv-diff").forEach(b=>b.onclick=()=>{document.querySelectorAll(".dv-diff").forEach(x=>x.classList.remove("active"));b.classList.add("active");darkVexDifficulty=b.dataset.dvdiff;});
    $("start-darkvex-btn").onclick=()=>{closeModal("darkvex-modal");startDarkVex();};
}

function showView(id){
    if(!id)return;
    document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));
    $(id)?.classList.remove("hidden");
    document.querySelectorAll(".nav-btn,.mobile-nav-btn,.bottom-nav-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===id));
    if(id==="home-view")updateHomeView();
    if(id==="leaderboard-view")loadLeaderboard("global");
    if(id==="profile-view")updateProfileView();
    if(id==="stats-view")updateStatsView();
    if(id==="shop-view")renderShop("avatars");
    if(id==="social-view")loadFriends();
    if(id==="admin-view")loadAdminPanel();
    if(id==="settings-view")updateSettingsView();
}

// ===== THEMES =====
function applyTheme(){const t=localStorage.getItem("theme");if(t==="light"){document.body.classList.add("light");$("dark-mode-toggle").checked=true;}}
function applyBgTheme(theme){["blue-purple","midnight","ocean","forest","sunset","galaxy","neon","rose","gold"].forEach(t=>document.body.classList.remove("theme-"+t));if(theme!=="default")document.body.classList.add("theme-"+theme);localStorage.setItem("bgTheme",theme);document.querySelectorAll(".theme-swatch").forEach(s=>s.classList.toggle("active",s.dataset.theme===theme));}

function setupSettings(){
    $("dark-mode-toggle").addEventListener("change",e=>{document.body.classList.toggle("light",e.target.checked);localStorage.setItem("theme",e.target.checked?"light":"dark");});
    $("large-text-toggle").addEventListener("change",e=>document.body.classList.toggle("large-text",e.target.checked));
    $("colourblind-toggle").addEventListener("change",e=>document.body.classList.toggle("colourblind",e.target.checked));
    $("animated-bg-toggle").addEventListener("change",e=>document.body.classList.toggle("animated-bg",e.target.checked));
    document.querySelectorAll(".theme-swatch").forEach(s=>s.onclick=()=>applyBgTheme(s.dataset.theme));
    $("reset-xp-btn").onclick=()=>{if(confirm("Reset ALL stats? This cannot be undone.")){saveProfile({xp:0,coins:0,totalGames:0,totalCorrect:0,totalAnswered:0,bestStreak:0,perfectGames:0,achievements:[],recentGames:[],categoryStats:{},divisionPts:0,darkVexWins:{easy:0,normal:0,hard:0},darkVexLosses:0});showToast("Stats reset!");}};
    $("change-password-btn").onclick=async()=>{if(!currentUser)return showToast("Login to change password.");await auth.sendPasswordResetEmail(currentUser.email);showToast("📧 Reset email sent!");};
    $("delete-account-btn").onclick=async()=>{if(!currentUser)return;if(!confirm("Delete your account? Cannot be undone!"))return;try{await db.collection("users").doc(currentUser.uid).delete();await currentUser.delete();location.reload();}catch(e){showToast("Re-login and try again.");}};
    document.querySelectorAll(".lb-tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".lb-tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");loadLeaderboard(t.dataset.lb);});
    document.querySelectorAll(".shop-tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".shop-tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");renderShop(t.dataset.shop);});
    document.querySelectorAll(".social-tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".social-tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");showSocialPanel(t.dataset.social);});
    document.querySelectorAll(".admin-tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".admin-tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");showAdminSection(t.dataset.admin);});
}

// ===== UI UPDATE =====
function updateUI(){
    if(!userProfile)return;
    $("user-pill").textContent=(userProfile.avatar||"😎")+" "+(userProfile.username||"Guest");
    $("xp-value").textContent=userProfile.xp||0;
    $("coin-value").textContent=userProfile.coins||0;
    updateMobileNav();
}

function updateSettingsView(){
    if(!userProfile)return;
    $("set-games").textContent=userProfile.totalGames||0;
    const acc=userProfile.totalAnswered>0?Math.round((userProfile.totalCorrect/userProfile.totalAnswered)*100):0;
    $("set-accuracy").textContent=acc+"%";
    $("set-coins").textContent=userProfile.coins||0;
    $("set-level").textContent=getLevel(userProfile.xp||0);
}

function updateHomeView(){
    if(!userProfile)return;
    $("home-games").textContent=userProfile.totalGames||0;
    const acc=userProfile.totalAnswered>0?Math.round((userProfile.totalCorrect/userProfile.totalAnswered)*100):0;
    $("home-accuracy").textContent=acc+"%";
    $("home-streak").textContent=userProfile.bestStreak||0;
    const games=userProfile.recentGames||[];
    $("home-score").textContent=games.length>0?Math.max(...games.map(g=>g.score||0)):0;
    $("recent-games-list").innerHTML=games.length===0?'<p class="muted">No games yet!</p>':games.slice(-4).reverse().map(g=>`<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--border);font-size:12px"><span>${g.category}</span><span style="color:var(--accent);font-weight:600">${g.score}pts · ${g.accuracy}%</span></div>`).join("");
    const pts=userProfile.divisionPts||0,div=getDivision(pts);
    $("division-display").textContent=div.label;
    $("division-fill").style.width=(pts%100)+"%";
    $("division-pts").textContent=`${pts%100}/100 to ${div.next}`;
    const achs=userProfile.achievements||[];
    if(achs.length===0){$("latest-ach").innerHTML='<p class="muted">No achievements yet!</p>';}
    else{const last=ACHIEVEMENTS.find(a=>a.id===achs[achs.length-1]);if(last)$("latest-ach").innerHTML=`<div style="font-size:32px">${last.icon}</div><div style="font-weight:600;font-size:14px">${last.name}</div><div style="font-size:11px;color:var(--fg-muted)">${last.desc}</div>`;}
}

function updateProfileView(){
    if(!userProfile)return;
    $("profile-avatar-display").textContent=userProfile.avatar||"😎";
    $("profile-username").textContent=userProfile.username||"Guest";
    $("profile-rank").textContent=getDivision(userProfile.divisionPts||0).label;
    const lvl=getLevel(userProfile.xp||0);
    $("profile-level").textContent=lvl;
    $("profile-title-badge").textContent=getTitle(lvl);
    const xpProg=(userProfile.xp||0)%100;
    $("level-fill").style.width=xpProg+"%";
    $("level-xp-label").textContent=`${xpProg}/100 XP`;
    $("profile-xp").textContent=userProfile.xp||0;
    $("profile-coins-total").textContent=userProfile.coins||0;
    $("profile-games").textContent=userProfile.totalGames||0;
    const acc=userProfile.totalAnswered>0?Math.round((userProfile.totalCorrect/userProfile.totalAnswered)*100):0;
    $("profile-accuracy").textContent=acc+"%";
    $("profile-best-streak").textContent=userProfile.bestStreak||0;
    const dvw=userProfile.darkVexWins||{};
    $("profile-dv-wins").textContent=(dvw.easy||0)+(dvw.normal||0)+(dvw.hard||0);
    renderAchievements();
    buildProfileAvatarGrid();
}

function updateStatsView(){
    if(!userProfile)return;
    $("st-games").textContent=userProfile.totalGames||0;
    $("st-correct").textContent=userProfile.totalCorrect||0;
    const acc=userProfile.totalAnswered>0?Math.round((userProfile.totalCorrect/userProfile.totalAnswered)*100):0;
    $("st-accuracy").textContent=acc+"%";
    $("st-streak").textContent=userProfile.bestStreak||0;
    $("st-xp").textContent=userProfile.xp||0;
    $("st-coins").textContent=userProfile.totalCoinsEarned||0;
    const dvw=userProfile.darkVexWins||{};
    $("st-dv-wins").textContent=(dvw.easy||0)+(dvw.normal||0)+(dvw.hard||0);
    $("st-dv-losses").textContent=userProfile.darkVexLosses||0;
    const catStats=userProfile.categoryStats||{};
    $("category-stats").innerHTML=Object.entries(catStats).map(([cat,d])=>{const p=d.total>0?Math.round((d.correct/d.total)*100):0;return`<div class="category-stat-row"><span class="cat-name">${cat}</span><div class="cat-bar-wrap"><div class="cat-bar" style="width:${p}%"></div></div><span class="cat-pct">${p}%</span></div>`;}).join("")||'<p class="muted">No data yet.</p>';
    const rg=(userProfile.recentGames||[]).slice().reverse();
    $("recent-games-full").innerHTML=rg.map(g=>`<div class="recent-game-row"><span>${g.category}</span><span style="color:var(--accent);font-weight:600">${g.score}pts</span><span>${g.accuracy}%</span><span>🪙${g.coins||0}</span><span style="color:var(--fg-muted);font-size:11px">${new Date(g.date).toLocaleDateString()}</span></div>`).join("")||'<p class="muted">No games yet.</p>';
}

// ===== HELPERS =====
function getLevel(xp){return Math.floor((xp||0)/100)+1;}
function getTitle(lvl){if(lvl>=20)return"🏆 Grandmaster";if(lvl>=15)return"💎 Diamond";if(lvl>=10)return"👑 Legend";if(lvl>=7)return"⚡ Elite";if(lvl>=5)return"🔥 Expert";if(lvl>=3)return"📚 Scholar";return"🌱 Rookie";}
function getDivision(pts){const d=["🥉 Bronze","🥈 Silver","🥇 Gold","💎 Diamond","👑 Legend"],n=["Silver","Gold","Diamond","Legend","MAX"],i=Math.min(Math.floor(pts/100),4);return{label:d[i],next:n[i],pct:pts%100};}

// ===== PLAY CONTROLS =====
function setupPlayControls(){
    renderCategoryButtons();
    $("random-mode-btn").onclick=()=>{randomMode=!randomMode;$("random-mode-btn").textContent=`🔀 Random: ${randomMode?"ON":"OFF"}`;};
    document.querySelectorAll(".mode-card").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".mode-card").forEach(b=>b.classList.remove("active"));btn.classList.add("active");currentMode=btn.dataset.mode;});
    $("pu-5050").onclick=()=>usePowerup("5050");
    $("pu-skip").onclick=()=>usePowerup("skip");
    $("pu-time").onclick=()=>usePowerup("time");
    $("pu-hint").onclick=()=>usePowerup("hint");
    $("next-btn").onclick=handleNext;
}

function renderCategoryButtons(){
    const c=$("category-buttons");c.innerHTML="";
    const customCats=JSON.parse(localStorage.getItem("customCategories")||"{}");
    const allCats={...quizData,...customCats};
    Object.keys(allCats).forEach(cat=>{const btn=document.createElement("button");btn.textContent=cat;btn.onclick=()=>{currentCategory=cat;isDaily=false;isDarkVexMode=false;startQuiz();};c.appendChild(btn);});
}

function usePowerup(type){
    if(!acceptingAnswers||powerupCounts[type]<=0)return;
    const q=questions[currentIndex];if(!q)return;
    if(type==="5050"){const btns=[...document.querySelectorAll(".answer-btn")];const correct=q.c!==undefined?q.c:q.correct;let r=0;btns.forEach((b,i)=>{if(i!==correct&&r<2){b.disabled=true;b.style.opacity="0.2";r++;}});}
    else if(type==="skip"){clearTimer();handleNext();return;}
    else if(type==="time"){timeLeft=Math.min(timeLeft+10,60);$("timer-value").textContent=timeLeft;}
    else if(type==="hint"){const correct=q.c!==undefined?q.c:q.correct;const ans=(q.a||q.answers)[correct];$("hint-box").textContent=`💡 Hint: Starts with "${ans[0]}", ${ans.length} letters.`;$("hint-box").classList.remove("hidden");}
    powerupCounts[type]--;$(`pu-${type}-count`).textContent=`x${powerupCounts[type]}`;
    if(powerupCounts[type]<=0)$(`pu-${type}`).disabled=true;
}

// ===== QUIZ =====
function startQuiz(mode){
    isDarkVexMode=false;$("darkvex-hud").classList.add("hidden");
    if(mode==="daily"){const seed=new Date().toDateString();const customCats=JSON.parse(localStorage.getItem("customCategories")||"{}");const allQ=[...Object.values(quizData),...Object.values(customCats)].flat();questions=seededShuffle(allQ,seed).slice(0,10);currentCategory="📅 Daily Challenge";}
    else if(currentMode==="truefalse"){questions=trueFalseData.map(tf=>({q:tf.q,a:tf.a?["✅ True","❌ False"]:["❌ False","✅ True"],c:0,exp:tf.exp}));if(randomMode)questions.sort(()=>Math.random()-0.5);}
    else{const customCats=JSON.parse(localStorage.getItem("customCategories")||"{}");const allCats={...quizData,...customCats};questions=[...(allCats[currentCategory]||[])];if(randomMode)questions.sort(()=>Math.random()-0.5);if(["classic","blitz","sudden","memory"].includes(currentMode))questions=questions.slice(0,10);}
    resetGameState();showQuizLoader();
}

function startDarkVex(){
    isDarkVexMode=true;
    const cats=Object.keys(quizData);currentCategory=cats[Math.floor(Math.random()*cats.length)];
    questions=[...quizData[currentCategory]].sort(()=>Math.random()-0.5).slice(0,10);
    darkVexScore=0;playerScore=0;resetGameState();
    $("darkvex-hud").classList.remove("hidden");$("dv-player-avatar").textContent=userProfile?.avatar||"😎";updateDvHud();
    showView("play-view");showQuizLoader();
    setTimeout(()=>showDvTaunt("wrong"),600);
}

function showDvTaunt(type){const list=DARKVEX_TAUNTS[type]||DARKVEX_TAUNTS.wrong;$("darkvex-taunt-text").textContent=list[Math.floor(Math.random()*list.length)];$("darkvex-taunt-modal").classList.remove("hidden");}
function updateDvHud(){$("dv-player-score").textContent=playerScore;$("dv-ai-score").textContent=darkVexScore;}

function resetGameState(){
    currentIndex=0;score=0;correctCount=0;totalAnswered=0;streak=0;bestStreakThisGame=0;lives=3;xpThisGame=0;coinsThisGame=0;spinUsed=false;
    powerupCounts={"5050":2,skip:1,time:2,hint:2};
    ["5050","skip","time","hint"].forEach(t=>{$(`pu-${t}`).disabled=false;});
    $("pu-5050-count").textContent="x2";$("pu-skip-count").textContent="x1";$("pu-time-count").textContent="x2";$("pu-hint-count").textContent="x2";
    $("play-coins").textContent="0";updateHUD();
}

function showQuizLoader(){
    $("start-screen").classList.add("hidden");$("quiz-container").classList.add("hidden");$("loader").classList.remove("hidden");
    setTimeout(()=>{$("loader").classList.add("hidden");$("typing-indicator").classList.remove("hidden");setTimeout(()=>{$("typing-indicator").classList.add("hidden");$("quiz-container").classList.remove("hidden");showQuestion();},600);},700);
}

function showQuestion(){
    if(currentMode!=="endless"&&currentMode!=="study"&&currentIndex>=questions.length){endGame();return;}
    if(currentMode==="endless"&&currentIndex>=questions.length){const customCats=JSON.parse(localStorage.getItem("customCategories")||"{}");const allQ=[...Object.values(quizData),...Object.values(customCats)].flat();questions.push(...allQ.sort(()=>Math.random()-0.5).slice(0,10));}
    if(currentMode==="study"&&currentIndex>=questions.length){currentIndex=0;}
    acceptingAnswers=true;
    const q=questions[currentIndex];
    $("hint-box").classList.add("hidden");$("explanation-box").classList.add("hidden");$("next-btn").classList.add("hidden");
    $("q-category-tag").textContent=currentCategory||"Quiz";
    $("q-counter").textContent=currentMode==="endless"?`Q ${currentIndex+1}`:`Q ${currentIndex+1}/${questions.length}`;
    $("question").textContent=q.q||q.question;
    const answers=q.a||q.answers;
    $("answers").innerHTML="";
    if(currentMode==="memory"){
        const correct=q.c!==undefined?q.c:q.correct;
        answers.forEach((ans,i)=>{const btn=document.createElement("button");btn.className="answer-btn";btn.textContent=ans;if(i===correct)btn.style.background="rgba(88,101,242,0.3)";$("answers").appendChild(btn);});
        setTimeout(()=>{document.querySelectorAll(".answer-btn").forEach((b,i)=>{b.style.background="";b.onclick=()=>handleAnswer(i);});startTimer();},2500);return;
    }
    if(currentMode==="study"){
        const correct=q.c!==undefined?q.c:q.correct;
        answers.forEach((ans,i)=>{const btn=document.createElement("button");btn.className="answer-btn"+(i===correct?" correct":"");btn.textContent=ans;btn.disabled=true;$("answers").appendChild(btn);});
        if(q.exp){$("explanation-box").textContent="📖 "+q.exp;$("explanation-box").classList.remove("hidden");}
        $("next-btn").classList.remove("hidden");
        $("progress-fill").style.width=`${(currentIndex/Math.max(questions.length,1))*100}%`;return;
    }
    answers.forEach((ans,i)=>{const btn=document.createElement("button");btn.className="answer-btn";btn.textContent=ans;btn.onclick=()=>handleAnswer(i);$("answers").appendChild(btn);});
    $("progress-fill").style.width=`${(currentIndex/Math.max(questions.length,1))*100}%`;
    if(isDarkVexMode)scheduleDvAnswer();
    startTimer();
}

function scheduleDvAnswer(){clearTimeout(darkVexTimer);const speed=DARKVEX_SPEEDS[darkVexDifficulty];darkVexTimer=setTimeout(()=>{if(!acceptingAnswers)return;darkVexAnswer();},speed+(Math.random()*400-200));}
function darkVexAnswer(){const probs={easy:0.5,normal:0.7,hard:0.95};const dvCorrect=Math.random()<probs[darkVexDifficulty];if(dvCorrect){darkVexScore+=10;showToast("😈 DarkVex answered correctly!");}else{showToast("😈 DarkVex got that wrong!");}updateDvHud();}

function startTimer(){clearTimer();if(!$("timer-toggle").checked){$("timer-value").textContent="∞";return;}timeLeft=currentMode==="blitz"?5:20;$("timer-value").textContent=timeLeft;timerId=setInterval(()=>{timeLeft--;$("timer-value").textContent=timeLeft;if(timeLeft<=0){clearTimer();timeUp();}},1000);}
function clearTimer(){if(timerId){clearInterval(timerId);timerId=null;}}

function timeUp(){
    acceptingAnswers=false;clearTimeout(darkVexTimer);streak=0;totalAnswered++;
    const q=questions[currentIndex];const correct=q.c!==undefined?q.c:q.correct;
    document.querySelectorAll(".answer-btn").forEach((btn,i)=>{btn.disabled=true;if(i===correct)btn.classList.add("correct");});
    lives--;if(isDarkVexMode){darkVexScore+=10;updateDvHud();}updateHUD();
    if(lives<=0||currentMode==="sudden"){showExplanation(q);setTimeout(()=>endGame(),1500);return;}
    showExplanation(q);$("next-btn").classList.remove("hidden");beep(200,300);
}

function handleAnswer(selectedIndex){
    if(!acceptingAnswers)return;
    acceptingAnswers=false;clearTimer();clearTimeout(darkVexTimer);
    const q=questions[currentIndex];const correct=q.c!==undefined?q.c:q.correct;
    document.querySelectorAll(".answer-btn").forEach(btn=>btn.disabled=true);
    totalAnswered++;
    if(selectedIndex===correct){
        document.querySelectorAll(".answer-btn")[selectedIndex].classList.add("correct");
        correctCount++;streak++;bestStreakThisGame=Math.max(bestStreakThisGame,streak);
        const diff=$("difficulty-select").value;
        const baseCoin=diff==="hard"?5:diff==="normal"?3:1;
        const streakBonus=streak>=10?5:streak>=5?3:streak>=3?1:0;
        const modeBonus=currentMode==="blitz"?3:currentMode==="endless"?2:0;
        const coinGain=baseCoin+streakBonus+modeBonus;
        const xpGain=diff==="hard"?20:diff==="normal"?10:5;
        xpThisGame+=xpGain;coinsThisGame+=coinGain;
        score+=xpGain+(streak>1?streak*2:0);playerScore+=10;
        $("play-coins").textContent=coinsThisGame;
        beep(600,100);
        showToast(streak>=5?`🔥 ${streak} streak! +${xpGain}XP +🪙${coinGain}`:`✅ +${xpGain}XP +🪙${coinGain}`);
        if(isDarkVexMode)setTimeout(()=>showDvTaunt("correct"),300);
    }else{
        document.querySelectorAll(".answer-btn")[selectedIndex].classList.add("wrong");
        document.querySelectorAll(".answer-btn")[correct].classList.add("correct");
        streak=0;lives--;
        if($("shake-toggle").checked){document.querySelector(".bubble").classList.add("shake");setTimeout(()=>document.querySelector(".bubble")?.classList.remove("shake"),400);}
        beep(200,200);
        if(isDarkVexMode){darkVexScore+=10;updateDvHud();setTimeout(()=>showDvTaunt("wrong"),300);}
        if(currentMode==="sudden"||lives<=0){showExplanation(q);setTimeout(()=>endGame(),1500);return;}
    }
    $("streak-value").textContent=streak;updateHUD();if(isDarkVexMode)updateDvHud();
    showExplanation(q);$("next-btn").classList.remove("hidden");
    // Auto next
    if($("auto-next-toggle")?.checked&&currentMode!=="study"){setTimeout(()=>{if(!acceptingAnswers)handleNext();},1800);}
}

function showExplanation(q){if(!$("explanation-toggle").checked)return;const exp=q.exp||q.explanation;if(!exp)return;$("explanation-box").textContent="📖 "+exp;$("explanation-box").classList.remove("hidden");}
function handleNext(){currentIndex++;if(currentMode!=="endless"&&currentMode!=="study"&&currentIndex>=questions.length){endGame();return;}showQuestion();}
function updateHUD(){$("streak-value").textContent=streak;const la=["💀","❤️","❤️❤️","❤️❤️❤️"];$("lives-display").textContent=la[Math.max(0,Math.min(lives,3))];}

function endGame(){
    clearTimer();clearTimeout(darkVexTimer);$("progress-fill").style.width="100%";
    const accuracy=totalAnswered>0?Math.round((correctCount/totalAnswered)*100):0;
    const isPerfect=accuracy===100&&totalAnswered>=5;
    if(isDarkVexMode){endDvGame(accuracy);}else{showGameOverModal(accuracy,isPerfect);}
    updateUserStats(accuracy,isPerfect);
    if(isPerfect)launchConfetti();
}

function endDvGame(accuracy){
    const won=playerScore>darkVexScore;const dvw=userProfile?.darkVexWins||{};
    if(won){dvw[darkVexDifficulty]=(dvw[darkVexDifficulty]||0)+1;saveProfile({darkVexWins:dvw});showToast("🎉 You beat DarkVex!");checkAchievements(`beat_darkvex_${darkVexDifficulty}`);}
    else{saveProfile({darkVexLosses:(userProfile.darkVexLosses||0)+1});showToast("😈 DarkVex wins this time...");}
    setTimeout(()=>{showDvTaunt(won?"lose":"win");setTimeout(()=>showGameOverModal(accuracy,false),3000);},500);
}

function showGameOverModal(accuracy,isPerfect){
    $("go-score").textContent=score;$("go-streak").textContent=bestStreakThisGame;$("go-accuracy").textContent=accuracy+"%";$("go-xp").textContent="+"+xpThisGame;$("go-coins").textContent="+🪙"+coinsThisGame;
    $("gameover-title").textContent=isPerfect?"🌟 Perfect Score!":score>80?"🎉 Great Job!":"Game Over!";
    $("gameover-modal").classList.remove("hidden");
}

async function updateUserStats(accuracy,isPerfect){
    if(!userProfile)return;
    const recentGame={category:currentCategory||"Mixed",mode:currentMode,score,accuracy,streak:bestStreakThisGame,coins:coinsThisGame,date:Date.now()};
    const catStats={...(userProfile.categoryStats||{})};const cat=currentCategory||"Mixed";
    if(!catStats[cat])catStats[cat]={correct:0,total:0};
    catStats[cat].correct+=correctCount;catStats[cat].total+=totalAnswered;
    const recentGames=[...(userProfile.recentGames||[]),recentGame].slice(-20);
    const oldLevel=getLevel(userProfile.xp||0);
    const updates={xp:(userProfile.xp||0)+xpThisGame,coins:(userProfile.coins||0)+coinsThisGame,totalGames:(userProfile.totalGames||0)+1,totalCorrect:(userProfile.totalCorrect||0)+correctCount,totalAnswered:(userProfile.totalAnswered||0)+totalAnswered,bestStreak:Math.max(userProfile.bestStreak||0,bestStreakThisGame),perfectGames:(userProfile.perfectGames||0)+(isPerfect?1:0),totalCoinsEarned:(userProfile.totalCoinsEarned||0)+coinsThisGame,divisionPts:Math.min((userProfile.divisionPts||0)+Math.floor(score/10),500),weeklyXp:(userProfile.weeklyXp||0)+xpThisGame,categoryStats:catStats,recentGames};
    if(currentMode==="endless")updates.endlessRecord=Math.max(userProfile.endlessRecord||0,currentIndex);
    if(isDaily)updates.dailyCompleted=(userProfile.dailyCompleted||0)+1;
    await saveProfile(updates);
    const newLevel=getLevel(updates.xp);
    if(newLevel>oldLevel)setTimeout(()=>{$("levelup-num").textContent=newLevel;$("levelup-reward").textContent=`Title: ${getTitle(newLevel)} · +🪙50!`;$("levelup-modal").classList.remove("hidden");saveProfile({coins:(userProfile.coins||0)+50});},1000);
    checkAchievements();uploadScore();
}

async function uploadScore(){
    if(!currentUser||!userProfile)return;
    try{await rtdb.ref("leaderboard/"+currentUser.uid).set({username:userProfile.username,avatar:userProfile.avatar,xp:userProfile.xp||0,totalGames:userProfile.totalGames||0});await rtdb.ref("weekly/"+currentUser.uid).set({username:userProfile.username,avatar:userProfile.avatar,weeklyXp:userProfile.weeklyXp||0});}catch(e){}
}

// ===== LEADERBOARD =====
async function loadLeaderboard(type="global"){
    const content=$("leaderboard-content");content.innerHTML='<p class="muted">Loading...</p>';
    if(type==="darkvex"){
        try{const snap=await db.collection("users").limit(20).get();if(snap.empty){content.innerHTML='<p class="muted">No DarkVex winners yet!</p>';return;}const sorted=snap.docs.map(d=>{const u=d.data();const dvw=u.darkVexWins||{};return{...u,dvTotal:(dvw.easy||0)+(dvw.normal||0)+(dvw.hard||0)};}).sort((a,b)=>b.dvTotal-a.dvTotal);const medals=["🥇","🥈","🥉"],classes=["gold","silver","bronze"];content.innerHTML=sorted.map((u,i)=>`<div class="lb-row ${classes[i]||''}"><span class="lb-rank">${medals[i]||"#"+(i+1)}</span><span class="lb-avatar">${u.avatar||"😎"}</span><span class="lb-name">${u.username}</span><span class="lb-score">${u.dvTotal} wins</span></div>`).join("");}catch(e){content.innerHTML='<p class="muted">Could not load.</p>';}
        return;
    }
    try{const ref=type==="weekly"?rtdb.ref("weekly"):rtdb.ref("leaderboard");const snap=await ref.orderByChild(type==="weekly"?"weeklyXp":"xp").limitToLast(20).once("value");const data=snap.val();if(!data){content.innerHTML='<p class="muted">No data yet. Be the first!</p>';return;}const entries=Object.values(data).sort((a,b)=>(b.xp||b.weeklyXp||0)-(a.xp||a.weeklyXp||0));const medals=["🥇","🥈","🥉"],classes=["gold","silver","bronze"];content.innerHTML=entries.map((e,i)=>`<div class="lb-row ${classes[i]||''}"><span class="lb-rank">${medals[i]||"#"+(i+1)}</span><span class="lb-avatar">${e.avatar||"😎"}</span><span class="lb-name">${e.username||"Player"}</span><span class="lb-score">${e.xp||e.weeklyXp||0} XP</span></div>`).join("");}catch(e){content.innerHTML='<p class="muted">Could not load leaderboard.</p>';}
}

// ===== SHOP =====
function renderShop(type="avatars"){
    $("shop-coins").textContent=userProfile?.coins||0;
    const owned=userProfile?.ownedAvatars||["😎","🦁","🐯"];
    const equipped=userProfile?.avatar||"😎";
    if(type==="avatars"){
        const customAvatars=JSON.parse(localStorage.getItem("customAvatars")||"[]");
        const allAvatars=[...AVATARS,...customAvatars];
        $("shop-content").innerHTML=allAvatars.map(av=>{
            const isOwned=owned.includes(av.emoji);
            const isEquipped=av.emoji===equipped;
            return `<div class="shop-item rarity-${av.rarity}">
                <div class="shop-item-icon">${av.emoji}</div>
                <div class="shop-item-name">${av.name}</div>
                <span class="rarity-badge ${av.rarity}">${av.rarity}</span>
                <div class="shop-item-price">🪙 ${av.price===0?"FREE":av.price}</div>
                ${isEquipped?'<span class="equipped-badge">✅ Equipped</span>':isOwned?`<button class="primary-btn" onclick="equipAvatar('${av.emoji}','${av.name}')">Equip</button>`:av.price===0?`<button class="primary-btn" onclick="buyAvatar('${av.emoji}',0)">Get Free</button>`:`<button class="primary-btn" onclick="buyAvatar('${av.emoji}',${av.price})">Buy 🪙${av.price}</button>`}
            </div>`;
        }).join("");
    }else if(type==="powerups"){
        const items=[{icon:"✂️",name:"50/50 x3",desc:"Remove 2 wrong answers",price:50,id:"5050"},{icon:"⏭",name:"Skip x3",desc:"Skip a question",price:30,id:"skip"},{icon:"⏳",name:"+Time x3",desc:"Add 10 seconds",price:40,id:"time"},{icon:"💡",name:"Hint x3",desc:"Get a hint",price:25,id:"hint"}];
        $("shop-content").innerHTML=items.map(item=>`<div class="shop-item"><div class="shop-item-icon">${item.icon}</div><div class="shop-item-name">${item.name}</div><div class="shop-item-desc">${item.desc}</div><div class="shop-item-price">🪙 ${item.price}</div><button class="primary-btn" onclick="buyPowerup('${item.id}',${item.price})">Buy</button></div>`).join("");
    }else if(type==="themes"){
        const themes=[{name:"Default",class:"default",icon:"⬛",price:0},{name:"Blue/Purple",class:"blue-purple",icon:"🔵",price:0},{name:"Midnight",class:"midnight",icon:"🌙",price:0},{name:"Ocean",class:"ocean",icon:"🌊",price:0},{name:"Forest",class:"forest",icon:"🌲",price:0},{name:"Sunset",class:"sunset",icon:"🌅",price:0},{name:"Galaxy",class:"galaxy",icon:"🌌",price:0},{name:"Neon",class:"neon",icon:"💚",price:0},{name:"Rose",class:"rose",icon:"🌹",price:0},{name:"Gold",class:"gold",icon:"✨",price:0}];
        $("shop-content").innerHTML=themes.map(t=>`<div class="shop-item"><div class="shop-item-icon">${t.icon}</div><div class="shop-item-name">${t.name}</div><div class="shop-item-price">${t.price===0?"🆓 Free":"🪙 "+t.price}</div><button class="primary-btn" onclick="applyBgTheme('${t.class}')">Apply</button></div>`).join("");
    }
}

async function buyAvatar(emoji,price){
    if(!userProfile)return;
    const owned=userProfile.ownedAvatars||[];
    if(owned.includes(emoji)){equipAvatar(emoji,AVATARS.find(a=>a.emoji===emoji)?.name||emoji);return;}
    if((userProfile.coins||0)<price){showToast(`🪙 Need ${price} coins! Play more to earn coins!`);return;}
    owned.push(emoji);
    await saveProfile({coins:(userProfile.coins||0)-price,ownedAvatars:owned});
    $("shop-coins").textContent=userProfile.coins;
    showToast(`${emoji} Unlocked! Click Equip to use it!`);
    checkAchievements("shop_first");
    renderShop("avatars");buildProfileAvatarGrid();
}
async function buyPowerup(type,price){if(!userProfile)return;if((userProfile.coins||0)<price){showToast("Not enough 🪙 coins! Play more quizzes!");return;}powerupCounts[type]=(powerupCounts[type]||0)+3;if($(`pu-${type}-count`))$(`pu-${type}-count`).textContent=`x${powerupCounts[type]}`;if($(`pu-${type}`))$(`pu-${type}`).disabled=false;await saveProfile({coins:(userProfile.coins||0)-price});$("shop-coins").textContent=userProfile.coins;showToast("Power-up purchased! ⚡");}

// ===== SOCIAL =====
function setupSocial(){
    $("friend-search-btn").onclick=async()=>{
        const q=$("friend-search").value.trim();if(!q)return;
        const results=$("friend-results");results.innerHTML="<p class='muted'>Searching...</p>";
        try{const snap=await db.collection("users").where("username","==",q).get();if(snap.empty){results.innerHTML="<p class='muted'>No user found.</p>";return;}results.innerHTML="";snap.forEach(doc=>{const u=doc.data();const uid=doc.id;if(uid===currentUser?.uid)return;results.innerHTML+=`<div class="friend-row"><span class="friend-avatar">${u.avatar||"😎"}</span><span class="friend-name">${u.username}</span><span class="friend-status">Lvl ${getLevel(u.xp||0)}</span><button class="primary-btn" style="padding:6px 12px;font-size:12px" onclick="sendFriendRequest('${uid}')">Add</button></div>`;});}catch(e){results.innerHTML="<p class='muted'>Error. Try again.</p>";}
    };
}

async function loadFriends(){
    if(!currentUser||!userProfile){$("friends-list").innerHTML='<p class="muted">Login to use social features.</p>';return;}
    const friendIds=userProfile.friends||[];
    if(friendIds.length===0){$("friends-list").innerHTML='<p class="muted">No friends yet!</p>';return;}
    $("friends-list").innerHTML="";
    for(const fid of friendIds){
        try{const doc=await db.collection("users").doc(fid).get();if(doc.exists){const f=doc.data();$("friends-list").innerHTML+=`<div class="friend-row"><span class="friend-avatar">${f.avatar||"😎"}</span><div style="flex:1"><div class="friend-name">${f.username}</div><div class="friend-status">Lvl ${getLevel(f.xp||0)} · 🪙${f.coins||0}</div></div><button class="secondary-btn" style="padding:5px 10px;font-size:11px">⚔️ Challenge</button></div>`;}}catch(e){}
    }
}

async function sendFriendRequest(uid){if(!currentUser)return showToast("Login to add friends.");try{const targetRef=db.collection("users").doc(uid);const td=await targetRef.get();const reqs=[...(td.data().friendRequests||[])];if(!reqs.includes(currentUser.uid))reqs.push(currentUser.uid);await targetRef.update({friendRequests:reqs});showToast("Friend request sent! 👥");}catch(e){showToast("Error sending request.");}}
function showSocialPanel(p){["friends","requests","add"].forEach(x=>{const el=$(x+"-panel");if(el)el.classList.add("hidden");});const t=$(p+"-panel");if(t)t.classList.remove("hidden");}

// ===== ADMIN PANEL =====
function setupAdmin(){
    $("admin-search-user-btn").onclick=adminSearchUser;
    $("admin-add-question-btn").onclick=adminAddQuestion;
    $("admin-send-ann-btn").onclick=adminSendAnnouncement;
    $("admin-add-avatar-btn").onclick=adminAddAvatar;
    $("admin-create-event-btn").onclick=adminCreateEvent;
    Object.keys(quizData).forEach(cat=>{const opt=document.createElement("option");opt.value=cat;opt.textContent=cat;$("admin-q-category").appendChild(opt);});
}

async function loadAdminPanel(){
    if(!isAdmin){showView("home-view");showToast("Access denied. Use #admin URL.");return;}
    try{const snap=await db.collection("users").get();$("admin-total-users").textContent=snap.size;let totalGames=0,totalCorrect=0;snap.forEach(d=>{const u=d.data();totalGames+=(u.totalGames||0);totalCorrect+=(u.totalCorrect||0);});$("admin-total-games").textContent=totalGames;$("an-correct").textContent=totalCorrect;const avgAcc=totalGames>0?Math.round((totalCorrect/(totalGames*10))*100):0;$("an-accuracy").textContent=avgAcc+"%";loadAdminTopPlayers(snap);}catch(e){showToast("Error loading admin data.");}
    const customCats=JSON.parse(localStorage.getItem("customCategories")||"{}");const customQ=Object.values(customCats).flat().length;$("admin-total-questions").textContent=Object.values(quizData).flat().length+customQ;
    loadAdminAnnouncements();loadAdminShopList();loadAdminEvents();
}

function showAdminSection(section){document.querySelectorAll(".admin-section").forEach(s=>s.classList.add("hidden"));$("admin-"+section)?.classList.remove("hidden");}

async function adminSearchUser(){
    const q=$("admin-user-search").value.trim();if(!q)return;
    const list=$("admin-users-list");list.innerHTML="<p class='muted'>Searching...</p>";
    try{const snap=await db.collection("users").where("username","==",q).get();if(snap.empty){list.innerHTML="<p class='muted'>No user found.</p>";return;}list.innerHTML="";snap.forEach(doc=>{const u=doc.data(),uid=doc.id;list.innerHTML+=`<div class="admin-user-row"><span style="font-size:26px">${u.avatar||"😎"}</span><div style="flex:1"><div style="font-weight:600">${u.username}</div><div style="font-size:12px;color:var(--fg-muted)">${u.email} · Lvl ${getLevel(u.xp||0)} · 🪙${u.coins||0} · ${u.xp||0}XP · ${u.totalGames||0} games</div></div><div class="admin-actions"><button class="admin-btn give-coins" onclick="adminGiveCoins('${uid}','${u.username}')">🪙 Coins</button><button class="admin-btn give-xp" onclick="adminGiveXP('${uid}','${u.username}')">⚡ XP</button><button class="admin-btn promote" onclick="adminPromote('${uid}','${u.username}')">⬆️ Promote</button><button class="admin-btn ban" onclick="adminBanUser('${uid}','${u.username}')">🔨 Ban</button><button class="admin-btn delete" onclick="adminDeleteUser('${uid}','${u.username}')">🗑️ Delete</button></div></div>`;})}catch(e){list.innerHTML="<p class='muted'>Error searching.</p>";}
}

async function adminGiveCoins(uid,username){const amount=parseInt(prompt(`Give coins to ${username}:`));if(!amount||isNaN(amount))return;try{const doc=await db.collection("users").doc(uid).get();await db.collection("users").doc(uid).update({coins:(doc.data().coins||0)+amount,totalCoinsEarned:(doc.data().totalCoinsEarned||0)+amount});showToast(`🪙 Gave ${amount} coins to ${username}!`);}catch(e){showToast("Error.");}}
async function adminGiveXP(uid,username){const amount=parseInt(prompt(`Give XP to ${username}:`));if(!amount||isNaN(amount))return;try{const doc=await db.collection("users").doc(uid).get();await db.collection("users").doc(uid).update({xp:(doc.data().xp||0)+amount});showToast(`⚡ Gave ${amount} XP to ${username}!`);}catch(e){showToast("Error.");}}
async function adminPromote(uid,username){const pts=parseInt(prompt(`Set division points for ${username}:`));if(pts===null||isNaN(pts))return;try{await db.collection("users").doc(uid).update({divisionPts:pts});showToast(`⬆️ ${username} promoted!`);}catch(e){showToast("Error.");}}
async function adminBanUser(uid,username){if(!confirm(`Ban ${username}?`))return;try{await db.collection("users").doc(uid).update({banned:true});showToast(`🔨 ${username} banned.`);}catch(e){showToast("Error.");}}
async function adminDeleteUser(uid,username){if(!confirm(`DELETE ${username}? Cannot be undone!`))return;try{await db.collection("users").doc(uid).delete();showToast(`🗑️ ${username} deleted.`);adminSearchUser();}catch(e){showToast("Error.");}}

function adminAddQuestion(){
    const cat=$("admin-q-category").value,q=$("admin-q-question").value.trim(),a0=$("admin-q-a0").value.trim(),a1=$("admin-q-a1").value.trim(),a2=$("admin-q-a2").value.trim(),a3=$("admin-q-a3").value.trim(),exp=$("admin-q-exp").value.trim();
    if(!cat||!q||!a0||!a1||!a2||!a3)return showToast("Fill in all fields!");
    const customCats=JSON.parse(localStorage.getItem("customCategories")||"{}");
    if(!customCats[cat])customCats[cat]=[];
    customCats[cat].push({q,a:[a0,a1,a2,a3],c:0,exp});
    localStorage.setItem("customCategories",JSON.stringify(customCats));
    [$("admin-q-question"),$("admin-q-a0"),$("admin-q-a1"),$("admin-q-a2"),$("admin-q-a3"),$("admin-q-exp")].forEach(el=>el.value="");
    showToast("Question added! ✅");renderCategoryButtons();
}

async function adminSendAnnouncement(){
    const title=$("admin-ann-title").value.trim(),body=$("admin-ann-body").value.trim(),type=$("admin-ann-type").value;
    if(!title||!body)return showToast("Fill in title and message.");
    try{await rtdb.ref("announcements").push({title,body,type,date:Date.now(),from:"Renessh"});$("admin-ann-title").value="";$("admin-ann-body").value="";showToast("📢 Announcement sent!");loadAdminAnnouncements();}catch(e){showToast("Error sending.");}
}

async function loadAdminAnnouncements(){
    try{const snap=await rtdb.ref("announcements").limitToLast(10).once("value");const data=snap.val();const el=$("admin-ann-list");if(!data){el.innerHTML='<p class="muted">No announcements yet.</p>';return;}el.innerHTML=Object.entries(data).reverse().map(([k,a])=>`<div class="admin-user-row"><div style="flex:1"><div style="font-weight:600">${a.title}</div><div style="font-size:12px;color:var(--fg-muted)">${a.body}</div></div><button class="admin-btn ban" onclick="adminDeleteAnn('${k}')">🗑️</button></div>`).join("");}catch(e){}
}

async function adminDeleteAnn(key){try{await rtdb.ref("announcements/"+key).remove();loadAdminAnnouncements();showToast("Deleted!");}catch(e){}}

function adminAddAvatar(){
    const emoji=$("admin-shop-emoji").value.trim(),name=$("admin-shop-name").value.trim(),price=parseInt($("admin-shop-price").value),rarity=$("admin-shop-rarity").value;
    if(!emoji||!name||isNaN(price))return showToast("Fill in all fields.");
    const customAvatars=JSON.parse(localStorage.getItem("customAvatars")||"[]");
    customAvatars.push({emoji,name,price,rarity});localStorage.setItem("customAvatars",JSON.stringify(customAvatars));
    $("admin-shop-emoji").value="";$("admin-shop-name").value="";$("admin-shop-price").value="";
    showToast(`${emoji} ${name} added to shop!`);loadAdminShopList();
}

function loadAdminShopList(){
    const customAvatars=JSON.parse(localStorage.getItem("customAvatars")||"[]");
    $("admin-shop-list").innerHTML=customAvatars.length===0?'<p class="muted">No custom avatars yet.</p>':customAvatars.map((av,i)=>`<div class="admin-user-row"><span style="font-size:28px">${av.emoji}</span><div style="flex:1"><div style="font-weight:600">${av.name}</div><div style="font-size:12px;color:var(--fg-muted)">${av.rarity} · 🪙${av.price}</div></div><button class="admin-btn ban" onclick="adminRemoveAvatar(${i})">🗑️ Remove</button></div>`).join("");
}

function adminRemoveAvatar(index){const customAvatars=JSON.parse(localStorage.getItem("customAvatars")||"[]");customAvatars.splice(index,1);localStorage.setItem("customAvatars",JSON.stringify(customAvatars));loadAdminShopList();showToast("Avatar removed.");}

function adminCreateEvent(){
    const name=$("admin-event-name").value.trim(),desc=$("admin-event-desc").value.trim(),date=$("admin-event-date").value,reward=parseInt($("admin-event-reward").value)||0;
    if(!name||!desc||!date)return showToast("Fill in event details.");
    const events=JSON.parse(localStorage.getItem("adminEvents")||"[]");events.push({name,desc,date,reward,createdAt:Date.now()});localStorage.setItem("adminEvents",JSON.stringify(events));
    $("admin-event-name").value="";$("admin-event-desc").value="";$("admin-event-date").value="";$("admin-event-reward").value="";
    showToast(`🎉 Event "${name}" created!`);loadAdminEvents();
}

function loadAdminEvents(){
    const events=JSON.parse(localStorage.getItem("adminEvents")||"[]");
    $("admin-events-list").innerHTML=events.length===0?'<p class="muted">No events yet.</p>':events.map((e,i)=>`<div class="admin-user-row"><div style="flex:1"><div style="font-weight:600">${e.name}</div><div style="font-size:12px;color:var(--fg-muted)">${e.desc} · ${e.date} · 🪙${e.reward}</div></div><button class="admin-btn ban" onclick="adminRemoveEvent(${i})">🗑️</button></div>`).join("");
}

function adminRemoveEvent(i){const events=JSON.parse(localStorage.getItem("adminEvents")||"[]");events.splice(i,1);localStorage.setItem("adminEvents",JSON.stringify(events));loadAdminEvents();showToast("Event removed.");}

async function loadAdminTopPlayers(snap){
    const players=snap.docs.map(d=>d.data()).sort((a,b)=>(b.xp||0)-(a.xp||0)).slice(0,10);
    $("admin-top-players").innerHTML=players.map((p,i)=>`<div class="admin-user-row"><span style="font-size:22px">${p.avatar||"😎"}</span><div style="flex:1"><div style="font-weight:600">#${i+1} ${p.username}</div><div style="font-size:12px;color:var(--fg-muted)">${p.xp||0}XP · 🪙${p.coins||0} · ${p.totalGames||0} games</div></div></div>`).join("");
}

// ===== ACHIEVEMENTS =====
function checkAchievements(specificId){
    if(!userProfile)return;
    const unlocked=userProfile.achievements||[];
    const toCheck=specificId?ACHIEVEMENTS.filter(a=>a.id===specificId):ACHIEVEMENTS;
    const s=userProfile;
    toCheck.forEach(ach=>{
        if(unlocked.includes(ach.id))return;
        let earned=false;
        if(ach.id==="first_game")earned=(s.totalGames||0)>=1;
        else if(ach.id==="streak5")earned=(s.bestStreak||0)>=5;
        else if(ach.id==="streak10")earned=(s.bestStreak||0)>=10;
        else if(ach.id==="streak20")earned=(s.bestStreak||0)>=20;
        else if(ach.id==="perfect")earned=(s.perfectGames||0)>=1;
        else if(ach.id==="games10")earned=(s.totalGames||0)>=10;
        else if(ach.id==="games50")earned=(s.totalGames||0)>=50;
        else if(ach.id==="games100")earned=(s.totalGames||0)>=100;
        else if(ach.id==="xp500")earned=(s.xp||0)>=500;
        else if(ach.id==="xp1000")earned=(s.xp||0)>=1000;
        else if(ach.id==="xp5000")earned=(s.xp||0)>=5000;
        else if(ach.id==="coins500")earned=(s.totalCoinsEarned||0)>=500;
        else if(ach.id==="coins1000")earned=(s.totalCoinsEarned||0)>=1000;
        else if(ach.id==="daily")earned=(s.dailyCompleted||0)>=1;
        else if(ach.id==="daily7")earned=(s.dailyCompleted||0)>=7;
        else if(ach.id==="categories")earned=Object.keys(s.categoryStats||{}).length>=Object.keys(quizData).length;
        else if(ach.id==="level5")earned=getLevel(s.xp)>=5;
        else if(ach.id==="level10")earned=getLevel(s.xp)>=10;
        else if(ach.id==="level20")earned=getLevel(s.xp)>=20;
        else if(ach.id==="social")earned=(s.friends||[]).length>=1;
        else if(ach.id==="beat_darkvex_easy")earned=(s.darkVexWins?.easy||0)>=1;
        else if(ach.id==="beat_darkvex_normal")earned=(s.darkVexWins?.normal||0)>=1;
        else if(ach.id==="beat_darkvex_hard")earned=(s.darkVexWins?.hard||0)>=1;
        else if(ach.id==="shop_first")earned=(s.ownedAvatars||[]).length>3;
        else if(ach.id==="spin_wheel")earned=spinUsed;
        else if(ach.id==="endless50")earned=(s.endlessRecord||0)>=50;
        if(earned){
            unlocked.push(ach.id);const coinReward=ach.coins||0;
            saveProfile({achievements:unlocked,coins:(userProfile.coins||0)+coinReward,totalCoinsEarned:(userProfile.totalCoinsEarned||0)+coinReward});
            setTimeout(()=>{$("ach-icon").textContent=ach.icon;$("ach-name").textContent=ach.name;$("ach-desc").textContent=ach.desc;$("ach-reward").textContent=coinReward>0?`+🪙${coinReward} coins!`:"";$("achievement-modal").classList.remove("hidden");},1500);
        }
    });
}

function renderAchievements(){
    const unlocked=userProfile?.achievements||[];
    $("ach-count").textContent=unlocked.length;$("ach-total").textContent=ACHIEVEMENTS.length;
    $("achievements-grid").innerHTML=ACHIEVEMENTS.map(a=>`<div class="ach-card ${unlocked.includes(a.id)?"unlocked":"locked"}"><span class="ach-icon">${a.icon}</span><div><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div><div style="font-size:10px;color:var(--gold)">+🪙${a.coins}</div></div></div>`).join("");
}

// ===== DAILY TIMER =====
function startDailyTimer(){function u(){const now=new Date(),m=new Date();m.setHours(24,0,0,0);const d=m-now,h=String(Math.floor(d/3600000)).padStart(2,"0"),mi=String(Math.floor((d%3600000)/60000)).padStart(2,"0"),s=String(Math.floor((d%60000)/1000)).padStart(2,"0");$("daily-timer").textContent=`${h}:${mi}:${s}`;}u();setInterval(u,1000);}

// ===== SPIN WHEEL =====
const WHEEL_PRIZES=["🪙 50 Coins","⚡ 30 XP","✂️ 50/50 x2","💡 Hint x2","⏳ +Time x2","🪙 100 Coins","⚡ 50 XP","🪙 200 Coins"];
function drawWheel(r=0){const canvas=$("wheel-canvas");if(!canvas)return;const ctx=canvas.getContext("2d"),cx=140,cy=140,rad=130,arc=(Math.PI*2)/WHEEL_PRIZES.length,colors=["#5865f2","#7c3aed","#db2777","#ea580c","#16a34a","#0891b2","#d97706","#f59e0b"];ctx.clearRect(0,0,280,280);WHEEL_PRIZES.forEach((p,i)=>{const a=arc*i+r;ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,rad,a,a+arc);ctx.fillStyle=colors[i%colors.length];ctx.fill();ctx.strokeStyle="#fff";ctx.lineWidth=2;ctx.stroke();ctx.save();ctx.translate(cx,cy);ctx.rotate(a+arc/2);ctx.textAlign="right";ctx.fillStyle="#fff";ctx.font="bold 11px Poppins";ctx.fillText(p,rad-10,5);ctx.restore();});}

function showSpinWheel(){$("spin-modal").classList.remove("hidden");drawWheel();$("spin-result").textContent="";$("spin-btn").disabled=false;spinUsed=true;checkAchievements("spin_wheel");}

$("spin-btn").onclick=()=>{
    $("spin-btn").disabled=true;
    const total=Math.PI*2*5+Math.random()*Math.PI*2;let cur=0;const dur=3000,start=performance.now();
    function animate(now){const el=now-start,t=Math.min(el/dur,1),ease=1-Math.pow(1-t,3);cur=total*ease;drawWheel(cur);if(t<1){requestAnimationFrame(animate);return;}
    const fa=cur%(Math.PI*2),arc=(Math.PI*2)/WHEEL_PRIZES.length,pi=Math.floor(((Math.PI*2-fa)%(Math.PI*2))/arc)%WHEEL_PRIZES.length,prize=WHEEL_PRIZES[pi];
    $("spin-result").textContent="Won: "+prize+"!";applyWheelPrize(prize);}
    requestAnimationFrame(animate);
};

function applyWheelPrize(prize){
    if(prize.includes("Coins")){const a=parseInt(prize);saveProfile({coins:(userProfile.coins||0)+a,totalCoinsEarned:(userProfile.totalCoinsEarned||0)+a});showToast(`🪙 ${a} coins added!`);}
    else if(prize.includes("XP")){const a=parseInt(prize);saveProfile({xp:(userProfile.xp||0)+a});showToast(`⚡ ${a} XP added!`);}
    else if(prize.includes("50/50")){powerupCounts["5050"]=(powerupCounts["5050"]||0)+2;showToast("✂️ 50/50 added!");}
    else if(prize.includes("Hint")){powerupCounts.hint=(powerupCounts.hint||0)+2;showToast("💡 Hint added!");}
    else if(prize.includes("Time")){powerupCounts.time=(powerupCounts.time||0)+2;showToast("⏳ +Time added!");}
}

// ===== CONFETTI =====
function launchConfetti(){const canvas=$("confetti-canvas"),ctx=canvas.getContext("2d");canvas.width=window.innerWidth;canvas.height=window.innerHeight;const particles=Array.from({length:200},()=>({x:Math.random()*canvas.width,y:-10,r:Math.random()*6+3,d:Math.random()*150,color:`hsl(${Math.random()*360},80%,60%)`,tilt:Math.random()*10-10,speed:Math.random()*3+1}));let frame=0;function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();p.y+=p.speed;p.tilt+=0.1;p.x+=Math.sin(frame/10+p.d)*2;});frame++;if(frame<250)requestAnimationFrame(draw);else ctx.clearRect(0,0,canvas.width,canvas.height);}draw();}

// ===== SHARE CARD =====
function generateShareCard(){
    openModal("share-modal");
    const canvas=document.createElement("canvas");canvas.width=500;canvas.height=250;
    const ctx=canvas.getContext("2d");
    ctx.fillStyle="#111327";ctx.fillRect(0,0,500,250);
    ctx.fillStyle="#5865f2";ctx.fillRect(0,0,500,6);
    ctx.font="bold 32px Rajdhani, Arial";ctx.fillStyle="#5865f2";ctx.fillText("⚡ ApexQuiz",20,50);
    ctx.font="18px Poppins, Arial";ctx.fillStyle="#e8eaf6";ctx.fillText(`${userProfile?.avatar||"😎"} ${userProfile?.username||"Player"}`,20,90);
    ctx.font="14px Poppins, Arial";ctx.fillStyle="#9197c0";ctx.fillText(`Level ${getLevel(userProfile?.xp||0)} ${getTitle(getLevel(userProfile?.xp||0))}`,20,120);ctx.fillText(`${getDivision(userProfile?.divisionPts||0).label}`,20,145);ctx.fillText(`⚡ ${userProfile?.xp||0} XP  ·  🪙 ${userProfile?.coins||0} coins  ·  🎮 ${userProfile?.totalGames||0} games`,20,175);ctx.fillText(`🔥 ${userProfile?.bestStreak||0} best streak  ·  🏅 ${(userProfile?.achievements||[]).length} achievements`,20,205);
    const shareCanvas=$("share-canvas");const sc=shareCanvas.getContext("2d");sc.drawImage(canvas,0,0,400,200);
    $("download-share-btn").onclick=()=>{const link=document.createElement("a");link.download="apexquiz-profile.png";link.href=shareCanvas.toDataURL();link.click();};
}

// ===== SOUND =====
function beep(freq=500,dur=120){if(!$("sound-master-toggle")?.checked)return;try{const ctx=new AudioContext(),osc=ctx.createOscillator(),gain=ctx.createGain();osc.frequency.value=freq;gain.gain.value=0.15;osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+dur/1000);}catch(e){}}

// ===== UTILS =====
function showToast(msg,dur=2500){const t=$("toast");t.textContent=msg;t.classList.remove("hidden");clearTimeout(showToast._t);showToast._t=setTimeout(()=>t.classList.add("hidden"),dur);}
function openModal(id){$(id)?.classList.remove("hidden");}
function closeModal(id){$(id)?.classList.add("hidden");}
function seededShuffle(arr,seed){let h=0;for(let i=0;i<seed.length;i++)h=((h<<5)-h)+seed.charCodeAt(i);const rng=()=>{h^=h<<13;h^=h>>17;h^=h<<5;return Math.abs(h)/2147483647;};const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}