const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value) {
    localStorage.setItem('darkmode', value);
}

function toggleDarkMode() {
    document.body.classList.toggle("darkmode");
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load() {
    const darkmode = localStorage.getItem('darkmode');

    //if the dark mode was never activated
    if (!darkmode) {
        store(false);
        icon.classList.add('fa-sun');
    } else if (darkmode == 'true') { //if the dark mode is activated
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
    } else if (darkmode == 'false') { //if the dark mode exists but is disabled
        icon.classList.add('fa-sun');
    }
}

load();

btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    //save true or false
    store(body.classList.contains('darkmode'));

    if (body.classList.contains('darkmode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500)
})

/****************************/
/* Boton para cambiar idioma*/
/****************************/

document.getElementById('toggleLanguage').addEventListener('click', (e) => {
    const languageFlag = document.getElementById('languageFlag');

    const toggleFlag = () => {
        if (languageFlag.src.includes('mexico.png')) {
            languageFlag.src = '../Imagenes/eu.png';
            languageFlag.alt = 'Bandera de Estados Unidos';
        } else {
            languageFlag.src = '../Imagenes/mexico.png';
            languageFlag.alt = 'Bandera de México';
        }
    }
    e.preventDefault();
    languageFlag.classList.add('hidden');
    setTimeout(() => {
        toggleFlag();
        languageFlag.classList.remove('hidden');
    }, 100);
});


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
            return false;
        }

        if (!validatePhone(phone)) {
            showAlert('El número de teléfono no es válido. Deben ser 10 dígitos.');
            return false;
        }

        if (!validateEmail(email)) {
            showAlert('El correo electrónico no es válido.');
            return false;
        }

        if (!validatePassword(password)) {
            showAlert('La contraseña debe tener una mayúscula, una minúscula, un número y 6 caracteres como mínimo.');
            return false;
        }

        if (!comparePasswords()) {
            showAlert('Las contraseñas no coinciden.');
            return false;
        }

        /******************************************************/
        /* Si cumple con las validaciones, se crea JSON       */
        /******************************************************/

        const userData = {
            fullname,
            email,
            phone,
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
        if (dataValidation()) {
            
        }
    };
});
