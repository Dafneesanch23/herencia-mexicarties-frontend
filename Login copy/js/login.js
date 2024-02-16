/**************************************/
/* BOTÓN LOGIN                 */
/**************************************/

document.addEventListener("DOMContentLoaded", () => {

  /*******************************************************/
  /* Función para mostrar mensaje de error al validar    */
  /*******************************************************/

  const showAlert = (message) => {
      const alertContainer = document.getElementById('alert-container');
      alertContainer.innerHTML = `<div class="alert alert-danger alert-dismissible fade show justify-content-center" style="text-align: center;" role="alert">
                                    ${message}
                                  </div>`;
  };

  const clearAlerts = () => {
      const alertContainer = document.getElementById('alert-container');
      alertContainer.innerHTML = '';
  };

  /**************************************/
  /* Función para validar formulario    */
  /**************************************/

  const dataValidation = () => {

      /**************************************/
      /* Datos del formulario               */
      /**************************************/
      const email = document.getElementById('user-email').value;
      const password = document.getElementById('user-password').value

      /**************************************/
      /* Funciones para la validación       */
      /**************************************/

      const validateEmail = (email) => {
          // Expresión regular para la validación de correo electrónico (Me la encontré en internet para validar correos xd)
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      };

      const fieldsAreNotEmpty = () => {
          const email = document.getElementById('user-email').value.trim();
          const password = document.getElementById('user-password').value.trim();

          return email && password;
      };

      /*********************************************/
      /* Se ocupan las funciones para validar      */
      /*********************************************/

      // Limpia alertas mostradas en pantalla.
      clearAlerts();

      if (!fieldsAreNotEmpty()) {
          showAlert('Por favor, rellene todos los campos.');
          return false;
      }

      if (!validateEmail(email)) {
          showAlert('El correo electrónico no es válido.');
          return false;
      }

      /******************************************************/
      /* Si cumple con las validaciones, se crea JSON       */
      /******************************************************/

      const userData = {
          email,
          password
      };

      showAlert(JSON.stringify(userData));
      return userData;
  };

  /**************************************/
  /* Se ocupa la función validar datos  */
  /**************************************/

  const form = document.querySelector('form');

  form.onsubmit = (e) => {
      e.preventDefault();
      const data = dataValidation()
      if (data) {
          console.log(data)
      }
  };
});
