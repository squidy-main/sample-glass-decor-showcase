import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useState, useEffect } from 'react';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeCategory]);

  // Sample collections data
  const collections = [
    {
      id: 'furniture',
      title: 'Furniture',
      description: 'Transform your living space with our curated selection of modern furniture and decor.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2832',
    },
    {
      id: 'lighting',
      title: 'Lighting',
      description: 'Elegant lighting solutions that combine style with functionality for a warm ambiance.',
      image: 'https://images.unsplash.com/photo-1595514535415-3365e4c47f69?auto=format&fit=crop&q=80&w=2940',
    },
    {
      id: 'decor',
      title: 'Decor',
      description: 'Finishing touches that elevate your space with texture, color, and form.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2658',
    },
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory 
    ? products.filter(product => product.category.toLowerCase() === activeCategory.toLowerCase())
    : products;

  // Handle category selection
  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === activeCategory) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
      // Scroll to products section
      const productsSection = document.querySelector('.products-section');
      if (productsSection) {
        setTimeout(() => {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div 
                key={collection.id}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                onClick={() => handleCategoryClick(collection.id)}
              >
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${activeCategory === collection.id ? 'bg-black/50' : 'bg-black/30 group-hover:bg-black/40'} transition-colors`} />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2">{collection.title}</h3>
                  <p className="max-w-xs opacity-90">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {activeCategory && (
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-xl font-light">
              Showing: <span className="font-medium capitalize">{activeCategory}</span>
            </h2>
            <button 
              onClick={() => setActiveCategory(null)}
              className="text-sm border-b border-black hover:border-gray-400"
            >
              Clear Filter
            </button>
          </div>
        </section>
      )}

      {/* Products */}
      <section className="section-padding products-section">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-12">
            {activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Collection` : 'All Products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collections;
