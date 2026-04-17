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

// ===== QUIZ DATA =====
const quizData = {
    "🌍 Geography": [
        { q: "What is the capital of France?", a: ["Paris","London","Berlin","Madrid"], c: 0, exp: "Paris has been the capital of France since 987 AD." },
        { q: "Which is the largest ocean?", a: ["Atlantic","Indian","Pacific","Arctic"], c: 2, exp: "The Pacific Ocean covers about 165 million km²." },
        { q: "What is the longest river in the world?", a: ["Amazon","Nile","Yangtze","Mississippi"], c: 1, exp: "The Nile stretches approximately 6,650 km." },
        { q: "Which country has the most natural lakes?", a: ["Russia","USA","Canada","Finland"], c: 2, exp: "Canada has over 2 million lakes — more than any other country." },
        { q: "Mount Everest is in which mountain range?", a: ["Andes","Rockies","Himalayas","Alps"], c: 2, exp: "Mount Everest is the highest peak in the Himalayas at 8,849 m." },
        { q: "Which country is both in Europe and Asia?", a: ["Egypt","Turkey","Morocco","Libya"], c: 1, exp: "Turkey spans both continents, divided by the Bosphorus strait." },
        { q: "What is the smallest country in the world?", a: ["Monaco","San Marino","Vatican City","Liechtenstein"], c: 2, exp: "Vatican City is only 0.44 km² — the world's smallest country." },
        { q: "Which continent is the Sahara Desert in?", a: ["Asia","South America","Australia","Africa"], c: 3, exp: "The Sahara is in North Africa and is the world's largest hot desert." },
        { q: "What is the capital of Japan?", a: ["Kyoto","Osaka","Tokyo","Hiroshima"], c: 2, exp: "Tokyo became Japan's capital in 1869." },
        { q: "Which country has the most population?", a: ["USA","India","China","Russia"], c: 1, exp: "India surpassed China in 2023 to become the world's most populated country." }
    ],
    "🔬 Science": [
        { q: "What is the chemical symbol for Gold?", a: ["Go","Gd","Au","Ag"], c: 2, exp: "Au comes from the Latin word 'Aurum', meaning gold." },
        { q: "How many bones are in the adult human body?", a: ["196","206","216","226"], c: 1, exp: "Adults have 206 bones — babies start with around 270 which fuse together." },
        { q: "What planet is known as the Red Planet?", a: ["Venus","Jupiter","Mars","Saturn"], c: 2, exp: "Mars appears red due to iron oxide (rust) on its surface." },
        { q: "What gas do plants absorb from the atmosphere?", a: ["Oxygen","Nitrogen","CO₂","Hydrogen"], c: 2, exp: "Plants absorb CO₂ for photosynthesis and release oxygen." },
        { q: "What is the speed of light?", a: ["100,000 km/s","200,000 km/s","299,792 km/s","350,000 km/s"], c: 2, exp: "Light travels at approximately 299,792 km/s in a vacuum." },
        { q: "What is H₂O commonly known as?", a: ["Salt","Water","Hydrogen","Helium"], c: 1, exp: "H₂O is water — 2 hydrogen atoms bonded to 1 oxygen atom." },
        { q: "What is the powerhouse of the cell?", a: ["Nucleus","Ribosome","Mitochondria","Golgi Body"], c: 2, exp: "Mitochondria produce ATP — the energy currency of the cell." },
        { q: "How many planets are in our solar system?", a: ["7","8","9","10"], c: 1, exp: "There are 8 planets after Pluto was reclassified as a dwarf planet in 2006." },
        { q: "What is the atomic number of Carbon?", a: ["4","6","8","12"], c: 1, exp: "Carbon has 6 protons, giving it atomic number 6." },
        { q: "Which scientist developed the theory of relativity?", a: ["Newton","Darwin","Einstein","Hawking"], c: 2, exp: "Albert Einstein published his theory of special relativity in 1905." }
    ],
    "🎮 Gaming": [
        { q: "Who created PlayStation?", a: ["Microsoft","Nintendo","Sony","Sega"], c: 2, exp: "Sony released the original PlayStation in 1994 in Japan." },
        { q: "What year was Minecraft released?", a: ["2009","2010","2011","2012"], c: 1, exp: "Minecraft officially launched in November 2011 after beta in 2010." },
        { q: "Which game features 'Battle Royale' mode with 100 players?", a: ["Fortnite","COD","FIFA","Minecraft"], c: 0, exp: "Fortnite's Battle Royale mode launched in September 2017." },
        { q: "What is the best-selling video game of all time?", a: ["Tetris","Minecraft","GTA V","Mario"], c: 1, exp: "Minecraft has sold over 238 million copies across all platforms." },
        { q: "Which company makes Xbox?", a: ["Sony","Nintendo","Apple","Microsoft"], c: 3, exp: "Microsoft launched the original Xbox in 2001." },
        { q: "In Pokémon, what type is Charizard?", a: ["Fire/Dragon","Fire/Flying","Fire only","Fire/Rock"], c: 1, exp: "Charizard is Fire/Flying type despite looking like a dragon." },
        { q: "What is the name of Link's enemy in Zelda?", a: ["Bowser","Ganon","Sephiroth","Kefka"], c: 1, exp: "Ganon (or Ganondorf) is the main antagonist of The Legend of Zelda series." },
        { q: "Which game has the most concurrent Steam players ever?", a: ["PUBG","CS:GO","Cyberpunk","Elden Ring"], c: 0, exp: "PUBG peaked at 3.2 million concurrent players on Steam in 2018." },
        { q: "What is the currency in Animal Crossing?", a: ["Gold","Bells","Coins","Stars"], c: 1, exp: "Bells are the main currency in Animal Crossing used to buy furniture and pay off loans." },
        { q: "Who is the main character of the Halo series?", a: ["Master Chief","Doom Guy","Kratos","Samus"], c: 0, exp: "Master Chief (John-117) is the protagonist of the Halo series by Bungie/343 Industries." }
    ],
    "🎬 Movies & TV": [
        { q: "Who directed Jurassic Park?", a: ["James Cameron","Steven Spielberg","Christopher Nolan","Tim Burton"], c: 1, exp: "Steven Spielberg directed Jurassic Park, released in 1993." },
        { q: "What movie features the quote 'I am your father'?", a: ["Star Trek","Star Wars V","Star Wars IV","Interstellar"], c: 1, exp: "Darth Vader says 'I am your father' in The Empire Strikes Back (1980)." },
        { q: "How many Oscars did Titanic win?", a: ["9","10","11","14"], c: 2, exp: "Titanic (1997) won 11 Academy Awards, tying the record at the time." },
        { q: "Which streaming service created Stranger Things?", a: ["HBO","Disney+","Netflix","Amazon Prime"], c: 2, exp: "Stranger Things premiered on Netflix in July 2016." },
        { q: "Who played Iron Man in the MCU?", a: ["Chris Evans","Chris Hemsworth","Robert Downey Jr","Mark Ruffalo"], c: 2, exp: "Robert Downey Jr portrayed Tony Stark/Iron Man from 2008 to 2019." },
        { q: "What is the highest-grossing movie of all time?", a: ["Avengers: Endgame","Avatar","Titanic","The Lion King"], c: 1, exp: "Avatar (2009/2022 re-release) holds the record at over $2.9 billion." },
        { q: "Which show has the most Emmy wins?", a: ["Breaking Bad","Game of Thrones","The Simpsons","Succession"], c: 2, exp: "The Simpsons has won 35 Emmy Awards — the most of any animated show." },
        { q: "In Friends, what is Chandler Bing's job?", a: ["Doctor","Chef","Statistical analysis and data reconfiguration","Accountant"], c: 2, exp: "Chandler works in 'statistical analysis and data reconfiguration' — even his friends don't fully understand it!" },
        { q: "Who wrote Harry Potter?", a: ["Tolkien","C.S. Lewis","J.K. Rowling","Philip Pullman"], c: 2, exp: "J.K. Rowling wrote the Harry Potter series, first published in 1997." },
        { q: "What colour is the pill Neo takes in The Matrix?", a: ["Blue","Green","Red","Yellow"], c: 2, exp: "Neo takes the red pill to escape the Matrix and see reality." }
    ],
    "🎵 Music": [
        { q: "Who is known as the King of Pop?", a: ["Elvis Presley","Michael Jackson","Prince","David Bowie"], c: 1, exp: "Michael Jackson earned the 'King of Pop' title in the late 1980s." },
        { q: "Which band released 'Bohemian Rhapsody'?", a: ["The Beatles","Led Zeppelin","Queen","Rolling Stones"], c: 2, exp: "Queen released Bohemian Rhapsody in 1975, written by Freddie Mercury." },
        { q: "How many strings does a standard guitar have?", a: ["4","5","6","8"], c: 2, exp: "A standard guitar has 6 strings, tuned E-A-D-G-B-E." },
        { q: "Which country does BTS come from?", a: ["Japan","China","South Korea","Thailand"], c: 2, exp: "BTS (방탄소년단) is a South Korean boy band from Seoul." },
        { q: "What is the best-selling album of all time?", a: ["Thriller","Back in Black","The Dark Side of the Moon","Eagles: Greatest Hits"], c: 0, exp: "Michael Jackson's Thriller has sold over 66 million copies worldwide." },
        { q: "What instrument does a pianist play?", a: ["Violin","Guitar","Piano","Drums"], c: 2, exp: "A pianist plays the piano — an instrument with keys that strike strings." },
        { q: "Which artist has the most Grammy wins?", a: ["Beyoncé","Taylor Swift","Adele","Jay-Z"], c: 0, exp: "Beyoncé has won 32 Grammy Awards — the most of any artist in history." },
        { q: "What does 'BPM' stand for in music?", a: ["Beats Per Minute","Bass Per Melody","Bars Per Measure","Beats Per Measure"], c: 0, exp: "BPM (Beats Per Minute) measures the tempo of a piece of music." },
        { q: "Which city is known as the birthplace of jazz?", a: ["Chicago","Nashville","New York","New Orleans"], c: 3, exp: "New Orleans is widely considered the birthplace of jazz in the late 19th century." },
        { q: "Who sang 'Shape of You'?", a: ["Justin Bieber","Bruno Mars","Ed Sheeran","Harry Styles"], c: 2, exp: "Ed Sheeran released 'Shape of You' in January 2017 from his ÷ (Divide) album." }
    ],
    "⚽ Sports": [
        { q: "How many players are on a football team?", a: ["9","10","11","12"], c: 2, exp: "A standard football team has 11 players, including the goalkeeper." },
        { q: "Which country has won the most FIFA World Cups?", a: ["Germany","Argentina","Italy","Brazil"], c: 3, exp: "Brazil has won 5 World Cups — 1958, 1962, 1970, 1994 and 2002." },
        { q: "How long is an Olympic swimming pool?", a: ["25m","50m","75m","100m"], c: 1, exp: "Olympic swimming pools are exactly 50 metres long." },
        { q: "In tennis, what is a score of zero called?", a: ["Nil","Zero","Love","None"], c: 2, exp: "In tennis, zero is called 'love', believed to derive from the French word 'l'oeuf' (egg)." },
        { q: "How many rings are on the Olympic flag?", a: ["4","5","6","7"], c: 1, exp: "The Olympic flag has 5 rings representing the 5 continents of the world." },
        { q: "Which sport uses a shuttlecock?", a: ["Tennis","Badminton","Squash","Pickleball"], c: 1, exp: "Badminton uses a shuttlecock (also called a birdie) — a feathered projectile." },
        { q: "Who has won the most Ballon d'Or awards?", a: ["Cristiano Ronaldo","Neymar","Kylian Mbappe","Lionel Messi"], c: 3, exp: "Lionel Messi has won 8 Ballon d'Or awards — the most in history." },
        { q: "What is the diameter of a basketball hoop?", a: ["38cm","46cm","53cm","61cm"], c: 1, exp: "A basketball hoop has an inner diameter of 46 cm (18 inches)." },
        { q: "In which sport would you perform a 'slam dunk'?", a: ["Volleyball","Rugby","Basketball","Handball"], c: 2, exp: "A slam dunk is when a basketball player jumps and pushes the ball down through the hoop." },
        { q: "Which country invented cricket?", a: ["Australia","India","South Africa","England"], c: 3, exp: "Cricket originated in England in the 16th century." }
    ],
    "📚 History": [
        { q: "In what year did World War II end?", a: ["1943","1944","1945","1946"], c: 2, exp: "World War II ended in 1945 — V-E Day was May 8 and V-J Day was September 2." },
        { q: "Who was the first President of the United States?", a: ["Abraham Lincoln","John Adams","Thomas Jefferson","George Washington"], c: 3, exp: "George Washington served as the first US President from 1789 to 1797." },
        { q: "What ancient wonder was located in Alexandria?", a: ["The Colosseum","The Lighthouse","The Parthenon","The Pantheon"], c: 1, exp: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World." },
        { q: "Who wrote the Magna Carta?", a: ["King Henry VIII","King John","William the Conqueror","King Richard I"], c: 1, exp: "King John signed the Magna Carta in 1215 — limiting royal power for the first time." },
        { q: "In which year did the Titanic sink?", a: ["1909","1910","1912","1915"], c: 2, exp: "The Titanic sank on April 15, 1912 after hitting an iceberg." },
        { q: "Which empire was ruled by Julius Caesar?", a: ["Greek","Ottoman","Roman","Byzantine"], c: 2, exp: "Julius Caesar was a Roman general and statesman who ruled Rome." },
        { q: "What year did the Berlin Wall fall?", a: ["1987","1988","1989","1990"], c: 2, exp: "The Berlin Wall fell on November 9, 1989, marking the end of the Cold War era." },
        { q: "Who was the first person to walk on the moon?", a: ["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","Alan Shepard"], c: 2, exp: "Neil Armstrong became the first person to walk on the moon on July 20, 1969." },
        { q: "Which civilisation built the pyramids?", a: ["Mesopotamian","Greek","Roman","Egyptian"], c: 3, exp: "The ancient Egyptians built the pyramids as tombs for their pharaohs." },
        { q: "What was the name of the first artificial satellite?", a: ["Vostok","Sputnik","Apollo","Explorer"], c: 1, exp: "Sputnik 1, launched by the Soviet Union on October 4, 1957, was the first artificial satellite." }
    ],
    "🍕 Food & Drink": [
        { q: "Which country invented pizza?", a: ["France","USA","Italy","Greece"], c: 2, exp: "Pizza originated in Naples, Italy, in the 18th century." },
        { q: "What is sushi traditionally wrapped in?", a: ["Lettuce","Tortilla","Nori (seaweed)","Rice paper"], c: 2, exp: "Nori is dried seaweed used to wrap traditional sushi rolls." },
        { q: "How many calories are in a standard teaspoon of sugar?", a: ["8","12","16","20"], c: 2, exp: "A teaspoon of sugar (4g) contains approximately 16 calories." },
        { q: "Which fruit has the most vitamin C?", a: ["Orange","Lemon","Kiwi","Guava"], c: 3, exp: "Guava has more vitamin C per 100g than any other common fruit." },
        { q: "What is the main ingredient in hummus?", a: ["Lentils","Chickpeas","Black beans","Kidney beans"], c: 1, exp: "Hummus is made primarily from blended chickpeas, tahini, lemon and garlic." },
        { q: "Which country produces the most coffee?", a: ["Colombia","Vietnam","Ethiopia","Brazil"], c: 3, exp: "Brazil is the world's largest coffee producer, accounting for about 40% of global supply." },
        { q: "What is the national dish of England?", a: ["Fish and Chips","Roast Beef","Chicken Tikka Masala","Full English"], c: 2, exp: "Chicken Tikka Masala is considered the national dish — reflecting multicultural Britain." },
        { q: "How many tea spoons are in a tablespoon?", a: ["2","3","4","5"], c: 1, exp: "There are 3 teaspoons in 1 tablespoon." },
        { q: "What type of pasta is shaped like small rice grains?", a: ["Penne","Orzo","Fusilli","Linguine"], c: 1, exp: "Orzo is rice-shaped pasta, often used in soups and salads." },
        { q: "Which nut is used to make marzipan?", a: ["Walnut","Cashew","Almond","Hazelnut"], c: 2, exp: "Marzipan is made from ground almonds, sugar and sometimes egg whites." }
    ],
    "🦁 Animals": [
        { q: "What is the fastest land animal?", a: ["Lion","Cheetah","Gazelle","Horse"], c: 1, exp: "The cheetah can reach speeds of up to 120 km/h in short bursts." },
        { q: "How many hearts does an octopus have?", a: ["1","2","3","4"], c: 2, exp: "An octopus has 3 hearts — 2 pump blood to the gills, 1 pumps to the body." },
        { q: "What is a group of lions called?", a: ["Pack","Herd","Pride","Colony"], c: 2, exp: "A group of lions is called a pride, typically led by one or two male lions." },
        { q: "Which bird cannot fly?", a: ["Eagle","Penguin","Parrot","Toucan"], c: 1, exp: "Penguins cannot fly — their wings evolved into flippers for swimming." },
        { q: "What is the largest land animal?", a: ["Giraffe","Rhino","Hippo","African Elephant"], c: 3, exp: "The African elephant is the largest land animal, weighing up to 6 tonnes." },
        { q: "How long is an elephant's pregnancy?", a: ["9 months","14 months","18 months","22 months"], c: 3, exp: "Elephants have the longest pregnancy of any land animal — approximately 22 months." },
        { q: "What colour is a polar bear's skin?", a: ["White","Pink","Black","Grey"], c: 2, exp: "Polar bears have black skin under their white fur, which absorbs heat from the sun." },
        { q: "Which animal has the longest lifespan?", a: ["Tortoise","Whale","Parrot","Greenland Shark"], c: 3, exp: "The Greenland Shark can live over 400 years — the longest of any vertebrate." },
        { q: "How many legs does a spider have?", a: ["6","8","10","12"], c: 1, exp: "Spiders have 8 legs — they are arachnids, not insects." },
        { q: "What is the only mammal capable of true flight?", a: ["Flying Squirrel","Sugar Glider","Bat","Colugo"], c: 2, exp: "Bats are the only mammals with wings that allow true powered flight." }
    ],
    "💻 Technology": [
        { q: "Who co-founded Apple?", a: ["Bill Gates","Steve Jobs","Mark Zuckerberg","Jeff Bezos"], c: 1, exp: "Steve Jobs co-founded Apple with Steve Wozniak and Ronald Wayne in 1976." },
        { q: "What does 'HTTP' stand for?", a: ["HyperText Transfer Protocol","High Tech Transfer Protocol","HyperText Transmission Program","Home Transfer Text Protocol"], c: 0, exp: "HTTP stands for HyperText Transfer Protocol — the foundation of web communication." },
        { q: "Which company created Android?", a: ["Apple","Samsung","Google","Microsoft"], c: 2, exp: "Google acquired Android Inc. in 2005 and launched the OS in 2008." },
        { q: "What is the most popular programming language in 2024?", a: ["Java","C++","JavaScript","Python"], c: 3, exp: "Python has consistently ranked as the most popular programming language in recent years." },
        { q: "What does CPU stand for?", a: ["Central Processing Unit","Computer Personal Unit","Core Processing Unit","Central Program Utility"], c: 0, exp: "CPU stands for Central Processing Unit — the brain of a computer." },
        { q: "Which company owns Instagram?", a: ["Twitter/X","Snap","Meta","Google"], c: 2, exp: "Meta (formerly Facebook) acquired Instagram in 2012 for $1 billion." },
        { q: "What was the first computer virus called?", a: ["Brain","Creeper","ILOVEYOU","Melissa"], c: 1, exp: "The Creeper program (1971) is widely considered the first computer virus." },
        { q: "What does 'AI' stand for?", a: ["Automated Interface","Artificial Intelligence","Advanced Integration","Analytical Input"], c: 1, exp: "AI stands for Artificial Intelligence — machines simulating human cognitive functions." },
        { q: "How many bits are in a byte?", a: ["4","8","16","32"], c: 1, exp: "There are 8 bits in a byte — a fundamental unit of digital information." },
        { q: "What year was the World Wide Web invented?", a: ["1983","1987","1989","1991"], c: 2, exp: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN." }
    ]
};

// True/False data
const trueFalseData = [
    { q: "The Great Wall of China is visible from space.", a: false, exp: "This is a myth — the Great Wall is too narrow to be seen from space with the naked eye." },
    { q: "Humans share 50% of their DNA with bananas.", a: true, exp: "True! We share about 50% of our DNA with bananas due to common ancestry." },
    { q: "Lightning never strikes the same place twice.", a: false, exp: "False! Lightning frequently strikes the same spot multiple times." },
    { q: "A group of flamingos is called a flamboyance.", a: true, exp: "True! A group of flamingos is indeed called a flamboyance." },
    { q: "The sun is a planet.", a: false, exp: "False! The sun is a star — the center of our solar system." },
    { q: "Sharks are the only fish that can blink with both eyes.", a: false, exp: "False! Sharks don't have eyelids — they roll their eyes back to protect them." },
    { q: "Honey never expires.", a: true, exp: "True! Honey found in ancient Egyptian tombs was still edible." },
    { q: "The Eiffel Tower grows taller in summer.", a: true, exp: "True! Heat causes the metal to expand, making it up to 15 cm taller in summer." },
    { q: "Water boils at 100°C at sea level.", a: true, exp: "True! Water boils at exactly 100°C (212°F) at standard sea level pressure." },
    { q: "Cats are the most popular pet in the world.", a: false, exp: "False! Dogs are the most popular pet globally." }
];

// ===== ACHIEVEMENTS =====
const ACHIEVEMENTS = [
    { id: "first_game", icon: "🎮", name: "First Blood", desc: "Play your first quiz", condition: s => s.totalGames >= 1 },
    { id: "streak5", icon: "🔥", name: "On Fire", desc: "Get a 5 answer streak", condition: s => s.bestStreak >= 5 },
    { id: "streak10", icon: "💥", name: "Unstoppable", desc: "Get a 10 answer streak", condition: s => s.bestStreak >= 10 },
    { id: "perfect", icon: "⭐", name: "Perfectionist", desc: "Get 100% accuracy in a game", condition: s => s.perfectGames >= 1 },
    { id: "games10", icon: "🏅", name: "Dedicated", desc: "Play 10 games", condition: s => s.totalGames >= 10 },
    { id: "games50", icon: "🏆", name: "Veteran", desc: "Play 50 games", condition: s => s.totalGames >= 50 },
    { id: "xp500", icon: "⚡", name: "Power Player", desc: "Earn 500 XP", condition: s => s.xp >= 500 },
    { id: "xp1000", icon: "💎", name: "Elite", desc: "Earn 1000 XP", condition: s => s.xp >= 1000 },
    { id: "coins100", icon: "🪙", name: "Rich", desc: "Earn 100 coins total", condition: s => s.totalCoins >= 100 },
    { id: "daily", icon: "📅", name: "Daily Player", desc: "Complete daily challenge", condition: s => s.dailyCompleted >= 1 },
    { id: "categories", icon: "📚", name: "Well-Rounded", desc: "Play all categories", condition: s => Object.keys(s.categoryStats||{}).length >= Object.keys(quizData).length },
    { id: "level5", icon: "🌟", name: "Rising Star", desc: "Reach Level 5", condition: s => getLevel(s.xp) >= 5 },
    { id: "level10", icon: "👑", name: "Legend", desc: "Reach Level 10", condition: s => getLevel(s.xp) >= 10 },
    { id: "social", icon: "👥", name: "Social Butterfly", desc: "Add your first friend", condition: s => s.friends >= 1 },
    { id: "endless50", icon: "♾️", name: "Endless Runner", desc: "Answer 50 in Endless mode", condition: s => s.endlessRecord >= 50 }
];

// ===== STATE =====
let currentUser = null;
let userProfile = null;
let selectedAvatar = "😎";
let currentView = "home-view";
let currentMode = "classic";
let currentCategory = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let totalAnswered = 0;
let acceptingAnswers = true;
let streak = 0;
let bestStreakThisGame = 0;
let lives = 3;
let randomMode = false;
let timerId = null;
let timeLeft = 20;
let xpThisGame = 0;
let coinsThisGame = 0;
let isDaily = false;
let spinUsed = false;

const AVATARS = ["😎","🦁","🐯","🦊","🐺","🤖","👾","🦄","🐉","🐸","🎭","🧙","👻","🤠","🥷","🦸","🐼","🦋","🐬","🦅"];

// ===== DOM =====
const $ = id => document.getElementById(id);
const authOverlay = $("auth-overlay");
const loginForm = $("login-form");
const signupForm = $("signup-form");
const loginTab = $("login-tab");
const signupTab = $("signup-tab");
const loginBtn = $("login-btn");
const signupBtn = $("signup-btn");
const guestBtn = $("guest-btn");
const authError = $("auth-error");
const userPill = $("user-pill");
const logoutBtn = $("logout-btn");
const xpValueEl = $("xp-value");
const coinValueEl = $("coin-value");
const views = document.querySelectorAll(".view");
const navButtons = document.querySelectorAll(".nav-btn");
const darkToggle = $("dark-mode-toggle");
const soundToggle = $("sound-master-toggle");
const timerToggle = $("timer-toggle");
const explanationToggle = $("explanation-toggle");
const shakeToggle = $("shake-toggle");

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    buildAvatarGrids();
    applyTheme();
    setupNav();
    setupSettings();
    setupShop();
    startDailyTimer();

    auth.onAuthStateChanged(user => {
        if (user) {
            currentUser = user;
            loadUserProfile(user.uid);
        } else {
            authOverlay.classList.remove("hidden");
        }
    });
});

