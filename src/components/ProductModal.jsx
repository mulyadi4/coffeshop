

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row" id="modalContent">
              <div className="col-md-12 mb-4">
                <div className="card">
                  <img
                    className="card-img-top bg-white"
                    style={{ maxHeight: '400px' }}
                    src={product.img}
                    alt={product.title}
                  />
                  <div className="card-body bg-white text-black">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={onClose}>
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
