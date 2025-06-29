import service1 from "./img/service1.jpg"
import service2 from "./img/service2.jpg"

const features = [
  {
    title: "Judul",
    title1: "Pertama",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLink: "#",
    imageUrl: service1, // Pastikan gambar berada di public/img/
    imageFirst: true,
  },
  {
    title: "Judul",
    title1: "Kedua",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLink: "#",
    imageUrl: service2,
    imageFirst: false,
  }
];

const Services = () => {
  return (
    <section id="services">
      <div className="container-fluid">
        <h2 className="display-4 text-center mb-5 text-white mt-5">
          Mengapa memilih <span style={{ color: '#b6895b' }}>kami?</span>
        </h2>
        <div className="row" id="about-content">
          {features.map((feature, index) => (
            <div className="row no-gutters mb-5" key={index}>
              <div className={`col-12 col-md-6 ${feature.imageFirst ? '' : 'order-md-2'}`}>
                <div style={{ padding: '15px' }}>
                  <h3 className="display-5 text-center text-white mt-3 mb-3">
                    {feature.title} <span style={{ color: '#b6895b' }}>{feature.title1}</span>
                  </h3>
                  <p className="text-center text-white">{feature.description}</p>
                </div>
              </div>
              <div className={`col-12 col-md-6 ${feature.imageFirst ? 'order-md-1' : ''}`}>
                <div
                  className="vh-100 cover"
                  style={{
                    backgroundImage: `url(${feature.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
