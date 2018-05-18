import React, { Component} from 'react'

class ResultsList extends Component{
    render() {
        return (
            <li key={this.props.id} className='list'>
                <img src={this.props.val.img}></img>
                <h3>Title: {this.props.val.title}</h3>
                <p>Release Date: {this.props.val.releaseDate} </p>
            </li>

        )
    }
}

export default ResultsList