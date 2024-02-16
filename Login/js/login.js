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

      const fieldsAreNotEmpty = (email, password) => email.trim() && password.trim();

      /*********************************************/
      /* Se ocupan las funciones para validar      */
      /*********************************************/

      // Limpia alertas mostradas en pantalla.
      clearAlerts();

      if (!fieldsAreNotEmpty(email, password)) {
          showAlert('Por favor, rellene todos los campos.');
          return;
      }
      
      if (!validateEmail(email)) {
          showAlert('El correo electrónico no es válido.');
          return;
      }

      // 🚧🚧🚧🚧🚧 Es provisional 🚧🚧🚧🚧🚧
    
      // Se regresa un objeto
      const getDataUser = () => JSON.parse(localStorage.getItem('User'));

      const dataUser = getDataUser();
      if(!dataUser){
        showAlert('Usuario no registrado.');
        return false;
      }

      if(dataUser.password !== password){
        showAlert('Contraseña incorrecta.');
        return false;
      }

      if(dataUser.typeUser === 1){ // Usuario comprador
        window.location.href = '/Inicio/inicio.html';
      }else {
        window.location.href = '/formularioProductos/FormularioProd.html';
      }

      

      // 🚧🚧🚧🚧🚧 Es provisional 🚧🚧🚧🚧🚧

  };

  /**************************************/
  /* Se ocupa la función validar datos  */
  /**************************************/

  const form = document.querySelector('form');

  form.onsubmit = (e) => {
      e.preventDefault();
      dataValidation()
  };
});
