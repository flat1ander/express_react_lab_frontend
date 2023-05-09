import { useLoaderData } from "react-router-dom";
import './About.css'

function About(props) {

  const about = useLoaderData()

  return <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <img className='images' src={about.headshot}/>
      <p className='bio'>{about.bio}</p>
    </div>
}

export default About;