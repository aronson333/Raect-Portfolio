import Project from "./project";

// TODO: Add your projects here

const projects = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/150",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/150",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/150",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    title: "Project 4",
    image: "https://via.placeholder.com/150",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    title: "Project 5",
    image: "https://via.placeholder.com/150",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    title: "Project 6",
    image: "https://via.placeholder.com/150",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
