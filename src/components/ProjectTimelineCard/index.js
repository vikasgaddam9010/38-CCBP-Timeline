import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = props.each
  return (
    <div
      style={{
        fontSize: '20px',
      }}
    >
      <img className="project-img" alt="project" src={imageUrl} />
      <div className="d-flex-space-between">
        <h1>{projectTitle}</h1>
        <div className="d-flex">
          <AiFillCalendar className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
