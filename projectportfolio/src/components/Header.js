import React, { Component } from "react"

class Header extends Component{
    render(){
        return(
            <header style={styles.header}>
                <h1 className="headline center" style={styles.h1}>Nite Owl Video.</h1>

            </header>

        )
    }
}

export default Header

const styles= {
    header: {
        backgroundColor: '#36648B',
        flex: 1,
        flexDirection: 'row',
    },
    h1: {
        color: '#C24C92',
        fontFamily: 'Albertus',
        fontSize: 60,
        display:'flex',
        justifyContent:'center',
        marginBottom: '5rem',
    }
}