import '../components/Footer.css'

function Footer(props) {
    return(
<div className='Footer'>

<p><span className="copyright">Copyright: Matt Lane 2023</span>
  <span className='email'><a href="mailto:thematthewlane@gmail.com">Email Matt</a></span>
  <a href="https://www.linkedin.com/in/matt-lane-91500366/">
    <img src="https://i.imgur.com/C3aOPHj.png" alt="IOG Linkedin"/>
    </a>
</p>
</div>
)
}

export default Footer;