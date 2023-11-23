export default class FormValidator {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
  }

  initialize() {
    this.fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);

      input.addEventListener('invalid', function (event) {
        event.target.setAttribute('aria-invalid', true);
      });
      input.addEventListener('change', function (event) {
        event.target.removeAttribute('aria-invalid', false);
      });
    });
  }
}