// ===== AVATAR =====
function buildAvatarGrids() {
    ["avatar-grid","profile-avatar-grid"].forEach(id => {
        const el = $(id);
        if (!el) return;
        el.innerHTML = "";
        AVATARS.forEach(av => {
            const btn = document.createElement("button");
            btn.className = "avatar-opt" + (av === selectedAvatar ? " selected" : "");
            btn.textContent = av;
            btn.onclick = () => {
                selectedAvatar = av;
                document.querySelectorAll(".avatar-opt").forEach(b => b.classList.remove("selected"));
                document.querySelectorAll(".avatar-opt").forEach(b => { if(b.textContent === av) b.classList.add("selected"); });
                if (id === "profile-avatar-grid") {
                    $("profile-avatar-display").textContent = av;
                    saveProfile({ avatar: av });
                }
            };
            el.appendChild(btn);
        });
    });
}

// ===== AUTH =====
loginTab.onclick = () => { loginTab.classList.add("active"); signupTab.classList.remove("active"); loginForm.classList.remove("hidden"); signupForm.classList.add("hidden"); authError.classList.add("hidden"); };
signupTab.onclick = () => { signupTab.classList.add("active"); loginTab.classList.remove("active"); signupForm.classList.remove("hidden"); loginForm.classList.add("hidden"); authError.classList.add("hidden"); };

