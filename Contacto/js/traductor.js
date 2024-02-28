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
        "textoBienvenida": '¡Bienvenidos a nuestra plataforma!Somos un equipo enamorado de México y su cultura y queremos que a través de nuestro portal conozcas más sobre nuestro país, tengas ganas de descubrir de cerca su misticismo y adquieras un pedacito de México que puedas llevar a todas partes.',
        "inTienda": 'CONOCE NUESTROS',
        "inTienda1": 'PRODUCTOS',
        "huacalCont": 'Echar al huacal',
        "huacalCont1": 'Echar al huacal',
        "huacalCont2": 'Echar al huacal',
        "huacalCont3": 'Echar al huacal',
        "huacalCont4": 'Echar al huacal',
        "huacalCont5": 'Echar al huacal',
        "huacalCont6": 'Echar al huacal',
        "huacalCont7": 'Echar al huacal',
        "huacalCont8": 'Echar al huacal',
        "huacalCont9": 'Echar al huacal',
        "huacalCont10": 'Echar al huacal',
        "huacalCont11": 'Echar al huacal',
        "cont": 'Comprar',
        "cont1": 'Comprar',
        "cont3": 'Comprar',
        "cont4": 'Comprar',
        "cont5": 'Comprar',
        "cont6": 'Comprar',
        "cont7": 'Comprar',
        "cont8": 'Comprar',
        "cont9": 'Comprar',
        "cont10": 'Comprar',
        "cont11": 'Comprar',
        "cont12": 'Comprar',
        "prenda": 'Blusa bordada chedrón',
        "prenda1": 'Blusa bordada blanca',
        "prenda2": 'Blusa bordada cuello V',
        "prenda3": 'Huipil bordado',
        "prenda4": 'Vestido bordado',
        "prenda5": 'Vestido bordado juvenil',
        "prenda6": 'Camisa bordada infantil',
        "prenda7": 'Huipil infantil',
        "prenda8": 'Camisa infantil bordada con botones',
        "prenda9": 'Camisa bordada',
        "prenda10": 'Camisa bordada',
        "prenda11": 'Camisa  Bordada',
        "btnshop": 'Lleva un pedacito de México a todas partes',

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
        "textoBienvenida": 'Welcome to our platform! We are a team in love with Mexico and its culture, and we want you to get to know more about our country through our portal. Feel the desire to explore its mysticism up close and acquire a piece of Mexico that you can take everywhere.',
        "inTienda": 'EXPLORE OUR', 
        "inTienda1": 'PRODUCTS',
        "huacalCont": 'Put into the huacal',
        "huacalCont1": 'Put into the huacal',
        "huacalCont2": 'Put into the huacal',
        "huacalCont3": 'Put into the huacal',
        "huacalCont4": 'Put into the huacal',
        "huacalCont5": 'Put into the huacal',
        "huacalCont6": 'Put into the huacal',
        "huacalCont7": 'Put into the huacal',
        "huacalCont8": 'Put into the huacal',
        "huacalCont9": 'Put into the huacal',
        "huacalCont10": 'Put into the huacal',
        "huacalCont11": 'Put into the huacal',
        "cont1": 'Buy it',
        "cont3": 'Buy it',
        "cont4": 'Buy it',
        "cont5": 'Buy it',
        "cont6": 'Buy it',
        "cont7": 'Buy it',
        "cont8": 'Buy it',
        "cont9": 'Buy it',
        "cont10": 'Buy it',
        "cont11": 'Buy it',
        "cont12": 'Buy it',
        "prenda": 'Embroidered chedrón blouse',
        "prenda1": 'Embroidered white blouse',
        "prenda2": 'Embroidered V-neck blouse',
        "prenda3": 'Embroidered huipil',
        "prenda4": 'Embroidered dress',
        "prenda5": 'Embroidered juvenile dress',
        "prenda6": 'Embroidered infant shirt',
        "prenda7": 'Embroidered infant huipil',
        "prenda8": 'Infant shirt embroidered with buttons',
        "prenda9": 'Embroidered shirt',
        "prenda10": 'Embroidered shirt',
        "prenda11": 'Embroidered shirt',
        "btnshop": 'Take a piece of Mexico with you wherever you go',

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