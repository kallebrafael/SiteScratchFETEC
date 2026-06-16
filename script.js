function placeholderGameImage(number) {
  const label = encodeURIComponent(`Imagem do jogo (${number})`);
  return `data:image/svg+xml;charset=UTF-8,%3Csvg width='900' height='675' viewBox='0 0 900 675' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23FF8C1A'/%3E%3Cstop offset='1' stop-color='%234D97FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='675' rx='42' fill='url(%23g)'/%3E%3Crect x='34' y='34' width='832' height='607' rx='28' fill='rgba(255,255,255,.12)' stroke='rgba(255,255,255,.28)' stroke-width='4' stroke-dasharray='14 10'/%3E%3Ctext x='50%25' y='51%25' fill='white' font-family='Arial' font-size='52' font-weight='800' text-anchor='middle'%3E${label}%3C/text%3E%3C/svg%3E`;
}

const referenceUrl = "https://tavernf.github.io/scratchFetec/";

const games = [
  {
    "title": "Pokemon Infinite Fusion",
    "image": "https://tavernf.github.io/scratchFetec/Pokemon.png",
    "tag": "Aventura",
    "url": "https://scratch.mit.edu/projects/1070193438/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Em Pokemon Infinite Fusion, a proposta combina aventura, exploração e referências de criaturas famosas em um projeto feito no Scratch pelos alunos do 1º Ano de Informática para Internet."
  },
  {
    "title": "Batman Joker's Maze",
    "image": "https://tavernf.github.io/scratchFetec/Batman.png",
    "tag": "Labirinto",
    "url": "https://scratch.mit.edu/projects/1066982033/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Batman Joker's Maze é um desafio de labirinto em que o jogador precisa encontrar o caminho certo, fugir dos obstáculos e vencer o percurso dentro do universo inspirado no Batman e no Coringa."
  },
  {
    "title": "Gênio Quiz",
    "image": "assets/genio-quiz-cover.png",
    "tag": "Quiz",
    "url": "https://scratch.mit.edu/projects/1070681588/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Gênio Quiz testa atenção, raciocínio e interpretação com perguntas e respostas no estilo quiz, exigindo cuidado para avançar sem cair nas pegadinhas."
  },
  {
    "title": "Sonic e Mario",
    "image": "https://tavernf.github.io/scratchFetec/Fogoagua.png",
    "tag": "Plataforma",
    "url": "https://scratch.mit.edu/projects/1070685533/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Sonic e Mario mistura personagens clássicos em uma experiência de plataforma, com movimentação, desafios e fases inspiradas em jogos de aventura."
  },
  {
    "title": "Spongebob Flight",
    "image": "https://tavernf.github.io/scratchFetec/Sponja.png",
    "tag": "Arcade",
    "url": "https://scratch.mit.edu/projects/1073877425/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Spongebob Flight é um jogo arcade de voo em que o objetivo é controlar o personagem, desviar de obstáculos e continuar avançando pelo cenário."
  },
  {
    "title": "Angry Birds Halloween",
    "image": "https://tavernf.github.io/scratchFetec/Angry.png",
    "tag": "Habilidade",
    "url": "https://scratch.mit.edu/projects/1064392867/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Angry Birds Halloween traz uma versão temática de Halloween com mecânicas de mira, lançamento e destruição, seguindo a ideia de acertar alvos usando precisão."
  },
  {
    "title": "Super Minecraft Jump",
    "image": "https://tavernf.github.io/scratchFetec/Mine.png",
    "tag": "Jump",
    "url": "https://scratch.mit.edu/projects/1071826286/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Super Minecraft Jump é um jogo de pulo inspirado no visual de Minecraft, com plataformas, movimento e desafio de tempo para chegar mais longe."
  },
  {
    "title": "Ghetto Heroes",
    "image": "https://tavernf.github.io/scratchFetec/Getto.png",
    "tag": "Ação",
    "url": "https://scratch.mit.edu/projects/1070293458/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Ghetto Heroes apresenta uma proposta de ação em Scratch, com personagens, movimentos e desafios criados para uma experiência rápida e divertida."
  },
  {
    "title": "Dark Ness",
    "image": "https://tavernf.github.io/scratchFetec/Dark.png",
    "tag": "Minimal",
    "url": "https://scratch.mit.edu/projects/1073390686/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Dark Ness aposta em um clima mais sombrio e minimalista, com foco em atmosfera, obstáculos e progressão dentro de um cenário escuro."
  },
  {
    "title": "Tetris",
    "image": "https://tavernf.github.io/scratchFetec/Tetris.png",
    "tag": "Puzzle",
    "url": "https://scratch.mit.edu/projects/1071804496/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Tetris recria a lógica do clássico jogo de blocos, exigindo organização, velocidade de pensamento e encaixe das peças para marcar pontos."
  },
  {
    "title": "Minecraft 2D",
    "image": "https://tavernf.github.io/scratchFetec/minecraft.png",
    "tag": "Sandbox",
    "url": "https://scratch.mit.edu/projects/1066994031/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Minecraft 2D adapta a ideia de exploração e construção para uma versão lateral em duas dimensões, com visual inspirado no universo Minecraft."
  },
  {
    "title": "Mortal Kombat",
    "image": "https://tavernf.github.io/scratchFetec/mortal.png",
    "tag": "Luta",
    "url": "https://scratch.mit.edu/projects/1070549007/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Mortal Kombat é uma releitura em Scratch de jogo de luta, com personagens, comandos e disputa direta em estilo arcade."
  },
  {
    "title": "Water Sort",
    "image": "https://tavernf.github.io/scratchFetec/water.png",
    "tag": "Puzzle",
    "url": "https://scratch.mit.edu/projects/1067484457/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Water Sort é um puzzle de organização de cores em que o jogador precisa separar líquidos corretamente, usando lógica e planejamento."
  },
  {
    "title": "Zumbis Famintos",
    "image": "https://tavernf.github.io/scratchFetec/sumbis.png",
    "tag": "Sobrevivência",
    "url": "https://scratch.mit.edu/projects/1067544239/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Zumbis Famintos traz uma proposta de sobrevivência em que o jogador precisa lidar com ameaças, reagir rápido e avançar sem ser pego."
  },
  {
    "title": "Sonic 2",
    "image": "https://tavernf.github.io/scratchFetec/sonico.png",
    "tag": "Velocidade",
    "url": "https://scratch.mit.edu/projects/1067830709/fullscreen/",
    "description": "Jogo publicado na vitrine Scratch da INFOTEC. Sonic 2 foca em velocidade, plataforma e movimento, recriando no Scratch uma experiência inspirada no personagem Sonic."
  }
];

