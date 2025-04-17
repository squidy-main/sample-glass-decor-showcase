interface Dimensions {
  width: string;
  height: string;
  depth: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description?: string;
  dimensions?: Dimensions;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Sculptural Coffee Table',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'This modern sculptural coffee table combines form and function, creating a striking focal point for your living space. The organic shape is complemented by the high-quality materials used in its construction.',
    dimensions: {
      width: '120cm',
      height: '35cm',
      depth: '60cm'
    },
    featured: true
  },
  {
    id: 2,
    name: 'Minimalist Desk Lamp',
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'A perfect blend of simplicity and functionality, this desk lamp provides optimal lighting for your workspace while adding a touch of elegance to your desk setup.',
    dimensions: {
      width: '15cm',
      height: '45cm',
      depth: '15cm'
    }
  },
  {
    id: 3,
    name: 'Ceramic Vase Set',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'This set of handcrafted ceramic vases brings texture and visual interest to any shelf or table. Each piece is unique with subtle variations in the glaze that highlight the artisanal quality.',
    dimensions: {
      width: '10cm',
      height: '25cm',
      depth: '10cm'
    }
  },
  {
    id: 4,
    name: 'Modern Lounge Chair',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'Comfort meets contemporary design in this sculptural lounge chair. The organic form and premium upholstery make it a statement piece for any living space.',
    dimensions: {
      width: '75cm',
      height: '80cm',
      depth: '85cm'
    },
    featured: true
  },
  {
    id: 5,
    name: 'Glass Pendant Light',
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1573661588003-e6e4efa56ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'This elegant pendant light features handblown glass with subtle variations that create a warm, ambient glow. The minimalist design complements both modern and traditional interiors.',
    dimensions: {
      width: '30cm',
      height: '35cm',
      depth: '30cm'
    }
  },
  {
    id: 6,
    name: 'Marble Wall Clock',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1563461661024-ca3159a8e47f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'Crafted from premium marble, this wall clock is as much a timepiece as it is a work of art. The natural variations in the stone make each piece unique.',
    dimensions: {
      width: '30cm',
      height: '30cm',
      depth: '5cm'
    }
  },
  {
    id: 7,
    name: 'Scandinavian Dining Table',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'Inspired by Scandinavian design principles, this dining table combines clean lines with warmth and functionality. The solid wood construction ensures durability for everyday use.',
    dimensions: {
      width: '180cm',
      height: '75cm',
      depth: '90cm'
    },
    featured: true
  },
  {
    id: 8,
    name: 'Handwoven Textile Wall Art',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'Add texture and visual interest to your walls with this handwoven textile art piece. The neutral palette ensures it complements a wide range of interior styles.',
    dimensions: {
      width: '90cm',
      height: '120cm',
      depth: '5cm'
    }
  },
  {
    id: 9,
    name: 'Sculptural Glass Vase',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5d5e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    description: 'This sculptural glass vase combines artistry and functionality. The fluid form catches and reflects light beautifully, creating a stunning display even without flowers.',
    dimensions: {
      width: '20cm',
      height: '28cm',
      depth: '20cm'
    }
  }
]; 