import './styles/main.scss';
import brandLogo from '../images/WhatsApp Image 2026-09-27 at 23.33.03.jpeg';

const projects = [
  {
    number: '01',
    title: 'Clínica Vida+',
    category: 'Sistema de saúde · Python',
    description: 'Sistema para gerenciamento de pacientes, consultas e atendimentos, desenvolvido como projeto integrado de inovação.',
    tags: ['Python', 'Gestão', 'Lógica'],
    url: 'https://github.com/Robson-Bruno/Projeto-integrado-desenvolvimento-de-uma-plataforma-de-saude',
  },
  {
    number: '02',
    title: 'Buscador de usuários do GitHub',
    category: 'Aplicação web · JavaScript',
    description: 'Busca perfis pela API pública do GitHub e exibe informações como foto, biografia e repositórios públicos.',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    url: 'https://github.com/Robson-Bruno/github-fetch-api',
  },
  {
    number: '03',
    title: 'Gerenciador de tarefas',
    category: 'Aplicação web · React',
    description: 'Projeto de gerenciamento de tarefas desenvolvido com React e Vite.',
    tags: ['React', 'JavaScript', 'Vite'],
    url: 'https://github.com/Robson-Bruno/gerenciador-de-tarefas-em-react',
  },
  {
    number: '04',
    title: 'Formulário com validação',
    category: 'Interface web · JavaScript',
    description: 'Formulário de contato responsivo com validação dos campos antes de permitir o envio.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Validação'],
    url: 'https://github.com/Robson-Bruno/formulario-com-validacao',
  },
  {
    number: '05',
    title: 'Pokedevs',
    category: 'Projeto web · Estudos',
    description: 'Projeto de página inspirado em Pokedevs, criado durante aulas e desenvolvido com tecnologias web.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/Robson-Bruno/Projeto-Pokedevs',
  },
  {
    number: '06',
    title: 'Meu mini portfólio',
    category: 'Portfólio · Projeto de estudo',
    description: 'Projeto criado para praticar e aperfeiçoar habilidades de desenvolvimento web.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/Robson-Bruno/meu-mini-portfolio',
  },
  {
    number: '07',
    title: 'Perfil Card',
    category: 'Interface web · Estudos',
    description: 'Cartão de perfil criado como exercício para praticar e aperfeiçoar a escrita de código.',
    tags: ['HTML', 'CSS'],
    url: 'https://github.com/Robson-Bruno/Perfil-Card',
  },
  {
    number: '08',
    title: 'CrediControl',
    category: 'Conceito de produto',
    description: 'Plataforma para organizar empréstimos, acompanhar parcelas e visualizar informações financeiras de forma clara.',
    tags: ['Dashboard', 'Organização', 'UX'],
    url: null,
  },
];

