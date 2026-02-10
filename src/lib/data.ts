export const videoInicio = "/assets/videos/video2.webm";
export const videoCarta = "/assets/videos/video1.webm";
export const imageNosotros = "/assets/images/historia-antes.png";
export const imageReservar = "/assets/images/bg.png";

export const historia = "";
export const imagenHistoriaUno = "/assets/images/historia-antes.png";
export const imagenHistoriaDos = "/assets/images/chef-cocinando.png";

export const contacto = {
  address: "Prolog. Cerro Azul 601, Puerto Pisco",
  google_maps: "https://maps.app.goo.gl/y46svVqrm5JQckKk8",
  google_maps_embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15494.664287895088!2d-76.2089478!3d-13.7083049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2c2f6d5e7d5%3A0x6d9f7a9f7a9f7a9f!2sPisco%2C%20Peru!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  phone: "+51 936 832 504",
  whatsapp: "+51936832504",
  social: {
    facebook: "https://www.facebook.com/RestauranteHuberPisco/",
    instagram: "https://www.instagram.com/lavinadehuber_oficial/",
  },
};

export const equipo = [
  {
    nombre: "Gerencia",
    rol: "Administración",
    desc: "Liderando la excelencia operativa y el servicio al cliente.",
    image: "/assets/images/equipo-admin.png",
  },
  {
    nombre: "Brigada de Cocina",
    rol: "Gastronomía",
    desc: "Maestros del fuego y el sabor dedicados a la tradición.",
    image: "/assets/images/equipo-cocina.png",
  },
  {
    nombre: "Equipo de Salón",
    rol: "Atención al Cliente",
    desc: "Anfitriones apasionados por brindar una experiencia inolvidable.",
    image: "/assets/images/equipo-atencion.png",
  },
];

export const horario = [
  { dia: "Lunes", hora_apertura: "11:30 a.m.", hora_cierre: "5:00 p.m." },
  { dia: "Martes", hora_apertura: "11:30 a.m.", hora_cierre: "" },
  { dia: "Miércoles", hora_apertura: "11:30 a.m.", hora_cierre: "5:00 p.m." },
  { dia: "Jueves", hora_apertura: "11:30 a.m.", hora_cierre: "5:00 p.m." },
  { dia: "Viernes", hora_apertura: "11:30 a.m.", hora_cierre: "5:00 p.m." },
  { dia: "Sábado", hora_apertura: "11:30 a.m.", hora_cierre: "5:00 p.m." },
  { dia: "Domingo", hora_apertura: "11:30 a.m.", hora_cierre: "5:00 p.m." },
];

export const categorias = [
  { id: "marinos", nombre: "Pescados y Mariscos" },
  { id: "brasas", nombre: "Nuestras Parrillas" },
  { id: "entradas", nombre: "Entradas y Piques" },
];

export const todosLosPlatos = [
  {
    nombre: "Ceviche Mixto",
    precio: "45",
    desc: "Pesca del día, limón y ají limo.",
    cat: "marinos",
    imagen: "/assets/images/foto2.png",
    popular: true,
  },
  {
    nombre: "Ceviche de Langostinos",
    precio: "45",
    desc: "Pesca del día, limón y ají limo.",
    cat: "marinos",
    imagen: "/assets/images/foto2.png",
    popular: false,
  },
  {
    nombre: "Ceviche de Pulpo",
    precio: "45",
    desc: "Pesca del día, limón y ají limo.",
    cat: "marinos",
    imagen: "/assets/images/foto2.png",
    popular: false,
  },
  {
    nombre: "Ceviche Tradicional",
    precio: "45",
    desc: "Pesca del día, limón y ají limo.",
    cat: "marinos",
    imagen: "/assets/images/foto2.png",
    popular: true,
  },
  {
    nombre: "Tiradito al Ají Amarillo",
    precio: "42",
    desc: "Láminas de pescado en crema de ají.",
    cat: "marinos",
    imagen: "/assets/images/foto2.png",
    popular: false,
  },
  {
    nombre: "Lomo Fino a la Parrilla",
    precio: "58",
    desc: "Corte premium con papas nativas.",
    cat: "brasas",
    imagen: "/assets/images/foto2.png",
    popular: false,
  },
  {
    nombre: "Anticuchos de Corazón",
    precio: "35",
    desc: "Receta tradicional con aroma a sarmiento.",
    cat: "brasas",
    imagen: "/assets/images/foto2.png",
    popular: false,
  },
  {
    nombre: "Causa Acevichada",
    precio: "38",
    desc: "Causa de papa amarilla con topping de ceviche.",
    cat: "entradas",
    imagen: "/assets/images/foto2.png",
    popular: false,
  },
];

export const reseñas = [
  {
    usuario: "Carlos M.",
    texto:
      "El mejor ceviche de Pisco, sin duda. El chicharrón de pota es de otro mundo.",
    estrellas: 5,
  },
  {
    usuario: "Elena R.",
    texto:
      "La parrilla mar y tierra es perfecta para compartir. La atención es impecable.",
    estrellas: 5,
  },
  {
    usuario: "Juan P.",
    texto: "Tradición pura. Se nota el cariño en cada plato.",
    estrellas: 5,
  },
];

interface FAQ {
  p: string;
  r: string;
}

export const faqs: FAQ[] = [
  { p: "", r: "" },
  { p: "", r: "" },
];
