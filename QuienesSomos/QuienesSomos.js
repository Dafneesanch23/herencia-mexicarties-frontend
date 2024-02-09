const textoBio = document.getElementById("textoBio");

// Objeto que almacena los textos correspondientes a cada slide
const textos = {
  s1: "Ingeniera química apasionada por México, su magia y cultura, comprometida en llevar un pedacito de mi país a nivel global. Mi formación en desarrollo Java Fullstack es la manifestación de mi amor por los desafíos y el aprendizaje constante. Cada línea de código que escribo es una oportunidad consciente de infundir la esencia auténtica de México en la tecnología, buscando crear un tejido digital que conecte al mundo con la rica identidad cultural de mi país. -Dafne Sánchez",
  s2: "Enamorada de ser mexicana y agradecida de poder llevar el misticismo y colorido de su país a otras partes del mundo. Comprometida con mantener la esencia de Herencia Mexicarties fiel y respetuosa a la cultura mexicana, garantizando la autenticidad de nuestro proyecto en cada paso",
  s3: "Ingeniero en negocios, con gran experiencia en dirección de Proyectos. Actualmente sus conocimientos, formación y fascinación por la cultura mexicana le permiten liderar el equipo de Herencia Mexicarties para lograr sinergias y llevar la magia de México a muchos rincones por el mundo",
  s4: "Su formación como físico, aporta una perspectiva analítica y un enfoque preciso a la visión del equipo de Herencia Mexicarties; Como hombre de ciencia, le guían principios y valores sólidos que inyecta en cada parte de este proyecto, llevándolos a su vez a cada línea de código para así plasmar la riqueza de México en el mundo digital, aplicando los principios científicos en el diseño y desarrollo que lleven a ser Herencia Mexicarties una expresión vibrante de identidad cultural. ",
  s5: "Ingeniero químico y analista de datos, comprometido a compartir su pasión por México a través de la tecnología. Más allá de preservar la magia de Herencia Mexicarties, su objetivo es potenciarla, integrando una cultura tan rica en el mundo digital. Con su formación y experiencia, su enfoque se centra en la convergencia estratégica para crear un puente innovador que celebre y amplifiquela riqueza cultural en el espacio digital de Herencia Mexicarties",
  s6: "Desarrollador Fullstack que integra su amor por México y su pasión por el código, creando un puente entre la tecnologia y la diversidad cultural. Cada línea de código es una expresión tangible de la diversidad, riqueza y magia de México. El enfoque se trata en crear experiencias digitales que reflejen la belleza de México, tejiendo así un vínculo perdurable entre la tradición y la tecnología"
};

// Evento que se activa al cambiar de slide
document.querySelectorAll('[name="slider"]').forEach(radio => {
  radio.addEventListener("change", () => {
    // Obtener el id del slide activo
    const slideId = radio.id;
    // Cambiar el texto según el id del slide
    textoBio.innerHTML = textos[slideId];
  });
}
);