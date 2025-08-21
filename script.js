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
