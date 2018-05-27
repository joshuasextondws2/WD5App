import React, { Component } from 'react'
import ResultsList from '../components/ResultsList'




class Main extends Component {
//current results array to hold the returned results
    state ={
        currentResultsList:[

        ],
    }

     componentDidMount() {
        //this is a call to the api to display films now playing in the theater
         var api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&page=1'
         fetch(api)
             .then(results => {
                 if (results.ok) {
                     return results.json()
                 } else {
                     return Promise.reject('There has been an error')
                 }
             }).then(data => {
             let i = 0
             //loop through the results and push the resutls into the array
             for (i = 0; i < 12; i++) {
                 var image = "https://image.tmdb.org/t/p/w200" + data.results[i].poster_path

                 this.setState({img: image})
                 this.setState({title: data.results[i].title})
                 this.setState({releaseDate: data.results[i].release_date})
                 this.state.currentResultsList.push({
                     'img': image,
                     'title': data.results[i].title,
                     'releaseDate': data.results[i].release_date
                 })
                 this.setState({currentResultsList: this.state.currentResultsList})


             }


         })
     }

    preformSearch=(e)=>{
        e.preventDefault()
        //remove the previous results
        let currentResultsList = this.state.currentResultsList
        currentResultsList.splice(0,12)
        this.setState({currentResultsList: this.state.currentResultsList})
        //save the value from the dropdown menu
        const genre = document.querySelector('#genreSel')
        var selectedValue = genre.options[genre.selectedIndex].value
        //check to make sure the user has selected a genre
        if(selectedValue==="ge"){
            alert('Please search for a genre')
            return false
        }
        //check to see if action is selected
        if(selectedValue === "ac"){
            var api=
                'https://api.themoviedb.org/3/genre/28/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if adventure is selected
       else if(selectedValue === "ad"){
            var api=
                'https://api.themoviedb.org/3/genre/12/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if drama is selected
       else if(selectedValue === "dr"){
            var api=
                'https://api.themoviedb.org/3/genre/18/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if horror is selected
       else if(selectedValue === "ho"){
            var api=
                'https://api.themoviedb.org/3/genre/27/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if science fiction is selected
       else if(selectedValue === "sc"){
            var api=
                'https://api.themoviedb.org/3/genre/10770/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if thriller is selected
       else if(selectedValue === "th"){
            var api=
                'https://api.themoviedb.org/3/genre/53/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if animation is selected
       else if(selectedValue === "an"){
            var api=
                'https://api.themoviedb.org/3/genre/16/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if comedy is selected
       else if(selectedValue === "co"){
            var api=
                'https://api.themoviedb.org/3/genre/35/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if crime is selected
       else if(selectedValue === "cr"){
            var api=
                'https://api.themoviedb.org/3/genre/80/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if documentary is selected
       else if(selectedValue === "do"){
            var api=
                'https://api.themoviedb.org/3/genre/99/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if family is selected
       else if(selectedValue === "fa"){
            var api=
                'https://api.themoviedb.org/3/genre/10751/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if fantasy is selected
       else if(selectedValue === "fan"){
            var api=
                'https://api.themoviedb.org/3/genre/14/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if history is selected
       else if(selectedValue === "hi"){
            var api=
                'https://api.themoviedb.org/3/genre/36/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if music is selected
       else if(selectedValue === "mu"){
            var api=
                'https://api.themoviedb.org/3/genre/10402/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if mystery is selected
       else if(selectedValue === "my"){
            var api=
                'https://api.themoviedb.org/3/genre/9648/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if romance is selected
       else if(selectedValue === "ro"){
            var api=
                'https://api.themoviedb.org/3/genre/10749/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if war is selected
       else if(selectedValue === "wa"){
            var api=
                'https://api.themoviedb.org/3/genre/10752/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //check to see if western is selected
       else if(selectedValue === "we"){
            var api=
                'https://api.themoviedb.org/3/genre/37/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        //fetch the api results
        var api = api;
        fetch(api)
            .then(results=>{
                if(results.ok) {
                    return results.json()
                }else{
                    return Promise.reject('There has been an error')
                }
            }).then(data=>{
                let i=0
            for(i=0; i<12;i++){
                    var image = "https://image.tmdb.org/t/p/w200"+data.results[i].poster_path

                this.setState({img: image})
                this.setState({title: data.results[i].title})
                this.setState({releaseDate: data.results[i].release_date})
                this.state.currentResultsList.push({'img': image, 'title': data.results[i].title, 'releaseDate': data.results[i].release_date })
                this.setState({currentResultsList: this.state.currentResultsList})


            }

        })
    }
    render() {
        //map the array and return the resultsList
        let myResults= this.state.currentResultsList.map((val, key)=>{
            return <ResultsList val={val} key={key} id={key} />
        })
        return (
            <section className='container'>
                <main style={styles.container}>
                    <section className='searchField'>
                        <blockquote style={styles.blockQuote}>"If it's a good movie, the sound could go off and the audience would still have a perfectly clear idea of what was going on."
                            </blockquote>
                        <p style={styles.p}>-- Alfred Hitchcock</p>
                        <h2 style={styles.h2}>Search for your favorite movie by Genre! Action, Adventure, Drama, Horror, Science Fiction, Thriller, etc</h2>
                        <input type='hidden'
                               className='search'
                               id='search'
                               ref='search'
                               style={styles.input} />
                        <select className="genreSelection" id='genreSel' ref='genreSelection' style={styles.input}>
                            <option value="ge">Please Select A Genre</option>
                            <option value="ac">Action</option>
                            <option value="ad">Adventure</option>
                            <option value="an">Animation</option>
                            <option value="co">Comedy</option>
                            <option value="cr">Crime</option>
                            <option value="do">Documentary</option>
                            <option value="dr">Drama</option>
                            <option value="fa">Family</option>
                            <option value="fan">Fantasy</option>
                            <option value="hi">History</option>
                            <option value="ho">Horror</option>
                            <option value="mu">Music</option>
                            <option value="my">Mystery</option>
                            <option value="ro">Romance</option>
                            <option value="sc">Science Fiction</option>
                            <option value="th">Thriller</option>
                            <option value="wa">War</option>
                            <option value="we">Western</option>
                        </select>
                        <div>
                        <button type='submit' onClick={this.preformSearch} style={styles.button}>Search</button>
                        </div>

                    </section>
                    <section className="resultsList" style={styles.resultsList}>
                        <h3>Now Playing:</h3>
                        <ul style={styles.resultsContLi}>{myResults}</ul>
                    </section>
                </main>



            </section>

        )
    }
}

export default Main

const styles= {
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 40,
        marginLeft: 0,
    },
    //flex grow ensure that each shrinks or grows to fit the size of the container
    resultsList: {
        flexGrow:1,
        display: 'flex',
        marginTop: 30,
        flexDirection:'column',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginLeft: 0,
    },
    //Liststyle is set to none to remove the bullitt points
    //flewwrap wraps items around in multiple lines from top to bottom
    resultsContLi: {
        flexGrow:1,
        fontSize: 12,
        marginBottom: 5,
        margin: 0,
        listStyle: 'none',
        display:'flex',
        flexWrap:'wrap',
    },
    blockQuote:{
        fontFamily:'Futura',
        marginBottom: 20,
    },
    h2:{
        fontFamily:'Helvetica',
        marginTop:15,

    },
    p:{
        fontFamily:'Albertus',
        marginBottom:40,
    },
    button:{
        fontSize:16,
        fontFamily: "Albertus",
        backgroundColor:'#39558C',
        color:'whitesmoke',
        width: 130,
        height: 25,
        marginBottom:45,
    },
    input:{
        width: 250,
        height: 20,
        marginBottom:10,
        border: .5,
        border:'solid',
        color: '#332D6B',
    }
}