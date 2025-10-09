export enum MenuCategory {
  Embutidos = 'Embutidos y Quesos',
  FastFood = 'Fast Food',
  Ensaladas = 'Ensaladas y Verduras',
  Carnes = 'Carnes',
  PescadosYArroces = 'Del Mar y Arroces',
  Guarniciones = 'Guarniciones',
  Postres = 'Broche Final'
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  imageUrl: string;
}
