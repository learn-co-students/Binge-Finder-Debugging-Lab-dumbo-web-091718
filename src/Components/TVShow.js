import React from 'react';

const tvShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.image.medium} onClick={() => props.selectShow(props.show)} alt=""/>
    </div>
  );
}

export default tvShow;
