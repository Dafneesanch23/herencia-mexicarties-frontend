/**************************************/
/* BOTÓN REGISTRARSE                  */
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
        const fullname = document.getElementById('user-name').value
        const email = document.getElementById('user-email').value;
        const phone = document.getElementById('user-phone').value;
        const password = document.getElementById('user-password').value

        /**************************************/
        /* Funciones para la validación       */
        /**************************************/

        const validateEmail = (email) => {
            // Expresión regular para la validación de correo electrónico (Me la encontré en internet para validar correos xd)
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        };

        const validatePhone = (phone) => {
            // Expresión regular para la validación de números de teléfono (debe tener 10 dígitos)
            const re = /^\d{10}$/;
            return re.test(phone);
        };

        const comparePasswords = () => {
            const password = document.getElementById('user-password').value;
            const confirmPassword = document.getElementById('repeat-password').value;
            return password === confirmPassword;
        };

        const validatePassword = (password) => {
            // Expresion regular para la validación de contraseña 
            // (Una minúscula, una mayúscula, un dígito y una longitud de 6 como mínimo)
            const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
            return re.test(password);
        };

        const fieldsAreNotEmpty = () => {
            const name = document.getElementById('user-name').value.trim();
            const phone = document.getElementById('user-phone').value.trim();
            const email = document.getElementById('user-email').value.trim();
            const password = document.getElementById('user-password').value.trim();
            const confirmPassword = document.getElementById('repeat-password').value.trim();

            return name && phone && email && password && confirmPassword;
        };

        /*********************************************/
        /* Se ocupan las funciones para validar      */
        /*********************************************/

        // Limpia alertas mostradas en pantalla.
        clearAlerts();

        if (!fieldsAreNotEmpty()) {
            showAlert('Por favor, rellene todos los campos.');
            return;
        }

        if (!validatePhone(phone)) {
            showAlert('El número de teléfono no es válido. Deben ser 10 dígitos.');
            return;
        }

        if (!validateEmail(email)) {
            showAlert('El correo electrónico no es válido.');
            return;
        }

        if (!validatePassword(password)) {
            showAlert('La contraseña debe tener una mayúscula, una minúscula, un número y 6 caracteres como mínimo.');
            return;
        }

        if (!comparePasswords()) {
            showAlert('Las contraseñas no coinciden.');
            return;
        }

        /******************************************************/
        /* Si cumple con las validaciones, se crea JSON       */
        /******************************************************/

        const typeUser = 2; // 1 -> Usuario, 2 -> Admin
        const userData = {
            fullname,
            email,
            phone,
            password,
            typeUser
        };

        // 🚧🚧🚧🚧🚧 Es provisional 🚧🚧🚧🚧🚧
        localStorage.setItem('User', JSON.stringify(userData));

        if (userData.typeUser === 1){
            window.location.href = '../Inicio/inicio.html';
        } else {
            window.location.href = '../formularioProductos/FormularioProd.html';
        }
        

        // 🚧🚧🚧🚧🚧 Es provisional 🚧🚧🚧🚧🚧
    };


    /*************************************************************/
    /* Se ejecuta cuando se presiona el botón registrar usuario  */
    /*************************************************************/
    const form = document.querySelector('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        dataValidation();
    };
});
