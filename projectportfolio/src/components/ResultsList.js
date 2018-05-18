import React, { Component} from 'react'

class ResultsList extends Component{
    render() {
        return (
            <li key={this.props.id} className='list' style={styles.li}>
                <img src={this.props.val.img}></img>
                <h3>Title: {this.props.val.title}</h3>
                <p>Release Date: {this.props.val.releaseDate} </p>
            </li>

        )
    }
}

export default ResultsList

const styles= {
    li: {
        padding: 5,
        width: 300,
        height: 500,
        fontFamily:'Helvetica',
    },
    h3:{
       fontFamily:'Albertus',
    },
}