loginBtn.onclick = async () => {
    const email = $("login-email").value.trim();
    const pass = $("login-password").value;
    if (!email || !pass) return showAuthError("Please fill in all fields.");
    try {
        await auth.signInWithEmailAndPassword(email, pass);
        authOverlay.classList.add("hidden");
    } catch(e) { showAuthError(e.message); }
};

signupBtn.onclick = async () => {
    const username = $("signup-username").value.trim();
    const email = $("signup-email").value.trim();
    const pass = $("signup-password").value;
    if (!username || !email || !pass) return showAuthError("Please fill in all fields.");
    if (pass.length < 6) return showAuthError("Password must be at least 6 characters.");
    try {
        const cred = await auth.createUserWithEmailAndPassword(email, pass);
        const uid = cred.user.uid;
        const profile = {
            username, email, avatar: selectedAvatar,
            xp: 0, coins: 0, level: 1,
            totalGames: 0, totalCorrect: 0, totalAnswered: 0,
            bestStreak: 0, perfectGames: 0, dailyCompleted: 0,
            totalCoins: 0, endlessRecord: 0,
            achievements: [], categoryStats: {},
            recentGames: [], friends: [], divisionPts: 0,
            weeklyXp: 0, createdAt: Date.now()
        };
        await db.collection("users").doc(uid).set(profile);
        currentUser = cred.user;
        userProfile = profile;
        authOverlay.classList.add("hidden");
        updateUI();
    } catch(e) { showAuthError(e.message); }
};

