import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {id, categoryId, title, courseTitle, description, duration, tagsList} =
    props.each
  return (
    <div
      style={{
        fontSize: '20px',
      }}
    >
      <div className="d-flex-space-between">
        <h1>{courseTitle}</h1>
        <div className="d-flex">
          <AiFillClockCircle className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="d-flex ul-container ">
        {tagsList.map(each => (
          <li key={each.id}><p>{each.name}</p></li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
