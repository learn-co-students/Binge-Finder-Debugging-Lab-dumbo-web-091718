import React, { Component } from 'react';
import Adapter from '../Adapter';
import TVShowList from './TVShowList';
import Nav from './Nav';
import SelectedShowContainer from './SelectedShowContainer';
import { Grid } from 'semantic-ui-react';



class App extends Component {
  state = {
    shows: [],
    displayShows: [],
    searchTerm: "",
    selectedShow: "",
    episodes: [],
    filterByRating: "",
  }

  componentDidMount() {
    Adapter.getShows().then(data => this.setState({shows: data }))
  }

  componentDidUpdate = () => {
    window.scrollTo(0, 0)
  }

  handleSearch =(e)=> {
    this.setState({ searchTerm: e.target.value.toLowerCase()}, this.search(this.state.searchTerm))
  }

  search(input) {
    Adapter.getShows(input).then(data => this.setState({displayShows: data})).then(this.parseDisplay())
  }

  parseDisplay() {
    if (this.state.searchTerm.length > 1) {
      let showArr = [...this.state.displayShows].map(obj => {
        if (obj.show.image !== null) {
          return obj.show
        }
      }).filter(obj => obj !== undefined)
      this.setState({shows: showArr})
    } else {
      Adapter.getShows().then(data => this.setState({shows: data }))
    }
  }

  handleFilter = (e) => {
     if (e.target.value === "No Filter") {
       this.setState({ filterByRating:"" })
     } else {
       this.setState({ filterByRating: e.target.value})
     }
  }

  selectShow = (show) => {
    Adapter.getShowEpisodes(show.id)
    .then((episodes) => this.setState({
      selectedShow: show,
      episodes: episodes
    }))
  }

  displayShows = () => {
    if (this.state.filterByRating){
      return this.state.shows.filter((s)=> {
        return s.rating.average >= this.state.filterByRating
      })
    } else {
      return this.state.shows
    }
  }

  handleScroll =()=> {
    console.log('yup')
  }

  render (){
    return (
      <div onScrollToBottom={this.handleScroll} >
        <Nav handleFilter={this.handleFilter} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
        <Grid celled>
          <Grid.Column width={5}>
            {!!this.state.selectedShow ? <SelectedShowContainer selectedShow={this.state.selectedShow} episodes={this.state.episodes}/> : <div/>}
          </Grid.Column>
          <Grid.Column width={11}>
            <TVShowList  shows={this.displayShows()} selectShow={this.selectShow} searchTerm={this.state.searchTerm}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
