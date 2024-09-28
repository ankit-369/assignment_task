import { Products } from './components/products';
import { Search } from './components/search';
import { Sidebar } from './components/sidebar';
// import { Search, ShoppingCart } from 'lucide-react';

const ProductCatalog = () => {
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <Search />
          <div>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <Sidebar  />
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4">
          <Products  />
          
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;