guestBtn.onclick = () => {
    currentUser = null;
    userProfile = {
        username: "Guest", avatar: "😎", xp: 0, coins: 0, level: 1,
        totalGames: 0, totalCorrect: 0, totalAnswered: 0,
        bestStreak: 0, perfectGames: 0, dailyCompleted: 0,
        totalCoins: 0, endlessRecord: 0,
        achievements: [], categoryStats: {}, recentGames: [],
        friends: [], divisionPts: 0, weeklyXp: 0
    };
    authOverlay.classList.add("hidden");
    updateUI();
};

logoutBtn.onclick = async () => {
    if (currentUser) await auth.signOut();
    location.reload();
};

function showAuthError(msg) {
    authError.textContent = msg;
    authError.classList.remove("hidden");
}

async function loadUserProfile(uid) {
    try {
        const doc = await db.collection("users").doc(uid).get();
        if (doc.exists) {
            userProfile = doc.data();
        } else {
            userProfile = { username: "Player", avatar: "😎", xp: 0, coins: 0, level: 1, totalGames: 0, totalCorrect: 0, totalAnswered: 0, bestStreak: 0, perfectGames: 0, dailyCompleted: 0, totalCoins: 0, endlessRecord: 0, achievements: [], categoryStats: {}, recentGames: [], friends: [], divisionPts: 0, weeklyXp: 0 };
        }
        authOverlay.classList.add("hidden");
        updateUI();
    } catch(e) {
        console.error(e);
        authOverlay.classList.add("hidden");
        updateUI();
    }
}

async function saveProfile(updates) {
    if (!userProfile) return;
    Object.assign(userProfile, updates);
    if (currentUser) {
        try { await db.collection("users").doc(currentUser.uid).update(updates); } catch(e) {}
    }
    updateUI();
}

// ===== NAVIGATION =====
function setupNav() {
    navButtons.forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.view)));
    document.querySelectorAll("[data-view]").forEach(el => {
        if (!el.classList.contains("nav-btn")) {
            el.addEventListener("click", () => showView(el.dataset.view));
        }
    });
    $("go-home-btn").onclick = () => { closeModal("gameover-modal"); showView("home-view"); };
    $("play-again-btn").onclick = () => { closeModal("gameover-modal"); if(currentCategory) startQuiz(); };
    $("daily-play-btn").onclick = () => { isDaily = true; showView("play-view"); startQuiz("daily"); };
}

function showView(id) {
    views.forEach(v => v.classList.add("hidden"));
    $(id).classList.remove("hidden");
    navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.view === id));
    currentView = id;
    if (id === "home-view") updateHomeView();
    if (id === "leaderboard-view") loadLeaderboard();
    if (id === "profile-view") updateProfileView();
    if (id === "stats-view") updateStatsView();
    if (id === "shop-view") renderShop();
    if (id === "social-view") loadFriends();
}

