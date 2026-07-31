// estrellas de fondo
  const starsEl = document.getElementById('stars');
  const N = 46;
  for(let i=0;i<N;i++){
    const s = document.createElement('span');
    s.style.top = Math.random()*100 + '%';
    s.style.left = Math.random()*100 + '%';
    s.style.animationDelay = (Math.random()*4) + 's';
    s.style.opacity = (0.2 + Math.random()*0.5).toFixed(2);
    if(Math.random() > 0.7){ s.style.background = '#FF2E9A'; }
    else if(Math.random() > 0.6){ s.style.background = '#B4FF39'; }
    starsEl.appendChild(s);
  }

  // menu mobile
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Oculta el nav al bajar y lo recupera al subir.
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const menuIsOpen = links.classList.contains('open');

    if(currentScrollY <= header.offsetHeight || currentScrollY < lastScrollY || menuIsOpen){
      header.classList.remove('nav-hidden');
    } else if(currentScrollY > lastScrollY){
      header.classList.add('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive:true });
