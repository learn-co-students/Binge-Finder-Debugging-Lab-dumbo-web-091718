const showsURL = 'http://api.tvmaze.com/shows'

class Adapter {
  static getShows(){
    return fetch(showsURL)
    .then(res => res.json())
  }

  static getShow(id){
    return fetch(showsURL + '/' + id)
    .then(res => res.json())
  }

  static getShowEpisodes(showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(res => res.json())
    // .then(console.log)
  }
}

export default Adapter
