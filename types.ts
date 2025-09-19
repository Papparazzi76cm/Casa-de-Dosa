
export enum MenuCategory {
  Starters = 'Entrantes',
  Mains = 'Principales',
  Desserts = 'Postres',
  Drinks = 'Bebidas'
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  imageUrl: string;
}
