import React from 'react';

const Episode = (props) => {
  // console.log(props)
  let myEpisode = props
  // console.log(myEpisode)
  return (
    <div>
      Episode {myEpisode.eachEpisode.number} - {myEpisode.eachEpisode.name}
    </div>
  )
}

export default Episode;