const projectCards = projects.map((project) => `
  <article class="project-card">
    <div class="project-card__top"><span>${project.number} / PROJETO</span><span aria-hidden="true">↗</span></div>
    <div class="project-card__content">
      <p class="eyebrow">${project.category}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      ${project.url ? `<a class="text-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Ver repositório <span aria-hidden="true">↗</span></a>` : '<span class="project-card__status">Projeto em desenvolvimento</span>'}
    </div>
  </article>
`).join('');

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="header" id="inicio">
    <div class="container header__inner">
      <a class="brand" href="#inicio" aria-label="Robson Bruno, voltar ao início"><img class="brand__logo" src="${brandLogo}" alt="" /><span>Robson Bruno</span></a>
      <nav class="nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a><a href="#atuacao">Atuação</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
      </nav>
      <a class="header__contact" href="https://wa.me/message/NX4F7IUXNOSOF1" target="_blank" rel="noopener noreferrer">Vamos conversar <span aria-hidden="true">↗</span></a>
    </div>
  </header>

  <main id="conteudo">
    <section class="hero container" aria-labelledby="hero-title">
      <div class="hero__copy">
        <p class="eyebrow"><span class="eyebrow__line"></span> SUPORTE DE TI · DESENVOLVIMENTO WEB</p>
        <h1 id="hero-title">Tecnologia que <em>resolve.</em><br />Ideias que <em>evoluem.</em></h1>
        <p class="hero__lead">Sou Robson Bruno, profissional de suporte de TI com interesse em criar experiências digitais claras, úteis e bem construídas.</p>
        <div class="hero__actions"><a class="button button--neon" href="#projetos">Conheça meus projetos <span class="button__arrow" aria-hidden="true">↓</span></a><a class="button button--outline" href="https://wa.me/message/NX4F7IUXNOSOF1" target="_blank" rel="noopener noreferrer">Entre em contato</a></div>
      </div>
      <div class="hero__graphic"><img class="hero__logo" src="/robsonti-mark.png" alt="Símbolo da nuvem com as iniciais RB" /></div>
      <div class="hero__foot"><span>DISPONÍVEL PARA CONEXÕES PROFISSIONAIS</span><span>ROLE PARA EXPLORAR ↓</span></div>
    </section>

    <section class="section section--about" id="sobre" aria-labelledby="about-title"><div class="container split-layout"><div class="section-heading"><p class="eyebrow">01 / SOBRE MIM</p><h2 id="about-title">Curiosidade técnica.<br /><em>Olhar humano.</em></h2></div><div class="section-copy"><p>Trabalho com suporte de TI, ajudando pessoas a resolver problemas do dia a dia com tecnologia. Também exploro desenvolvimento web e a criação de interfaces que tornam tarefas mais simples.</p><p>Acredito em soluções práticas, comunicação clara e aprendizado constante.</p><a class="button button--neon" href="/curriculo-robson-bruno.pdf" target="_blank" rel="noopener noreferrer">Meu Currículo <span class="button__arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M2 9.2 12 4l10 5.2L12 14 2 9.2Zm4 3.1 6 3.1 6-3.1v3.1c0 2.1-2.7 3.6-6 3.6s-6-1.5-6-3.6v-3.1Zm14-1.4v6.2h-1.5v-7l1.5.8Z"/></svg></span></a></div></div></section>

    <section class="section section--work" id="atuacao" aria-labelledby="work-title"><div class="container"><div class="section-heading"><p class="eyebrow">02 / O QUE FAÇO</p><h2 id="work-title">Onde eu <em>atuo.</em></h2></div><div class="services"><article class="service"><span class="service__number">01</span><div><h3>Suporte de TI</h3><p>Diagnóstico de problemas, atendimento a usuários e apoio à operação de equipamentos e sistemas.</p></div><span class="service__icon" aria-hidden="true">*</span></article><article class="service"><span class="service__number">02</span><div><h3>Desenvolvimento web</h3><p>Criação de interfaces para a web com foco em organização, acessibilidade e adaptação a diferentes telas.</p></div><span class="service__icon" aria-hidden="true">*</span></article><article class="service"><span class="service__number">03</span><div><h3>Resolução de problemas</h3><p>Análise de necessidades, investigação de causas e busca por soluções simples e sustentáveis.</p></div><span class="service__icon" aria-hidden="true">*</span></article></div></div></section>

    <section class="section section--projects" id="projetos" aria-labelledby="projects-title"><div class="container"><div class="section-heading"><p class="eyebrow">03 / PORTFÓLIO</p><h2 id="projects-title">Projetos <em>selecionados.</em></h2><p class="section-heading__intro">Aplicações e projetos de estudo disponíveis no meu GitHub.</p></div><div class="projects">${projectCards}</div></div></section>

    <section class="section section--contact" id="contato" aria-labelledby="contact-title"><div class="container contact"><div><p class="eyebrow">04 / CONTATO</p><h2 id="contact-title">Vamos criar algo<br /><em>juntos?</em></h2><p>Tem uma oportunidade, projeto ou ideia? Entre em contato.</p></div><a class="contact__email" href="mailto:robsonbrunods@hotmail.com">robsonbrunods@hotmail.com <span aria-hidden="true">↗</span></a></div></section>
  </main>
  <footer class="footer"><div class="container footer__inner"><span>© <span id="year"></span> Robson Bruno dos Santos</span><div><a href="https://github.com/Robson-Bruno" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:robsonbrunods@hotmail.com">Email ↗</a></div><a href="#inicio">Voltar ao topo ↑</a></div></footer>
`;

document.querySelector('#year').textContent = new Date().getFullYear();

const heroGraphic = document.querySelector('.hero__graphic');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let floatingAnimation;

function updateHeroAnimation() {
  if (motionPreference.matches) {
    floatingAnimation?.cancel();
    floatingAnimation = undefined;
    return;
  }

  if (heroGraphic && !floatingAnimation) {
    floatingAnimation = heroGraphic.animate(
      [{ translate: '0 0' }, { translate: '0 -28px' }],
      { duration: 1800, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' },
    );
  }
}

updateHeroAnimation();
motionPreference.addEventListener('change', updateHeroAnimation);
