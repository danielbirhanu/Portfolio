import bookHub from '../images/bookHub.jpg'
import curalink from '../images/curalink.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Book-hub',
      description: 'A web application for users to rate and review books.',
      technologies: ['React', 'Node.js', 'Multer', 'MongoDB'],
      image: bookHub,
      link: '#',
      github: 'https://github.com/danielbirhanu/Book-Hub'
    },
    {
      id: 2,
      title: 'Curalink',
      description: 'A web platform where patients can book doctor appointments and manage their profiles.',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      image: curalink,
      link: 'https://curalink.vercel.app/',
      github: 'https://github.com/amxson/CURALINK'
    },
    {
      id: 3,
      title: 'Blog Website',
      description: 'A personal blog website to share articles and thoughts.',
      technologies: ['JavaScript', 'API Integration', 'CSS'],
      image: 'https://via.placeholder.com/300',
      link: '#',
      github: 'https://github.com/amxson/Blog_Blast_V2'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn">Live Demo</a>
                  <a href={project.github} className="btn btn-outline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;