const projectsURL = 'https://express-react-lab-1jj6.onrender.com/projects'
const aboutURL = 'https://express-react-lab-1jj6.onrender.com/about'

export const projectsLoader = async () => {
    const response = await fetch(projectsURL + '/projects')
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(aboutURL + '/about')
    const about = await response.json()
    return about
}