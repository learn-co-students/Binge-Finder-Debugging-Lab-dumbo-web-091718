import React from 'react'


class Adapter extends React.Component {

  static getShows (input = null){
    let url
    if (input === null) {
      return fetch(`http://api.tvmaze.com/shows`)
      .then(res => res.json())
    } else {
      let splitInput = input.split(" ")
      let joinInput = splitInput.join("-")
      return fetch(`http://api.tvmaze.com/search/shows?q='${joinInput}`)
      .then(res => res.json())
    }

  }

  static getShowEpisodes (showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(res => res.json())
  }



}

export default Adapter;