const fallbackSvg = (title) => {
  const safe = encodeURIComponent(title);
  return `data:image/svg+xml;charset=UTF-8,%3Csvg width='900' height='675' viewBox='0 0 900 675' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23FF8C1A'/%3E%3Cstop offset='1' stop-color='%234D97FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='675' rx='36' fill='url(%23g)'/%3E%3Ccircle cx='760' cy='120' r='180' fill='rgba(255,255,255,.18)'/%3E%3Ccircle cx='110' cy='600' r='220' fill='rgba(0,0,0,.15)'/%3E%3Ctext x='50%25' y='48%25' fill='white' font-family='Arial' font-size='58' font-weight='800' text-anchor='middle'%3E${safe}%3C/text%3E%3Ctext x='50%25' y='58%25' fill='white' font-family='Arial' font-size='25' font-weight='700' opacity='.82' text-anchor='middle'%3EProjeto Scratch%3C/text%3E%3C/svg%3E`;
};


const grid = document.querySelector("#gamesGrid");
const searchInput = document.querySelector("#searchGame");
const modal = document.querySelector("#gameModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalTag = document.querySelector("#modalTag");
const modalLink = document.querySelector("#modalLink");
const navbar = document.querySelector(".navbar");

function createCard(game, index) {
  const article = document.createElement("article");
  article.className = "game-card reveal";
  const actionUrl = game.url && game.url.trim() ? game.url : "#";
  const isDisabled = !game.url || !game.url.trim();
  article.innerHTML = `
    <span class="index-badge">${String(index + 1).padStart(2, "0")}</span>
    <div class="game-img">
      <img src="${game.image || fallbackSvg(game.title)}" alt="Capa do jogo ${game.title}" loading="lazy">
    </div>
    <div class="game-content">
      <span class="mini-tag">${game.tag}</span>
      <h3>${game.title}</h3>
      <div class="game-actions">
        <a class="btn btn-primary${isDisabled ? ' is-disabled' : ''}" href="${actionUrl}" ${isDisabled ? 'data-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>Jogar</a>
        <button class="btn btn-ghost" type="button">Informações</button>
      </div>
    </div>`;

  article.querySelector("button").addEventListener("click", () => openModal(game));
  const playLink = article.querySelector("a");
  if (isDisabled) {
    playLink.addEventListener("click", (event) => event.preventDefault());
  }
  return article;
}

function renderGames(list) {
  grid.innerHTML = "";
  list.forEach((game, index) => grid.appendChild(createCard(game, index)));
  observeReveals();
}

function openModal(game) {
  modalImage.src = game.image || fallbackSvg(game.title);
  modalImage.alt = `Capa do jogo ${game.title}`;
  modalImage.hidden = false;
  modalTitle.textContent = game.title;
  modalTag.textContent = game.tag || "Scratch";
  modalText.textContent = game.description || "Projeto publicado na vitrine Scratch da INFOTEC.";
  const actionUrl = game.url && game.url.trim() ? game.url : "#";
  const isDisabled = !game.url || !game.url.trim();
  modalLink.href = actionUrl;
  modalLink.textContent = "Jogar";
  modalLink.classList.toggle("is-disabled", isDisabled);
  modalLink.dataset.disabled = isDisabled ? "true" : "false";
  if (isDisabled) {
    modalLink.removeAttribute("target");
    modalLink.removeAttribute("rel");
  } else {
    modalLink.setAttribute("target", "_blank");
    modalLink.setAttribute("rel", "noopener noreferrer");
  }
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function openFeatured() {
  const featured = {
    title: "Guitar Hero",
    image: "assets/guitar-hero-cover.png",
    tag: "Makey Makey",
    url: referenceUrl,
    description: "O Projeto Makey Makey é um jogo criado no Scratch baseado no Guitar Hero. Foi desenvolvido pelos alunos Caio Henrique e Livia Cardia do 3º ano de Informática. O jogo pode ser usado com placa Makey Makey, cabo USB, cabos jacaré e massinha de modelar, ou pelas setas do teclado: cima vermelho, baixo amarelo, direita azul e esquerda verde."
  };
  openModal(featured);
}

searchInput.addEventListener("input", (event) => {
  const value = event.target.value.trim().toLowerCase();
  const filtered = games.filter((game) =>
    game.title.toLowerCase().includes(value) ||
    game.tag.toLowerCase().includes(value) ||
    game.description.toLowerCase().includes(value)
  );
  renderGames(filtered);
});

document.querySelector(".shuffle-btn").addEventListener("click", () => {
  const randomGame = games[Math.floor(Math.random() * games.length)];
  openModal(randomGame);
});

document.querySelector(".play-featured").addEventListener("click", openFeatured);
modalLink.addEventListener("click", (event) => {
  if (modalLink.dataset.disabled === "true") event.preventDefault();
});
const closeModal = () => {
  if (typeof modal.close === "function" && modal.open) {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
};
document.querySelector(".modal-close").addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  closeModal();
});
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (clickedOutside) closeModal();
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

let revealObserver;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

renderGames(games);
observeReveals();

// FIX DEFINITIVO v6 — menu mobile sem conflito com listeners antigos
(() => {
  const btn = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  const closeMenu = () => {
    links.classList.remove('open');
    document.body.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const open = !links.classList.contains('open');
    links.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
  };

  btn.addEventListener('click', toggleMenu, true);
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu, true);
  });
  document.addEventListener('click', (event) => {
    if (!links.classList.contains('open')) return;
    if (!event.target.closest('.navbar') && !event.target.closest('.nav-links')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) closeMenu();
  }, { passive:true });
})();
