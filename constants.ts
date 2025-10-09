import { MenuCategory, MenuItem } from './types';
import { menuImages, galleryImagesData } from './assets/images';

export const menuItems: MenuItem[] = [
  // Embutidos y Quesos
  {
    name: 'Jamón Ibérico',
    description: 'Finas lonchas de jamón ibérico de bellota, curación de 36 meses. Un clásico inmejorable.',
    price: '22.00€',
    category: MenuCategory.Embutidos,
    imageUrl: menuImages.jamonIberico,
  },
  {
    name: 'Selección de Ibéricos',
    description: 'Tabla variada con los mejores embutidos ibéricos de la región: lomo, chorizo y salchichón.',
    price: '18.50€',
    category: MenuCategory.Embutidos,
    imageUrl: menuImages.tablaIbericos,
  },
  {
    name: 'Selección de Quesos',
    description: 'Un viaje por los sabores de España con nuestra selección de quesos artesanales y mermeladas caseras.',
    price: '16.00€',
    category: MenuCategory.Embutidos,
    imageUrl: menuImages.tablaQuesos,
  },

  // Fast Food
  {
    name: 'Hamburguesa de Buey',
    description: 'Carne de buey de primera calidad, pan brioche, queso cheddar y nuestra salsa secreta Vulcan.',
    price: '15.50€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.hamburguesa,
  },
  {
    name: 'Patatas Bravas',
    description: 'Crujientes por fuera, tiernas por dentro, con una salsa brava casera ligeramente picante.',
    price: '8.00€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.patatasBravas,
  },
  {
    name: 'Mini Burger',
    description: 'Dos mini hamburguesas de buey, perfectas para compartir o como aperitivo.',
    price: '10.50€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.miniBurger,
  },
  {
    name: 'Torrezno de Soria',
    description: 'Panceta de cerdo frita hasta alcanzar una corteza crujiente y un interior jugoso. Tradición pura.',
    price: '9.50€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.torrezno,
  },
  {
    name: 'Croquetas de Pollo Curry Mali',
    description: 'Cremosas croquetas con un toque exótico de pollo al curry estilo Mali. Una fusión sorprendente.',
    price: '11.00€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.croquetasPollo,
  },
  {
    name: 'Croquetas de Kimchi y Mango',
    description: 'El equilibrio perfecto entre el picante fermentado del kimchi y el dulzor del mango fresco.',
    price: '11.50€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.croquetasKimchi,
  },
  {
    name: 'Samosas Vegetales',
    description: 'Empanadillas crujientes rellenas de una mezcla especiada de patatas y guisantes.',
    price: '9.00€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.samosas,
  },
  {
    name: 'Gyoza de Ropa Vieja',
    description: 'Empanadillas japonesas rellenas del clásico guiso de ropa vieja, servidas con su jugo.',
    price: '12.00€',
    category: MenuCategory.FastFood,
    imageUrl: menuImages.gyozas,
  },

  // Ensaladas y Verduras
  {
    name: 'Burrata con Tartar de Fruta de Dragón y Manzana',
    description: 'Burrata fresca sobre un lecho de tartar exótico de fruta de dragón y manzana verde.',
    price: '14.00€',
    category: MenuCategory.Ensaladas,
    imageUrl: menuImages.burrata,
  },
  {
    name: 'Ensaladilla de Gamba con Alioli',
    description: 'Nuestra versión de la ensaladilla rusa, con gambas frescas y un suave alioli casero.',
    price: '12.50€',
    category: MenuCategory.Ensaladas,
    imageUrl: menuImages.ensaladilla,
  },
  {
    name: 'Crema de Temporada',
    description: 'Pregunta por nuestra crema del día, elaborada con las verduras más frescas del mercado.',
    price: '8.50€',
    category: MenuCategory.Ensaladas,
    imageUrl: menuImages.cremaVerduras,
  },

  // Carnes
  {
    name: 'Onglet de Angus con Irish Champ',
    description: 'Corte de ternera Angus jugoso y tierno, acompañado de puré de patata irlandés y jugo de carne.',
    price: '25.00€',
    category: MenuCategory.Carnes,
    imageUrl: menuImages.ongletAngus,
  },
  {
    name: 'Rulo de Lechazo con Boletus y Jugo de Granada',
    description: 'Tierno rulo de cordero lechal deshuesado, con salsa de boletus y un toque agridulce de granada.',
    price: '28.00€',
    category: MenuCategory.Carnes,
    imageUrl: menuImages.ruloLechazo,
  },

  // Del Mar y Arroces
  {
    name: 'Tartar de Atún Rojo, Sandía y Ponzu de Tomate',
    description: 'Refrescante tartar de atún rojo de almadraba con dados de sandía y una emulsión de ponzu y tomate.',
    price: '21.00€',
    category: MenuCategory.PescadosYArroces,
    imageUrl: menuImages.tartarAtun,
  },
  {
    name: 'Rodaballo con Puré de Coliflor y Salsa Ponzu',
    description: 'Lomo de rodaballo a la plancha con piel crujiente, sobre un cremoso puré de coliflor y salsa ponzu.',
    price: '26.00€',
    category: MenuCategory.PescadosYArroces,
    imageUrl: menuImages.rodaballo,
  },
  {
    name: 'Arroz de Marisco',
    description: 'Arroz meloso con una selección de los mejores mariscos frescos del día.',
    price: '23.00€',
    category: MenuCategory.PescadosYArroces,
    imageUrl: menuImages.arrozMarisco,
  },

  // Guarniciones
  {
    name: 'Patatas Fritas',
    description: 'Patatas fritas caseras, doradas y crujientes. El acompañamiento perfecto.',
    price: '5.00€',
    category: MenuCategory.Guarniciones,
    imageUrl: menuImages.patatasFritas,
  },
  {
    name: 'Boniato Frito',
    description: 'Bastones de boniato frito con un toque de sal en escamas. Dulce y salado a la vez.',
    price: '6.00€',
    category: MenuCategory.Guarniciones,
    imageUrl: menuImages.boniatoFrito,
  },

  // Broche Final
  {
    name: 'Tarta de Quesos',
    description: 'Cremosa y horneada al estilo tradicional, con una base de galleta artesana.',
    price: '7.50€',
    category: MenuCategory.Postres,
    imageUrl: menuImages.tartaQueso,
  },
  {
    name: 'Torrija con Espuma de Vainilla',
    description: 'Torrija caramelizada, empapada en leche y canela, con una ligera espuma de vainilla de Tahití.',
    price: '8.00€',
    category: MenuCategory.Postres,
    imageUrl: menuImages.torrija,
  },
  {
    name: 'Pannacotta con Chutney de Mango',
    description: 'Clásica pannacotta italiana servida con un chutney casero de mango con un toque especiado.',
    price: '7.00€',
    category: MenuCategory.Postres,
    imageUrl: menuImages.pannacotta,
  },
];

export const galleryImages = galleryImagesData;
