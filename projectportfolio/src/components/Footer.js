import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <footer style={styles.footer}>
                <p style={styles.footerP}>This App utilizes TMDB API. All credit for all of the search results goes to TMDB, The Movie Database.</p>
            </footer>
        )
    }
}

export default Footer



const styles= {
    footer: {
        display:'flex',
        backgroundColor: '#39558C',
        flex: 1,
        flexDirection: 'row',

    },
    footerP: {
        fontFamily: 'Albertus',
        width:'1500px',
        paddingBottom: '10',
        textAlign:'center',
        //fontSize: 20,
        paddingTop: 10,
        color: 'whitesmoke',
    }
}