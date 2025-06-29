import React from "react";

const Header = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="jumbotron jumbotron-fluid background-header position-relative">
      <div className="container-fluid text-end py-5">
        <h1 className="display-3 text-white">
          Mari Nikmati Secangkir
          <span style={{ color: "#b6895b" }}> Kopi</span>
        </h1>
        <p className="lead text-white fw-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          enim.
        </p>
      </div>

      {/* Tombol panah ke bawah */}
      <div className="text-center position-absolute bottom-0 start-50 translate-middle-x mb-5">
        <button
          onClick={scrollToNextSection}
          className="rounded-circle p-0 d-flex align-items-center justify-content-center"
          style={{
            width: "60px",
            height: "60px",
            background: "linear-gradient(to right, #000, #fff)",
            border: "2px solid #ffc107",
            animation: "bounce 2s infinite",
            color: "#ffc107",
            fontSize: "24px",
          }}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>

      {/* Animasi bounce */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-7px);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
