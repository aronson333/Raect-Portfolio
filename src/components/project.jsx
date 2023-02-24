export default function Project({ project }) {
  console.log(project)
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>
        <a target="_blank" href={project.githubUrl}>
          View code
        </a>
        &nbsp;&nbsp;
        <a target="_blank" href={project.liveUrl}>
          View live project
        </a>
      </p>
    </div>
  );
}
