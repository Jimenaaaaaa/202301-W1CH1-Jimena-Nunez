const enter = document.querySelector(".enter");
const input = document.getElementById("typedAnswer");
const buttonPasa = document.querySelector(".buttonPasa");
const start = document.querySelector(".start");
let userName = document.getElementById("userName");
const exit = document.querySelector(".exit");
let header = document.getElementById("header");
let asking = document.getElementById("asking");
let typedAnswer = document.getElementById("typedAnswer");

let correctSound = document.querySelector("#audio");
let incorrectSound = document.querySelector("#audio2");
let gameSound = document.querySelector("#prueba");

let intro = document.getElementById("intro-bg");
let outro = document.getElementById("outro-bg");
intro.hidden = false;
const timer1 = document.getElementById("timer1");
let timeText = document.getElementById("timeText");

let letter = Array.from(document.getElementsByClassName("letter"));
let myVariable = "newSource";

gameSound.volume = 0.05;
gameSound.loop = true;
correctSound.volume = 0.1;
incorrectSound.volume = 0.1;

typedAnswer.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    enter.click();
  }
});

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question: "Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question: "Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let points = 0;
let username;
let id = 0;
let showTime;

const gameTime = 130;
let time1;
let time2;

const getTime1 = () => {
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  time1 = minutes + seconds / 60;
};

const getTime2 = () => {
  let minutes2 = new Date().getMinutes();
  let seconds2 = new Date().getSeconds();
  time2 = minutes2 + seconds2 / 60;
};

let ranking = [
  { name: "Dinky Winky", points: 27 },
  { name: "Dipsie", points: 20 },
  { name: "Lala", points: 11 },
  { name: "Po", points: 5 },
];

let notFinished;

header.innerText = `con la letra: "${questions[id].letter}"`;
asking.innerText = questions[id].question;
enter.disabled = false;
buttonPasa.disabled = false;

const checkFinish = () => {
  notFinished = questions.some((element) => {
    if (element.status === 0) {
      return true;
    }
    return false;
  });
};

const nextQuestion = () => {
  if (
    questions[id].letter === "ñ" ||
    questions[id].letter === "w" ||
    questions[id].letter === "x" ||
    questions[id].letter === "y"
  ) {
    header.innerText = `contiene la letra: "${questions[id].letter}"`;
  } else {
    header.innerText = `con la letra: "${questions[id].letter}"`;
  }
  asking.innerText = questions[id].question;
};

const exitgame = () => {
  enter.disabled = true;
  buttonPasa.disabled = true;
  header.innerText = "Vaya ya te vas? ):";

  if (points === 1) {
    asking.innerText = `Conseguiste ${points} punto.`;
  } else {
    asking.innerText = `Conseguiste ${points} puntos.`;
  }
};

const repeated = () => {
  if (questions[id].status === false) {
    id++;
    repeated();
  } else {
    nextQuestion();
  }
};

const endLoop = () => {
  if (notFinished === true) {
    header.innerText =
      "༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽ ༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽ ༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽ ༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽";
    asking.innerText =
      "Has terminado una vuelta, seguimos con las palabras que te dejaste.";
    enter.disabled = true;
    buttonPasa.disabled = true;

    setTimeout(() => {
      enter.disabled = false;
      buttonPasa.disabled = false;
      id = 0;
      repeated();
    }, "1500");
  } else {
    enter.disabled = true;
    buttonPasa.disabled = true;
    timeText.innerText = "TERMINASTE EL ROSCO";
    highScore();
  }
};

const game = () => {
  if (typedAnswer.value.toLowerCase() === questions[id].answer) {
    changeIcon();
    correctSound.play();
    questions[id].status = false;
    header.innerText = "Correcto!!!";
    asking.innerText = "^.^";
    points++;
    id++;
    enter.disabled = true;
    buttonPasa.disabled = true;

    checkFinish();

    setTimeout(() => {
      typedAnswer.value = "";
      buttonPasa.disabled = false;
      enter.disabled = false;

      if (notFinished === true) {
        if (id === questions.length) {
          endLoop();
        } else {
          repeated();
        }
      } else {
        endLoop();
      }
    }, "800");
  } else {
    changeIcon();
    incorrectSound.play();
    questions[id].status = false;
    header.innerText = "Incorrecto!!!";
    asking.innerText = `-.-" \n\n the correct word is: ${questions[id].answer}`;
    id++;
    buttonPasa.disabled = true;
    enter.disabled = true;

    checkFinish();

    setTimeout(() => {
      typedAnswer.value = "";
      buttonPasa.disabled = false;
      enter.disabled = false;

      if (notFinished === true) {
        if (id === questions.length) {
          endLoop();
        } else {
          repeated();
        }
      } else {
        endLoop();
      }
    }, "1200");
  }
};

const pasapalabra = () => {
  if (id === questions.length - 1) {
    endLoop();
  } else {
    id++;
    if (questions[id].status === false) {
      pasapalabra();
    } else {
      nextQuestion();
    }
  }
};

const startGame = () => {
  gameSound.play();
  getTime1();
  username = userName.value;
  intro.hidden = true;
  timer1.innerText = 130;

  setInterval(timer, 1000);
  function timer() {
    if (showTime <= 0) {
      timeText.innerText = "SE ACABO EL TIEMPO";
      highScore();
    } else {
      getTime2();
      showTime = (gameTime - (time2 - time1) * 60).toFixed(0);
      timer1.innerText = showTime;
    }
  }
};

const changeIcon = () => {
  letter.forEach((li) => {
    let img = li.querySelector("img");
    if (li.style.getPropertyValue("--i") == id) {
      if (typedAnswer.value.toLowerCase() === questions[id].answer) {
        img.setAttribute("src", img.dataset.srcNew);
      } else {
        img.setAttribute("src", img.dataset.srcAlternative);
      }
    }
  });
};

const highScore = () => {
  ranking.push({ name: username, points: points });
  ranking.sort(function (a, b) {
    if (a.points > b.points) {
      return -1;
    }
    if (a.points < b.points) {
      return 1;
    }
    return 0;
  });

  outro.hidden = false;

  let highscore = document.getElementById("highscore");
  highscore.innerText = `
    👉${ranking[0].name} ...... ${ranking[0].points} points.
    👉${ranking[1].name} ...... ${ranking[1].points} points.
    👉${ranking[2].name} ...... ${ranking[2].points} points.
    👉${ranking[3].name} ...... ${ranking[3].points} points.
    👉${ranking[4].name} ...... ${ranking[4].points} points.`;
};

start.addEventListener("click", (e) => {
  startGame();
});