// ===== THEME =====
function applyTheme() {
    const theme = localStorage.getItem("theme") || "dark";
    if (theme === "light") { document.body.classList.add("light"); darkToggle.checked = true; }
}
function setupSettings() {
    darkToggle.addEventListener("change", () => {
        document.body.classList.toggle("light", darkToggle.checked);
        localStorage.setItem("theme", darkToggle.checked ? "light" : "dark");
    });
    $("large-text-toggle").addEventListener("change", e => document.body.classList.toggle("large-text", e.target.checked));
    $("colourblind-toggle").addEventListener("change", e => document.body.classList.toggle("colourblind", e.target.checked));
    $("reset-leaderboard-btn").onclick = () => { if(confirm("Reset leaderboard?")) { rtdb.ref("leaderboard").remove(); showToast("Leaderboard reset!"); }};
    $("reset-xp-btn").onclick = () => { if(confirm("Reset all stats?")) { saveProfile({ xp:0,coins:0,totalGames:0,totalCorrect:0,totalAnswered:0,bestStreak:0,perfectGames:0,achievements:[],recentGames:[],categoryStats:{},divisionPts:0 }); showToast("Stats reset!"); }};
}

// ===== UI UPDATE =====
function updateUI() {
    if (!userProfile) return;
    userPill.textContent = userProfile.avatar + " " + userProfile.username;
    xpValueEl.textContent = userProfile.xp || 0;
    coinValueEl.textContent = userProfile.coins || 0;
    selectedAvatar = userProfile.avatar || "😎";
}

function updateHomeView() {
    if (!userProfile) return;
    $("home-games").textContent = userProfile.totalGames || 0;
    const acc = userProfile.totalAnswered > 0 ? Math.round((userProfile.totalCorrect/userProfile.totalAnswered)*100) : 0;
    $("home-accuracy").textContent = acc + "%";
    $("home-streak").textContent = userProfile.bestStreak || 0;
    const recentGames = userProfile.recentGames || [];
    $("home-score").textContent = recentGames.length > 0 ? Math.max(...recentGames.map(g=>g.score)) : 0;
    // Recent games list
    const rgl = $("recent-games-list");
    if (recentGames.length === 0) { rgl.innerHTML = '<p class="muted">No games yet. Start playing!</p>'; }
    else {
        rgl.innerHTML = recentGames.slice(-3).reverse().map(g =>
            `<div class="recent-game-row">
                <span>${g.category}</span>
                <span style="color:var(--accent);font-weight:600">${g.score} pts</span>
                <span style="color:var(--fg-muted);font-size:12px">${g.accuracy}% acc</span>
            </div>`
        ).join("");
    }
    // Division
    const pts = userProfile.divisionPts || 0;
    const div = getDivision(pts);
    $("division-display").textContent = div.label;
    $("division-fill").style.width = div.pct + "%";
    $("division-pts").textContent = `${pts % 100} / 100 pts to ${div.next}`;
    // Latest achievement
    const achs = userProfile.achievements || [];
    const latestAch = $("latest-ach");
    if (achs.length === 0) { latestAch.innerHTML = '<p class="muted">No achievements yet!</p>'; }
    else {
        const last = ACHIEVEMENTS.find(a => a.id === achs[achs.length-1]);
        if (last) latestAch.innerHTML = `<div style="font-size:32px">${last.icon}</div><div style="font-weight:600">${last.name}</div><div style="font-size:12px;color:var(--fg-muted)">${last.desc}</div>`;
    }
}

function updateProfileView() {
    if (!userProfile) return;
    $("profile-avatar-display").textContent = userProfile.avatar || "😎";
    $("profile-username").textContent = userProfile.username || "Guest";
    $("profile-rank").textContent = getDivision(userProfile.divisionPts||0).label;
    const lvl = getLevel(userProfile.xp||0);
    $("profile-level").textContent = lvl;
    $("profile-title-badge").textContent = getTitle(lvl);
    const xpForLevel = lvl * 100;
    const xpProgress = (userProfile.xp||0) % 100;
    $("level-fill").style.width = (xpProgress) + "%";
    $("level-xp-label").textContent = `${xpProgress} / 100 XP`;
    $("profile-xp").textContent = userProfile.xp || 0;
    $("profile-games").textContent = userProfile.totalGames || 0;
    const acc = userProfile.totalAnswered > 0 ? Math.round((userProfile.totalCorrect/userProfile.totalAnswered)*100) : 0;
    $("profile-accuracy").textContent = acc + "%";
    $("profile-best-streak").textContent = userProfile.bestStreak || 0;
    renderAchievements();
    buildAvatarGrids();
}

function updateStatsView() {
    if (!userProfile) return;
    $("st-games").textContent = userProfile.totalGames || 0;
    $("st-correct").textContent = userProfile.totalCorrect || 0;
    const acc = userProfile.totalAnswered > 0 ? Math.round((userProfile.totalCorrect/userProfile.totalAnswered)*100) : 0;
    $("st-accuracy").textContent = acc + "%";
    $("st-streak").textContent = userProfile.bestStreak || 0;
    $("st-xp").textContent = userProfile.xp || 0;
    $("st-coins").textContent = userProfile.totalCoins || 0;
    // Category stats
    const catStats = userProfile.categoryStats || {};
    const catEl = $("category-stats");
    catEl.innerHTML = Object.entries(catStats).map(([cat, data]) => {
        const pct = data.total > 0 ? Math.round((data.correct/data.total)*100) : 0;
        return `<div class="category-stat-row">
            <span class="cat-name">${cat}</span>
            <div class="cat-bar-wrap"><div class="cat-bar" style="width:${pct}%"></div></div>
            <span class="cat-pct">${pct}%</span>
        </div>`;
    }).join("") || '<p class="muted">No category data yet.</p>';
    // Recent games
    const rg = $("recent-games-full");
    const games = (userProfile.recentGames || []).slice().reverse();
    rg.innerHTML = games.map(g =>
        `<div class="recent-game-row">
            <span>${g.category}</span>
            <span>${g.mode || "classic"}</span>
            <span style="color:var(--accent);font-weight:600">${g.score} pts</span>
            <span>${g.accuracy}% acc</span>
            <span style="color:var(--fg-muted);font-size:12px">${new Date(g.date).toLocaleDateString()}</span>
        </div>`
    ).join("") || '<p class="muted">No games yet.</p>';
}

// ===== LEVELS & DIVISIONS =====
function getLevel(xp) { return Math.floor((xp || 0) / 100) + 1; }
function getTitle(lvl) {
    if (lvl >= 20) return "🏆 Grandmaster";
    if (lvl >= 15) return "💎 Diamond";
    if (lvl >= 10) return "👑 Legend";
    if (lvl >= 7)  return "⚡ Elite";
    if (lvl >= 5)  return "🔥 Expert";
    if (lvl >= 3)  return "📚 Scholar";
    return "🌱 Rookie";
}
function getDivision(pts) {
    const divs = ["🥉 Bronze","🥈 Silver","🥇 Gold","💎 Diamond","👑 Legend"];
    const nextDivs = ["Silver","Gold","Diamond","Legend","MAX"];
    const idx = Math.min(Math.floor(pts / 100), 4);
    return { label: divs[idx], next: nextDivs[idx], pct: pts % 100 };
}

// ===== PLAY =====
function setupPlayView() {
    renderCategoryButtons();
    $("random-mode-btn").onclick = () => {
        randomMode = !randomMode;
        $("random-mode-btn").textContent = `🔀 Random: ${randomMode ? "ON" : "OFF"}`;
    };
    document.querySelectorAll(".mode-card").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".mode-card").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMode = btn.dataset.mode;
        };
    });
    setupPowerups();
    document.querySelectorAll(".lb-tab").forEach(t => t.onclick = () => { document.querySelectorAll(".lb-tab").forEach(x=>x.classList.remove("active")); t.classList.add("active"); loadLeaderboard(t.dataset.lb); });
    document.querySelectorAll(".shop-tab").forEach(t => t.onclick = () => { document.querySelectorAll(".shop-tab").forEach(x=>x.classList.remove("active")); t.classList.add("active"); renderShop(t.dataset.shop); });
    document.querySelectorAll(".social-tab").forEach(t => t.onclick = () => { document.querySelectorAll(".social-tab").forEach(x=>x.classList.remove("active")); t.classList.add("active"); showSocialPanel(t.dataset.social); });
}
setupPlayView();

function renderCategoryButtons() {
    const container = $("category-buttons");
    container.innerHTML = "";
    Object.keys(quizData).forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.onclick = () => { currentCategory = cat; isDaily = false; startQuiz(); };
        container.appendChild(btn);
    });
}

