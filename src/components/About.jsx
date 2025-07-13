const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate fullstack developer with 3 years of experience
              creating responsive and user-friendly websites. I specialize in
              React.js and modern JavaScript frameworks.
            </p>
            <p>
              I first explored web development in high school, then leveled up
              my skills through intensive bootcamps. Now, I'm a Computer Science
              student at Addis Ababa University and a Full-Stack Developer with
              2+ years of experience. I build scalable web apps, APIs, and
              responsive interfaces using modern tools like React& Node.js. Passionate about clean code and problem-solving, I thrive
              where technology meets real-world impact. When I'm not coding, you'll find me exploring new technologies and development trends.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span>Name:</span>
                <p>Daniel Birhanu</p>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <p>danielbirhant@gmail.com</p>
              </div>
              <div className="info-item">
                <span>Experience:</span>
                <p>2+ Years</p>
              </div>
              <div className="info-item">
                <span>Location:</span>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
          {/* <div className="about-image">
            <img src={image} alt="About" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
