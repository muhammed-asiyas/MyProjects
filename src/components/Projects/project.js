import './project.css'
import ProjectItem from './ProjectItem'
import Header from '../Header/header'

const projectList = [
  {id: 1, projectName: 'NotesApp', link: '/project/NotesApp'}
]

const Projects = () => (
  <>
    <Header />
    <div className='project-app-container'>
      <ul className='project-list-container'>
        {projectList.map(eachProject => (
          <ProjectItem key={eachProject.id} projects={eachProject} />
        ))}
      </ul>
    </div>
  </>
)
export default Projects