
import { ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-scroll';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const Hero = ({ title, subtitle, image }: HeroProps) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
          {subtitle}
        </p>
        
        {/* Scroll Indicator */}
        <Link
          to="content"
          smooth={true}
          duration={500}
          className="absolute bottom-10 cursor-pointer animate-float"
        >
          <ArrowDownCircle className="text-white h-10 w-10" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
