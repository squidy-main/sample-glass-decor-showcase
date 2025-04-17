
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeaturedProductProps {
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

const FeaturedProduct = ({
  title,
  description,
  image,
  link,
  reverse = false,
}: FeaturedProductProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-16",
        reverse && "md:flex-row-reverse"
      )}
    >
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-[4/3] md:aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center group"
        >
          <span className="mr-2 border-b border-black group-hover:border-gray-400 transition-colors">
            View Collection
          </span>
          <ArrowRight 
            size={16} 
            className="transform group-hover:translate-x-2 transition-transform duration-300" 
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
