import '../scss/copy-code/copy-code.scss';
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
export default class CopyCode {
  constructor(blocks) {
    this.blocks = blocks;
  }

  initialize() {
    const copyButtonLabel = 'Copiar código';

    this.blocks.forEach((block) => {
      // only add button if browser supports Clipboard API
      if (navigator.clipboard) {
        const button = document.createElement('a');

        button.innerText = copyButtonLabel;
        button.classList.add('copy-code');
        button.classList.add('secondary');
        button.classList.add('outline');
        button.setAttribute('role', 'button');
        button.href = '#';
        block.appendChild(button);

        button.addEventListener('click', async (event) => {
          event.preventDefault();
          await copyCode(block, button);
        });
      }
    });

    async function copyCode(block, button) {
      const code = block.querySelector('code');
      const text = code.innerText;

      await navigator.clipboard.writeText(text);

      // visual feedback that task is completed
      button.innerText = 'Código copiado';

      setTimeout(() => {
        button.innerText = copyButtonLabel;
      }, 700);
    }
  }
}
