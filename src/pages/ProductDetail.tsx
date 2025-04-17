import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

// This would be replaced with actual data fetching in a real app
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the product
    setLoading(true);
    const foundProduct = products.find(p => p.id.toString() === id);
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-200 rounded-md"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 w-3/4"></div>
              <div className="h-4 bg-gray-200 w-1/4"></div>
              <div className="h-24 bg-gray-200 w-full mt-6"></div>
              <div className="h-10 bg-gray-200 w-1/3 mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-light mb-6">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/collections">
          <Button>Browse Collections</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Back button */}
      <Link to="/collections" className="inline-flex items-center group mb-8">
        <ArrowLeft size={16} className="mr-2" />
        <span className="border-b border-transparent group-hover:border-black transition-colors">
          Back to Collections
        </span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-md aspect-square">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-light">{product.name}</h1>
          <p className="text-sm uppercase tracking-wider text-gray-500 mt-2 mb-6">{product.category}</p>
          
          <div className="prose max-w-none mt-8">
            <p className="text-gray-600">
              {product.description || "This elegant piece exemplifies our commitment to quality craftsmanship and timeless design. Each detail has been carefully considered to create a product that is both functional and beautiful."}
            </p>
            
            <h3 className="text-xl font-medium mt-8 mb-4">Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Handcrafted with premium materials</li>
              <li>Timeless design that complements any décor</li>
              <li>Sustainable production methods</li>
              <li>Designed and made with attention to detail</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-8 mb-4">Dimensions</h3>
            <p>Width: {product.dimensions?.width || "45cm"}</p>
            <p>Height: {product.dimensions?.height || "30cm"}</p>
            <p>Depth: {product.dimensions?.depth || "15cm"}</p>
          </div>
          
          {/* Share button */}
          <div className="mt-8">
            <Button variant="outline" className="inline-flex items-center">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <h2 className="text-2xl font-light mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(relatedProduct => (
            relatedProduct.id !== product.id && (
              <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                <div className="group">
                  <div className="aspect-square overflow-hidden rounded-md mb-4">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-500">{relatedProduct.category}</p>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 