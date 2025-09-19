import { MenuCategory, MenuItem } from './types';

export const menuItems: MenuItem[] = [
  {
    name: 'Patatas Bravas con Garam Masala',
    description: 'Crujientes patatas bravas con una salsa picante infusionada con especias indias.',
    price: '9.50€',
    category: MenuCategory.Starters,
    imageUrl: 'https://picsum.photos/id/102/400/400',
  },
  {
    name: 'Croquetas de Pollo Tikka',
    description: 'Cremosas croquetas rellenas de pollo tikka masala, una explosión de sabor.',
    price: '11.00€',
    category: MenuCategory.Starters,
    imageUrl: 'https://picsum.photos/id/203/400/400',
  },
  {
    name: 'Paella de Cordero Rogan Josh',
    description: 'Arroz bomba cocinado a la perfección con tierno cordero en salsa Rogan Josh.',
    price: '24.00€',
    category: MenuCategory.Mains,
    imageUrl: 'https://picsum.photos/id/305/400/400',
  },
  {
    name: 'Dosa Rellena de Chorizo Ibérico',
    description: 'Crujiente dosa de arroz y lentejas rellena de chorizo ibérico salteado con cebolla y pimientos.',
    price: '18.50€',
    category: MenuCategory.Mains,
    imageUrl: 'https://picsum.photos/id/401/400/400',
  },
   {
    name: 'Bacalao al Pil-Pil con Curry de Coco',
    description: 'Lomo de bacalao confitado en aceite de oliva y ajo, servido sobre una suave salsa de curry y coco.',
    price: '22.50€',
    category: MenuCategory.Mains,
    imageUrl: 'https://picsum.photos/id/543/400/400',
  },
  {
    name: 'Tarta de Queso con Mango Lassi',
    description: 'Una versión cremosa de la tarta de queso, con una capa superior de reducción de mango lassi.',
    price: '8.00€',
    category: MenuCategory.Desserts,
    imageUrl: 'https://picsum.photos/id/431/400/400',
  },
  {
    name: 'Churros con Chocolate y Cardamomo',
    description: 'Churros tradicionales servidos con un espeso chocolate caliente especiado con cardamomo.',
    price: '7.50€',
    category: MenuCategory.Desserts,
    imageUrl: 'https://picsum.photos/id/175/400/400',
  },
  {
    name: 'Sangría de Azafrán y Cítricos',
    description: 'Nuestra sangría especial con vino blanco, azafrán, naranja y un toque de jengibre.',
    price: '15.00€ (Jarra)',
    category: MenuCategory.Drinks,
    imageUrl: 'https://picsum.photos/id/1060/400/400',
  },
];

export const galleryImages = [
    { id: 1, url: 'https://picsum.photos/id/237/800/600', alt: 'Plato de fusión exquisito' },
    { id: 2, url: 'https://picsum.photos/id/106/800/600', alt: 'Ambiente elegante del restaurante' },
    { id: 3, url: 'https://picsum.photos/id/312/800/600', alt: 'Cóctel artesanal dorado' },
    { id: 4, url: 'https://picsum.photos/id/433/800/600', alt: 'Detalle de la decoración del local' },
    { id: 5, url: 'https://picsum.photos/id/488/800/600', alt: 'Chef preparando un plato' },
    { id: 6, url: 'https://picsum.photos/id/553/800/600', alt: 'Postre de fusión india-española' },
    { id: 7, url: 'https://picsum.photos/id/659/800/600', alt: 'Detalle de plato con hierbas' },
    { id: 8, url: 'https://picsum.photos/id/776/800/600', alt: 'Vista amplia del comedor' },
];