import React from 'react'

const ContentItem = ({part, exercise}) => {
  return (
    <div>
      <p>
    {part} {exercise}
      </p>
    </div>
  )
}

function Content(props) {
  return (
    <div>
     {props.parts.map(item => <ContentItem part={item.name} exercise={item.exercises}></ContentItem>)}
    </div>
  )
}

export default Content
