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

  // acordeón de cartas de tragos en los planes (independiente por tarjeta, altura según contenido)
  document.querySelectorAll('.menu-toggle').forEach(btn => {
    const menu = btn.nextElementSibling;
    const inner = menu.querySelector('.plan-menu-inner');
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      menu.style.maxHeight = isOpen ? inner.scrollHeight + 'px' : '0px';
    });
  });

  // Iguala la altura de las tarjetas Básica y VIP (la del medio queda con su tamaño natural)
  function matchOuterPlanHeights(){
    const plans = document.querySelectorAll('.plans .plan');
    if(plans.length < 3) return;
    const first = plans[0];
    const last = plans[plans.length - 1];
    const isStacked = window.matchMedia('(max-width:900px)').matches;

    first.style.minHeight = 'auto';
    last.style.minHeight = 'auto';

    if(isStacked){ return; }

    const tallest = Math.max(first.offsetHeight, last.offsetHeight);
    first.style.minHeight = tallest + 'px';
    last.style.minHeight = tallest + 'px';
  }
  window.addEventListener('load', matchOuterPlanHeights);
  window.addEventListener('resize', matchOuterPlanHeights);

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
