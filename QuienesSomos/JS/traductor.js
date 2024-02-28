/****************************/
/* Boton para cambiar idioma*/
/****************************/

document.getElementById('toggleLanguage').addEventListener('click', (e) => {
  e.preventDefault();
  const languageFlag = document.getElementById('languageFlag');
  let newLang = 'es'; // Idioma predeterminado

  // Si se tiene la imagen de México cambia a la de EUA.
  if (languageFlag.src.includes('mexico.png')) {
    languageFlag.src = '../Public/Imagenes/eu.png';
    languageFlag.alt = 'Bandera de Estados Unidos de América';
    newLang = 'en';
  } else {
    languageFlag.src = '../Public/Imagenes/mexico.png';
    languageFlag.alt = 'Bandera de México';
    newLang = 'es';
  }
  
  changeLanguage(newLang);
});

const translations = {
  "es": {
      // HEADER
      "btn-register": "Registrarse",
      "btn-login": "Iniciar sesión",
      "homelink": "INICIO",
      "navbarDropdownMenuLink": "TIENDA",
      "handicraftslink": "ARTESANIAS",
      "clothinglink": "ROPA ARTESANAL",
      "liquorslink": "LICORES",
      "aboutlink": "QUIENES SOMOS",
      "discoverlink": "DESCUBRE MÉXICO",
      "artisanslink": "CONOCE A LOS ARTESANOS",
      "contactlink": "CONTACTO",
      "texto1": "QUIENES SOMOS", 
      // PÁGINA
      "texto2": "CONOCE",
      "texto3": "NUESTRA FAMILIA",
      "Daf1": "Ingeniera química apasionada por México, su magia y cultura, comprometida en llevar un pedacito de mi país a nivel global. Su formación en desarrollo Java Fullstack es la manifestación del amor por los desafíos y el aprendizaje constante. <Cada línea de código que escribo es una oportunidad consciente de infundir la esencia auténtica de México en la tecnología, creando un tejido digital que conecta al mundo con la rica identidad cultural de mi país>Dafne Sánchez", 
      "who1": "QUIÉNES",
      "who2": "SOMOS",
      "welcome": "¡Bienvenidos!",
      "hermexies": "Herencia Mexicarties surge desde la pasión familiar por la cultura mexicana. Creemos fielmente en el significado que tienen los objetos, más aún cuando son piezas artesanales. Cada obra tiene una historia representativa de cada estado de México, y caracteriza a la persona que la fábrica. A medida que las fuimos conociendo, más nos interesó compartir estas experiencias con ustedes.",
       // FOOTER
      "textfooter1": "Tejemos historias de tradición y pasión",
      "textfooter2": "Descubre la autenticidad de México en cada detalle",
      "footerlink1": "Términos y condiciones",
      "footerlink2": "Servicio al cliente",
      "footerlink3": "Conócenos",
      "footerlink4": "Políticas de privacidad",
      "textfooter3": "Recibe información exclusiva y promociones vía email",
      "subscribeButton": "Suscríbete",
      "textfooter4": "Métodos de pago",
  },
  "en": {
      //HEADER
      "btn-register": "Sign up",
      "btn-login": "Log in",
      "homelink": "HOME",
      "navbarDropdownMenuLink": "STORE",
      "handicraftslink": "HANDICRAFTS",
      "clothinglink": "ARTISAN CLOTHING",
      "liquorslink": "LIQUORS",
      "aboutlink": "ABOUT US",
      "discoverlink": "DISCOVER MEXICO",
      "artisanslink": "MEET THE ARTISANS",
      "contactlink": "CONTACT",
      "texto1": "ABOUT US",
      "texto2": "MEET",
      "hermexies": "Herencia Mexicarties arises from the familys passion for Mexican culture. We firmly believe in the significance that objects hold, especially when they are artisanal pieces. Each work carries a representative story from every state in Mexico and embodies the personality of the artisan who crafts it. As we got to know these stories, we became more interested in sharing these experiences with you.",
      // PÁGINA
      "texto3": "OUR FAMILY",
      "Daf1": "Chemical engineer passionate about Mexico, its magic, and culture, committed to bringing a piece of my country to a global level. Her background in Java Fullstack development is the manifestation of love for challenges and constant learning.<Each line of code I write is a conscious opportunity to infuse the authentic essence of Mexico into technology, creating a digital fabric that connects the world with the rich cultural identity of my country> -Dafne Sánchez",
      "who1": "ABOUT",
      "who2": "US",
      "welcome": "Welcome!",
      // FOOTER
      "textfooter1": "We weave stories of tradition and passion",
      "textfooter2": "Discover the authenticity of Mexico in every detail",
      "footerlink1": "Terms and Conditions",
      "footerlink2": "Customer Service",
      "footerlink3": "About us",
      "footerlink4": "Privacy policies",
      "textfooter3": "Receive exclusive information and promotions via email",
      "subscribeButton": "Subscribe",
      "textfooter4": "Payment methods",
  }
};


const changeLanguage = (lang) => {

  // Actualizar el idioma en el almacenamiento local
  localStorage.setItem('selectedLanguage', lang);

  // Recorrer todas las claves de traducción y actualizar el texto
  for (const key in translations[lang]) {
    const element = document.getElementById(key);
    if (element) 
      if (element.tagName === "INPUT" && element.type !== "submit")
        // Si es un input y no es de tipo submit, cambiar el placeholder
        element.placeholder = translations[lang][key];
      else
        // Para todos los demás elementos, cambiar el texto
        element.textContent = translations[lang][key];
    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Español por defecto
  changeLanguage(selectedLanguage);

  // Se asegura de que la bandera coincida con el idioma
  const languageFlag = document.getElementById('languageFlag');
  if (selectedLanguage === 'en') {
      languageFlag.src = '../Public/Imagenes/eu.png';
      languageFlag.alt = 'Bandera de Estados Unidos';
  } else {
      languageFlag.src = '../Public/Imagenes/mexico.png';
      languageFlag.alt = 'Bandera de México';
  }
});