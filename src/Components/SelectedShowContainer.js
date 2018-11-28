import React, { Component } from 'react';
import Episode from './Episode';

Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
        arr.push(this[i]);
    }
  }
  return arr;
}

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }

  mapSeasons = (e) => {
    if (!!this.props.episodes){
      // console.log(this.props.episodes)
      let seasons = this.props.episodes.map((e)=> e.season).unique()
      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = () => {
    return this.props.episodes
      .filter((e) => e.season === Number(this.state.selectedSeason))
      .map((e) => <Episode eachEpisode={e} key={e.id}/>)
      
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: e.target.value })
  }


  render() {
    const { selectedShow } = this.props
    // console.log(selectedShow)
    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} value={this.state.selectedSeason} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer;


