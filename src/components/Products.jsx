import Button from 'react-bootstrap/Button';
import p1 from "./img/p1.png"
import p2 from "./img/p2.png"
import p3 from "./img/p3.png"
import p4 from "./img/p4.png"
import p5 from "./img/p5.png"
import p6 from "./img/p6.png"

const produk = [
  { id: 1, img: p1, title: "Coffee 1", description: "Rasa klasik dan nikmat, cocok untuk semua suasana.", price: "36", link: "#" },
  { id: 2, img: p2, title: "Coffee 2", description: "Aroma kuat dan rasa pekat untuk pencinta kopi sejati.", price: "40", link: "#" },
  { id: 3, img: p3, title: "Coffee 3", description: "Campuran kopi arabika dan robusta dengan rasa seimbang.", price: "45", link: "#" },
  { id: 4, img: p4, title: "Coffee 4", description: "Cocok untuk es kopi susu dengan cita rasa karamel.", price: "32", link: "#" },
  { id: 5, img: p5, title: "Coffee 5", description: "Kopi dengan sentuhan coklat dan aftertaste lembut.", price: "40", link: "#" },
  { id: 6, img: p6, title: "Coffee 6", description: "Kopi ringan dengan rasa floral dan acidity yang pas.", price: "35", link: "#" }
];

const Products = ({ onSelectProduct }) => {
  return (
    <section id="products" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-4 text-white">
          Produk <span style={{ color: '#b6895b' }}>Kami</span>
        </h2>
      </div>
      <div className="row">
        {produk.map(product => (
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow border-0 product-card">
              <img
                className="card-img-top"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
                src={product.img}
                alt={product.title}
              />
              <div className="card-body bg-dark text-white d-flex flex-column">
                <h5 className="card-title fw-bold">{product.title}</h5>
                <p className="card-text mb-2">Rp. {product.price}k</p>
                <Button 
                  className="mt-auto bg-black border-warning text-white"
                  onClick={() => onSelectProduct(product)}
                >
                  Tampilkan Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .product-card:hover {
          transform: translateY(-10px);
          transition: all 0.3s ease-in-out;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Products;
