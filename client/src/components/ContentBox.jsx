import React from 'react'
import ContentTile from './ContentTile';

const ContentBox = ({ContentList}) => {
  return (
    <div className=" overflow-y-auto h-full py-10 scroll-smooth">
      <div className="grid grid-cols-4 gap-5 mx-4 mb-10">
        {ContentList.map((content, index) => {
          return (
            <ContentTile
              key={index}
              image={content.image}
              title={content.title}
              description={content.description}
              path={`/dashboard/${content.type}`}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ContentBox