function setupPowerups() {
    $("pu-5050").onclick = () => usePowerup("5050");
    $("pu-skip").onclick = () => usePowerup("skip");
    $("pu-time").onclick = () => usePowerup("time");
    $("pu-hint").onclick = () => usePowerup("hint");
}

let powerupCounts = { "5050": 2, skip: 1, time: 2, hint: 2 };
function usePowerup(type) {
    if (!acceptingAnswers || powerupCounts[type] <= 0) return;
    const q = questions[currentIndex];
    if (type === "5050") {
        const wrong = [...document.querySelectorAll(".answer-btn")].filter((_,i) => i !== q.c);
        let removed = 0;
        wrong.forEach(btn => { if(removed < 2) { btn.disabled = true; btn.style.opacity = "0.3"; removed++; } });
    } else if (type === "skip") {
        clearTimer(); handleNext();
    } else if (type === "time") {
        timeLeft = Math.min(timeLeft + 10, 30);
        $("timer-value").textContent = timeLeft;
    } else if (type === "hint") {
        const hintBox = $("hint-box");
        hintBox.textContent = "💡 Hint: The answer starts with '" + q.a[q.c][0] + "' and has " + q.a[q.c].length + " characters.";
        hintBox.classList.remove("hidden");
    }
    powerupCounts[type]--;
    $(`pu-${type}-count`).textContent = `x${powerupCounts[type]}`;
    if (powerupCounts[type] <= 0) $(`pu-${type}`).disabled = true;
}

function startQuiz(mode) {
    if (mode === "daily") {
        const seed = new Date().toDateString();
        const allQ = Object.values(quizData).flat();
        questions = seededShuffle(allQ, seed).slice(0, 10);
        currentCategory = "Daily Challenge";
    } else if (currentMode === "truefalse") {
        questions = [...trueFalseData].map(tf => ({
            q: tf.q, a: tf.a ? ["True","False"] : ["False","True"],
            c: tf.a ? 0 : 0, exp: tf.exp
        }));
        if (randomMode) questions.sort(() => Math.random() - 0.5);
    } else {
        questions = [...(quizData[currentCategory] || [])];
        if (randomMode) questions.sort(() => Math.random() - 0.5);
        if (currentMode === "classic") questions = questions.slice(0, 10);
        if (currentMode === "blitz") questions = questions.slice(0, 10);
    }
    currentIndex = 0; score = 0; correctCount = 0; totalAnswered = 0;
    streak = 0; bestStreakThisGame = 0; lives = 3;
    xpThisGame = 0; coinsThisGame = 0; spinUsed = false;
    powerupCounts = { "5050": 2, skip: 1, time: 2, hint: 2 };
    ["pu-5050","pu-skip","pu-time","pu-hint"].forEach(id => { $(id).disabled = false; });
    $("pu-5050-count").textContent = "x2"; $("pu-skip-count").textContent = "x1";
    $("pu-time-count").textContent = "x2"; $("pu-hint-count").textContent = "x2";
    updateHUD();
    $("start-screen").classList.add("hidden");
    $("quiz-container").classList.add("hidden");
    $("loader").classList.remove("hidden");
    setTimeout(() => {
        $("loader").classList.add("hidden");
        $("typing-indicator").classList.remove("hidden");
        setTimeout(() => {
            $("typing-indicator").classList.add("hidden");
            $("quiz-container").classList.remove("hidden");
            showQuestion();
        }, 600);
    }, 700);
}

function showQuestion() {
    if (currentMode !== "endless" && currentIndex >= questions.length) { endGame(); return; }
    if (currentMode === "endless" && questions.length > 0 && currentIndex >= questions.length) {
        const allQ = Object.values(quizData).flat();
        const extra = allQ.sort(() => Math.random()-0.5).slice(0, 10);
        questions.push(...extra);
    }
    acceptingAnswers = true;
    const q = questions[currentIndex];
    $("hint-box").classList.add("hidden");
    $("explanation-box").classList.add("hidden");
    $("next-btn").classList.add("hidden");
    $("q-category-tag").textContent = currentCategory || "Quiz";
    $("q-counter").textContent = currentMode === "endless" ? `Q ${currentIndex+1}` : `Q ${currentIndex+1}/${questions.length}`;
    $("question").textContent = q.q || q.question;
    const answersEl = $("answers");
    answersEl.innerHTML = "";
    const answers = q.a || q.answers;
    answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = ans;
        btn.onclick = () => handleAnswer(i);
        answersEl.appendChild(btn);
    });
    const pct = questions.length > 0 ? ((currentIndex / questions.length) * 100) : 0;
    $("progress-fill").style.width = pct + "%";
    startTimer();
}

function startTimer() {
    clearTimer();
    if (!timerToggle.checked) { $("timer-value").textContent = "∞"; return; }
    timeLeft = currentMode === "blitz" ? 5 : 20;
    $("timer-value").textContent = timeLeft;
    timerId = setInterval(() => {
        timeLeft--;
        $("timer-value").textContent = timeLeft;
        if (timeLeft <= 0) { clearTimer(); timeUp(); }
    }, 1000);
}

function clearTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

function timeUp() {
    acceptingAnswers = false;
    streak = 0;
    $("streak-value").textContent = 0;
    totalAnswered++;
    const q = questions[currentIndex];
    const correct = q.c !== undefined ? q.c : q.correct;
    document.querySelectorAll(".answer-btn").forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.classList.add("correct");
    });
    if (currentMode === "sudden") { endGame(); return; }
    lives--;
    updateHUD();
    if (lives <= 0) { endGame(); return; }
    showExplanation(q);
    $("next-btn").classList.remove("hidden");
    beep(200, 300);
}

function handleAnswer(selectedIndex) {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    clearTimer();
    const q = questions[currentIndex];
    const correct = q.c !== undefined ? q.c : q.correct;
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach(btn => btn.disabled = true);
    totalAnswered++;
    if (selectedIndex === correct) {
        buttons[selectedIndex].classList.add("correct");
        correctCount++;
        streak++;
        bestStreakThisGame = Math.max(bestStreakThisGame, streak);
        const xpGain = currentMode === "blitz" ? 20 : currentMode === "hard" ? 20 : 10;
        const coinGain = streak >= 5 ? 3 : 1;
        xpThisGame += xpGain;
        coinsThisGame += coinGain;
        score += xpGain + (streak > 1 ? streak * 2 : 0);
        $("play-xp").textContent = xpThisGame;
        beep(600, 100);
        showToast(streak >= 5 ? `🔥 ${streak} streak! +${xpGain} XP` : `+${xpGain} XP`);
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[correct].classList.add("correct");
        streak = 0;
        lives--;
        if (shakeToggle.checked) document.querySelector(".bubble").classList.add("shake");
        setTimeout(() => document.querySelector(".bubble").classList.remove("shake"), 400);
        beep(200, 200);
        if (currentMode === "sudden" || lives <= 0) {
            updateHUD();
            showExplanation(q);
            setTimeout(() => endGame(), 1500);
            return;
        }
    }
    $("streak-value").textContent = streak;
    updateHUD();
    showExplanation(q);
    $("next-btn").classList.remove("hidden");
}

function showExplanation(q) {
    if (!explanationToggle.checked) return;
    const exp = q.exp || q.explanation;
    if (!exp) return;
    $("explanation-box").textContent = "📖 " + exp;
    $("explanation-box").classList.remove("hidden");
}

$("next-btn").onclick = handleNext;
function handleNext() {
    currentIndex++;
    if (currentMode !== "endless" && currentIndex >= questions.length) { endGame(); return; }
    showQuestion();
}

function updateHUD() {
    $("streak-value").textContent = streak;
    const livesArr = ["","❤️","❤️❤️","❤️❤️❤️"];
    $("lives-display").textContent = livesArr[Math.max(0,lives)] || "💀";
}

