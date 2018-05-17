import React, { Component } from 'react'




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

    preformSearch=(e)=>{
        e.preventDefault()
        if(this.refs.search.value===""){
            alert('Please search for a genre')
            return false
        }
        if(this.refs.search.value === "action"){
            var api=
                'https://api.themoviedb.org/3/genre/28/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        if(this.refs.search.value === "adventure"){
            var api=
                'https://api.themoviedb.org/3/genre/28/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        if(this.refs.search.value === "drama"){
            var api=
                'https://api.themoviedb.org/3/genre/28/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        if(this.refs.search.value === "horror"){
            var api=
                'https://api.themoviedb.org/3/genre/28/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        if(this.refs.search.value === "thriller"){
            var api=
                'https://api.themoviedb.org/3/genre/28/movies?api_key=9421c42ace1371c5ddd0d98cbe634bc0&language=en-US&include_adult=false&sort_by=created_at.desc'
        }
        var api = api;
        fetch(api)
            .then(results=>{
                return results.json()
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
        let myResults= this.state.currentResultsList.map((val, key)=>{
            return <ResultsList val={val} key={key} id={key} />
        })
        return (
            <section className='container'>
                <main>
                    <section className='searchField'>
                        <h2>Search for your favorite films by genre</h2>
                        <input type='text'
                               className='search'
                               id='search'
                                ref='search'/>
                        <button type='submit' onClick={this.preformSearch}>Search</button>

                    </section>
                    <section className="resultsList">
                        <ul>{myResults}</ul>
                    </section>
                </main>



            </section>

        )
    }
}

export default Main