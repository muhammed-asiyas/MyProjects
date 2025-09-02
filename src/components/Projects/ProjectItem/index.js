import {Link} from 'react-router-dom'
import './index.css'

const ProjectItem = props => {
  const {projects} = props
  const {projectName, link} = projects
  return (
    <li className='project-item'>
      <Link className='link-item' to={link}>
        <h1 className='project-name'>{projectName}</h1>
      </Link>
    </li>
  )
}

export default ProjectItem