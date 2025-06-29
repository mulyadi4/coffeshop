import Button from 'react-bootstrap/Button';
import p1 from "./img/p1.png"
import p2 from "./img/p2.png"
import p3 from "./img/p3.png"
import p4 from "./img/p4.png"
import p5 from "./img/p5.png"
import p6 from "./img/p6.png"

const produk = [
  { id: 1, img: p1, title: "coffee1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", price: "36", link: "#" },
  { id: 2, img: p2, title: "coffee2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", price: "40", link: "#" },
  { id: 3, img: p3, title: "coffee3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", price: "45", link: "#" },
  { id: 4, img: p4, title: "coffee4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", price: "32", link: "#" },
  { id: 5, img: p5, title: "coffee5", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", price: "40", link: "#" },
  { id: 6, img: p6, title: "coffee6", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", price: "35", link: "#" }
];

const Products = ({ onSelectProduct }) => {
  return (
    <section id="products" className="container">
      <div className="row text-center">
        <div className="col-12 pb-4">
          <h2 className="display-4 text-center mb-5 text-white mt-4">
            Produk <span style={{ color: '#b6895b' }}>kami</span>
          </h2>
        </div>
      </div>
      <div className="row" id="productRow">
        {produk.map(product => (
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card">
              <img
                className="card-img-top bg-black"
                style={{ maxHeight: '400px' }}
                src={product.img}
                alt={product.title}
              />
              <div className="card-body bg-black text-white">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">Rp. {product.price}k</p>

                <Button className="bg-black border-warning text-white bg-white-hover"
                 onClick={() => onSelectProduct(product)}>
                  Tampilkan Selengkapnya</Button>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
