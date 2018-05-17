import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <section className="App" style={styles.container}>
        <Header />
        <Main />
        <Footer />
      </section>
    )
  }
}

export default App;

const styles= {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
}
