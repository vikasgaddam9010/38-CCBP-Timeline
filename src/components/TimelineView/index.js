import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <>
      <div className="para-head">
        <h1 className="para">MY JOURNEY OF<br/><span className="head">CCBP 4.0</span></h1>
      </div>
      <Chrono
        theme={{
          secondary: 'white',
        }}
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard each={each} />
          } else if (each.categoryId === 'PROJECT') {
            return <ProjectTimelineCard each={each} />
          }
        })}
      </Chrono>
    </>
  )
}

export default TimelineView
