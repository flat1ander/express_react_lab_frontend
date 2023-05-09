import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project) => (
      <div>
        <h1 className='projectName'>{project.name}</h1>
        <img className='images' src={project.image} />
        <p>
        <a href={project.git} target="_blank">
          <button className='buttons'>Github</button>
        </a>
        <a href={project.live} target="_blank">
          <button className='buttons'>live site</button>
        </a>
        </p>
      </div>
    ));
}

export default Projects;