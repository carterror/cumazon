import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}