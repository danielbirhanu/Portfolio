
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Daniel Birhanu</span></h1>
          <h2>Fullstack Developer</h2>
          <p>I build fast, maintainable full-stack apps that users love.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        {/* <div className="hero-image">
          <img src={image} alt="Profile" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;