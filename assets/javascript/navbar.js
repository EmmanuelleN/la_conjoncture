import { annotate, annotationGroup } from 'rough-notation';

const menuButton = document.getElementById('menu-button');
const menuLinks = document.getElementById('menu-links');
const body = document.body;
const links = document.getElementsByClassName('link');

menuButton.addEventListener('click', function() {
  if (menuLinks.classList.contains('hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
});

addEventListener('resize', (event) => {
  if (!menuLinks.classList.contains('hidden')) {
    closeMenu();
  }
});

links.forEach(link => {
  link.addEventListener('mouseenter', event => {
    const annotation = annotate(event.target, { type: 'underline' });
    annotation.show();
  })
})

function closeMenu() {
  menuLinks.classList.add('hidden');
  body.classList.remove('overflow-hidden');
}

function openMenu() {
  menuLinks.classList.remove('hidden');
  body.classList.add('overflow-hidden');
}
