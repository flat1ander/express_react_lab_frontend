import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a href={project.git} target="_blank">
          <button>Github</button>
        </a>
        <a href={project.live} target="_blank">
          <button>live site</button>
        </a>
      </div>
    ));
}

export default Projects;