function endGame() {
    clearTimer();
    $("progress-fill").style.width = "100%";
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    $("go-score").textContent = score;
    $("go-streak").textContent = bestStreakThisGame;
    $("go-accuracy").textContent = accuracy + "%";
    $("go-xp").textContent = "+" + xpThisGame;
    $("go-coins").textContent = "+" + coinsThisGame;
    const isPerfect = accuracy === 100 && totalAnswered >= 5;
    $("gameover-title").textContent = isPerfect ? "Perfect! 🌟" : score > 80 ? "Great Job! 🎉" : "Game Over!";
    if (isPerfect) launchConfetti();
    $("gameover-modal").classList.remove("hidden");
    updateUserStats(accuracy, isPerfect);
}

async function updateUserStats(accuracy, isPerfect) {
    if (!userProfile) return;
    const recentGame = {
        category: currentCategory || "Mixed",
        mode: currentMode,
        score, accuracy,
        streak: bestStreakThisGame,
        date: Date.now()
    };
    const catStats = userProfile.categoryStats || {};
    const cat = currentCategory || "Mixed";
    if (!catStats[cat]) catStats[cat] = { correct: 0, total: 0 };
    catStats[cat].correct += correctCount;
    catStats[cat].total += totalAnswered;
    const recentGames = [...(userProfile.recentGames || []), recentGame].slice(-20);
    const oldLevel = getLevel(userProfile.xp || 0);
    const updates = {
        xp: (userProfile.xp || 0) + xpThisGame,
        coins: (userProfile.coins || 0) + coinsThisGame,
        totalGames: (userProfile.totalGames || 0) + 1,
        totalCorrect: (userProfile.totalCorrect || 0) + correctCount,
        totalAnswered: (userProfile.totalAnswered || 0) + totalAnswered,
        bestStreak: Math.max(userProfile.bestStreak || 0, bestStreakThisGame),
        perfectGames: (userProfile.perfectGames || 0) + (isPerfect ? 1 : 0),
        totalCoins: (userProfile.totalCoins || 0) + coinsThisGame,
        divisionPts: Math.min((userProfile.divisionPts || 0) + Math.floor(score / 10), 500),
        weeklyXp: (userProfile.weeklyXp || 0) + xpThisGame,
        categoryStats: catStats,
        recentGames
    };
    if (currentMode === "endless") {
        updates.endlessRecord = Math.max(userProfile.endlessRecord || 0, currentIndex);
    }
    if (isDaily) updates.dailyCompleted = (userProfile.dailyCompleted || 0) + 1;
    await saveProfile(updates);
    const newLevel = getLevel(updates.xp);
    if (newLevel > oldLevel) {
        setTimeout(() => {
            $("levelup-num").textContent = newLevel;
            $("levelup-reward").textContent = `New title: ${getTitle(newLevel)}!`;
            $("levelup-modal").classList.remove("hidden");
        }, 800);
    }
    checkAchievements();
    uploadScore();
}

async function uploadScore() {
    if (!currentUser || !userProfile) return;
    try {
        await rtdb.ref("leaderboard/" + currentUser.uid).set({
            username: userProfile.username,
            avatar: userProfile.avatar,
            xp: userProfile.xp || 0,
            totalGames: userProfile.totalGames || 0
        });
        await rtdb.ref("weekly/" + currentUser.uid).set({
            username: userProfile.username,
            avatar: userProfile.avatar,
            weeklyXp: userProfile.weeklyXp || 0
        });
    } catch(e) {}
}

// ===== LEADERBOARD =====
async function loadLeaderboard(type = "global") {
    const content = $("leaderboard-content");
    content.innerHTML = '<p class="muted">Loading...</p>';
    try {
        const ref = type === "weekly" ? rtdb.ref("weekly") : rtdb.ref("leaderboard");
        const snap = await ref.orderByChild(type === "weekly" ? "weeklyXp" : "xp").limitToLast(20).once("value");
        const data = snap.val();
        if (!data) { content.innerHTML = '<p class="muted">No data yet. Be the first!</p>'; return; }
        const entries = Object.values(data).sort((a,b) => (b.xp||b.weeklyXp||0)-(a.xp||a.weeklyXp||0));
        const medals = ["🥇","🥈","🥉"];
        const classes = ["gold","silver","bronze"];
        content.innerHTML = entries.map((e,i) => `
            <div class="lb-row ${classes[i]||''}">
                <span class="lb-rank">${medals[i]||"#"+(i+1)}</span>
                <span class="lb-avatar">${e.avatar||"😎"}</span>
                <span class="lb-name">${e.username||"Player"}</span>
                <span class="lb-score">${e.xp||e.weeklyXp||0} XP</span>
            </div>`
        ).join("");
    } catch(e) { content.innerHTML = '<p class="muted">Could not load leaderboard.</p>'; }
}

// ===== SHOP =====
const SHOP_ITEMS = {
    powerups: [
        { id: "buy5050", icon: "✂️", name: "50/50 x3", desc: "Remove 2 wrong answers", price: 50 },
        { id: "buySkip", icon: "⏭", name: "Skip x3", desc: "Skip a question", price: 30 },
        { id: "buyTime", icon: "⏳", name: "+Time x3", desc: "Add 10 seconds", price: 40 },
        { id: "buyHint", icon: "💡", name: "Hint x3", desc: "Get a letter hint", price: 25 }
    ],
    avatars: AVATARS.map((av, i) => ({ id: "av"+i, icon: av, name: av+" Avatar", desc: "Use as your profile avatar", price: i < 5 ? 0 : 100 })),
    themes: [
        { id: "theme_dark", icon: "🌙", name: "Dark Mode", desc: "Classic dark theme", price: 0 },
        { id: "theme_light", icon: "☀️", name: "Light Mode", desc: "Classic light theme", price: 0 },
        { id: "theme_neon", icon: "🌈", name: "Neon Theme", desc: "Coming soon!", price: 500 }
    ]
};
function setupShop() {}
function renderShop(type = "powerups") {
    $("shop-coins").textContent = userProfile?.coins || 0;
    const items = SHOP_ITEMS[type] || SHOP_ITEMS.powerups;
    $("shop-content").innerHTML = items.map(item => `
        <div class="shop-item">
            <div class="shop-item-icon">${item.icon}</div>
            <div class="shop-item-name">${item.name}</div>
            <div class="shop-item-desc">${item.desc}</div>
            <div class="shop-item-price">🪙 ${item.price}</div>
            <button class="primary-btn" onclick="buyItem('${item.id}',${item.price})">${item.price === 0 ? "Free" : "Buy"}</button>
        </div>`
    ).join("");
}
function buyItem(id, price) {
    if (!userProfile) return;
    if ((userProfile.coins||0) < price) { showToast("Not enough coins! 🪙"); return; }
    if (id.startsWith("buy")) {
        const type = id.replace("buy","").toLowerCase();
        const map = { "5050": "5050", "skip": "skip", "time": "time", "hint": "hint" };
        const t = map[type] || type;
        powerupCounts[t] = (powerupCounts[t]||0) + 3;
        if ($(`pu-${t}-count`)) $(`pu-${t}-count`).textContent = `x${powerupCounts[t]}`;
    }
    saveProfile({ coins: (userProfile.coins||0) - price });
    $("shop-coins").textContent = userProfile.coins;
    showToast("Purchased! 🎉");
}

