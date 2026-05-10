import { type Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Oud Noir',
    brand: 'Sillage',
    price: 240,
    description: 'A deep, mysterious fragrance that blends precious oud with spicy saffron and dark leather.',
    category: 'Woody',
    images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800'],
    notes: {
      top: ['Saffron', 'Black Pepper'],
      middle: ['Rose', 'Leather'],
      base: ['Oud', 'Patchouli', 'Sandalwood']
    },
    rating: 4.8,
    reviewsCount: 124,
    stock: 50
  },
  {
    id: '2',
    name: 'Jardin de Rose',
    brand: 'Sillage',
    price: 180,
    description: 'A vibrant garden in full bloom, capturing the essence of fresh morning dew on delicate rose petals.',
    category: 'Floral',
    images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800'],
    notes: {
      top: ['Lychee', 'Bergamot'],
      middle: ['Damask Rose', 'Peony'],
      base: ['White Musk', 'Cedarwood']
    },
    rating: 4.9,
    reviewsCount: 89,
    stock: 35
  },
  {
    id: '3',
    name: 'Azure Breeze',
    brand: 'Sillage',
    price: 150,
    description: 'The feeling of the Mediterranean coast, with sparkling citrus and saline marine notes.',
    category: 'Fresh',
    images: ['https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&q=80&w=800'],
    notes: {
      top: ['Lemon', 'Grapefruit', 'Neroli'],
      middle: ['Sea Salt', 'Sage'],
      base: ['Ambrette Seed', 'Seaweed']
    },
    rating: 4.7,
    reviewsCount: 156,
    stock: 20
  },
  {
    id: '4',
    name: 'Amber Glow',
    brand: 'Sillage',
    price: 210,
    description: 'Warm, resinous, and deeply comforting. A golden envelope of vanilla, labdanum, and benzoin.',
    category: 'Oriental',
    images: ['https://images.unsplash.com/photo-1512789673248-66a36aef778b?auto=format&fit=crop&q=80&w=800'],
    notes: {
      top: ['Mandarin', 'Cardamom'],
      middle: ['Amber', 'Myrrh'],
      base: ['Vanilla', 'Tonka Bean', 'Styrax']
    },
    rating: 4.6,
    reviewsCount: 92,
    stock: 45
  }
];
