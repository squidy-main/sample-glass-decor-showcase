
import ProductCard from '@/components/ProductCard';

const Featured = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Sculptural Glass Vase',
      category: 'Decor',
      description: 'Handcrafted glass vase with organic forms inspired by natural landscapes.',
      image: 'https://images.unsplash.com/photo-1612198273689-e7d764e53953?auto=format&fit=crop&q=80&w=2864',
    },
    {
      id: 2,
      name: 'Minimalist Floor Lamp',
      category: 'Lighting',
      description: 'Sleek floor lamp with adjustable arm and dimmable LED light source.',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=2940',
    },
    {
      id: 3,
      name: 'Organic Cotton Throw',
      category: 'Textiles',
      description: 'Ethically produced cotton throw with hand-knotted details and natural dyes.',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2942',
    },
  ];

  // Sample designer features
  const designerFeatures = [
    {
      id: 1,
      name: 'Studio Aria',
      title: 'The Modern Glass Collection',
      description: 'A celebration of form and transparency, Studio Aria creates hand-blown glass objects that capture light and transform spaces through subtle color and organic shapes.',
      image: 'https://images.unsplash.com/photo-1530603907829-89b72c36a604?auto=format&fit=crop&q=80&w=2874',
    },
    {
      id: 2,
      name: 'Kaya Design',
      title: 'Innovative Ceramics',
      description: 'Inspired by traditional techniques with a contemporary twist, Kaya Design produces ceramic pieces that blend functionality with sculptural elegance.',
      image: 'https://images.unsplash.com/photo-1563131678-787e815f2943?auto=format&fit=crop&q=80&w=2940',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-center mb-4">Featured</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Highlighting exceptional products and designers that represent the pinnacle of modern design
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-12">Products of the Month</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="space-y-6">
                <ProductCard
                  name={product.name}
                  category={product.category}
                  image={product.image}
                  featured={true}
                />
                <div className="p-2">
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                  <p className="text-gray-600 mt-3">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">Designer Spotlight</h2>
          <div className="space-y-32">
            {designerFeatures.map((designer, index) => (
              <div 
                key={designer.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <img 
                    src={designer.image}
                    alt={designer.name}
                    className="w-full rounded-lg aspect-[4/3] object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <p className="text-sm uppercase tracking-wider text-gray-500">{designer.name}</p>
                  <h3 className="text-2xl md:text-3xl font-light">{designer.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{designer.description}</p>
                  <button className="py-2 px-4 border border-black hover:bg-black hover:text-white transition-colors duration-300">
                    View Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