// ===== SOCIAL =====
async function loadFriends() {
    if (!currentUser || !userProfile) { $("friends-list").innerHTML = '<p class="muted">Login to use social features.</p>'; return; }
    const friendIds = userProfile.friends || [];
    if (friendIds.length === 0) { $("friends-list").innerHTML = '<p class="muted">No friends yet!</p>'; return; }
    $("friends-list").innerHTML = "";
    for (const fid of friendIds) {
        try {
            const doc = await db.collection("users").doc(fid).get();
            if (doc.exists) {
                const f = doc.data();
                $("friends-list").innerHTML += `
                    <div class="friend-row">
                        <span class="friend-avatar">${f.avatar||"😎"}</span>
                        <span class="friend-name">${f.username}</span>
                        <span class="friend-status">Lvl ${getLevel(f.xp||0)} · ${f.xp||0} XP</span>
                        <button class="secondary-btn challenge-btn">Challenge</button>
                    </div>`;
            }
        } catch(e) {}
    }
}
function showSocialPanel(panel) {
    $("friends-panel").classList.add("hidden");
    $("add-panel").classList.add("hidden");
    $("challenges-panel").classList.add("hidden");
    $(`${panel}-panel`).classList.remove("hidden");
}
$("friend-search-btn").onclick = async () => {
    const q = $("friend-search").value.trim().toLowerCase();
    if (!q) return;
    const results = $("friend-results");
    results.innerHTML = "<p class='muted'>Searching...</p>";
    try {
        const snap = await db.collection("users").where("username","==",q).get();
        if (snap.empty) { results.innerHTML = "<p class='muted'>No user found.</p>"; return; }
        results.innerHTML = "";
        snap.forEach(doc => {
            const u = doc.data();
            results.innerHTML += `
                <div class="friend-row">
                    <span class="friend-avatar">${u.avatar||"😎"}</span>
                    <span class="friend-name">${u.username}</span>
                    <button class="primary-btn" style="padding:6px 14px;font-size:13px" onclick="addFriend('${doc.id}')">Add Friend</button>
                </div>`;
        });
    } catch(e) { results.innerHTML = "<p class='muted'>Error searching.</p>"; }
};
async function addFriend(uid) {
    if (!currentUser) return;
    const friends = [...(userProfile.friends||[])];
    if (!friends.includes(uid)) friends.push(uid);
    await saveProfile({ friends });
    showToast("Friend added! 👥");
}

// ===== ACHIEVEMENTS =====
function checkAchievements() {
    if (!userProfile) return;
    const unlocked = userProfile.achievements || [];
    ACHIEVEMENTS.forEach(ach => {
        if (!unlocked.includes(ach.id) && ach.condition(userProfile)) {
            unlocked.push(ach.id);
            saveProfile({ achievements: unlocked });
            setTimeout(() => {
                $("ach-icon").textContent = ach.icon;
                $("ach-name").textContent = ach.name;
                $("ach-desc").textContent = ach.desc;
                $("achievement-modal").classList.remove("hidden");
            }, 1200);
        }
    });
}
function renderAchievements() {
    const unlocked = userProfile?.achievements || [];
    $("ach-count").textContent = unlocked.length;
    $("ach-total").textContent = ACHIEVEMENTS.length;
    $("achievements-grid").innerHTML = ACHIEVEMENTS.map(a => `
        <div class="ach-card ${unlocked.includes(a.id) ? "unlocked" : "locked"}">
            <span class="ach-icon">${a.icon}</span>
            <div class="ach-info">
                <span class="ach-name">${a.name}</span>
                <span class="ach-desc">${a.desc}</span>
            </div>
        </div>`
    ).join("");
}

// ===== DAILY TIMER =====
function startDailyTimer() {
    function update() {
        const now = new Date();
        const midnight = new Date(); midnight.setHours(24,0,0,0);
        const diff = midnight - now;
        const h = Math.floor(diff/3600000).toString().padStart(2,"0");
        const m = Math.floor((diff%3600000)/60000).toString().padStart(2,"0");
        const s = Math.floor((diff%60000)/1000).toString().padStart(2,"0");
        $("daily-timer").textContent = `${h}:${m}:${s}`;
    }
    update(); setInterval(update, 1000);
}

// ===== CONFETTI =====
function launchConfetti() {
    const canvas = $("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const particles = Array.from({length:150}, () => ({
        x: Math.random()*canvas.width, y: -10,
        r: Math.random()*6+3, d: Math.random()*150,
        color: `hsl(${Math.random()*360},80%,60%)`,
        tilt: Math.random()*10-10, speed: Math.random()*3+1
    }));
    let frame = 0;
    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle = p.color; ctx.fill();
            p.y += p.speed; p.tilt += 0.1;
            p.x += Math.sin(frame/10+p.d)*2;
        });
        frame++;
        if (frame < 200) requestAnimationFrame(draw);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    draw();
}

// ===== SOUND =====
function beep(freq=500, dur=120) {
    if (!soundToggle.checked) return;
    try {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = freq; gain.gain.value = 0.15;
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + dur/1000);
    } catch(e) {}
}

// ===== TOAST =====
function showToast(msg, duration=2000) {
    const toast = $("toast");
    toast.textContent = msg;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), duration);
}

// ===== MODAL =====
function closeModal(id) { $(id).classList.add("hidden"); }

// ===== SEEDED SHUFFLE =====
function seededShuffle(arr, seed) {
    let hash = 0;
    for(let i=0;i<seed.length;i++) hash = ((hash<<5)-hash)+seed.charCodeAt(i);
    const rng = () => { hash ^= hash<<13; hash ^= hash>>17; hash ^= hash<<5; return Math.abs(hash)/2147483647; };
    const a = [...arr];
    for(let i=a.length-1;i>0;i--) { const j=Math.floor(rng()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
}

// ===== SPIN WHEEL =====
const WHEEL_PRIZES = ["🪙 50 Coins","⚡ 30 XP","✂️ 50/50","💡 Hint x2","⏳ +Time x2","🪙 100 Coins","⚡ 50 XP","🎯 Skip x2"];
function drawWheel(rotation=0) {
    const canvas = $("wheel-canvas");
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    const cx = 140, cy = 140, r = 130;
    const slices = WHEEL_PRIZES.length;
    const arc = (Math.PI*2)/slices;
    const colors = ["#2563eb","#7c3aed","#db2777","#ea580c","#16a34a","#0891b2","#d97706","#dc2626"];
    ctx.clearRect(0,0,280,280);
    WHEEL_PRIZES.forEach((prize,i) => {
        const angle = arc*i+rotation;
        ctx.beginPath(); ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,r,angle,angle+arc);
        ctx.fillStyle = colors[i%colors.length]; ctx.fill();
        ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();
        ctx.save(); ctx.translate(cx,cy);
        ctx.rotate(angle+arc/2);
        ctx.textAlign = "right"; ctx.fillStyle = "#fff";
        ctx.font = "bold 11px Poppins";
        ctx.fillText(prize, r-10, 5);
        ctx.restore();
    });
}
function showSpinWheel() {
    if (spinUsed) { showToast("Already spun this game!"); return; }
    $("spin-modal").classList.remove("hidden");
    drawWheel();
    $("spin-result").textContent = "";
    $("spin-btn").disabled = false;
}
$("spin-btn").onclick = () => {
    spinUsed = true;
    $("spin-btn").disabled = true;
    const totalRotation = Math.PI*2*5 + Math.random()*Math.PI*2;
    let current = 0; const duration = 3000; const start = performance.now();
    function animate(now) {
        const elapsed = now-start;
        const t = Math.min(elapsed/duration,1);
        const ease = 1-Math.pow(1-t,3);
        current = totalRotation*ease;
        drawWheel(current);
        if(t<1) { requestAnimationFrame(animate); return; }
        const finalAngle = current % (Math.PI*2);
        const arc = (Math.PI*2)/WHEEL_PRIZES.length;
        const prizeIndex = Math.floor(((Math.PI*2 - finalAngle) % (Math.PI*2)) / arc) % WHEEL_PRIZES.length;
        const prize = WHEEL_PRIZES[prizeIndex];
        $("spin-result").textContent = "You won: " + prize + "!";
        applyWheelPrize(prize);
    }
    requestAnimationFrame(animate);
};
function applyWheelPrize(prize) {
    if (prize.includes("Coins")) {
        const amount = parseInt(prize); saveProfile({ coins: (userProfile.coins||0)+amount });
    } else if (prize.includes("XP")) {
        const amount = parseInt(prize); saveProfile({ xp: (userProfile.xp||0)+amount });
    } else if (prize.includes("50/50")) { powerupCounts["5050"]++; }
    else if (prize.includes("Hint")) { powerupCounts.hint += 2; }
    else if (prize.includes("Time")) { powerupCounts.time += 2; }
    else if (prize.includes("Skip")) { powerupCounts.skip += 2; }
    showToast("🎡 " + prize + " claimed!");
}
