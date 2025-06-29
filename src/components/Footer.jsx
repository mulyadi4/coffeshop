
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="col-lg-12" style={{ padding: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <a href="#" className="text-light" style={{ padding: '5px' }}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-light" style={{ padding: '5px' }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-light" style={{ padding: '5px' }}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-center text-secondary">Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
