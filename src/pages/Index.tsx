import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import FeaturedProduct from '@/components/FeaturedProduct';
import { ArrowRight } from 'lucide-react';
import { Element } from 'react-scroll';
import { products } from '@/data/products';

const Index = () => {
  // Get the first 4 products for new arrivals
  const newArrivals = products.slice(0, 4);

  return (
    <>
      <Hero 
        title="Elevate your space with modern designs" 
        subtitle="Discover our curated collection of minimalist home decor and furniture" 
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2800"
      />
      
      <Element name="content">
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">New Arrivals</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Discover our latest collection of contemporary designs that redefine modern living
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {newArrivals.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/collections" 
                className="inline-flex items-center group"
              >
                <span className="mr-2 border-b border-black group-hover:border-gray-400 transition-colors">
                  View All Products
                </span>
                <ArrowRight 
                  size={16} 
                  className="transform group-hover:translate-x-2 transition-transform duration-300" 
                />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <FeaturedProduct 
              title="The Nordic Collection"
              description="Inspired by Scandinavian design principles, our Nordic Collection combines simplicity, minimalism and functionality. Each piece is crafted with sustainable materials and designed to create harmony in any space."
              image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2832"
              link="/collections"
            />
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container mx-auto">
            <FeaturedProduct 
              title="Japanese Inspired"
              description="Embodying the essence of Japanese aesthetics, this collection celebrates the beauty of imperfection, simplicity, and natural materials. Each piece tells a story of craftsmanship and mindful design."
              image="https://images.unsplash.com/photo-1545083036-61d5d6fc6f4e?auto=format&fit=crop&q=80&w=2940"
              link="/collections"
              reverse={true}
            />
          </div>
        </section>
        
        <section className="section-padding bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">Our Philosophy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Sample, we believe that exceptional design should be accessible to everyone. Our curated collection 
              showcases pieces that combine aesthetics with functionality, creating spaces that inspire and delight.
              Each product is selected with care, emphasizing quality, sustainability, and timeless design.
            </p>
            <Link 
              to="/about" 
              className="mt-8 inline-flex items-center group"
            >
              <span className="mr-2 border-b border-black group-hover:border-gray-400 transition-colors">
                Learn More About Us
              </span>
              <ArrowRight 
                size={16} 
                className="transform group-hover:translate-x-2 transition-transform duration-300" 
              />
            </Link>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Index;
