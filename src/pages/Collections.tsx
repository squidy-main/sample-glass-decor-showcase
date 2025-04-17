
import ProductCard from '@/components/ProductCard';

const Collections = () => {
  // Sample collections data
  const collections = [
    {
      id: 'living-room',
      title: 'Living Room',
      description: 'Transform your living space with our curated selection of modern furniture and decor.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2832',
    },
    {
      id: 'dining',
      title: 'Dining',
      description: 'Elegant dining furniture that combines style with functionality for memorable gatherings.',
      image: 'https://images.unsplash.com/photo-1595514535415-3365e4c47f69?auto=format&fit=crop&q=80&w=2940',
    },
    {
      id: 'bedroom',
      title: 'Bedroom',
      description: 'Create a serene retreat with our minimalist bedroom collection.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2880',
    },
    {
      id: 'decor',
      title: 'Decor & Accessories',
      description: 'Finishing touches that elevate your space with texture, color, and form.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2658',
    },
  ];

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Sculptural Coffee Table',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&q=80&w=2906',
    },
    {
      id: 2,
      name: 'Minimalist Desk Lamp',
      category: 'Lighting',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=2936',
    },
    {
      id: 3,
      name: 'Ceramic Vase Set',
      category: 'Decor',
      image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&q=80&w=2787',
    },
    {
      id: 4,
      name: 'Modern Lounge Chair',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=2865',
    },
    {
      id: 5,
      name: 'Minimalist Dining Set',
      category: 'Dining',
      image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=2873',
    },
    {
      id: 6,
      name: 'Scandinavian Shelf',
      category: 'Storage',
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2940',
    },
    {
      id: 7,
      name: 'Abstract Wall Art',
      category: 'Decor',
      image: 'https://images.unsplash.com/photo-1573771796784-2336b144eb2d?auto=format&fit=crop&q=80&w=2938',
    },
    {
      id: 8,
      name: 'Modular Sofa',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=2940',
    },
  ];

  return (
    <div className="pt-20">
      {/* Collections Hero */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-center mb-4">Collections</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Explore our thoughtfully curated collections, designed to transform your living spaces
          </p>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <div 
                key={collection.id}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2">{collection.title}</h3>
                  <p className="max-w-xs opacity-90">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
