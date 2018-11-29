import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    const props = this.props;
    if (props.searchTerm){
      return props.shows.map((s) => {
        //console.log('each sssss', s)
        if (s.name.toLowerCase().includes(props.searchTerm)){
          return (<TVShow show={s} key={s.id} image={s.image} selectShow={props.selectShow}/> )
        }
      })
    }
    if (props.filterRating){
      const filteredShows = props.shows.filter(s => s.rating.average <= props.filterRating);
      
      return filteredShows.map((s) => {
          return (<TVShow show={s} key={s.id} image={s.image} selectShow={props.selectShow}/> )

      })
    }    
    return props.shows.map( (s)=> <TVShow show={s} key={s.id} image={s.image} selectShow={props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
