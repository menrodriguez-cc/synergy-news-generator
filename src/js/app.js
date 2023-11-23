import '../scss/app.scss';
/* Your JS Code goes here */
import FormValidator from './form-validator';
import CopyCode from './copy-code';
import template from './template';

const form = document.querySelector('#formulario');
const fields = ['icono', 'texto_castellano', 'texto_euskera', 'link'];

const validator = new FormValidator(form, fields);
validator.initialize();

const preBlocks = document.querySelectorAll('pre');
const copyCode = new CopyCode(preBlocks);
copyCode.initialize();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  document.getElementsByClassName('resultado')[0].classList.remove('slide-in-bottom');
  document.getElementsByClassName('resultado')[0].classList.add('slide-out-bottom');

  const iconoElement = document.getElementById('icono');
  const icono = iconoElement.options[iconoElement.selectedIndex].text;
  const textoEuskera = document.getElementById('texto_euskera').value;
  const textoCastellano = document.getElementById('texto_castellano').value;
  const link = document.getElementById('link').value;

  const parsedTemplate = template(icono, textoEuskera, textoCastellano, link);

  document.getElementById('resultado-code').innerText = parsedTemplate;

  document.getElementsByClassName('resultado')[0].classList.remove('slide-out-bottom');
  document.getElementsByClassName('resultado')[0].classList.add('slide-in-bottom');
});
