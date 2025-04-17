import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  category: string;
  className?: string;
  featured?: boolean;
}

const ProductCard = ({ id, image, name, category, className, featured = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link to={`/product/${id}`}>
      <div 
        className={cn(
          "group relative overflow-hidden transition-all duration-300",
          featured ? "aspect-[4/5]" : "aspect-square",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Product Info */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="glass p-4 rounded-md space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{category}</p>
            <h3 className="text-lg md:text-xl font-medium">{name}</h3>
            
            <div 
              className={cn(
                "flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2",
                isHovered ? "translate-x-0" : "translate-x-4"
              )}
            >
              <span className="text-sm mr-2">View Details</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
