import React from 'react';

const TVShow = (props) => {
  // console.log(props)
  return (
    <div data-id={props.show.id}>
      <br/>
      <img src={props.show.image.medium} onClick={props.selectShow} alt=""/>
    </div>
  );
}

export default TVShow;
