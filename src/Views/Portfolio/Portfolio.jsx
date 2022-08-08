import './Styles.css'
import one from '../../assets/images/1.jfif'
import SingleProject from '../../components/SingleProject/SingleProject'
import { PROJECTS } from '../../utils/projects'
const Portfolio = () => {
  return (
    <div id='portfolio'>
      {
        PROJECTS.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))
      }

    </div>
  )
}

export default Portfolio