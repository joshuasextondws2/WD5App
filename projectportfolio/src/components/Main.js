import React, { Component } from 'react'
import ResultsList from '../components/ResultsList'




class Main extends Component {

    state ={
        currentResultsList:[
            {
                img:'',
                title:'',
                releaseDate:'',
            }
        ],
    }

    componentDidMount() {
        if (localStorage.getItem('currentResultsList')) {
            let currentResultsList = JSON.parse(localStorage.getItem('currentResultsList'))
            this.setState({currentResultsList: currentResultsList})
        }

    }

    preformSearch=(e)=>{
        e.preventDefault()
        let currentResultsList = this.state.currentResultsList
        currentResultsList.splice(0,12)
        this.setState({currentResultsList: this.state.currentResultsList})


        if(this.refs.search.value===""){
            alert('Please search for a genre')
            return false
        }
        if(this.refs.search.value === "action"){
            var api=
                'https://api.themoviedb.org/3/genre/28/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "adventure"){
            var api=
                'https://api.themoviedb.org/3/genre/12/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "drama"){
            var api=
                'https://api.themoviedb.org/3/genre/18/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "horror"){
            var api=
                'https://api.themoviedb.org/3/genre/27/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "science fiction"){
            var api=
                'https://api.themoviedb.org/3/genre/10770/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "thriller"){
            var api=
                'https://api.themoviedb.org/3/genre/53/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "animation"){
            var api=
                'https://api.themoviedb.org/3/genre/16/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "comedy"){
            var api=
                'https://api.themoviedb.org/3/genre/35/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "crime"){
            var api=
                'https://api.themoviedb.org/3/genre/80/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "documentary"){
            var api=
                'https://api.themoviedb.org/3/genre/99/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "family"){
            var api=
                'https://api.themoviedb.org/3/genre/10751/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "fantasy"){
            var api=
                'https://api.themoviedb.org/3/genre/14/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "history"){
            var api=
                'https://api.themoviedb.org/3/genre/36/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "music"){
            var api=
                'https://api.themoviedb.org/3/genre/10402/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "mystery"){
            var api=
                'https://api.themoviedb.org/3/genre/9648/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "romance"){
            var api=
                'https://api.themoviedb.org/3/genre/10749/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "war"){
            var api=
                'https://api.themoviedb.org/3/genre/10752/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
       else if(this.refs.search.value === "western"){
            var api=
                'https://api.themoviedb.org/3/genre/37/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        } else{
            alert('Sorry! We could not find your genre. Please try another search')
            return false
        }
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
                this.refs.search.value = ''

            }
            localStorage.setItem('currentResultsList', JSON.stringify(currentResultsList))
        })
    }
    render() {
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
                        <input type='text'
                               className='search'
                               id='search'
                               ref='search'
                               style={styles.input} />
                        <div>
                        <button type='submit' onClick={this.preformSearch} style={styles.button}>Search</button>
                        </div>

                    </section>
                    <section className="resultsList" style={styles.resultsList}>
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
        overflow: 'hidden',
        height: 4500,
        padding: 40,
        marginLeft: 0,
    },
    resultsList: {
        flexGrow:1,
        display: 'flex',
        marginTop: 30,
        flexDirection:'column',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginLeft: 0,
    },
    resultsContLi: {
        flexGrow:1,
        fontSize: 12,
        marginBottom: 5,
        height: 150,
        margin: 0,
        listStyle: 'none',
        display:'flex',
        flexWrap:'wrap',
    },
    blockQuote:{
        fontSize:25,
        fontFamily:'Futura',
        marginBottom: 20,
    },
    h2:{
        fontSize: 18,
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
    }
}