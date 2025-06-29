import './style.css';
import { useState } from 'react';



import Header from './Header';
import Services from './Services';
import Products from './Products';
import ProductModal from './ProductModal';
import Contact from './Contact';
import Footer from './Footer';
import Navbar1 from './Navbar1';

const Cafe = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
      <div style={{ backgroundColor: '#060606' }}>
        <Navbar1/>
        <Header/>
        <Services/>
        <Products onSelectProduct={setSelectedProduct} />
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
        <Contact />
        <Footer />
      </div>
    );
  }
  

export default Cafe