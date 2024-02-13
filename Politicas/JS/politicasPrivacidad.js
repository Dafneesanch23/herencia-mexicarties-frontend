const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('darkmode', value);
}

function toggleDarkMode() {
  document.body.classList.toggle("darkmode");
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ //if the dark mode exists but is disabled
    icon.classList.add('fa-sun');
  }
}

load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  //save true or false
  store(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})

/****************************/
/* Boton para cambiar idioma*/
/****************************/

const languageButton = document.getElementById('toggleLanguage');
const languageFlag = document.getElementById('languageFlag');

function toggleFlag() {
  if (languageFlag.src.includes('mexico.png')) {
    languageFlag.src = '../Imagenes/eu.png';
    languageFlag.alt = 'Bandera de Estados Unidos';
  } else {
    languageFlag.src = '../Imagenes/mexico.png';
    languageFlag.alt = 'Bandera de México';
  }
}

languageButton.addEventListener('click', (e) => {
  e.preventDefault();
  languageFlag.classList.add('hidden');
  setTimeout(() => {
    toggleFlag();
    languageFlag.classList.remove('hidden');
  }, 100);
});

// Volver a inicio con el logo del pie de página. 
document.querySelector('.descripcion-section img').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});