
export const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-body">
            <div className="card">
              <img
                className="card-img-top"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
                src={product.img}
                alt={product.title}
              />
              <div className="card-body">
                <h4 className="card-title fw-bold">{product.title}</h4>
                <p className="card-text text-muted">{product.description}</p>
              </div>
            </div>
            <div className="text-end pt-3">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal