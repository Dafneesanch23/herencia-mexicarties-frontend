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
        // PÁGINA
        "textoBienvenida": 'México es un país con una gran diversidad cultural.Si bien en nuestro sitio puedes adquirir una amplia variedad de las artesanias de nuestro país, la riqueza artesanal que tenemos no nos hace posible tener aquí todo lo que se produce en México por lo que queremos que te traemos una pequeña exhibición de más de lo que puedes encontrar si te atreves a recorrer y vivir México',
        "texto1":'DESCUBRE',
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
        // PÁGINA
        "textoBienvenida": 'Mexico is a country with great cultural diversity. While on our site, you can purchase a wide variety of crafts from our country, the richness of our artisanal heritage doesnt allow us to showcase everything produced in Mexico. Therefore, we want to bring you a small exhibition of more than what you can find if you dare to explore and experience Mexico.',
         "texto1":'DISCOVER',

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