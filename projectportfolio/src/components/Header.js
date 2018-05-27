import React, { Component } from "react"
import logo from "../images/vhs.svg"

class Header extends Component{
    render(){
        return(
            <header style={styles.header}>
                <h1 className="headline center" style={styles.h1}><img src={logo} style={styles.img} alt="logo" /></h1>

            </header>

        )
    }
}

export default Header

const styles= {
    header: {
        backgroundColor: '#332D6B',
        flex: 1,
        flexDirection: 'row',
        height:400,
    },
    h1: {
        background: 'logo',
        textIndent:-9999,
        display:'flex',
        justifyContent:'center',
        marginBottom: '5rem',
    },
   img:{
        display:'flex',
        justifyContent:'center',
        flexGrow:1,
        height: 450,
        marginTop: 0,
        paddingTop:0,
    },
}