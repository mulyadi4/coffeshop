import './App.css';
import { useState } from 'react';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar1 from "./components/Navbar1";
import Services from "./components/Services";
import ProductModal from "./components/ProductModal";
import Products from "./components/Products";

function App() {
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

export default App;
