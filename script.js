// ---------------------------
// Projetos (mantido como já estava)
const projects = [
  {
    title: "App de Tarefas",
    description: "Aplicativo simples para gerenciar tarefas usando React Native.",
    link: "https://github.com/thalitapires/app-tarefas"
  },
  {
    title: "API Node.js",
    description: "API RESTful criada com Express para gerenciamento de usuários.",
    link: "https://github.com/thalitapires/api-node"
  }
];

const container = document.getElementById("projectList");

projects.forEach(proj => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p><a href="${proj.link}" target="_blank">Ver projeto</a>`;
  container.appendChild(div);
});

// ---------------------------
// Efeito digitando (novo)
const phrases = [
  "Oi, eu sou a Thalita Pires 💜",
  "Desenvolvedora em formação 💻",
  "Apaixonada por tecnologia 🚀",
  "Estagiária de T.I no Grupo Mendes"
];

let currentPhrase = 0;
let currentChar = 0;
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (currentChar < phrases[currentPhrase].length) {
    typedText.textContent += phrases[currentPhrase].charAt(currentChar);
    currentChar++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (currentChar > 0) {
    typedText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
    currentChar--;
    setTimeout(erase, 50);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText && cursor) {
    setTimeout(type, 500);
  }
});
